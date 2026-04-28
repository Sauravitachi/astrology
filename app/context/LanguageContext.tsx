"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    services: "Services",
    horoscope: "Horoscope",
    contact: "Contact",
    consult_now: "Consult Now",
    kundli_analysis: "Kundli Analysis",
    love_relationship: "Love & Relationship",
    career_job: "Career & Job",
    business_finance: "Business & Finance",
    marriage_matching: "Marriage Matching",
    remedies: "Remedies",

    // Hero Section
    hero_subtitle: "Personalized Celestial Insights",
    hero_title_part1: "Know the Truth of Your Kundli.",
    hero_title_part2: "Unlock Your Destiny",
    hero_title_part3: "with India's Most Trusted Astrologers",
    hero_description: "Get accurate predictions, deep Kundli analysis, and simple, effective remedies to overcome obstacles in Love, Career, and Marriage. 100% Confidential. 100% Authentic.",
    free_kundli_btn: "Get Your Free Kundli",
    consult_expert_btn: "Consult Expert Astrologer",
    benefit_experts: "Top 1% Verified Experts",
    benefit_private: "100% Private",
    benefit_fear: "No Fear-Mongering",

    // Horoscope Section
    celestial_guidance: "Celestial Guidance",
    daily_horoscope_title: "Daily",
    daily_horoscope_span: "Horoscopes",
    daily_horoscope_desc: "Connect with the cosmic energies of the day. Choose your sign to reveal your personalized astrological reading and planetary alignments.",

    // Services Section
    sacred_offerings: "Sacred Offerings",
    pro_services_title: "Professional",
    pro_services_span: "Services",
    pro_services_desc: "Explore our specialized astrological services designed to provide clarity, purpose, and spiritual growth on your life journey.",
    view_all_services: "View All Services",

    // About Section
    meet_guide: "Meet Your Guide",
    about_title_part1: "Compassionate Guidance",
    about_title_part2: "Through Ancient Wisdom",
    years_experience: "Years Experience",
    acharya_name: "Acharya Ankit",
    about_p1: "Namaste! I am Acharya Ankit, a dedicated Vedic astrologer with over 3 years of experience in helping individuals find clarity and purpose.",
    about_p2: "My approach combines traditional Vedic Astrology with KP System and spiritual philosophy. I believe astrology is not just about predicting the future, but about empowering you to make the right choices today.",
    about_p3: "Why trust my guidance? I focus on practical, logic-based analysis and provide simple, effective remedies that integrate seamlessly into your modern lifestyle.",
    vedic_specialist: "Vedic Specialist",
    vedic_specialist_desc: "Deep expertise in birth chart analysis and planetary transits.",
    empowerment_focused: "Empowerment Focused",
    empowerment_focused_desc: "Practical solutions to overcome obstacles and achieve success.",

    // Process Section
    how_it_works: "How It",
    how_it_works_span: "Works",
    process_desc: "Getting your personalized astrological guidance is a simple 4-step process.",
    step1_title: "Send Details",
    step1_desc: "Provide your Birth Date, Time, and Place via our booking form or WhatsApp.",
    step2_title: "Payment",
    step2_desc: "Complete the payment securely using UPI, Paytm, or Google Pay.",
    step3_title: "Consultation",
    step3_desc: "Connect with Acharya Saurabh via WhatsApp Call or Video Call at your scheduled time.",
    step4_title: "Guidance",
    step4_desc: "Receive your detailed report and personalized remedies for your growth.",

    // Testimonials
    trusted_by: "Trusted by",
    hundreds: "Hundreds",
    test1_text: "I was struggling with my career for 3 years. Sashtravani's astrologer told me exactly when I'd get a job, and the remedy worked within weeks! Truly blessed.",
    test2_text: "My partner and I were about to break up. But Kundli Milan and small remedies saved my relationship. Premium quality guidance!",
    test3_text: "Very different from other apps. The astrologer was polite, explained everything logically, and didn't force expensive pujas. Best platform!",

    // FAQ
    faq_title: "Frequently Asked",
    faq_span: "Questions",
    faq_subtitle: "Clear your doubts before making a life-changing decision.",
    faq1_q: "Are the predictions 100% accurate?",
    faq1_a: "Yes, our verified Vedic astrologers use precise planetary calculations to give highly accurate predictions based on your unique birth chart.",
    faq2_q: "Can astrology really fix my love life?",
    faq2_a: "Absolutely. By analyzing your 5th and 7th houses, we identify the exact root cause of your relationship problems and provide effective, karma-balancing remedies.",
    faq3_q: "Is my data kept private?",
    faq3_a: "100%. We use strict privacy protocols. Your details and conversations are strictly confidential and never shared.",
    faq4_q: "Can we talk in Hindi?",
    faq4_a: "Yes, absolutely! Our astrologers speak fluently in Hindi, English, and regional languages.",

    // Tips Section
    daily_guidance: "Daily Guidance",
    tips_title: "Celestial",
    tips_span: "Tips & Remedies",
    tips_subtitle: "Simple Vedic practices to align your energy with the planetary transits and overcome obstacles.",
    view_all_tips: "View All Tips",
    home_harm_title: "Harmonizing Your Home",
    home_harm_desc: "Place a small bowl of rock salt in the north-east corner of your living room to absorb negative energy and promote family peace.",
    tip1: "Use light yellow colors in study",
    tip2: "Keep entryways clutter-free",
    tip3: "Light a ghee lamp in evening",
    energy_boost_title: "Personal Energy Boost",
    energy_boost_desc: "Chanting the 'Om' mantra for 11 minutes every morning can significantly strengthen your Jupiter, bringing wisdom and prosperity.",
    tip4: "Wear yellow on Thursdays",
    tip5: "Offer water to Sun at dawn",
    tip6: "Practice mindfulness for 10 mins",

    // Ancient Wisdom
    ancient_wisdom_title: "Ancient Wisdom",
    modern_guidance_span: "Modern Guidance",
    wisdom_p1: "Astrology is a profound ancient wisdom that reveals the connection between the movements of celestial bodies and the patterns of our lives. We blend traditional Vedic insights with deep spiritual philosophy to provide a holistic view of your journey.",
    wisdom_p2: "Our mission is to bring this sacred knowledge to the modern world, combining celestial alignments with spiritual practices like Naam Simran and Seva to guide you toward inner peace and purposeful living.",
    book_session: "Book Your Session Now",

    // Horoscopes
    horoscope_subtitle: "Daily Horoscope",
    zodiac_reading: "Zodiac Reading",
    reading_stars: "Reading Stars...",
    cosmic_reading: "Cosmic reading for today",
    mood_label: "Mood",
    match_label: "Match",
    color_label: "Color",
    lucky_no_label: "Lucky No.",
    lucky_time_label: "Lucky Time",
    celestial_insights_for: "Celestial Insights for",
    failed_cosmos: "Failed to connect with the cosmos. Please try again.",

    // Zodiac Signs
    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",

    // Services
    s1_title: "Kundli Analysis",
    s1_desc: "Discover your life's blueprint. Accurate Janam Kundli analysis for deep insights into your personality, hidden strengths, and karmic doshas.",
    s1_details: "Birth chart reading, Dasha analysis, Planet strengths",
    s2_title: "Love & Relationship",
    s2_desc: "When will you get married? Will your ex come back? Get precise answers for love compatibility, heartbreak, and relationship issues.",
    s2_details: "Compatibility check, Timing of marriage, Relationship remedies",
    s3_title: "Career & Job Prediction",
    s3_desc: "Job or Business? Find the right career path, overcome job hurdles, and attract wealth with powerful Vedic guidance.",
    s3_details: "Sector selection, Growth periods, Promotion timing",
    s4_title: "Business & Finance",
    s4_desc: "Strategic advice for business owners and financial planning to maximize your wealth based on astrological transits.",
    s4_details: "Investment timing, Business expansion, Debt management",
    s5_title: "Marriage Matching",
    s5_desc: "Right decision for a lifetime. Detailed Kundli Milan for a happy marriage. We provide genuine remedies for Manglik and Nadi Dosha.",
    s5_details: "Gun Milan, Dosha analysis, Remedy suggestions",
    s6_title: "Effective Remedies",
    s6_desc: "Simple remedies, effective results. Practical and highly effective remedies (Gemstones, Pujas, Mantras) to clear blockages in your life.",
    s6_details: "Gemstone advice, Mantra chanting, Ritual guidance",
    get_started: "Get Started",

    // WhatsApp
    wa_title: "Talk to Acharya Ji",
    wa_desc: "Get cosmic guidance for career, marriage, health and life direction.",
    name_placeholder: "Full Name *",
    phone_placeholder: "Phone Number *",
    email_placeholder: "Email Address",
    country_placeholder: "Country *",
    consult_type_placeholder: "Consultation Type",
    send_wa: "Send on WhatsApp",
    team_acharya: "Team Acharya Ji",
    online_now: "Online Now",

    // Footer
    footer_desc: "Empowering your life journey through ancient Vedic wisdom and modern spiritual guidance. Discover your true potential with India's most trusted astrologers.",
    quick_links: "Quick Links",
    our_services: "Our Services",
    connect_with_us: "Connect With Us",
    all_rights_reserved: "All Rights Reserved",
    privacy_policy: "Privacy Policy",
    terms_service: "Terms of Service",
    easy_payment: "Easy Payment Options",
    payment_desc: "We accept all major UPI apps and digital wallets for your convenience.",
  },
  hi: {
    // Header
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    horoscope: "राशिफल",
    contact: "संपर्क",
    consult_now: "अभी परामर्श करें",
    kundli_analysis: "कुंडली विश्लेषण",
    love_relationship: "प्रेम और संबंध",
    career_job: "करियर और नौकरी",
    business_finance: "व्यापार और वित्त",
    marriage_matching: "गुण मिलान",
    remedies: "उपाय",

    // Hero Section
    hero_subtitle: "व्यक्तिगत खगोलीय अंतर्दृष्टि",
    hero_title_part1: "अपनी कुंडली का सच जानें।",
    hero_title_part2: "अपने भाग्य को अनलॉक करें",
    hero_title_part3: "भारत के सबसे भरोसेमंद ज्योतिषियों के साथ",
    hero_description: "प्रेम, करियर और विवाह में बाधाओं को दूर करने के लिए सटीक भविष्यवाणियां, गहरा कुंडली विश्लेषण और सरल, प्रभावी उपाय प्राप्त करें। 100% गोपनीय। 100% प्रामाणिक।",
    free_kundli_btn: "अपनी मुफ्त कुंडली प्राप्त करें",
    consult_expert_btn: "विशेषज्ञ ज्योतिषी से परामर्श करें",
    benefit_experts: "शीर्ष 1% सत्यापित विशेषज्ञ",
    benefit_private: "100% निजी",
    benefit_fear: "कोई डर पैदा करना नहीं",

    // Horoscope Section
    celestial_guidance: "खगोलीय मार्गदर्शन",
    daily_horoscope_title: "दैनिक",
    daily_horoscope_span: "राशिफल",
    daily_horoscope_desc: "दिन की ब्रह्मांडीय ऊर्जाओं से जुड़ें। अपनी व्यक्तिगत ज्योतिषीय रीडिंग और ग्रहों के संरेखण को प्रकट करने के लिए अपनी राशि चुनें।",

    // Services Section
    sacred_offerings: "पवित्र प्रसाद",
    pro_services_title: "पेशेवर",
    pro_services_span: "सेवाएं",
    pro_services_desc: "आपकी जीवन यात्रा पर स्पष्टता, उद्देश्य और आध्यात्मिक विकास प्रदान करने के लिए डिज़ाइन की गई हमारी विशेष ज्योतिषीय सेवाओं का पता लगाएं।",
    view_all_services: "सभी सेवाएं देखें",

    // About Section
    meet_guide: "अपने मार्गदर्शक से मिलें",
    about_title_part1: "प्राचीन ज्ञान के माध्यम से",
    about_title_part2: "दयालु मार्गदर्शन",
    years_experience: "वर्षों का अनुभव",
    acharya_name: "आचार्य रवि",
    about_p1: "नमस्ते! मैं आचार्य रवि हूं, एक समर्पित वैदिक ज्योतिषी, जिन्हें व्यक्तियों को स्पष्टता और उद्देश्य खोजने में मदद करने का 25 से अधिक वर्षों का अनुभव है।",
    about_p2: "मेरा दृष्टिकोण पारंपरिक वैदिक ज्योतिष को केपी प्रणाली और आध्यात्मिक दर्शन के साथ जोड़ता है। मेरा मानना है कि ज्योतिष केवल भविष्य बताने के बारे में नहीं है, बल्कि आज आपको सही चुनाव करने के लिए सशक्त बनाने के बारे में है।",
    about_p3: "मेरे मार्गदर्शन पर भरोसा क्यों करें? मैं व्यावहारिक, तर्क-आधारित विश्लेषण पर ध्यान केंद्रित करता हूं और सरल, प्रभावी उपाय प्रदान करता हूं जो आपकी आधुनिक जीवन शैली में सहजता से एकीकृत होते हैं।",
    vedic_specialist: "वैदिक विशेषज्ञ",
    vedic_specialist_desc: "जन्म कुंडली विश्लेषण और ग्रहों के गोचर में गहरा अनुभव।",
    empowerment_focused: "सशक्तिकरण केंद्रित",
    empowerment_focused_desc: "बाधाओं को दूर करने और सफलता प्राप्त करने के लिए व्यावहारिक समाधान।",

    // Process Section
    how_it_works: "यह कैसे",
    how_it_works_span: "काम करता है",
    process_desc: "आपका व्यक्तिगत ज्योतिषीय मार्गदर्शन प्राप्त करना एक सरल 4-चरणीय प्रक्रिया है।",
    step1_title: "विवरण भेजें",
    step1_desc: "हमारे बुकिंग फॉर्म या व्हाट्सएप के माध्यम से अपनी जन्म तिथि, समय और स्थान प्रदान करें।",
    step2_title: "भुगतान",
    step2_desc: "UPI, Paytm, या Google Pay का उपयोग करके सुरक्षित रूप से भुगतान पूरा करें।",
    step3_title: "परामर्श",
    step3_desc: "अपने निर्धारित समय पर व्हाट्सएप कॉल या वीडियो कॉल के माध्यम से आचार्य सौरभ से जुड़ें।",
    step4_title: "मार्गदर्शन",
    step4_desc: "अपनी वृद्धि के लिए विस्तृत रिपोर्ट और व्यक्तिगत उपाय प्राप्त करें।",

    // Testimonials
    trusted_by: "सैकड़ों लोगों द्वारा",
    hundreds: "भरोसेमंद",
    test1_text: "मैं 3 साल से अपने करियर को लेकर संघर्ष कर रहा था। शास्त्रवाणी के ज्योतिषी ने मुझे बिल्कुल सही बताया कि मुझे नौकरी कब मिलेगी, और उपाय ने हफ्तों में काम किया! वास्तव में धन्य हूँ।",
    test2_text: "मेरा और मेरे साथी का ब्रेकअप होने वाला था। लेकिन कुंडली मिलान और छोटे उपायों ने मेरे रिश्ते को बचा लिया। प्रीमियम गुणवत्ता मार्गदर्शन!",
    test3_text: "अन्य ऐप्स से बहुत अलग। ज्योतिषी विनम्र थे, सब कुछ तार्किक रूप से समझाया, और महंगी पूजा के लिए मजबूर नहीं किया। सबसे अच्छा मंच!",

    // FAQ
    faq_title: "अक्सर पूछे जाने वाले",
    faq_span: "प्रश्न",
    faq_subtitle: "जीवन बदलने वाला निर्णय लेने से पहले अपनी शंकाओं को दूर करें।",
    faq1_q: "क्या भविष्यवाणियां 100% सटीक हैं?",
    faq1_a: "हाँ, हमारे सत्यापित वैदिक ज्योतिषी आपकी अनूठी जन्म कुंडली के आधार पर अत्यधिक सटीक भविष्यवाणियां करने के लिए सटीक ग्रहों की गणना का उपयोग करते हैं।",
    faq2_q: "क्या ज्योतिष वास्तव में मेरे प्रेम जीवन को ठीक कर सकता है?",
    faq2_a: "बिल्कुल। आपके 5वें और 7वें भाव का विश्लेषण करके, हम आपकी रिश्ते की समस्याओं के सटीक मूल कारण की पहचान करते हैं और प्रभावी, कर्म-संतुलन उपाय प्रदान करते।",
    faq3_q: "क्या मेरा डेटा निजी रखा जाता है?",
    faq3_a: "100%। हम सख्त गोपनीयता प्रोटोकॉल का उपयोग करते हैं। आपके विवरण और बातचीत पूरी तरह से गोपनीय हैं और कभी साझा नहीं किए जाते हैं।",
    faq4_q: "क्या हम हिंदी में बात कर सकते हैं?",
    faq4_a: "हाँ, बिल्कुल! हमारे ज्योतिषी हिंदी, अंग्रेजी और क्षेत्रीय भाषाओं में धाराप्रवाह बात करते हैं।",

    // Tips Section
    daily_guidance: "दैनिक मार्गदर्शन",
    tips_title: "खगोलीय",
    tips_span: "सुझाव और उपाय",
    tips_subtitle: "ग्रहों के गोचर के साथ अपनी ऊर्जा को संरेखित करने और बाधाओं को दूर करने के लिए सरल वैदिक अभ्यास।",
    view_all_tips: "सभी सुझाव देखें",
    home_harm_title: "अपने घर को सामंजस्यपूर्ण बनाना",
    home_harm_desc: "नकारात्मक ऊर्जा को सोखने और पारिवारिक शांति को बढ़ावा देने के लिए अपने लिविंग रूम के उत्तर-पूर्व कोने में सेंधा नमक का एक छोटा कटोरा रखें।",
    tip1: "अध्ययन में हल्के पीले रंगों का प्रयोग करें",
    tip2: "प्रवेश द्वारों को अव्यवस्था मुक्त रखें",
    tip3: "शाम को घी का दीपक जलाएं",
    energy_boost_title: "व्यक्तिगत ऊर्जा वृद्धि",
    energy_boost_desc: "हर सुबह 11 मिनट तक 'ओम' मंत्र का जाप करने से आपके बृहस्पति को महत्वपूर्ण रूप से मजबूती मिल सकती है, जिससे ज्ञान और समृद्धि आती है।",
    tip4: "गुरुवार को पीला पहनें",
    tip5: "भोर में सूर्य को जल अर्पित करें",
    tip6: "10 मिनट के लिए माइंडफुलनेस का अभ्यास करें",

    // Ancient Wisdom
    ancient_wisdom_title: "प्राचीन ज्ञान",
    modern_guidance_span: "आधुनिक मार्गदर्शन",
    wisdom_p1: "ज्योतिष एक गहरा प्राचीन ज्ञान है जो खगोलीय पिंडों की गति और हमारे जीवन के पैटर्न के बीच संबंध को प्रकट करता है। हम आपकी यात्रा का समग्र दृष्टिकोण प्रदान करने के लिए पारंपरिक वैदिक अंतर्दृष्टि को गहरे आध्यात्मिक दर्शन के साथ मिलाते हैं।",
    wisdom_p2: "हमारा मिशन इस पवित्र ज्ञान को आधुनिक दुनिया में लाना है, खगोलीय संरेखण को नाम सिमरन और सेवा जैसे आध्यात्मिक अभ्यासों के साथ जोड़कर आपको आंतरिक शांति और उद्देश्यपूर्ण जीवन की ओर मार्गदर्शन करना है।",
    book_session: "अभी अपना सत्र बुक करें",

    // Horoscopes
    horoscope_subtitle: "दैनिक राशिफल",
    zodiac_reading: "राशि रीडिंग",
    reading_stars: "सितारों को पढ़ रहे हैं...",
    cosmic_reading: "आज के लिए खगोलीय रीडिंग",
    mood_label: "मनोदशा",
    match_label: "मिलान",
    color_label: "रंग",
    lucky_no_label: "भाग्यशाली संख्या",
    lucky_time_label: "भाग्यशाली समय",
    celestial_insights_for: "के लिए खगोलीय अंतर्दृष्टि",
    failed_cosmos: "ब्रह्मांड से जुड़ने में विफल। कृपया पुन: प्रयास करें।",

    // Zodiac Signs
    aries: "मेष",
    taurus: "वृषभ",
    gemini: "मिथुन",
    cancer: "कर्क",
    leo: "सिंह",
    virgo: "कन्या",
    libra: "तुला",
    scorpio: "वृश्चिक",
    sagittarius: "धनु",
    capricorn: "मकर",
    aquarius: "कुंभ",
    pisces: "मीन",

    // Services
    s1_title: "कुंडली विश्लेषण",
    s1_desc: "अपने जीवन की रूपरेखा की खोज करें। आपके व्यक्तित्व, छिपी हुई शक्तियों और कर्म दोषों में गहरी अंतर्दृष्टि के लिए सटीक जन्म कुंडली विश्लेषण।",
    s1_details: "जन्म कुंडली पढ़ना, दशा विश्लेषण, ग्रहों की शक्ति",
    s2_title: "प्रेम और संबंध",
    s2_desc: "शादी कब होगी? क्या मेरा पार्टनर वापस आएगा? प्रेम अनुकूलता, दिल टूटने और रिश्ते के मुद्दों के लिए सटीक उत्तर प्राप्त करें।",
    s2_details: "अनुकूलता जांच, विवाह का समय, रिश्ते के उपाय",
    s3_title: "करियर और नौकरी की भविष्यवाणी",
    s3_desc: "नौकरी या व्यवसाय? सही करियर पथ खोजें, नौकरी की बाधाओं को दूर करें और शक्तिशाली वैदिक मार्गदर्शन के साथ धन को आकर्षित करें।",
    s3_details: "क्षेत्र चयन, विकास की अवधि, पदोन्नति का समय",
    s4_title: "व्यापार और वित्त",
    s4_desc: "व्यवसाय मालिकों के लिए रणनीतिक सलाह और ज्योतिषीय गोचर के आधार पर आपके धन को अधिकतम करने के लिए वित्तीय योजना।",
    s4_details: "निवेश का समय, व्यापार विस्तार, ऋण प्रबंधन",
    s5_title: "गुण मिलान",
    s5_desc: "जीवन भर के लिए सही फैसला। सुखी विवाह के लिए विस्तृत कुंडली मिलान। हम मांगलिक और नाड़ी दोष के लिए वास्तविक उपाय प्रदान करते हैं।",
    s5_details: "गुण मिलान, दोष विश्लेषण, उपाय सुझाव",
    s6_title: "प्रभावी उपाय",
    s6_desc: "सरल उपाय, असरदार नतीजे। आपके जीवन में बाधाओं को दूर करने के लिए व्यावहारिक और अत्यधिक प्रभावी उपाय (रत्न, पूजा, मंत्र)।",
    s6_details: "रत्न सलाह, मंत्र जाप, अनुष्ठान मार्गदर्शन",
    get_started: "शुरू करें",

    // WhatsApp
    wa_title: "आचार्य जी से बात करें",
    wa_desc: "करियर, विवाह, स्वास्थ्य और जीवन की दिशा के लिए खगोलीय मार्गदर्शन प्राप्त करें।",
    name_placeholder: "पूरा नाम *",
    phone_placeholder: "फोन नंबर *",
    email_placeholder: "ईमेल पता",
    country_placeholder: "देश *",
    consult_type_placeholder: "परामर्श का प्रकार",
    send_wa: "व्हाट्सएप पर भेजें",
    team_acharya: "टीम आचार्य जी",
    online_now: "अभी ऑनलाइन",

    // Footer
    footer_desc: "प्राचीन वैदिक ज्ञान और आधुनिक आध्यात्मिक मार्गदर्शन के माध्यम से आपकी जीवन यात्रा को सशक्त बनाना। भारत के सबसे भरोसेमंद ज्योतिषियों के साथ अपनी वास्तविक क्षमता की खोज करें।",
    quick_links: "त्वरित संपर्क",
    our_services: "हमारी सेवाएं",
    connect_with_us: "हमसे जुड़ें",
    all_rights_reserved: "सर्वाधिकार सुरक्षित",
    privacy_policy: "गोपनीयता नीति",
    terms_service: "सेवा की शर्तें",
    easy_payment: "आसान भुगतान विकल्प",
    payment_desc: "हम आपकी सुविधा के लिए सभी प्रमुख UPI ऐप और डिजिटल वॉलेट स्वीकार करते हैं।",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "hi")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
