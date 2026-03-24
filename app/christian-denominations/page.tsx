import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Denominations Explained: What's the Difference? | Red White Jesus",
  description: "A practical guide to Christian denominations — what they believe, how they worship, and how they differ from each other.",
};
export default function DenominationsPage() {
  const G = "#DC2626";
  const denom = [
    {name:"Catholic",belief:"Emphasizes tradition, papal authority, Mary veneration, seven sacraments"},
    {name:"Orthodox",belief:"Ancient Christian tradition, icons, episcopal structure, liturgical worship"},
    {name:"Protestant",belief:"Varied beliefs unified by sola scriptura (scripture alone) principle"},
    {name:"Baptist",belief:"Adult baptism, congregational autonomy, biblical authority"},
    {name:"Methodist",belief:"Emphasis on holiness, social justice, orderly worship"},
    {name:"Pentecostal/Charismatic",belief:"Holy Spirit empowerment, speaking in tongues, charismatic worship"},
    {name:"Evangelical",belief:"Jesus-centered, biblical authority, born-again experience emphasis"},
    {name:"Lutheran",belief:"Grace through faith, retained some Catholic practices, hierarchical structure"},
  ];
  return (
    <div style={{minHeight:"100vh",background:"#FEF2F2",color:"#0D0D0D",fontFamily:"system-ui,sans-serif"}}>
      <nav style={{padding:"16px 5vw",borderBottom:"1px solid #FEE2E2",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:"#0D0D0D",textDecoration:"none"}}>Red White Jesus</Link>
        <Link href="/blog" style={{color:"#666",textDecoration:"none",fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:800,margin:"0 auto",padding:"60px 5vw"}}>
        <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:16}}>RELIGIOUS GUIDE</div>
        <h1 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,lineHeight:1.1,marginBottom:24}}>Christian Denominations Explained</h1>
        <p style={{fontSize:18,color:"#444",lineHeight:1.7,marginBottom:40}}>Christianity is not one monolithic belief system. Here is how major denominations differ and what each emphasizes.</p>
        
        <div style={{display:"grid",gap:12}}>
          {denom.map((d,i) => (
            <div key={i} style={{background:"white",border:"1px solid #FEE2E2",borderRadius:8,padding:"18px 20px"}}>
              <h3 style={{fontSize:16,fontWeight:700,color:G,marginBottom:6}}>{d.name}</h3>
              <p style={{fontSize:14,color:"#666",margin:0}}>{d.belief}</p>
            </div>
          ))}
        </div>
        
        <div style={{background:G,color:"white",padding:"36px",borderRadius:8,textAlign:"center",marginTop:40}}>
          <h2 style={{fontSize:18,fontWeight:900,marginBottom:12}}>Want Deeper Understanding?</h2>
          <p style={{fontSize:14,opacity:0.9,marginBottom:20}}>Read more about Christian theology, history, and practice on our blog.</p>
          <Link href="/blog" style={{background:"white",color:G,fontWeight:800,fontSize:13,padding:"10px 24px",textDecoration:"none",borderRadius:4,display:"inline-block"}}>Read Our Blog →</Link>
        </div>
      </div>
    </div>
  );
}
