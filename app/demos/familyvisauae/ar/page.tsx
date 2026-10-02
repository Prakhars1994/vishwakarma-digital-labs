import type { Metadata } from "next";
import Link from "next/link";
import PreviewNav from "../PreviewNav";
import "../familyvisa.css";
import "../language.css";

export const metadata: Metadata = {
  title: { absolute: "FamilyVisaUAE | حاسبة تأشيرة العائلة في الإمارات" },
  description: "تحقق من مسار تأشيرة العائلة في الإمارات، وافهم تقدير الرسوم الحكومية، وتواصل مع فريق FamilyVisaUAE.",
  alternates: { canonical: "/demos/familyvisauae/ar", languages: { en: "/demos/familyvisauae", ar: "/demos/familyvisauae/ar", ur: "/demos/familyvisauae/ur", hi: "/demos/familyvisauae/hi" } },
  openGraph: { title: "FamilyVisaUAE | حاسبة تأشيرة العائلة في الإمارات", description: "تحقق من مسار تأشيرة العائلة في الإمارات وتواصل مع فريق FamilyVisaUAE.", images: [{ url: "/familyvisauae-hero.png", width: 1536, height: 1024, alt: "إرشاد تأشيرة العائلة من FamilyVisaUAE" }] },
};

export default function ArabicPage() {
  const message = encodeURIComponent("مرحباً FamilyVisaUAE، أحتاج مساعدة بشأن تأشيرة عائلتي في الإمارات.");
  return <main className="fv" lang="ar" dir="rtl" data-theme="family"><div className="fv-top"><span>FamilyVisaUAE</span><span>خدمات التأشيرات والوثائق في الإمارات</span></div><PreviewNav/><section className="fv-hero"><div><p className="eyebrow">تأشيرة العائلة في الإمارات</p><h1>اجمع عائلتك في الإمارات <em>بوضوح وثقة.</em></h1><p className="lead">ابدأ بمراجعة المسار المناسب، تعرّف على تقدير الرسوم الحكومية، وتواصل مع فريقنا للحصول على الخطوة التالية.</p><div className="fv-cta"><a className="primary" href={`https://wa.me/971566556645?text=${message}`} target="_blank" rel="noreferrer">تواصل عبر واتساب ←</a><Link className="secondary" href="/demos/familyvisauae/calculators/family">حاسبة التأشيرة</Link></div></div></section><section className="fv-eligibility"><div><p className="eyebrow">كيف نبدأ</p><h2>ثلاث خطوات بسيطة.</h2><p>نراجع المعلومات الأساسية أولاً، ثم نؤكد المستندات والخطوة المناسبة قبل متابعة أي طلب.</p></div><div className="fv-eligibility-grid"><article><b>01</b><strong>اختر المسار</strong><span>الزوج أو الأطفال أو الوالدان أو مسار آخر.</span></article><article><b>02</b><strong>جهّز الوثائق</strong><span>جوازات السفر وإثبات العلاقة والوثائق المطلوبة.</span></article><article><b>03</b><strong>أكد التقدير</strong><span>توضيح الرسوم والخطوات عبر واتساب.</span></article></div></section><section className="fv-fees"><div><p className="eyebrow">رسوم واضحة</p><h2>اعرف التقدير قبل البدء.</h2><p>يتم توضيح الرسوم الحكومية وخدمة الدعم بشكل منفصل قبل اتخاذ أي قرار.</p></div><div className="fv-fee-card"><div><strong>الرسوم الحكومية</strong><small>تحددها الجهات الرسمية حسب المسار.</small></div><div><strong>دعم الاستشارات</strong><small>يتم شرحه بشكل منفصل وواضح.</small></div></div></section><nav className="fv-language-links" aria-label="اللغات"><Link href="/demos/familyvisauae">English</Link><Link href="/demos/familyvisauae/ar" aria-current="page">العربية</Link><Link href="/demos/familyvisauae/ur">اردو</Link></nav></main>;
}
