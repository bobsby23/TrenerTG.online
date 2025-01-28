interface Dictionary {
  [key: string]: {
    [key: string]:
      | string
      | {
          title: string
          subtitle: string
          mission?: {
            title: string
            description: string
          }
          team?: {
            title: string
            members: {
              name: string
              role: string
              image: string
              bio: string
            }[]
          }
          approach?: {
            title: string
            description: string
            features: {
              title: string
              description: string
            }[]
          }
          description?: string
          exploreCourses?: string
          startChat?: string
          viewButton?: string
          items?: {
            title: string
            type: "Video" | "Gallery" | "Audio"
            image?: string
            youtubeId?: string
            description: string
          }[]
          emergencyContacts?: {
            title: string
            items: string[]
          }
          preventiveCare?: {
            title: string
            items: string[]
          }
          firstAidTips?: {
            title: string
            items: string[]
          }
          articles?: {
            title: string
            readMore: string
            items: {
              title: string
              description: string
              excerpt: string
            }[]
          }
          courses?: {
            title: string
            description: string
            image: string
            slug: string
            price: string
          }[]
          membership?: {
            title: string
            basic: {
              name: string
              price: string
              description: string
              features: string[]
            }
            premium: {
              name: string
              price: string
              description: string
              features: string[]
            }
            ultimate: {
              name: string
              price: string
              description: string
              features: string[]
            }
            subscribe: string
          }
        }
  }
}

const dictionaries: Dictionary = {
  en: {
    hero: {
      title: "Train Smarter, Not Harder",
      subtitle: "The Ultimate Dog Academy!",
      description: "Transform your relationship with your furry friend through expert-led training",
      exploreCourses: "Explore Courses",
      startChat: "Start Chat",
    },
    nav: {
      dogAcademy: "Dog Academy",
      funDogMedia: "Fun Dog Media",
      trainingGuides: "Training Guides",
      aboutUs: "About Us",
      healthcare: "Healthcare",
      media: "Fun Media",
      about: "About Us",
    },
    auth: {
      signIn: "Sign In",
      join: "Join",
    },
    about: {
      title: "About TrenerTG",
      subtitle:
        "Bulgaria's premier AI-powered dog training academy, combining traditional expertise with cutting-edge technology",
      mission: {
        title: "Our Mission",
        description:
          "At TrenerTG, we believe in transforming the way people train and interact with their dogs. By combining traditional training methods with artificial intelligence, we provide personalized, effective, and accessible training solutions for every dog owner.",
      },
      team: {
        title: "Our Team",
        members: [
          {
            name: "Maria Petrova",
            role: "Head Trainer",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Certified dog trainer with 15 years of experience",
          },
          {
            name: "Ivan Dimitrov",
            role: "AI Development Lead",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Expert in AI and machine learning applications",
          },
          {
            name: "Elena Kovacheva",
            role: "Behavioral Specialist",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Specialized in addressing complex behavioral issues",
          },
        ],
      },
      approach: {
        title: "Our Approach",
        description:
          "We combine traditional dog training techniques with cutting-edge AI technology to provide personalized, effective training programs for every dog and owner.",
        features: [
          {
            title: "AI-Powered Analysis",
            description:
              "Our AI algorithms analyze your dog's behavior and progress to create tailored training plans.",
          },
          {
            title: "Expert Human Guidance",
            description:
              "Our experienced trainers provide hands-on support and personalized advice throughout your training journey.",
          },
        ],
      },
    },
    funMedia: {
      title: "Fun Dog Media",
      viewButton: "View",
      items: [
        {
          title: "10 Hilarious Dog Tricks",
          type: "Video",
          youtubeId: "dQw4w9WgXcQ",
          description: "Watch these adorable pups perform the funniest tricks!",
        },
        {
          title: "Dog Memes Compilation",
          type: "Gallery",
          image: "/placeholder.svg?height=200&width=400",
          description: "A collection of the best dog memes on the internet.",
        },
        {
          title: "Puppy ASMR",
          type: "Audio",
          image: "/placeholder.svg?height=200&width=400",
          description: "Relax to the soothing sounds of puppies playing.",
        },
        {
          title: "Dogs React to Magic Tricks",
          type: "Video",
          image: "/placeholder.svg?height=200&width=400",
          description: "See how dogs react to mind-blowing magic tricks!",
        },
        {
          title: "Cutest Dog Costumes",
          type: "Gallery",
          image: "/placeholder.svg?height=200&width=400",
          description: "Adorable dogs dressed up in the cutest costumes.",
        },
        {
          title: "Doggy Sing-Along",
          type: "Audio",
          image: "/placeholder.svg?height=200&width=400",
          description: "Listen to these talented pups show off their vocal skills.",
        },
      ],
    },
    healthcare: {
      title: "Animal Healthcare",
      emergencyContacts: {
        title: "Emergency Contacts",
        items: [
          "Emergency Vet: +359 2 123 4567",
          "Animal Ambulance: +359 2 765 4321",
          "Poison Control: +359 2 987 6543",
        ],
      },
      preventiveCare: {
        title: "Preventive Care",
        items: ["Regular check-ups", "Vaccination schedule", "Dental care"],
      },
      firstAidTips: {
        title: "First Aid Tips",
        items: ["Wound care basics", "Heat exhaustion signs", "CPR guidelines"],
      },
      articles: {
        title: "Healthcare Articles",
        readMore: "Read More",
        items: [
          {
            title: "Understanding Canine Nutrition",
            description: "Learn about proper diet and nutrition for your dog",
            excerpt: "Essential guide to feeding your dog the right way...",
          },
          {
            title: "Common Health Issues",
            description: "Recognize and prevent common dog health problems",
            excerpt: "Learn about symptoms and when to visit the vet...",
          },
        ],
      },
    },
    dogAcademy: {
      title: "Dog Academy",
      courses: [
        {
          title: "Basic Obedience",
          description: "Master essential commands and establish a strong foundation",
          image: "/placeholder.svg?height=200&width=400",
          slug: "basic-obedience",
          price: "$99",
        },
        {
          title: "Advanced Training",
          description: "Take your dog's skills to the next level",
          image: "/placeholder.svg?height=200&width=400",
          slug: "advanced",
          price: "$149",
        },
        {
          title: "Behavior Modification",
          description: "Address common behavioral issues with proven techniques",
          image: "/placeholder.svg?height=200&width=400",
          slug: "behavior",
          price: "$199",
        },
        {
          title: "Puppy Training",
          description: "Start your puppy off on the right paw with early socialization and basic training",
          image: "/placeholder.svg?height=200&width=400",
          slug: "puppy",
          price: "$129",
        },
        {
          title: "Agility Training",
          description: "Improve your dog's physical fitness and mental stimulation through obstacle courses",
          image: "/placeholder.svg?height=200&width=400",
          slug: "agility",
          price: "$179",
        },
        {
          title: "Therapy Dog Training",
          description: "Prepare your dog for therapy work and certification",
          image: "/placeholder.svg?height=200&width=400",
          slug: "therapy",
          price: "$249",
        },
      ],
    },
    footer: {
      trainingPrograms: "Training Programs",
      basicObedience: "Basic Obedience",
      advancedTraining: "Advanced Training",
      behaviorModification: "Behavior Modification",
      puppyTraining: "Puppy Training",
      resources: "Resources",
      blog: "Blog",
      trainingGuides: "Training Guides",
      videoLibrary: "Video Library",
      faq: "FAQ",
      company: "Company",
      aboutUs: "About Us",
      contact: "Contact",
      careers: "Careers",
      pressKit: "Press Kit",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      gdpr: "GDPR",
    },
    "25v": {
      title: "25v - String Reversal",
      cardTitle: "Reverse a String",
      inputPlaceholder: "Enter a string to reverse",
      submitButton: "Reverse",
      resultTitle: "Reversed String:",
    },
    trainingGuides: {
      title: "Training Guides",
      videoGuides: "Video Guides",
      writtenGuides: "Written Guides",
      readGuide: "Read Guide",
    },
    training: {
      basicObedience: {
        title: "Basic Obedience Training",
        description: "Master the fundamental commands and establish a strong foundation for your dog's behavior.",
      },
      behavior: {
        title: "Behavior Modification",
        description: "Address common behavioral issues and create a harmonious relationship with your dog.",
      },
      advanced: {
        title: "Advanced Dog Training",
        description: "Take your dog's skills to the next level with these advanced training techniques.",
      },
    },
    membership: {
      title: "Membership Plans",
      basic: {
        name: "Basic Plan",
        price: "$9.99/month",
        description: "Get started with our basic plan",
        features: ["Access to basic training videos", "Community forum access", "Monthly newsletter"],
      },
      premium: {
        name: "Premium Plan",
        price: "$19.99/month",
        description: "Unlock more features with our premium plan",
        features: [
          "All Basic Plan features",
          "Personalized training schedule",
          "Live Q&A sessions",
          "Exclusive content",
        ],
      },
      ultimate: {
        name: "Ultimate Plan",
        price: "$29.99/month",
        description: "Experience the best we have to offer",
        features: [
          "All Premium Plan features",
          "1-on-1 virtual training sessions",
          "Priority support",
          "Early access to new content",
        ],
      },
      subscribe: "Subscribe Now",
    },
  },
  bg: {
    hero: {
      title: "Тренирайте по-умно, не по-трудно",
      subtitle: "Най-добрата академия за кучета!",
      description: "Трансформирайте връзката си с вашия пухкав приятел чрез експертно обучение",
      exploreCourses: "Разгледай курсовете",
      startChat: "Започни чат",
    },
    nav: {
      dogAcademy: "Кучешка Академия",
      funDogMedia: "Забавни Кучешки Медии",
      trainingGuides: "Ръководства за Обучение",
      aboutUs: "За Нас",
      healthcare: "Здравеопазване",
      media: "Забавни Медии",
      about: "За Нас",
    },
    auth: {
      signIn: "Вход",
      join: "Регистрация",
    },
    about: {
      title: "За TrenerTG",
      subtitle:
        "Водещата в България AI-базирана академия за дресиране на кучета, съчетаваща традиционния опит с най-съвременните технологии",
      mission: {
        title: "Нашата Мисия",
        description:
          "В TrenerTG вярваме в трансформирането на начина, по който хората дресират и си взаимодействат със своите кучета. Чрез съчетаване на традиционни методи за дресиране с изкуствен интелект, ние предоставяме персонализирани, ефективни и достъпни решения за дресиране за всеки собственик на куче.",
      },
      team: {
        title: "Нашият Екип",
        members: [
          {
            name: "Мария Петрова",
            role: "Главен Треньор",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Сертифициран треньор на кучета с 15 години опит",
          },
          {
            name: "Иван Димитров",
            role: "Ръководител Разработка на AI",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Експерт в приложенията на изкуствения интелект и машинното обучение",
          },
          {
            name: "Елена Ковачева",
            role: "Специалист по Поведение",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Специализирана в решаването на сложни поведенчески проблеми",
          },
        ],
      },
      approach: {
        title: "Нашият Подход",
        description:
          "Ние съчетаваме традиционните техники за дресиране на кучета с най-съвременните технологии на изкуствения интелект, за да предоставим персонализирани, ефективни програми за дресиране за всяко куче и собственик.",
        features: [
          {
            title: "AI-базиран Анализ",
            description:
              "Нашите AI алгоритми анализират поведението и прогреса на вашето куче, за да създадат персонализирани планове за дресиране.",
          },
          {
            title: "Експертно Ръководство от Човек",
            description:
              "Нашите опитни треньори предоставят практическа подкрепа и персонализирани съвети през цялото ви обучение.",
          },
        ],
      },
    },
    funMedia: {
      title: "Забавни Медии за Кучета",
      viewButton: "Виж",
      items: [
        {
          title: "10 Забавни Кучешки Трика",
          type: "Video",
          youtubeId: "dQw4w9WgXcQ",
          description: "Гледайте тези очарователни кученца да изпълняват най-смешните трикове!",
        },
        {
          title: "Компилация от Мемове с Кучета",
          type: "Gallery",
          image: "/placeholder.svg?height=200&width=400",
          description: "Колекция от най-добрите мемове с кучета в интернет.",
        },
        {
          title: "ASMR с Кученца",
          type: "Audio",
          image: "/placeholder.svg?height=200&width=400",
          description: "Отпуснете се с успокояващите звуци на играещи кученца.",
        },
        {
          title: "Кучета Реагират на Магически Трикове",
          type: "Video",
          image: "/placeholder.svg?height=200&width=400",
          description: "Вижте как кучетата реагират на невероятни магически трикове!",
        },
        {
          title: "Най-Сладките Костюми за Кучета",
          type: "Gallery",
          image: "/placeholder.svg?height=200&width=400",
          description: "Очарователни кучета, облечени в най-сладките костюми.",
        },
        {
          title: "Кучешко Пеене",
          type: "Audio",
          image: "/placeholder.svg?height=200&width=400",
          description: "Чуйте тези талантливи кученца да показват своите вокални умения.",
        },
      ],
    },
    healthcare: {
      title: "Грижа за животните",
      emergencyContacts: {
        title: "Спешни контакти",
        items: [
          "Спешен ветеринарен лекар: +359 2 123 4567",
          "Ветеринарна линейка: +359 2 765 4321",
          "Център за контрол на отрови: +359 2 987 6543",
        ],
      },
      preventiveCare: {
        title: "Превантивна грижа",
        items: ["Редовни прегледи", "График на ваксинациите", "Грижа за зъбите"],
      },
      firstAidTips: {
        title: "Съвети за първа помощ",
        items: ["Основи на лечението на рани", "Признаци на топлинен удар", "Указания за КСR"],
      },
      articles: {
        title: "Статии за здравеопазване",
        readMore: "Прочети повече",
        items: [
          {
            title: "Разбиране на кучешкото хранене",
            description: "Научете за правилното хранене и диета за вашето куче",
            excerpt: "Важно ръководство за правилното хранене на вашето куче...",
          },
          {
            title: "Често срещани здравословни проблеми",
            description: "Разпознайте и предотвратете често срещаните здравословни проблеми при кучетата",
            excerpt: "Научете за симптомите и кога да посетите ветеринарен лекар...",
          },
        ],
      },
    },
    dogAcademy: {
      title: "Кучешка Академия",
      courses: [
        {
          title: "Основно послушание",
          description: "Овладейте основните команди и изградете силна основа",
          image: "/placeholder.svg?height=200&width=400",
          slug: "basic-obedience",
          price: "$99",
        },
        {
          title: "Разширено обучение",
          description: "Изведете уменията на вашето куче на следващото ниво",
          image: "/placeholder.svg?height=200&width=400",
          slug: "advanced",
          price: "$149",
        },
        {
          title: "Модификация на поведението",
          description: "Разрешете често срещаните поведенчески проблеми с доказани техники",
          image: "/placeholder.svg?height=200&width=400",
          slug: "behavior",
          price: "$199",
        },
        {
          title: "Обучение на кученца",
          description: "Започнете вашето кученце по правилния начин с ранна социализация и основно обучение",
          image: "/placeholder.svg?height=200&width=400",
          slug: "puppy",
          price: "$129",
        },
        {
          title: "Обучение по пъргавина",
          description: "Подобрете физическата годност и умствената стимулация на вашето куче чрез препятствия",
          image: "/placeholder.svg?height=200&width=400",
          slug: "agility",
          price: "$179",
        },
        {
          title: "Обучение на терапевтично куче",
          description: "Подгответе вашето куче за терапевтична работа и сертификация",
          image: "/placeholder.svg?height=200&width=400",
          slug: "therapy",
          price: "$249",
        },
      ],
    },
    footer: {
      trainingPrograms: "Програми за обучение",
      basicObedience: "Основно послушание",
      advancedTraining: "Напреднало обучение",
      behaviorModification: "Модификация на поведението",
      puppyTraining: "Обучение на кученца",
      resources: "Ресурси",
      blog: "Блог",
      trainingGuides: "Ръководства за обучение",
      videoLibrary: "Видео библиотека",
      faq: "Често задавани въпроси",
      company: "Компания",
      aboutUs: "За нас",
      contact: "Контакти",
      careers: "Кариери",
      pressKit: "Прес кит",
      legal: "Правна информация",
      privacyPolicy: "Политика за поверителност",
      termsOfService: "Условия за ползване",
      cookiePolicy: "Политика за бисквитките",
      gdpr: "GDPR",
    },
    "25v": {
      title: "25v - Обръщане на низ",
      cardTitle: "Обърни низ",
      inputPlaceholder: "Въведете низ за обръщане",
      submitButton: "Обърни",
      resultTitle: "Обърнат низ:",
    },
    trainingGuides: {
      title: "Ръководства за Обучение",
      videoGuides: "Видео Ръководства",
      writtenGuides: "Писмени Ръководства",
      readGuide: "Прочетете Ръководството",
    },
    training: {
      basicObedience: {
        title: "Основно Обучение за Послушание",
        description: "Овладейте основните команди и изградете силна основа за поведението на вашето куче.",
      },
      behavior: {
        title: "Модификация на Поведението",
        description: "Адресирайте често срещаните поведенчески проблеми и създайте хармонична връзка с вашето куче.",
      },
      advanced: {
        title: "Напреднало Обучение на Кучета",
        description: "Изведете уменията на вашето куче на следващото ниво с тези напреднали техники за обучение.",
      },
    },
    membership: {
      title: "Планове за членство",
      basic: {
        name: "Основен план",
        price: "19.99 лв./месец",
        description: "Започнете с нашия основен план",
        features: ["Достъп до основни видеа за обучение", "Достъп до форума на общността", "Месечен бюлетин"],
      },
      premium: {
        name: "Премиум план",
        price: "39.99 лв./месец",
        description: "Отключете повече функции с нашия премиум план",
        features: [
          "Всички функции на Основния план",
          "Персонализиран график за обучение",
          "Сесии на живо с въпроси и отговори",
          "Ексклузивно съдържание",
        ],
      },
      ultimate: {
        name: "Ултимативен план",
        price: "59.99 лв./месец",
        description: "Изпитайте най-доброто, което предлагаме",
        features: [
          "Всички функции на Премиум плана",
          "Индивидуални виртуални сесии за обучение",
          "Приоритетна поддръжка",
          "Ранен достъп до ново съдържание",
        ],
      },
      subscribe: "Абонирайте се сега",
    },
  },
}

export const getDictionary = (locale: string) => dictionaries[locale as keyof typeof dictionaries] || dictionaries.en

