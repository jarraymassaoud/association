import React, { createContext, useState, useContext } from "react";

// 1. قاموس الترجمة لجميع صفحات الموقع
export const dictionary = {
  fr: {
    // Header
    home: "Accueil",
    about: "À propos",
    services: "Services",
    download: "Téléchargement",
    contact: "Contact",
    title: "ATAS Médenine",

    // About
    aboutTitle: "À propos de nous",
    aboutDesc1:
      "L'Association Tunisienne d'Aide aux Sourds (Section Médenine) est dédiée à l'accompagnement des personnes sourdes et malentendantes.",
    aboutDesc2:
      "Elle offre un soutien éducatif, psychologique et social pour faciliter leur intégration dans la société.",
    objEducationTitle: "Éducation & Réhabilitation",
    objEducationDesc:
      "Fournir des programmes éducatifs adaptés et le langage des signes pour surmonter les obstacles de communication.",
    objInclusionTitle: "Inclusion Sociale",
    objInclusionDesc:
      "Organiser des activités culturelles et sportives pour renforcer l'intégration sociale à Médenine.",
    objTrainingTitle: "Formation Professionnelle",
    objTrainingDesc:
      "Accompagner et former les jeunes à des compétences pratiques pour faciliter leur accès au marché du travail.",

    // Services
    servicesTitle: "Nos Services & Activités",
    servicesSub:
      "Découvrez les prestations et l'accompagnement offerts par l'ATAS Médenine.",
    servEducationTitle: "Éducation & Enseignement Spécialisé",
    servEducationDesc:
      "Classes adaptées pour les enfants sourds avec un programme pédagogique spécifique utilisant la langue des signes.",
    servVocationalTitle: "Formation & Qualification Professionnelle",
    servVocationalDesc:
      "Ateliers d'apprentissage de métiers (couture, informatique, artisanat) pour autonomiser les jeunes.",
    servHealthTitle: "Accompagnement Orthophonique & Psychologique",
    servHealthDesc:
      "Suivi médical, bilans orthophoniques et séances de rééducation auditive pour les bénéficiaires.",
    servSocialTitle: "Assistance Sociale & Intégration",
    servSocialDesc:
      "Aide aux familles, sensibilisation de la société et soutien pour l'obtention des cartes d'handicap et appareillages.",

    // Contact
    contactTitle: "Contactez-nous",
    addressTitle: "Siège de l'association",
    address: "ATAS Médenine, Route de Djerba, Médenine 4100, Tunisie",
    phone: "Téléphone",
    email: "E-mail",
    callBtn: "Appeler",
    emailBtn: "Envoyer un e-mail",
    formTitle: "Envoyez-nous un message",
    firstName: "Prénom",
    lastName: "Nom",
    tel: "Téléphone",
    message: "Message",
    sendBtn: "Envoyer le message",
    alertSuccess: "Merci! Votre message a été envoyé avec succès.",

    // Footer
    rights: "Tous droits réservés",
  },
  ar: {
    // Header
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    download: "التحميلات",
    contact: "اتصل بنا",
    title: "الجمعية التونسية لإعانة الصم بمدنين",

    // About
    aboutTitle: "من نحن",
    aboutDesc1:
      "الجمعية التونسية لإعانة الصم (فرع مدنين) مخصصة للإحاطة بالأشخاص فاقدي ومستضعفي السمع.",
    aboutDesc2:
      "تقدم الجمعية الدعم التربوي، النفسي والاجتماعي لتسهيل إدماجهم الفعلي في المجتمع.",
    objEducationTitle: "التعليم والتأهيل",
    objEducationDesc:
      "توفير برامج تعليمية خاصة ولغة الإشارة للأطفال والناشئة للمساعدة في تجاوز العوائق التواصلية.",
    objInclusionTitle: "الإدماج الاجتماعي",
    objInclusionDesc:
      "تنظيم أنشطة ثقافة ورياضية تهدف لتعزيز اندماج فاقدي السمع في الحياة الاجتماعية بمدنين.",
    objTrainingTitle: "التدريب المهني",
    objTrainingDesc:
      "مرافقة الشباب وتدريبهم على مهارات حرفية تسهل دخولهم لسوق الشغل وبناء استقلاليتهم.",

    // Services
    servicesTitle: "خدماتنا وأنشطتنا",
    servicesSub:
      "تعرف على الخدمات والإحاطة التي تقدمها الجمعية التونسية لإعانة الصم بمدنين.",
    servEducationTitle: "التعليم والتربية المختصة",
    servEducationDesc:
      "أقسام تعليمية مخصصة للأطفال الصم مع اعتماد مناهج تعليمية موجهة ولغة الإشارة.",
    servVocationalTitle: "التكوين والتدريب المهني",
    servVocationalDesc:
      "ورشات لتعلم الحرف والمهارات (خياطة، إعلامية، صناعات تقليدية) لتمكين الشباب واكتساب استقلاليتهم.",
    servHealthTitle: "المرافقة النطقية والنفسية",
    servHealthDesc:
      "متابعة صحية، حصص تقويم النطق (Orthophonie) وتأهيل سمعي مستمر للمستفيدين.",
    servSocialTitle: "الإحاطة الاجتماعية والإدماج",
    servSocialDesc:
      "مساعدة العائلات، التوعية وتسهيل الحصول على التجهيزات والبطاقات الاجتماعية بالتنسيق مع الهياكل المعنية.",

    // Contact
    contactTitle: "اتصل بنا",
    addressTitle: "مقر الجمعية",
    address: "الجمعية التونسية لإعانة الصم بمدنين، طريق جربة، مدنين 4100، تونس",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    callBtn: "اتصال",
    emailBtn: "إرسال بريد",
    formTitle: "أرسل لنا ملاحظة أو استفسار",
    firstName: "الاسم الأول",
    lastName: "اللقب",
    tel: "رقم الهاتف",
    message: "الرسالة",
    sendBtn: "إرسال الرسالة",
    alertSuccess: "شكراً! تم إرسال رسالتك بنجاح.",

    // Footer
    rights: "جميع الحقوق محفوظة",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("fr"); // اللغة الافتراضية فرنسية

  const toggleLanguage = (selectedLang) => {
    setLang(selectedLang);
  };

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
