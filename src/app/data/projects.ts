export type AppLinks = {
  ios?: string;
  android?: string;
  website?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  links?: AppLinks;
};

export const projects: Project[] = [
  {
    id: "hanzii",
    title: "Hanzii Dictionary",
    subtitle: "Chinese–Vietnamese dictionary",
    description:
      "Comprehensive Chinese learning app with dictionary, stroke animations, OCR, spaced repetition, and offline mode.",
    tags: [
      "Kotlin",
      "Java",
      "Hilt",
      "Coroutines",
      "Flow",
      "MVVM",
      "Navigation Component",
      "Material Design 3",
      "Retrofit",
      "Room",
      "Firebase",
      "WorkManager",
      "In-app Billing",
      "Gradle Kotlin DSL",
    ],
    imageSrc: "/hanzii.png",
    imageAlt: "Hanzii app thumbnail",
    links: {
      ios: "https://apps.apple.com/vn/app/t%E1%BB%AB-%C4%91i%E1%BB%83n-trung-vi%E1%BB%87t-hanzii-dict/id1468400944?l=vi",
      android: "https://play.google.com/store/apps/details?id=com.eup.hanzii",
    },
  },
  {
    id: "mazii",
    title: "Mazii Dictionary",
    subtitle: "Japanese learning suite",
    description:
      "All‑in‑one Japanese study companion with dictionary, JLPT practice, handwriting input, and community contributions.",
    tags: [
      "Kotlin",
      "Java",
      "Hilt",
      "Coroutines",
      "Flow",
      "MVVM",
      "Navigation Component",
      "Material Design 3",
      "Retrofit",
      "Room",
      "Firebase",
      "WorkManager",
      "In-app Billing",
      "Gradle Kotlin DSL",
    ],
    imageSrc: "/mazii.png",
    imageAlt: "Mazii app thumbnail",
    links: {
      ios: "https://apps.apple.com/vn/app/mazii-dictionary/id1468400944?l=vi",
      android: "https://play.google.com/store/apps/details?id=com.mazii.dictionary&hl=vi",
    },
  },
  {
    id: "faztaa",
    title: "Faztaa Dict",
    subtitle: "German dictionary for study",
    description:
      "German–Vietnamese and German–English dictionary with pronunciation practice, grammar, and flashcards.",
    tags: [
      "Kotlin",
      "Java",
      "Hilt",
      "Coroutines",
      "Flow",
      "MVVM",
      "Navigation Component",
      "Material Design 3",
      "Retrofit",
      "Room",
      "Firebase",
      "WorkManager",
      "In-app Billing",
      "Gradle Kotlin DSL",
      "Jetpack Compose",
    ],
    imageSrc: "/faztaa.png",
    imageAlt: "Faztaa app thumbnail",
    links: {
      ios: "https://apps.apple.com/de/app/faztaa-dict-ti%E1%BA%BFng-%C4%91%E1%BB%A9c-du-h%E1%BB%8Dc/id6443765652",
      android: "https://play.google.com/store/apps/details?id=com.eup.faztaa&hl=vi",
    },
  },
  {
    id: "heychina",
    title: "HeyChina",
    subtitle: "Speak Chinese daily",
    description: "Daily speaking practice with topical lessons, spaced repetition, and native audio.",
    tags: [
      "Kotlin",
      "Hilt",
      "Coroutines",
      "Flow",
      "MVVM",
      "Navigation Component",
      "Material Design 3",
      "Retrofit",
      "Room",
      "Firebase",
      "WorkManager",
      "In-app Billing",
      "Gradle Kotlin DSL",
    ],
    imageSrc: "/heychina.png",
    imageAlt: "HeyChina app thumbnail",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.eup.heychina&hl=vi",
    },
  },
  {
    id: "thepocket",
    title: "The Pocket",
    subtitle: "English speaking coach",
    description:
      "AI‑assisted English practice with conversation drills, pronunciation feedback, and adaptive lesson paths.",
    tags: ["Flutter", "GenAI", "Edge"],
    imageSrc: "/thepocket.jpg",
    imageAlt: "The Pocket app thumbnail",
    links: {
      ios: "https://apps.apple.com/vn/app/the-pocket-h%E1%BB%8Dc-ti%E1%BA%BFng-anh/id6740740657?l=vi",
      android: "https://play.google.com/store/apps/details?id=com.mobile.thepocket",
    },
  },
];
