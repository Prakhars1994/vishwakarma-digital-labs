"use client";
import {useState} from "react";
const matches=[["RS","Raghav S.","91% compatibility"],["KR","Karan R.","88% compatibility"],["AS","Aditya S.","84% compatibility"]];
const panels:Record<string,{title:string;body:string}>={
Interests:{title:"Interest centre",body:"Review incoming and sent interests in one calm, privacy-first workspace."},
Shortlist:{title:"Your shortlist",body:"Keep promising profiles together and return when you are ready."},
Messages:{title:"Protected conversations",body:"Production messaging can unlock only after mutual consent and verified access."}
};
export default function MemberPreview(){
const [tab,setTab]=useState("Matches");
return <section className="dashboard" id="member"><div className="dashHead"><div><small>MEMBER EXPERIENCE</small><h2>A calmer way to manage your <i>journey.</i></h2></div><button type="button">Complete profile 82%</button></div><div className="dashShell"><aside><div className="avatar">AS</div><h3>Aarohi Sharma</h3><p>SB1001 • Verified demo</p>{["Matches","Interests","Shortlist","Messages","Privacy"].map(x=><button type="button" aria-pressed={tab===x} className={tab===x?"active":""} onClick={()=>setTab(x)} key={x}>{x}</button>)}</aside><div className="dashMain"><div className="dashTitle"><div><small>DEMO MEMBER HOME</small><h3>{tab}</h3></div><span>{tab==="Matches"?"3 recommendations":"Private workspace"}</span></div>{tab==="Privacy"?<div className="privacy"><h4>Privacy controls</h4>{["Show my profile in search","Allow verified members to send interest","Keep phone number private","Require approval to view photos"].map((x,i)=><label key={x}><span>{x}</span><input aria-label={x} type="checkbox" defaultChecked={i!==0}/></label>)}</div>:tab==="Matches"?<div className="dashCards">{matches.map(([a,n,s])=><article key={n}><div>{a}</div><h4>{n}</h4><p>{s}</p><button type="button">Open match</button></article>)}</div>:<div className="dashEmpty"><span>◈</span><h4>{panels[tab].title}</h4><p>{panels[tab].body}</p><button type="button" onClick={()=>setTab("Matches")}>Browse matches →</button></div>}</div></div></section>
}