export const familyVisaUaeStructure = {
 status: "client-approval-preview",
 productionDomain: "familyvisauae.com",
 languages: [
  {code:"en",label:"English",dir:"ltr"},{code:"ar",label:"العربية",dir:"rtl"},
  {code:"ru",label:"Русский",dir:"ltr"},{code:"de",label:"Deutsch",dir:"ltr"},
  {code:"es",label:"Español",dir:"ltr"},{code:"fr",label:"Français",dir:"ltr"},
  {code:"tr",label:"Türkçe",dir:"ltr"},{code:"zh",label:"中文",dir:"ltr"},
  {code:"hi",label:"हिन्दी",dir:"ltr"},{code:"ur",label:"اردو",dir:"rtl"}
 ],
 servicePageSections:["hero","benefits","eligibility","documents","process","fees","processingTime","notes","faqs","relatedServices","whatsappCta"],
 calculators:["family-visa","golden-visa","pro-services","property-visa"],
 cmsAreas:["services","categories","pages","fees","calculatorValues","faqs","guides","contactDetails","languages","seo","siteSettings"],
 notes:["Fees and eligibility are not locked until client approval.","Reference material guides information architecture; final proprietary copy is not duplicated blindly."]
} as const;
