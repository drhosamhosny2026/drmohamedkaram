export type Lang = 'en' | 'ar'

export const T = {
  en: {
    langToggle: 'ع',
    dir: 'ltr' as const,

    nav: {
      about: 'About',
      journey: 'Journey',
      expertise: 'Expertise',
      contact: 'Contact',
      getInTouch: 'Get In Touch',
    },

    hero: {
      kicker: 'Founder, ASENDRA · Business Systems · Growth',
      subCopy:
        'I design business systems that turn strategy into repeatable, scalable operations — bridging technology, process architecture, and execution to build organisations that compound their growth with every iteration.',
      cta1: 'View Journey',
      cta2: 'Get In Touch',
      credStrip: [
        'Founder, ASENDRA',
        'Systems Architecture',
        'Growth Strategy',
        'Operations & Technology',
      ],
      cardName: 'Hossam Hosny',
      cardSubtitle: 'Business Systems & Growth Builder',
      openLabel: 'Open',
    },

    journey: {
      sectionLabel: 'Professional Journey',
      h2Line1: 'From healthcare foundations',
      h2Line2: 'to business systems builder',
      now: 'Now',
      inProgress: 'In Progress',
      items: [
        {
          id: '01',
          tag: 'Foundation',
          title: 'Pharmacy Foundations',
          period: '2018 – Present',
          desc: 'Started in direct patient care — where precision is not optional and every process has a human consequence. Pharmacy built the discipline of getting things right, understanding how systems affect outcomes, and taking full responsibility for the quality of what reaches people.',
        },
        {
          id: '02',
          tag: 'Operations',
          title: 'Healthcare Operations',
          period: '2020 – Present',
          desc: 'Moved into fast-paced healthcare environments focused on operations, workflow, and performance at scale. Managing teams, streamlining processes, and solving the operational challenges that don\'t appear in textbooks — only in practice.',
        },
        {
          id: '03',
          tag: 'Education',
          title: 'Business Education',
          period: '2021 – Present',
          desc: 'Pursuing an MBA at Cairo University — studying Operations Management, CRM, Marketing, Economics, and Finance. Expanding from technical expertise into the language of business: strategy, structure, and the frameworks that allow organisations to grow at scale.',
        },
        {
          id: '04',
          tag: 'Systems',
          title: 'Systems, Data & Technology',
          period: '2022 – Present',
          desc: 'Applying structured thinking, data analysis, and technology to improve how decisions get made and how performance compounds over time. The shift from working harder to designing better — building feedback loops, reducing friction, and enabling scale through systems.',
        },
        {
          id: '05',
          tag: 'Vision',
          title: 'Building ASENDRA',
          period: 'Now',
          desc: 'The next chapter. ASENDRA is a long-term vision built on everything before it — strategy, systems, growth, and transformation. Built to help organisations design better operations, make smarter decisions, and scale with structure rather than strain.',
        },
      ],
    },

    about: {
      sectionLabel: 'The Story',
      h2Line1: 'Real scale comes from',
      h2Line2: 'systems, not effort alone.',
      p1: "My career was built by moving deliberately — from healthcare into operations, from operations into business strategy, and from strategy into systems design. Each transition was intentional. Each layer added something the previous one alone couldn't provide.",
      p2: "The through-line is systems thinking: understanding how processes connect, where leverage exists, and how to build organisations that grow through structure rather than constant effort. Technology accelerates that. ASENDRA is where it's heading.",
      pullQuote:
        '“The best leverage in any organisation is a well-designed system. It works while you sleep, scales while you rest, and compounds what others can only add to.”',
      chapters: [
        {
          id: '01',
          phase: 'Pharmacy — The Foundation',
          copy: 'My career began at the intersection of science and people. Healthcare taught me that precision is non-negotiable — that systems affect human outcomes, and that getting processes right is not a preference but a responsibility.',
        },
        {
          id: '02',
          phase: 'Operations & Management — The Expansion',
          copy: 'Moving into pharmacy management shifted my thinking from clinical to systemic. Directing operations, managing supply chains, and coordinating teams showed me that good systems are the difference between an organisation that survives and one that scales.',
        },
        {
          id: '03',
          phase: 'Business Education — The Framework',
          copy: 'Pursuing a graduate business degree at Cairo University formalised what practice had already shown me. Operations Management, CRM, Marketing, Economics, and Finance — the frameworks that turn practical instinct into strategic clarity and give experience a language that scales.',
        },
        {
          id: '04',
          phase: 'Systems & Technology — The Operating Model',
          copy: 'Sustainable growth is an engineering problem. Technology, process design, and data create the feedback loops that allow organisations to improve continuously — reducing dependence on effort and building compounding capability that works independently of any single person.',
        },
        {
          id: '05',
          phase: 'ASENDRA — The Long-Term Vision',
          copy: 'ASENDRA is the expression of everything above: a platform built to help organisations design better systems, implement smarter operations, and grow through structure rather than strain. The work is ongoing. The ambition is deliberate.',
        },
      ],
    },

    expertise: {
      sectionLabel: 'Core Expertise',
      h2: 'Integrated expertise. Built for growth.',
      subCopy:
        'Each capability reinforces the others — systems thinking makes operations more precise, data makes systems smarter, and technology makes both scale further and faster.',
      workWithMe: 'Work with me',
      cards: [
        {
          number: '01',
          title: 'Business Systems',
          domain: 'Design · Architecture · Scale',
          why: 'Organisations that grow through systems outlast those that grow through effort.',
          what: 'Designing repeatable systems that bring consistency, visibility, and measurable performance to every layer of the organisation — from workflow design to process documentation and operational architecture.',
          tags: ['Process Design', 'Systems Architecture', 'Operational Consistency'],
        },
        {
          number: '02',
          title: 'Operations Excellence',
          domain: 'Workflow · Efficiency · Execution',
          why: "Friction is the silent tax on every organisation that doesn't address it.",
          what: 'Improving workflows, removing operational friction, and building the execution infrastructure that allows teams to move faster and perform more consistently — without adding complexity or headcount.',
          tags: ['Workflow Optimisation', 'Efficiency Design', 'Scalable Execution'],
        },
        {
          number: '03',
          title: 'Data & Analytics',
          domain: 'Measurement · Reporting · Decisions',
          why: 'What gets measured gets managed. What gets managed gets improved.',
          what: 'Using structured measurement, performance reporting, and data analysis to improve the quality of decisions — replacing intuition where it doesn\'t belong with insight that scales consistently across teams and time.',
          tags: ['Performance Reporting', 'Data Analysis', 'Decision Support'],
        },
        {
          number: '04',
          title: 'Digital Transformation',
          domain: 'Technology · Automation · AI',
          why: "Technology creates leverage. The question is whether it's actually being used.",
          what: 'Leveraging modern platforms, automation tools, and AI-powered workflows to transform how businesses operate — reducing manual effort, improving accuracy, and building digital capability that compounds over time.',
          tags: ['Process Automation', 'AI Tools', 'Digital Operations'],
        },
      ],
    },

    asendra: {
      sectionLabel: 'Building ASENDRA',
      h2Line1: 'Growth built on systems,',
      h2Line2: 'not heroics.',
      body: 'ASENDRA exists around one belief: sustainable growth should not depend on exceptional effort or individual heroics. It should be designed — structured into the way an organisation operates, measured continuously, and improved with every iteration. The work is in its early stages. The direction is deliberate.',
      closingP:
        'ASENDRA is an evolving platform — currently in development — focused on helping organisations become more structured, more efficient, and more capable of sustained growth. The best organisations are not the ones that work hardest. They are the ones that are best designed.',
      inDevelopment: 'In Development',
      cards: [
        {
          number: '01',
          title: 'Strategy',
          domain: 'Vision · Direction · Clarity',
          why: 'Before systems, there must be a direction worth systematising.',
          what: 'ASENDRA starts with strategy — defining where an organisation needs to go, identifying real constraints, and making the decisions that must happen before any system is built. Clarity first. Structure second.',
          tags: ['Strategic Planning', 'Direction Setting', 'Clarity'],
        },
        {
          number: '02',
          title: 'Systems',
          domain: 'Process · Architecture · Repeatability',
          why: 'Systems turn good decisions into consistent, scalable behaviour.',
          what: 'The core of what ASENDRA builds: repeatable processes that make performance predictable and remove dependence on individual effort. Designed to work reliably, consistently, and without constant supervision.',
          tags: ['Process Design', 'Systems Architecture', 'Repeatability'],
        },
        {
          number: '03',
          title: 'Technology',
          domain: 'Automation · AI · Digital Tools',
          why: 'Technology without strategy creates noise. With it, it creates leverage.',
          what: 'ASENDRA applies technology where it matters — automating the manual, measuring the invisible, and using modern tools to give lean teams the capabilities of much larger ones. Enablement, not replacement.',
          tags: ['Automation', 'AI Integration', 'Digital Enablement'],
        },
        {
          number: '04',
          title: 'Scale',
          domain: 'Growth · Efficiency · Compounding',
          why: 'Scale is not about doing more. It is about building better.',
          what: 'The ambition is compounding growth — organisations that become more capable with every cycle, not just bigger. Built on the three pillars above: strategy, systems, and technology aligned around a long-term vision.',
          tags: ['Scalable Operations', 'Growth Architecture', 'Long-Term Thinking'],
        },
      ],
    },

    credentials: {
      sectionLabel: 'Credentials',
      h2: 'Education, experience & accomplishments',
      educationLabel: 'Education',
      experienceLabel: 'Professional Experience',
      stats: [
        { value: '8+', label: 'Years of Professional Experience' },
        { value: 'MBA', label: 'Candidate, Cairo University' },
        { value: 'ASENDRA', label: 'Founder · In Development' },
        { value: 'Digital', label: 'Transformation · Systems, AI & Automation' },
      ],
      education: [
        {
          degree: 'Bachelor of Pharmaceutical Sciences',
          inst: 'Al-Azhar University, Assiut',
          year: '2018',
          tag: 'EPSF Member · Highly Accomplished Graduate',
        },
        {
          degree: 'MBA Candidate',
          inst: 'Cairo University',
          year: 'In Progress',
          tag: 'Operations · Marketing · Finance',
        },
        {
          degree: 'Professional Development',
          inst: 'Systems Design · Data Analytics · AI Tools',
          year: 'Ongoing',
          tag: 'Applied Learning · Process Architecture · Business Automation',
        },
      ],
      roles: [
        {
          title: 'Pharmacist',
          org: 'Lemon Company (Adama Branch), Riyadh',
          period: '2022 – Present',
          tag: 'Current Role',
        },
        {
          title: 'Pharmacist Manager',
          org: 'Super Drug Pharmacy',
          period: '2020 – 2022',
          tag: 'Pharmacy Operations',
        },
        {
          title: 'Founder & Builder',
          org: 'ASENDRA',
          period: '2025 – Present',
          tag: 'Strategy · Systems · Scale',
        },
      ],
    },

    contact: {
      sectionLabel: 'Contact',
      h2: "Let's Build Something Meaningful",
      subCopy:
        "Whether it's operations, systems architecture, business growth, or strategic partnerships, I welcome thoughtful conversations and professional collaborations.",
      linkedin: { label: 'LinkedIn', sub: 'Connect professionally', cta: 'View Profile' },
      email: { label: 'Email', sub: 'Send a direct message', cta: 'Get In Touch' },
      letConnect: {
        title: "LET'S CONNECT",
        sub: 'Building systems, growth, and transformation.',
      },
      availabilityNote:
        'Currently open to consulting engagements, partnerships, and strategic collaborations.',
    },

    footer: {
      tagline: '© 2026 · Strategy · Systems · Scale',
      designedBy: 'Designed & Developed by',
      agencyTagline: 'Strategy · Systems · Scale',
    },
  },

  // ─────────────────────────────────────────────
  // ARABIC — فصحى سهلة · Professional Saudi business Arabic
  // ─────────────────────────────────────────────
  ar: {
    langToggle: 'EN',
    dir: 'rtl' as const,

    nav: {
      about: 'عن هوسام',
      journey: 'المسيرة المهنية',
      expertise: 'مجالات الخبرة',
      contact: 'تواصل',
      getInTouch: 'تواصل معي',
    },

    hero: {
      kicker: 'مؤسس ASENDRA · أنظمة الأعمال · النمو',
      subCopy:
        'أُصمّم أنظمة أعمال تُحوّل الاستراتيجية إلى عمليات قابلة للتكرار والتوسع — بالجمع بين التكنولوجيا وهندسة العمليات والتنفيذ الفعلي، لبناء منظمات تتضاعف قدرتها مع كل مرحلة.',
      cta1: 'استعرض المسيرة',
      cta2: 'تواصل معي',
      credStrip: [
        'مؤسس ASENDRA',
        'هندسة الأنظمة',
        'استراتيجية النمو',
        'العمليات والتكنولوجيا',
      ],
      cardName: 'هوسام حسني',
      cardSubtitle: 'مُطوِّر أنظمة الأعمال والنمو',
      openLabel: 'متاح',
    },

    journey: {
      sectionLabel: 'المسيرة المهنية',
      h2Line1: 'من أساسيات الرعاية الصحية',
      h2Line2: 'إلى بناء أنظمة الأعمال',
      now: 'الآن',
      inProgress: 'قيد التطوير',
      items: [
        {
          id: '01',
          tag: 'الأساس',
          title: 'أساسيات الصيدلة',
          period: '2018 – الحاضر',
          desc: 'بدأت في رعاية المريض المباشرة — حيث الدقة ليست خياراً وكل عملية تحمل تبعة إنسانية. أرسى عمل الصيدلة لديّ انضباط الإتقان، وفهم كيف تؤثر الأنظمة على النتائج، وتحمّل المسؤولية الكاملة عن جودة ما يصل إلى الناس.',
        },
        {
          id: '02',
          tag: 'العمليات',
          title: 'عمليات الرعاية الصحية',
          period: '2020 – الحاضر',
          desc: 'انتقلت إلى بيئات رعاية صحية تتطلب السرعة والتركيز على العمليات والأداء على نطاق واسع. إدارة الفرق وتبسيط العمليات وحل التحديات التشغيلية التي لا تظهر في الكتب — بل في الممارسة الفعلية.',
        },
        {
          id: '03',
          tag: 'التعليم',
          title: 'التعليم التجاري',
          period: '2021 – الحاضر',
          desc: 'أتابع دراسة ماجستير إدارة الأعمال في جامعة القاهرة — إدارة العمليات وإدارة علاقات العملاء والتسويق والاقتصاد والمالية. توسّع من الخبرة التقنية إلى لغة الأعمال: الاستراتيجية والهيكل والأطر التي تُمكّن المنظمات من التوسع.',
        },
        {
          id: '04',
          tag: 'الأنظمة',
          title: 'الأنظمة والبيانات والتكنولوجيا',
          period: '2022 – الحاضر',
          desc: 'تطبيق التفكير المنهجي وتحليل البيانات والتكنولوجيا لتحسين جودة القرارات وتراكم الأداء بمرور الوقت. التحول من العمل بجهد أكبر إلى تصميم أفضل — بناء حلقات تغذية راجعة وتقليل الاحتكاك وتمكين التوسع من خلال الأنظمة.',
        },
        {
          id: '05',
          tag: 'الرؤية',
          title: 'بناء ASENDRA',
          period: 'الآن',
          desc: 'الفصل القادم. ASENDRA رؤية بعيدة الأمد مبنية على كل ما سبق — الاستراتيجية والأنظمة والنمو والتحول. تُؤسَّس لمساعدة المنظمات على تصميم عمليات أفضل واتخاذ قرارات أذكى والتوسع بهيكل راسخ بدلاً من جهد متواصل.',
        },
      ],
    },

    about: {
      sectionLabel: 'القصة',
      h2Line1: 'النمو الحقيقي يأتي من الأنظمة،',
      h2Line2: 'لا من الجهد وحده.',
      p1: 'بُنيت مسيرتي المهنية بتأنٍّ ودراسة — من الرعاية الصحية إلى العمليات، ومن العمليات إلى استراتيجية الأعمال، ومن الاستراتيجية إلى تصميم الأنظمة. كل تحول كان مقصوداً. وكل طبقة أضافت ما لم تكن الطبقة السابقة وحدها قادرة على تقديمه.',
      p2: 'الخيط المشترك هو التفكير المنظومي: فهم كيف تترابط العمليات، وأين توجد نقاط الرافعة، وكيف تُبنى منظمات تنمو من خلال الهيكل لا من خلال الجهد المتواصل. التكنولوجيا تُسرّع ذلك. ASENDRA هي الوجهة.',
      pullQuote:
        '«أفضل رافعة في أي منظمة هي النظام المُصمَّم بإتقان. يعمل وأنت نائم، ويتوسع وأنت تستريح، ويُراكم ما يستطيع الآخرون فحسب إضافته.»',
      chapters: [
        {
          id: '01',
          phase: 'الصيدلة — الأساس',
          copy: 'بدأت مسيرتي عند تقاطع العلم والناس. علّمتني الرعاية الصحية أن الدقة غير قابلة للتفاوض — وأن الأنظمة تؤثر على نتائج إنسانية، وأن إتقان العمليات مسؤولية لا خيار.',
        },
        {
          id: '02',
          phase: 'العمليات والإدارة — التوسع',
          copy: 'انتقالي إلى إدارة الصيدلة حوّل تفكيري من السريري إلى المنظومي. إدارة العمليات وسلاسل الإمداد وتنسيق الفرق أظهرت لي أن الأنظمة الجيدة هي الفارق بين منظمة تصمد وأخرى تتوسع.',
        },
        {
          id: '03',
          phase: 'التعليم التجاري — الإطار',
          copy: 'إكمال دراسة الماجستير في جامعة القاهرة رسّخ ما أثبتته الممارسة. إدارة العمليات وإدارة علاقات العملاء والتسويق والاقتصاد والمالية — الأطر التي تحوّل الحدس العملي إلى وضوح استراتيجي وتمنح الخبرة لغة قابلة للتوسع.',
        },
        {
          id: '04',
          phase: 'الأنظمة والتكنولوجيا — النموذج التشغيلي',
          copy: 'النمو المستدام مسألة هندسية. تخلق التكنولوجيا وتصميم العمليات والبيانات حلقات التغذية الراجعة التي تتحسّن المنظمات من خلالها باستمرار — مما يُقلّل الاعتماد على الجهد ويبني قدرات متراكمة مستقلة عن الأشخاص.',
        },
        {
          id: '05',
          phase: 'ASENDRA — الرؤية بعيدة الأمد',
          copy: 'ASENDRA هي التعبير عن كل ما سبق: منصة تُساعد المنظمات على تصميم أنظمة أفضل وتطبيق عمليات أذكى والنمو من خلال الهيكل لا من خلال الضغط المستمر. العمل جارٍ. والطموح متعمّد.',
        },
      ],
    },

    expertise: {
      sectionLabel: 'محاور الخبرة الأساسية',
      h2: 'خبرة متكاملة. مُصمَّمة للنمو.',
      subCopy:
        'كل قدرة تُعزّز الأخرى — التفكير المنظومي يجعل العمليات أكثر دقة، والبيانات تجعل الأنظمة أذكى، والتكنولوجيا تجعل كليهما يتوسعان بشكل أسرع وأبعد.',
      workWithMe: 'العمل معي',
      cards: [
        {
          number: '01',
          title: 'أنظمة الأعمال',
          domain: 'التصميم · الهيكل · التوسع',
          why: 'المنظمات التي تنمو من خلال الأنظمة تتفوق على تلك التي تنمو من خلال الجهد.',
          what: 'تصميم أنظمة قابلة للتكرار تُضفي الاتساق والشفافية والأداء القابل للقياس على كل مستوى في المنظمة — من تصميم سير العمل إلى توثيق العمليات والهيكل التشغيلي.',
          tags: ['تصميم العمليات', 'هندسة الأنظمة', 'الاتساق التشغيلي'],
        },
        {
          number: '02',
          title: 'التميز التشغيلي',
          domain: 'سير العمل · الكفاءة · التنفيذ',
          why: 'الاحتكاك هو الضريبة الصامتة على كل منظمة لا تعالجه.',
          what: 'تحسين مسارات العمل وإزالة الاحتكاك التشغيلي وبناء البنية التحتية للتنفيذ التي تُمكّن الفرق من التحرك بسرعة وأداء أكثر اتساقاً — دون إضافة تعقيد أو موارد بشرية.',
          tags: ['تحسين سير العمل', 'تصميم الكفاءة', 'التنفيذ القابل للتوسع'],
        },
        {
          number: '03',
          title: 'البيانات والتحليلات',
          domain: 'القياس · التقارير · القرارات',
          why: 'ما يُقاس يُدار. وما يُدار يتحسّن.',
          what: 'استخدام القياس المنظّم وتقارير الأداء وتحليل البيانات لتحسين جودة القرارات — استبدال الحدس حيث لا ينبغي له أن يكون بمعلومات موثوقة تتوسع باستمرار عبر الفرق والزمن.',
          tags: ['تقارير الأداء', 'تحليل البيانات', 'دعم القرار'],
        },
        {
          number: '04',
          title: 'التحول الرقمي',
          domain: 'التكنولوجيا · الأتمتة · الذكاء الاصطناعي',
          why: 'التكنولوجيا بدون استراتيجية تُنتج ضوضاء. مع استراتيجية، تُنتج نفوذاً.',
          what: 'توظيف المنصات الحديثة وأدوات الأتمتة وسير العمل المدعومة بالذكاء الاصطناعي لتحويل طريقة عمل الأعمال — تقليل الجهد اليدوي وتحسين الدقة وبناء قدرات رقمية تتراكم مع الوقت.',
          tags: ['أتمتة العمليات', 'أدوات الذكاء الاصطناعي', 'العمليات الرقمية'],
        },
      ],
    },

    asendra: {
      sectionLabel: 'بناء ASENDRA',
      h2Line1: 'نمو مبني على الأنظمة،',
      h2Line2: 'لا على الجهد الفردي.',
      body: 'ASENDRA تقوم على اعتقاد واحد: يجب ألا يعتمد النمو المستدام على جهد استثنائي أو بطولات فردية. ينبغي أن يكون مُصمَّماً — مُدمجاً في طريقة عمل المنظمة، مقاساً باستمرار، ومُحسَّناً مع كل دورة. العمل في مراحله الأولى. والاتجاه متعمّد.',
      closingP:
        'ASENDRA منصة متطورة — قيد التطوير حالياً — تركز على مساعدة المنظمات على أن تصبح أكثر تنظيماً وكفاءةً وقدرةً على تحقيق نمو مستدام. المنظمات الأفضل ليست تلك التي تعمل بجهد أكبر. بل تلك المُصمَّمة بشكل أفضل.',
      inDevelopment: 'قيد التطوير',
      cards: [
        {
          number: '01',
          title: 'الاستراتيجية',
          domain: 'الرؤية · الاتجاه · الوضوح',
          why: 'قبل الأنظمة، لا بدّ من وجود اتجاه يستحق التنظيم.',
          what: 'تبدأ ASENDRA بالاستراتيجية — تحديد وجهة المنظمة، وتحديد القيود الفعلية، واتخاذ القرارات التي يجب أن تحدث قبل بناء أي نظام. الوضوح أولاً. الهيكل ثانياً.',
          tags: ['التخطيط الاستراتيجي', 'تحديد الاتجاه', 'الوضوح'],
        },
        {
          number: '02',
          title: 'الأنظمة',
          domain: 'العمليات · الهيكل · القابلية للتكرار',
          why: 'الأنظمة تحوّل القرارات الجيدة إلى سلوك متسق وقابل للتوسع.',
          what: 'جوهر ما تبنيه ASENDRA: عمليات قابلة للتكرار تجعل الأداء قابلاً للتنبؤ وتُقلّل الاعتماد على الجهد الفردي. مُصمَّمة للعمل بموثوقية واتساق ودون إشراف مستمر.',
          tags: ['تصميم العمليات', 'هندسة الأنظمة', 'القابلية للتكرار'],
        },
        {
          number: '03',
          title: 'التكنولوجيا',
          domain: 'الأتمتة · الذكاء الاصطناعي · الأدوات الرقمية',
          why: 'التكنولوجيا بدون استراتيجية تُنتج ضوضاء. مع استراتيجية، تُنتج نفوذاً.',
          what: 'ASENDRA تُطبّق التكنولوجيا حيث تُحدث فارقاً — أتمتة ما هو يدوي، وقياس ما هو غير مرئي، واستخدام الأدوات الحديثة لمنح الفرق الصغيرة قدرات المنظمات الأكبر. تمكين، لا استبدال.',
          tags: ['الأتمتة', 'تكامل الذكاء الاصطناعي', 'التمكين الرقمي'],
        },
        {
          number: '04',
          title: 'التوسع',
          domain: 'النمو · الكفاءة · التراكم',
          why: 'التوسع لا يعني فعل المزيد. بل يعني البناء بشكل أفضل.',
          what: 'الطموح هو نمو متراكم — منظمات تصبح أكثر قدرةً مع كل دورة، لا أكبر فحسب. مبني على الركائز الثلاث أعلاه: الاستراتيجية والأنظمة والتكنولوجيا المتوافقة حول رؤية بعيدة الأمد.',
          tags: ['العمليات القابلة للتوسع', 'هندسة النمو', 'التفكير بعيد الأمد'],
        },
      ],
    },

    credentials: {
      sectionLabel: 'الشهادات والخبرات',
      h2: 'التعليم والخبرة والإنجازات',
      educationLabel: 'التعليم',
      experienceLabel: 'الخبرة المهنية',
      stats: [
        { value: '8+', label: 'سنوات من الخبرة المهنية' },
        { value: 'MBA', label: 'قيد الدراسة، جامعة القاهرة' },
        { value: 'ASENDRA', label: 'مؤسس · قيد التطوير' },
        { value: 'Digital', label: 'التحول الرقمي · الأنظمة والذكاء الاصطناعي والأتمتة' },
      ],
      education: [
        {
          degree: 'بكالوريوس علوم الصيدلة',
          inst: 'جامعة الأزهر، أسيوط',
          year: '2018',
          tag: 'عضو EPSF · خريج متميز',
        },
        {
          degree: 'ماجستير إدارة الأعمال (قيد الدراسة)',
          inst: 'جامعة القاهرة',
          year: 'جارٍ',
          tag: 'العمليات · التسويق · المالية',
        },
        {
          degree: 'التطوير المهني المستمر',
          inst: 'هندسة الأنظمة · تحليل البيانات · أدوات الذكاء الاصطناعي',
          year: 'مستمر',
          tag: 'تعلّم تطبيقي · هندسة العمليات · أتمتة الأعمال',
        },
      ],
      roles: [
        {
          title: 'صيدلاني',
          org: 'شركة ليمون (فرع عدم)، الرياض',
          period: '2022 – الحاضر',
          tag: 'الدور الحالي',
        },
        {
          title: 'مدير صيدلية',
          org: 'صيدلية سوبر دراغ',
          period: '2020 – 2022',
          tag: 'إدارة الصيدليات',
        },
        {
          title: 'مؤسس ومطوّر',
          org: 'ASENDRA',
          period: '2025 – الحاضر',
          tag: 'الاستراتيجية · الأنظمة · التوسع',
        },
      ],
    },

    contact: {
      sectionLabel: 'تواصل',
      h2: 'لنبنِ شيئاً ذا قيمة',
      subCopy:
        'سواء تعلّق الأمر بالرعاية الصحية أو العمليات أو نمو الأعمال، أرحّب بالمحادثات الجادة والتعاون المهني.',
      linkedin: { label: 'لينكدإن', sub: 'تواصل مهنياً', cta: 'عرض الملف الشخصي' },
      email: { label: 'البريد الإلكتروني', sub: 'أرسل رسالة مباشرة', cta: 'تواصل معي' },
      letConnect: {
        title: 'لنتواصل',
        sub: 'بناء الأنظمة والنمو والتحول.',
      },
      availabilityNote: 'متاح حالياً للاستشارات والشراكات والتعاون الاستراتيجي.',
    },

    footer: {
      tagline: '© 2026 · الاستراتيجية · الأنظمة · التوسع',
      designedBy: 'تصميم وتطوير',
      agencyTagline: 'الاستراتيجية · الأنظمة · التوسع',
    },
  },
} as const
