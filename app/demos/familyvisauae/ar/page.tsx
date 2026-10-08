import type { Metadata } from "next";
import Link from "next/link";
import PreviewNav from "../PreviewNav";
import "../familyvisa.css";
import "../language.css";

export const metadata: Metadata = {
  title: { absolute: "FamilyVisaUAE | خدمات تأشيرة العائلة في الإمارات" },
  description: "إرشادات وخدمات تأشيرة العائلة في الإمارات مع توضيح الرسوم الحكومية والمستندات والخطوات.",
  alternates: { canonical: "/demos/familyvisauae/ar", languages: { en: "/demos/familyvisauae", ar: "/demos/familyvisauae/ar" } }
};

export default function ArabicPage() {
  const message=encodeURIComponent("مرحباً FamilyVisaUAE، أحتاج مساعدة بشأن تأشيرة عائلتي في الإمارات.");
  return <main className="fv" lang="ar" dir="rtl"><div className="fv-top"><span>FamilyVisaUAE</span><span>خدمات التأشيرات والوثائق في الإمارات</span></div><PreviewNav/>
    <section className="fv-hero"><div><p className="eyebrow">تأشيرة العائلة في الإمارات</p><h1>اجمع عائلتك في الإمارات <em>بوضوح وثقة.</em></h1><p className="lead">ابدأ بمراجعة المسار المناسب، تعرّف على الرسوم الحكومية المنشورة، وتحقق من المستندات والخطوات قبل تقديم الطلب.</p><div className="fv-cta"><a className="primary" href={"https://wa.me/9718003627?text="+message} target="_blank" rel="noreferrer">تواصل عبر واتساب</a><Link className="secondary" href="/demos/familyvisauae/calculators/family">حاسبة التأشيرة</Link></div></div></section>
    <section className="fv-eligibility"><div><p className="eyebrow">كيف نبدأ</p><h2>ثلاث خطوات واضحة.</h2></div><div className="fv-eligibility-grid"><article><b>01</b><strong>اختر المسار</strong><span>الزوج أو الزوجة، الأطفال، الوالدان أو مسار إقامة آخر.</span></article><article><b>02</b><strong>جهّز الوثائق</strong><span>جوازات السفر وإثبات العلاقة والوثائق المطلوبة للحالة.</span></article><article><b>03</b><strong>راجع الرسوم والخطوات</strong><span>نفصل الرسوم الحكومية عن رسوم الخدمة المهنية قبل الالتزام.</span></article></div></section>
    <section className="fv-fees"><div><p className="eyebrow">رسوم واضحة</p><h2>اعرف ما تدفعه قبل البدء.</h2><p>الرسوم الحكومية تحددها الجهات الرسمية، ورسوم الخدمة المهنية تُعرض بشكل منفصل.</p></div></section>
    <nav className="fv-language-links" aria-label="اللغات"><Link href="/demos/familyvisauae">English</Link><Link href="/demos/familyvisauae/ar" aria-current="page">العربية</Link></nav>
  </main>;
}
