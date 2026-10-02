import DocumentChecker from "./DocumentChecker";
import "../familyvisa.css";
import "../calculator.css";
import PreviewNav from "../PreviewNav";
export default function ChecklistPage(){return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Document checker</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">DOCUMENT CHECKER</p><h1>Start your family visa checklist.</h1><p className="lead">Choose who you are sponsoring and where they are now. This gives you a practical starting list before a route-specific review.</p><DocumentChecker/></section></main>}
