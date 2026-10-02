import type { Metadata } from "next";
import Link from "next/link";
import PreviewNav from "../PreviewNav";
import "../familyvisa.css";
import "../language.css";

export const metadata: Metadata = {
  title: { absolute: "FamilyVisaUAE | यूएई फैमिली वीज़ा कैलकुलेटर" },
  description: "यूएई फैमिली वीज़ा का सही मार्ग देखें, सरकारी शुल्क का शुरुआती अनुमान समझें और FamilyVisaUAE से बात करें।",
  alternates: { canonical: "/demos/familyvisauae/hi", languages: { en: "/demos/familyvisauae", ar: "/demos/familyvisauae/ar", ur: "/demos/familyvisauae/ur", hi: "/demos/familyvisauae/hi" } },
  openGraph: { title: "FamilyVisaUAE | यूएई फैमिली वीज़ा कैलकुलेटर", description: "यूएई फैमिली वीज़ा का सही मार्ग देखें और सरकारी शुल्क का शुरुआती अनुमान समझें।", images: [{ url: "/familyvisauae-hero.png", width: 1536, height: 1024, alt: "FamilyVisaUAE फैमिली वीज़ा सहायता" }] },
};

export default function HindiPage() {
  const message = encodeURIComponent("नमस्ते FamilyVisaUAE, मुझे यूएई में फैमिली वीज़ा के बारे में सहायता चाहिए।");
  return <main className="fv" lang="hi" data-theme="family"><div className="fv-top"><span>FamilyVisaUAE</span><span>यूएई वीज़ा और दस्तावेज़ सेवाएँ</span></div><PreviewNav/><section className="fv-hero"><div><p className="eyebrow">यूएई फैमिली वीज़ा</p><h1>अपने परिवार को यूएई लाएँ, <em>स्पष्टता और भरोसे के साथ।</em></h1><p className="lead">सही वीज़ा मार्ग देखें, सरकारी शुल्क का शुरुआती अनुमान समझें और अगला कदम जानने के लिए हमारी टीम से बात करें।</p><div className="fv-cta"><a className="primary" href={`https://wa.me/971566556645?text=${message}`} target="_blank" rel="noreferrer">WhatsApp पर बात करें →</a><Link className="secondary" href="/demos/familyvisauae/calculators/family">वीज़ा कैलकुलेटर</Link></div></div></section><section className="fv-eligibility"><div><p className="eyebrow">शुरुआत कैसे करें</p><h2>तीन आसान चरण।</h2><p>हम पहले मूल जानकारी देखते हैं, फिर आपके दस्तावेज़ और उचित अगला कदम स्पष्ट करते हैं।</p></div><div className="fv-eligibility-grid"><article><b>01</b><strong>मार्ग चुनें</strong><span>पति या पत्नी, बच्चे, माता-पिता या कोई अन्य संबंधित मार्ग।</span></article><article><b>02</b><strong>दस्तावेज़ तैयार करें</strong><span>पासपोर्ट, रिश्ते का प्रमाण और जरूरी प्रतियाँ।</span></article><article><b>03</b><strong>अनुमान की पुष्टि करें</strong><span>WhatsApp पर शुल्क और अगले चरणों की स्पष्ट जानकारी।</span></article></div></section><section className="fv-fees"><div><p className="eyebrow">स्पष्ट शुल्क</p><h2>शुरू करने से पहले अनुमान जानें।</h2><p>आगे बढ़ने से पहले सरकारी शुल्क और निजी परामर्श सहायता को अलग-अलग स्पष्ट किया जाता है।</p></div><div className="fv-fee-card"><div><strong>सरकारी शुल्क</strong><small>मार्ग के अनुसार संबंधित प्राधिकरण निर्धारित करता है।</small></div><div><strong>परामर्श सहायता</strong><small>अलग और स्पष्ट रूप से समझाई जाती है।</small></div></div></section><nav className="fv-language-links" aria-label="भाषाएँ"><Link href="/demos/familyvisauae">English</Link><Link href="/demos/familyvisauae/ar">العربية</Link><Link href="/demos/familyvisauae/ur">اردو</Link><Link href="/demos/familyvisauae/hi" aria-current="page">हिन्दी</Link></nav></main>;
}
