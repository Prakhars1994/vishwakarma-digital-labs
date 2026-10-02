import type { Metadata } from "next";
import Link from "next/link";
import PreviewNav from "../PreviewNav";
import "../familyvisa.css";
import "../language.css";

export const metadata: Metadata = {
  title: { absolute: "FamilyVisaUAE | یو اے ای فیملی ویزا کیلکولیٹر" },
  description: "اپنے یو اے ای فیملی ویزا کا راستہ دیکھیں، سرکاری فیس کا ابتدائی اندازہ سمجھیں، اور FamilyVisaUAE سے رابطہ کریں۔",
  alternates: { canonical: "/demos/familyvisauae/ur", languages: { en: "/demos/familyvisauae", ar: "/demos/familyvisauae/ar", ur: "/demos/familyvisauae/ur", hi: "/demos/familyvisauae/hi" } },
  openGraph: { title: "FamilyVisaUAE | یو اے ای فیملی ویزا کیلکولیٹر", description: "یو اے ای فیملی ویزا کا راستہ اور سرکاری فیس کا ابتدائی اندازہ سمجھیں۔", images: [{ url: "/familyvisauae-hero.png", width: 1536, height: 1024, alt: "FamilyVisaUAE فیملی ویزا رہنمائی" }] },
};

export default function UrduPage() {
  const message = encodeURIComponent("ہیلو FamilyVisaUAE، مجھے متحدہ عرب امارات میں فیملی ویزا کے بارے میں مدد چاہیے۔");
  return <main className="fv" lang="ur" dir="rtl" data-theme="family"><div className="fv-top"><span>FamilyVisaUAE</span><span>متحدہ عرب امارات ویزا اور دستاویز خدمات</span></div><PreviewNav/><section className="fv-hero"><div><p className="eyebrow">یو اے ای فیملی ویزا</p><h1>اپنے خاندان کو یو اے ای لائیں، <em>اعتماد کے ساتھ۔</em></h1><p className="lead">صحیح ویزا راستہ دیکھیں، سرکاری فیس کا ابتدائی اندازہ سمجھیں، اور اگلا قدم جاننے کے لیے ہماری ٹیم سے رابطہ کریں۔</p><div className="fv-cta"><a className="primary" href={`https://wa.me/971566556645?text=${message}`} target="_blank" rel="noreferrer">واٹس ایپ پر بات کریں ←</a><Link className="secondary" href="/demos/familyvisauae/calculators/family">ویزا کیلکولیٹر</Link></div></div></section><section className="fv-eligibility"><div><p className="eyebrow">آغاز کیسے کریں</p><h2>تین سادہ مراحل۔</h2><p>ہم پہلے بنیادی معلومات دیکھتے ہیں، پھر دستاویزات اور اگلا مناسب قدم واضح کرتے ہیں۔</p></div><div className="fv-eligibility-grid"><article><b>01</b><strong>راستہ منتخب کریں</strong><span>شریکِ حیات، بچے، والدین یا دوسرا متعلقہ راستہ۔</span></article><article><b>02</b><strong>دستاویزات تیار کریں</strong><span>پاسپورٹ، رشتے کا ثبوت اور ضروری کاپیاں۔</span></article><article><b>03</b><strong>تخمینہ کنفرم کریں</strong><span>واٹس ایپ پر فیس اور اگلے مراحل کی وضاحت۔</span></article></div></section><section className="fv-fees"><div><p className="eyebrow">واضح فیس</p><h2>شروع کرنے سے پہلے اندازہ جانیں۔</h2><p>سرکاری فیس اور نجی مشاورتی معاونت کو آگے بڑھنے سے پہلے الگ الگ واضح کیا جاتا ہے۔</p></div><div className="fv-fee-card"><div><strong>سرکاری فیس</strong><small>راستے کے مطابق متعلقہ اتھارٹی طے کرتی ہے۔</small></div><div><strong>مشاورتی معاونت</strong><small>الگ اور واضح طور پر بیان کی جاتی ہے۔</small></div></div></section><nav className="fv-language-links" aria-label="زبانیں"><Link href="/demos/familyvisauae">English</Link><Link href="/demos/familyvisauae/ar">العربية</Link><Link href="/demos/familyvisauae/ur" aria-current="page">اردو</Link></nav></main>;
}
