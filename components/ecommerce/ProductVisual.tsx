export const productVisuals:Record<string,{label:string,gradient:string,mark:string}>={
"sunset-runner":{label:"Sunset Runner",gradient:"from-orange-300 via-rose-300 to-pink-400",mark:"SR"},
"cloud-hoodie":{label:"Cloud Hoodie",gradient:"from-sky-200 via-indigo-200 to-violet-300",mark:"CH"},
"studio-tote":{label:"Studio Tote",gradient:"from-lime-200 via-emerald-200 to-teal-300",mark:"ST"},
"pulse-watch":{label:"Pulse Watch",gradient:"from-amber-200 via-orange-200 to-rose-300",mark:"PW"},
"arc-buds-pro":{label:"Arc Buds Pro",gradient:"from-cyan-200 via-sky-300 to-blue-400",mark:"AB"},
"halo-table-lamp":{label:"Halo Table Lamp",gradient:"from-yellow-100 via-amber-200 to-orange-300",mark:"HL"},
"dew-barrier-serum":{label:"Dew Barrier Serum",gradient:"from-pink-100 via-rose-200 to-fuchsia-300",mark:"DS"},
"orbit-pendant":{label:"Orbit Pendant",gradient:"from-stone-200 via-amber-100 to-yellow-200",mark:"OP"},
"night-sprint":{label:"Night Sprint",gradient:"from-slate-300 via-indigo-300 to-violet-400",mark:"NS"},
"metro-knit":{label:"Metro Knit",gradient:"from-fuchsia-200 via-pink-200 to-rose-300",mark:"MK"},
"aura-speaker":{label:"Aura Speaker",gradient:"from-zinc-200 via-cyan-200 to-sky-300",mark:"AS"},
"linen-cushion-set":{label:"Linen Cushion Set",gradient:"from-orange-100 via-stone-200 to-amber-200",mark:"LC"}
};
export function ProductVisual({slug,className=""}:{slug:string;className?:string}){const v=productVisuals[slug]||productVisuals["sunset-runner"];return <div role="img" aria-label={v.label+" product artwork"} className={`relative grid overflow-hidden bg-gradient-to-br ${v.gradient} ${className}`}><div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[24px] border-white/35"/><div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-black/10"/><div className="relative m-auto grid h-28 w-28 place-items-center rounded-[2rem] border border-black/15 bg-white/70 text-4xl font-black tracking-[-.08em] shadow-xl backdrop-blur">{v.mark}</div><div className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-[.2em] text-black/55">{v.label}</div></div>}