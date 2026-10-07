import "@fontsource/eczar/700.css";
import type { Site } from "./lib";

const DAY: [number, number][] = [[5, 21]];

export const SITE: Site = {
  name: "Yogadhyay Fitness Academy",
  sub: { en: "Yoga, strength & transformation · Sohna", hi: "योग, स्ट्रेंथ और ट्रांसफ़ॉर्मेशन · सोहना" },
  banner: { en: "Open every day, 5 am to 9 pm: WhatsApp to plan your first visit", hi: "रोज़ सुबह 5 से रात 9 बजे तक खुला: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "919896903396",
  phoneDisplay: "+91 98969 03396",
  lat: 28.2489529,
  lon: 77.072689,
  hours: [DAY, DAY, DAY, DAY, DAY, DAY, DAY],
  theme: {
    dark: true,
    bg: "#0c1510",
    bg2: "#111d16",
    panel: "#16241c",
    ink: "#f3efe4",
    ink2: "#c4c4b2",
    ink3: "#86907f",
    line: "#21332a",
    accent: "#f08a24",
    onAccent: "#2a1200",
    display: "Eczar",
    weight: 700,
    upper: false,
  },
  scene: "lotus",
  align: "left",
  hero: {
    title: [
      { en: "Yoga, strength, diet.", hi: "योग, स्ट्रेंथ, डाइट।" },
      { en: "One academy in Sohna.", hi: "सोहना में एक अकादमी।" },
    ],
    proof: {
      en: "4.9 on Google from 536 reviews. Weight loss, weight gain, powerlifting, police and army fitness, with diet counselling under Mukund Sharma.",
      hi: "गूगल पर 536 रिव्यू से 4.9। वज़न घटाना, वज़न बढ़ाना, पावरलिफ़्टिंग, पुलिस और आर्मी फ़िटनेस, और मुकुंद शर्मा की डाइट काउंसलिंग।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Yoga", "Weight loss", "Weight gain", "Powerlifting", "Weightlifting", "CrossFit", "Diet counselling", "Police & army fitness"],
  results: {
    title: { en: "Numbers members wrote down", hi: "मेंबर्स के अपने लिखे नतीजे" },
    body: { en: "Each figure is copied from a five-star Google review, with the review beside it.", hi: "हर आंकड़ा पाँच-स्टार गूगल रिव्यू से लिया गया है, रिव्यू साथ में है।" },
    items: [
      { value: "75", unit: { en: "kg", hi: "किलो" }, label: { en: "lost, 160 kg to 85 kg", hi: "कम, 160 से 85 किलो" }, quote: "I lost 75kg form 160kg to 85kg..The transformation took 2 years and 2 months with strong determination and  discipline.." },
      { value: "20", unit: { en: "kg", hi: "किलो" }, label: { en: "lost in 4 months", hi: "4 महीने में कम" }, quote: "i lose 20kg in 4 months under the guidance of mr mukund sharma sir" },
      { value: "16", unit: { en: "kg", hi: "किलो" }, label: { en: "gained in 7 months, 42 to 58", hi: "7 महीने में बढ़ा, 42 से 58" }, quote: "I transformed from 42kg to 58kg in 7 month under the guidance of dietician mukund sharma." },
      { value: "16", unit: { en: "kg", hi: "किलो" }, label: { en: "lost in 4 months", hi: "4 महीने में कम" }, quote: "i loose 16kg in four month under yogadhyay fitness academy...best yoga best crossfit and diet counseling.." },
      { value: "15", unit: { en: "kg", hi: "किलो" }, label: { en: "lost in 3 months", hi: "3 महीने में कम" }, quote: "i lose 15 kg in 3 month under the guidance of Jitender sharma" },
      { value: "8", unit: { en: "kg", hi: "किलो" }, label: { en: "lost in 2 months", hi: "2 महीने में कम" }, quote: "I loose 8 kg weight in 2 months in yogaddhaye acadmey" },
    ],
  },
  dishes: {
    title: { en: "What you can train for", hi: "यहाँ किस चीज़ की ट्रेनिंग होती है" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Yoga", hi: "योग" }, quote: "Best fitness academy in sohna gurugram and faridabad for yoga, weightloss ,diet counseling and body transformation..Try once you will love it..", img: "/img/p3.jpg" },
      { name: { en: "Powerlifting", hi: "पावरलिफ़्टिंग" }, quote: "Mr. Jitendra Kaushik Indian powerlifter & Physical Education teacher", img: "/img/p10.jpg" },
      { name: { en: "Police & army prep", hi: "पुलिस और आर्मी तैयारी" }, quote: "Physical fitness training for haryana police and Delhi police..in yogadhyay diet counseling is also available as per your requirement with suitable results..", img: "/img/p13.jpg" },
      { name: { en: "Every kind of goal", hi: "हर तरह का लक्ष्य" }, quote: "Highly recommended for weightloss, weight gain, fitness modelling, powerlifting, weightlifting, boxing , 100 meter sprint.." },
      { name: { en: "Army & gymnastics", hi: "आर्मी और जिमनास्टिक्स" }, quote: "I am preparing for Indian army under Mr mukund Sharma as well for national gymnast championship.." },
      { name: { en: "The space", hi: "जगह" }, quote: "Centre have wide space, clean, you don't need to carry own mat" },
    ],
  },
  gallery: {
    title: { en: "Inside Yogadhyay", hi: "योगाध्याय के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Main hall at Yogadhyay Fitness Academy", wide: true },
      { src: "/img/p3.jpg", alt: "Outdoor yoga session" },
      { src: "/img/p4.jpg", alt: "Members on stage" },
      { src: "/img/p8.jpg", alt: "Group trek" },
      { src: "/img/p9.jpg", alt: "Members on a trek" },
      { src: "/img/p14.jpg", alt: "Yogadhyay storefront in Sohna", wide: true },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "Coaches who train alongside you", hi: "कोच जो साथ में ट्रेनिंग करते हैं" },
    body: { en: "Mukund Sharma on diet and transformation, Jitendra Kaushik on powerlifting.", hi: "डाइट और ट्रांसफ़ॉर्मेशन पर मुकुंद शर्मा, पावरलिफ़्टिंग पर जितेंद्र कौशिक।" },
    img: "/img/p10.jpg",
    hosts: [
      { name: "MUKUND SHARMA", quote: "Mukund sir not only motivate ya,work with us. He is really a very good trainer who lead from his examples." },
      { name: "MUKUND SHARMA", quote: "i lose 20kg in 4 months under the guidance of mr mukund sharma sir" },
      { name: "JITENDRA KAUSHIK", quote: "Mr. Jitendra Kaushik Indian powerlifter & Physical Education teacher" },
    ],
  },
  reviews: {
    title: { en: "536 reviews, almost all five stars", hi: "536 रिव्यू, लगभग सब पाँच स्टार" },
    rating: 4.9,
    dist: [525, 4, 1, 0, 6],
    quotes: [
      { quote: "Yogadhyay academy in best in every aspect of fitness and body transformation..", stars: 5 },
      { quote: "I joined yogadhyay this month I am obserserving my changes very fast, I am gaining my muscles and weight also..", stars: 5 },
      { quote: "i transformed myself here and got lean body now i practicing exercise regularly..", stars: 5 },
      { quote: "Centre have wide space, clean, you don't need to carry own mat", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Baluda Road, opposite Mamta Hospital", hi: "बलूदा रोड, ममता हॉस्पिटल के सामने" },
    img: "/img/p14.jpg",
    alt: "Yogadhyay Fitness Academy storefront",
    address: { en: "Baluda Road, opposite Mamta Hospital, Sohna, Haryana", hi: "बलूदा रोड, ममता हॉस्पिटल के सामने, सोहना, हरियाणा" },
    note: { en: "Open every day from 5 in the morning to 9 at night.", hi: "रोज़ सुबह 5 से रात 9 बजे तक खुला।" },
  },
  story: [
    { kicker: { en: "Results", hi: "नतीजे" }, title: { en: "160 kg to 85 kg.", hi: "160 से 85 किलो।" }, quote: "I lost 75kg form 160kg to 85kg..The transformation took 2 years and 2 months with strong determination and  discipline.." },
    { kicker: { en: "Both ways", hi: "दोनों तरफ़" }, title: { en: "Gaining weight counts too.", hi: "वज़न बढ़ाना भी लक्ष्य है।" }, quote: "I transformed from 42kg to 58kg in 7 month under the guidance of dietician mukund sharma." },
    { kicker: { en: "Uniform goals", hi: "वर्दी का सपना" }, title: { en: "Police and army fitness.", hi: "पुलिस और आर्मी फ़िटनेस।" }, quote: "I am preparing for Indian army under Mr mukund Sharma as well for national gymnast championship.." },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Weight gain", hi: "वज़न बढ़ाना" } },
      { name: { en: "Yoga", hi: "योग" } },
      { name: { en: "Powerlifting", hi: "पावरलिफ़्टिंग" } },
      { name: { en: "Police / army fitness", hi: "पुलिस / आर्मी फ़िटनेस" } },
    ] },
    when: true,
    hello: { en: "Hi Yogadhyay Fitness Academy, I'd like to visit:", hi: "नमस्ते योगाध्याय फ़िटनेस अकादमी, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi Yogadhyay Fitness Academy, I'd like to know about joining. Goal: ",
    hi: "नमस्ते योगाध्याय फ़िटनेस अकादमी, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: ",
  },
  order: ["results", "dishes", "feature", "build", "reviews", "gallery", "visit"],
};
