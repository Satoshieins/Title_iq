interface Env { ENQUIRY_TO_EMAIL:string; ENQUIRY_FROM_EMAIL:string; EMAIL_API_KEY:string; EMAIL_API_URL?:string; }
interface Enquiry { name?:unknown; email?:unknown; phone?:unknown; organisation?:unknown; service?:unknown; location?:unknown; message?:unknown; contactBy?:unknown; consent?:unknown; company?:unknown; }
const text=(value:unknown,max=2000)=>typeof value==="string"?value.trim().slice(0,max):"";
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const json=(body:object,status:number)=>Response.json(body,{status,headers:{"cache-control":"no-store"}});

export const onRequest: PagesFunction<Env> = async ({request,env}) => {
  if(request.method!=="POST") return json({error:"Method not allowed."},405);
  if(!request.headers.get("content-type")?.includes("application/json")) return json({error:"Unsupported content type."},415);
  const ip=request.headers.get("CF-Connecting-IP")||"unknown";
  const rateKey=new Request(`https://rate-limit.invalid/enquiry/${encodeURIComponent(ip)}`);
  const edgeCache=(caches as unknown as {default:Cache}).default;
  if(await edgeCache.match(rateKey)) return json({error:"Please wait before sending another enquiry."},429);
  let body:Enquiry; try{body=await request.json<Enquiry>();}catch{return json({error:"Invalid request."},400);}
  if(text(body.company,100)) return json({ok:true},200);
  const name=text(body.name,120),email=text(body.email,254);
  if(!name||!emailPattern.test(email)||body.consent!=="on") return json({error:"Name, a valid email and privacy consent are required."},400);
  if(!env.ENQUIRY_TO_EMAIL||!env.ENQUIRY_FROM_EMAIL||!env.EMAIL_API_KEY) return json({error:"Email service is not configured."},503);
  const lines=[`Name: ${name}`,`Email: ${email}`,`Phone: ${text(body.phone,80)||"Not provided"}`,`Organisation: ${text(body.organisation,160)||"Not provided"}`,`Service: ${text(body.service,160)||"Not provided"}`,`Location: ${text(body.location,240)||"Not provided"}`,`Preferred contact: ${text(body.contactBy,40)||"Email"}`,"","Message:",text(body.message,5000)||"Not provided"];
  const mail=await fetch(env.EMAIL_API_URL||"https://api.resend.com/emails",{method:"POST",headers:{authorization:`Bearer ${env.EMAIL_API_KEY}`,"content-type":"application/json"},body:JSON.stringify({from:env.ENQUIRY_FROM_EMAIL,to:[env.ENQUIRY_TO_EMAIL],reply_to:email,subject:`TitleIQ website enquiry from ${name}`,text:lines.join("\n")})});
  if(!mail.ok) return json({error:"Email could not be sent."},502);
  await edgeCache.put(rateKey,new Response("1",{headers:{"cache-control":"max-age=60"}}));
  return json({ok:true},200);
};
