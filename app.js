const form = document.querySelector("#video-form");
const issueInput = document.querySelector("#issue");
const ageInput = document.querySelector("#age");
const paceInput = document.querySelector("#pace");
const lengthInput = document.querySelector("#length");
const languageInput = document.querySelector("#language");
const taskDetailInput = document.querySelector("#task-detail");
const childNeedInput = document.querySelector("#child-need");
const helperStyleInput = document.querySelector("#helper-style");
const childNameInput = document.querySelector("#child-name");
const characterStyleInput = document.querySelector("#character-style");
const skinToneInput = document.querySelector("#skin-tone");
const bodyShapeInput = document.querySelector("#body-shape");
const glassesInput = document.querySelector("#has-glasses");
const backgroundImageInput = document.querySelector("#background-image");
const sketchStartInput = document.querySelector("#sketch-start");
const sketchStepInput = document.querySelector("#sketch-step");
const sketchEndingInput = document.querySelector("#sketch-ending");
const voiceToggle = document.querySelector("#voice-toggle");

const titleEl = document.querySelector("#video-title");
const pacePill = document.querySelector("#pace-pill");
const stageEl = document.querySelector("#cartoon-stage");
const prerenderedVideoEl = document.querySelector("#prerendered-video");
const propZone = document.querySelector("#prop-zone");
const sceneLabel = document.querySelector("#scene-label");
const captionEl = document.querySelector("#caption");
const progressBar = document.querySelector("#progress-bar");
const parentCueEl = document.querySelector("#parent-cue");
const parentTipEl = document.querySelector("#parent-tip");
const childQuestionEl = document.querySelector("#child-question");
const scriptText = document.querySelector("#script-text");
const sketchPreview = document.querySelector("#sketch-preview");
const specificTipsTitle = document.querySelector("#specific-tips-title");
const specificTipsList = document.querySelector("#specific-tips-list");
const tantrumTipsList = document.querySelector("#tantrum-tips-list");
const sourceList = document.querySelector("#source-list");
const backgroundPreview = document.querySelector("#background-preview");
const backgroundPreviewLabel = document.querySelector("#background-preview-label");
const pikaFilenameEl = document.querySelector("#pika-filename");
const pikaFolderEl = document.querySelector("#pika-folder");
const pikaStatusEl = document.querySelector("#pika-status");
const pikaPromptTextEl = document.querySelector("#pika-prompt-text");
const pikaFileListEl = document.querySelector("#pika-file-list");

const playButton = document.querySelector("#play-video");
const pauseButton = document.querySelector("#pause-video");
const prevButton = document.querySelector("#prev-scene");
const nextButton = document.querySelector("#next-scene");
const copyButton = document.querySelector("#copy-script");
const copyPikaPromptButton = document.querySelector("#copy-pika-prompt");
const removeBackgroundButton = document.querySelector("#remove-background");
const answerButtons = [...document.querySelectorAll("[data-answer]")];
const tabButtons = [...document.querySelectorAll("[data-tab-target]")];
const tabPanels = [...document.querySelectorAll("[data-tab-panel]")];

const preRenderedVideoLibrary = {
  teeth: {
    src: "./assets/videos/pika/teeth.mp4",
    poster: "./assets/posters/pika/teeth.jpg",
  },
  bedtime: {
    src: "./assets/videos/pika/bedtime.mp4",
    poster: "./assets/posters/pika/bedtime.jpg",
  },
  bath: {
    src: "./assets/videos/pika/bath.mp4",
    poster: "./assets/posters/pika/bath.jpg",
  },
  clothes: {
    src: "./assets/videos/pika/clothes.mp4",
    poster: "./assets/posters/pika/clothes.jpg",
  },
  cleanup: {
    src: "./assets/videos/pika/cleanup.mp4",
    poster: "./assets/posters/pika/cleanup.jpg",
  },
  leaving: {
    src: "./assets/videos/pika/leaving.mp4",
    poster: "./assets/posters/pika/leaving.jpg",
  },
  car: {
    src: "./assets/videos/pika/car.mp4",
    poster: "./assets/posters/pika/car.jpg",
  },
  food: {
    src: "./assets/videos/pika/food.mp4",
    poster: "./assets/posters/pika/food.jpg",
  },
};

const pikaTaskPromptLibrary = {
  teeth: "A young child in a cozy bathroom refuses to brush teeth at first, arms crossed and gently frowning. A toothbrush and cup are nearby. The child takes one slow breath, reaches for the toothbrush, accepts help, and gently brushes front teeth with tiny circles.",
  bedtime: "A young child resists bedtime in a cozy bedroom, arms crossed beside a bed. A soft blanket, pillow, and small night light are visible. The child slowly chooses the blanket, climbs into bed, and settles calmly.",
  bath: "A young child in a bright bathroom refuses bath time at first, sitting near a bathtub with arms crossed. Warm water, bubbles, and a soft towel are visible. The child slowly touches the water with one hand, relaxes, then washes one arm with soap bubbles.",
  clothes: "A young child refuses to get dressed at first, sitting near a shirt and socks. The child slowly looks at two clothing choices, touches one sock, and allows one foot to go in.",
  cleanup: "A young child refuses to clean up toys at first, standing near blocks and soft toys. The child slowly chooses one toy, picks it up, and places it in a bin.",
  leaving: "A young child resists leaving a play area at first, standing with crossed arms. A caregiver hand is nearby but not pulling. The child slowly waves goodbye, takes three small steps toward the caregiver, and looks calmer.",
  car: "A young child resists sitting in a car seat at first, arms crossed beside an open car door. The child slowly climbs into the car seat, puts back against the seat, and accepts the buckle click.",
  food: "A young child at a small table refuses dinner at first, turned slightly away from a plate. The plate has simple colorful food and a spoon. The child slowly looks, smells the food, touches the spoon, then takes one tiny bite and looks calmer.",
};

const pikaStatusCopy = {
  en: {
    ready: "Ready. Pika MP4 is active.",
    missing: "Missing MP4. CSS fallback is active.",
    checking: "Checking for MP4...",
    copied: "Copied",
    copy: "Copy Pika prompt",
  },
  es: {
    ready: "Listo. El MP4 de Pika esta activo.",
    missing: "Falta el MP4. El cartoon CSS sigue activo.",
    checking: "Revisando si existe el MP4...",
    copied: "Copiado",
    copy: "Copiar prompt de Pika",
  },
  fr: {
    ready: "Pret. Le MP4 Pika est actif.",
    missing: "MP4 manquant. Le cartoon CSS reste actif.",
    checking: "Verification du MP4...",
    copied: "Copie",
    copy: "Copier le prompt Pika",
  },
};

const topicLibrary = [
  {
    id: "teeth",
    match: ["brush", "tooth", "teeth", "dentist", "cavity", "cepillar", "diente", "dientes", "dentista", "caries", "brosser", "dent", "dents"],
    title: "Brushing keeps teeth strong",
    task: "brush teeth",
    childGoal: "make tiny circles with the toothbrush",
    why: "Brushing cleans away sugar bugs so teeth stay strong and comfortable.",
    prop: "teeth",
    choices: ["hold the brush", "let the grown-up help for three circles"],
    summary: "Brushing helps teeth stay strong, clean, and ready for smiles.",
  },
  {
    id: "bedtime",
    match: ["bed", "sleep", "nap", "pajamas", "pjs", "cama", "dormir", "siesta", "pijama", "lit", "dormir", "sieste", "pyjama"],
    title: "Rest helps the body grow",
    task: "get ready for sleep",
    childGoal: "put your body on the bed",
    why: "Rest gives the body energy for playing and learning tomorrow.",
    prop: "bed",
    choices: ["pick the blanket", "pick the first bedtime song"],
    summary: "Sleep helps the body rest, grow, and feel ready for tomorrow.",
  },
  {
    id: "bath",
    match: ["bath", "shower", "wash", "soap", "hair", "baño", "bano", "ducha", "lavar", "jabón", "jabon", "pelo", "cabello", "bain", "douche", "laver", "savon", "cheveux"],
    title: "Washing helps the body feel fresh",
    task: "take a bath",
    childGoal: "touch the water with one hand",
    why: "Water and soap rinse away dirt, sweat, and sticky feelings.",
    prop: "bath",
    choices: ["wash arms first", "wash feet first"],
    summary: "Washing helps skin feel clean, fresh, and comfortable.",
  },
  {
    id: "clothes",
    match: ["dress", "clothes", "shirt", "pants", "shoes", "socks", "coat", "vestir", "ropa", "camisa", "pantalón", "pantalon", "zapatos", "medias", "abrigo", "habiller", "vêtements", "vetements", "chemise", "pantalon", "chaussures", "chaussettes", "manteau"],
    title: "Clothes help us get ready",
    task: "get dressed",
    childGoal: "put on one piece of clothing",
    why: "Clothes keep the body covered, safe, and ready to go.",
    prop: "shoes",
    choices: ["choose the socks", "choose the shirt"],
    summary: "Getting dressed helps the body feel ready for the next place.",
  },
  {
    id: "cleanup",
    match: ["clean", "cleanup", "toy", "toys", "mess", "room", "limpiar", "recoger", "juguete", "juguetes", "desorden", "cuarto", "habitación", "habitacion", "ranger", "nettoyer", "jouet", "jouets", "désordre", "desordre", "chambre"],
    title: "Clean-up makes space to play",
    task: "clean up",
    childGoal: "put one thing in its home",
    why: "Toys are easier to find when they go back to their homes.",
    prop: "toys",
    choices: ["pick up blocks first", "pick up soft toys first"],
    summary: "Clean-up makes the room safer and makes favorite toys easier to find.",
  },
  {
    id: "leaving",
    match: ["leave", "leaving", "park", "playground", "go home", "outside", "irse", "salir", "parque", "patio", "casa", "afuera", "partir", "quitter", "parc", "rentrer", "dehors"],
    title: "Leaving can happen one step at a time",
    task: "leave this place",
    childGoal: "walk to the grown-up",
    why: "Families move to the next safe place together.",
    prop: "generic",
    choices: ["take three big steps", "hold the grown-up's hand"],
    summary: "Leaving together keeps everyone safe and helps the day keep moving.",
  },
  {
    id: "car",
    match: ["car", "seat", "seatbelt", "buckle", "carseat", "carro", "auto", "coche", "asiento", "cinturón", "cinturon", "hebilla", "voiture", "siège", "siege", "ceinture", "boucle"],
    title: "The car seat keeps bodies safe",
    task: "sit in the car seat",
    childGoal: "put your back on the seat",
    why: "Buckles help the body stay safe while the car moves.",
    prop: "car",
    choices: ["climb in by yourself", "get a gentle lift"],
    summary: "The car seat and buckle help keep the body safe on every ride.",
  },
  {
    id: "food",
    match: ["eat", "food", "dinner", "lunch", "breakfast", "snack", "vegetable", "comer", "comida", "cena", "almuerzo", "desayuno", "merienda", "verdura", "manger", "nourriture", "dîner", "diner", "déjeuner", "dejeuner", "petit-déjeuner", "collation", "légume", "legume"],
    title: "Food gives the body energy",
    task: "come to the table",
    childGoal: "sit near the food",
    why: "Food gives the body energy for running, thinking, and playing.",
    prop: "plate",
    choices: ["smell the food first", "take one tiny taste when ready"],
    summary: "Food helps the body have energy and feel steady.",
  },
];

const fallbackTopic = {
  id: "custom",
  title: "One small step helps",
  task: "try the next step",
  childGoal: "do one tiny helpful step",
  why: "Small steps help the body and the family move forward.",
  prop: "generic",
  choices: ["try by yourself", "try with grown-up help"],
  summary: "One small step can help the body feel calmer and ready.",
};

const taskDetailLibrary = {
  teeth: [
    {
      value: "front-teeth",
      label: "Brush front teeth",
      task: "brush the front teeth",
      childGoal: "touch the brush to the front teeth",
      choices: ["brush three front circles", "let the grown-up guide three circles"],
      summary: "The front teeth got a clean start.",
    },
    {
      value: "tiny-circles",
      label: "Tiny circles",
      task: "make tiny toothbrush circles",
      childGoal: "make three tiny circles with the toothbrush",
      choices: ["make three circles", "watch the grown-up make three circles"],
      summary: "Tiny circles helped the teeth get clean.",
    },
    {
      value: "rinse-after",
      label: "Brush, then rinse",
      task: "brush and rinse",
      childGoal: "brush first, then take one rinse",
      choices: ["rinse from the cup", "spit with grown-up help"],
      summary: "Brushing and rinsing helped the mouth feel fresh.",
    },
  ],
  bath: [
    {
      value: "hands-first",
      label: "Hands first",
      task: "wash hands and arms",
      childGoal: "touch water with one hand",
      choices: ["wash one hand", "let the grown-up wash one hand"],
      summary: "One hand in the water made washing easier.",
    },
    {
      value: "soap-bubbles",
      label: "Soap bubbles",
      task: "make soap bubbles",
      childGoal: "rub soap on one arm",
      choices: ["rub bubbles on the arm", "watch bubbles first"],
      summary: "Bubbles helped the body get clean.",
    },
    {
      value: "hair-later",
      label: "Body now, hair later",
      task: "wash the body first",
      childGoal: "wash the body before hair",
      choices: ["wash arms first", "wash feet first"],
      summary: "Washing the body first made the bath feel smaller.",
    },
  ],
  food: [
    {
      value: "smell-first",
      label: "Smell first",
      task: "come near the food",
      childGoal: "smell the food first",
      choices: ["smell the food", "touch the spoon"],
      summary: "Smelling first helped food feel less surprising.",
    },
    {
      value: "tiny-bite",
      label: "Tiny bite",
      task: "try one tiny bite",
      childGoal: "take one tiny bite",
      choices: ["try one tiny bite", "let the spoon touch the lips"],
      summary: "One tiny bite helped the body try.",
    },
    {
      value: "sit-table",
      label: "Sit at table",
      task: "sit near the food",
      childGoal: "sit near the plate",
      choices: ["sit with feet down", "sit beside the grown-up"],
      summary: "Sitting near the food was the first step.",
    },
  ],
  bedtime: [
    {
      value: "pajamas-first",
      label: "Pajamas first",
      task: "put pajamas on",
      childGoal: "put one pajama piece on",
      choices: ["choose pajama top", "choose pajama pants"],
      summary: "Pajamas helped the body know sleep is coming.",
    },
    {
      value: "blanket-choice",
      label: "Blanket choice",
      task: "settle into bed",
      childGoal: "choose the blanket",
      choices: ["pick the blanket", "pick the pillow side"],
      summary: "Choosing a blanket helped bedtime feel calmer.",
    },
  ],
  clothes: [
    {
      value: "socks-first",
      label: "Socks first",
      task: "put socks on",
      childGoal: "put on one sock",
      choices: ["try one sock", "let the grown-up start one sock"],
      summary: "One sock helped the body get ready.",
    },
    {
      value: "shoes-first",
      label: "Shoes first",
      task: "put shoes on",
      childGoal: "put one foot near a shoe",
      choices: ["choose the left shoe", "choose the right shoe"],
      summary: "Shoes helped the body get ready to go.",
    },
  ],
  cleanup: [
    {
      value: "one-toy",
      label: "One toy",
      task: "put away one toy",
      childGoal: "put one toy in its home",
      choices: ["pick up one block", "pick up one soft toy"],
      summary: "One toy in its home made clean-up smaller.",
    },
    {
      value: "color-sort",
      label: "Sort by color",
      task: "clean by color",
      childGoal: "find one matching color",
      choices: ["find one blue toy", "find one yellow toy"],
      summary: "Sorting by color made clean-up feel like a game.",
    },
  ],
  car: [
    {
      value: "sit-first",
      label: "Sit first",
      task: "sit in the car seat",
      childGoal: "put your back on the seat",
      choices: ["climb in", "get a gentle lift"],
      summary: "Sitting first made the buckle easier.",
    },
    {
      value: "buckle-click",
      label: "Buckle click",
      task: "buckle the car seat",
      childGoal: "hear one buckle click",
      choices: ["push the buckle", "let the grown-up click it"],
      summary: "The buckle click helped the body stay safe.",
    },
  ],
  leaving: [
    {
      value: "three-steps",
      label: "Three steps",
      task: "take three steps",
      childGoal: "take three steps to the grown-up",
      choices: ["take big steps", "hold the grown-up's hand"],
      summary: "Three steps helped leaving begin.",
    },
    {
      value: "wave-goodbye",
      label: "Wave goodbye",
      task: "say goodbye to this place",
      childGoal: "wave goodbye before leaving",
      choices: ["wave goodbye", "blow a goodbye kiss"],
      summary: "Saying goodbye helped the next step feel clear.",
    },
  ],
  custom: [
    {
      value: "tiny-step",
      label: "Tiny step",
      task: "try the next small step",
      childGoal: "do one tiny helpful step",
      choices: ["try by yourself", "try with grown-up help"],
      summary: "One small step helped the body get ready.",
    },
  ],
};

const needLibrary = {
  control: {
    line: "The child wants some control, so the video gives two safe choices.",
    parentTip: "Use choices that both complete the task.",
  },
  sensory: {
    line: "The task may feel too loud, bright, sticky, cold, or surprising.",
    parentTip: "Lower the sensory load and keep the step smaller than usual.",
  },
  transition: {
    line: "The child needs time to move from one thing to the next.",
    parentTip: "Name the change and give one small bridge step.",
  },
  fear: {
    line: "The child feels unsure, so the video keeps the grown-up close.",
    parentTip: "Show the step first and let the child watch before trying.",
  },
  tired: {
    line: "The child has low energy, so the video makes the task tiny.",
    parentTip: "Reduce the demand and help more than usual.",
  },
};

const helperLibrary = {
  choice: {
    line: "You get two choices, and both choices help finish the job.",
    cue: "Offer two acceptable choices.",
  },
  "tiny-step": {
    line: "We only do the first tiny step right now.",
    cue: "Ask only for the first small action.",
  },
  pretend: {
    line: "We can pretend this is a little cartoon mission.",
    cue: "Use light pretend play without making the task optional.",
  },
};

const sketchLibrary = {
  start: {
    "arms-crossed": "starts with arms crossed and says no",
    "backs-away": "backs away from the task",
    "covers-ears": "looks overwhelmed and needs quiet words",
  },
  step: {
    "look-touch": "looks first, then touches the tool",
    "one-count": "tries the action for one slow count",
    "parent-help": "lets the grown-up help their hand",
  },
  ending: {
    proud: "notices the brave try",
    calm: "settles and feels calmer",
    celebrate: "does a tiny celebration",
  },
};

const guidanceSources = {
  cdcParenting: {
    name: "CDC Essentials for Parenting",
    url: "https://www.cdc.gov/parenting-toddlers/about/index.html",
  },
  cdcStructure: {
    name: "CDC Structure and Rules",
    url: "https://www.cdc.gov/parenting-toddlers/structure-rules/structure.html",
  },
  aapTantrums: {
    name: "HealthyChildren / AAP Tantrums",
    url: "https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx?form=HealthyChildren",
  },
  aapOral: {
    name: "HealthyChildren / AAP Oral Health",
    url: "https://www.healthychildren.org/English/healthy-living/oral-health/Pages/Brush-Book-Bed.aspx?linkId=47795578",
  },
  aapFeeding: {
    name: "HealthyChildren / AAP Picky Eating",
    url: "https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx?form=HealthyChildren",
  },
  aapSleep: {
    name: "HealthyChildren / AAP Sleep",
    url: "https://www.healthychildren.org/English/healthy-living/sleep/Pages/healthy-sleep-habits-how-many-hours-does-your-child-need.aspx?quot=quot",
  },
  aapCar: {
    name: "HealthyChildren / AAP Car Safety",
    url: "https://healthychildren.org/English/safety-prevention/on-the-go/Pages/Travel-Safety-Tips.aspx?form=HealthyChildren",
  },
  unicefPositive: {
    name: "UNICEF Positive Parenting",
    url: "https://www.unicef.org/eap/place-for-parents/positive-parenting-tips-0-5",
  },
  childMindTantrums: {
    name: "Child Mind Institute Tantrums",
    url: "https://childmind.org/article/how-to-handle-tantrums-and-meltdowns/",
  },
};

const guidanceLibrary = {
  en: {
    baseSources: ["cdcParenting", "aapTantrums", "unicefPositive", "childMindTantrums"],
    regulation: {
      safety: "First make the space safe. Calmly stop hitting, biting, throwing, or running away.",
      fewWords: "Use few words while feelings are big: name the feeling, name the next tiny step, then pause.",
      praise: "When the body settles, praise the exact effort: looking, touching, trying, or accepting help.",
    },
    needs: {
      control: "Give control inside the boundary: the task stays, but the child can choose how to begin.",
      sensory: "Lower the sensory load: softer voice, less light/noise, warmer/cooler texture, or a smaller first touch.",
      transition: "Add a bridge: warn once, show what comes next, then start with one predictable action.",
      fear: "Keep the grown-up close, model the step first, and let watching count as progress.",
      tired: "Shrink the demand and help more. A tired child may need the adult to start the first movement.",
    },
    helpers: {
      choice: "Use two directed choices, not a yes/no question.",
      "tiny-step": "Ask for only the first visible action, then pause.",
      pretend: "Use pretend play as a bridge, while keeping the task clear and non-optional.",
    },
    topics: {
      teeth: {
        title: "Brushing teeth plan",
        sources: ["aapOral", "aapTantrums", "cdcStructure"],
        tips: [
          "Put brushing inside a predictable sequence, like brush, book, bed.",
          "The adult can guide or supervise. The child only needs the first tiny step.",
          "Offer choices that still finish brushing: pick the brush or pick who makes three circles.",
        ],
      },
      bath: {
        title: "Bath or shower plan",
        sources: ["cdcStructure", "unicefPositive", "aapTantrums"],
        tips: [
          "Reduce sensory surprise: warm water, softer light, quiet words, and one body part first.",
          "Keep the same order each time so the child can predict what comes next.",
          "Let the child choose the first wash spot or bath toy; washing still happens.",
        ],
      },
      food: {
        title: "Eating plan",
        sources: ["aapFeeding", "aapTantrums"],
        tips: [
          "Avoid food fights. The adult provides food; the child decides how much to eat.",
          "Let smelling, touching the spoon, or one tiny taste count as progress.",
          "Serve one familiar food beside the new or refused food.",
        ],
      },
      bedtime: {
        title: "Bedtime plan",
        sources: ["aapSleep", "aapOral", "cdcStructure"],
        tips: [
          "Use a consistent calm ritual: brush, book, bed.",
          "Dim the environment and avoid exciting play or screens close to bedtime.",
          "Offer a small choice, like which book or blanket, then keep the bedtime step moving.",
        ],
      },
      clothes: {
        title: "Getting dressed plan",
        sources: ["cdcStructure", "aapTantrums"],
        tips: [
          "Ask for one clothing step only: one sock, one sleeve, or one foot near the shoe.",
          "Offer two useful choices, like shirt first or socks first.",
          "Name the next event so clothes have a clear reason.",
        ],
      },
      cleanup: {
        title: "Clean-up plan",
        sources: ["cdcStructure", "cdcParenting"],
        tips: [
          "Start with one item and one home: one block in the bin.",
          "Make the first step easy enough to succeed before asking for more.",
          "Give specific praise for the action, not a general label.",
        ],
      },
      leaving: {
        title: "Leaving plan",
        sources: ["cdcStructure", "aapTantrums"],
        tips: [
          "Use a transition bridge: one warning, one goodbye, one step toward the grown-up.",
          "Offer directed choices, like three big steps or holding a hand.",
          "Do not keep renegotiating once the leaving step starts.",
        ],
      },
      car: {
        title: "Car seat plan",
        sources: ["aapCar", "aapTantrums"],
        tips: [
          "Keep the safety boundary clear: the car seat is not optional.",
          "Offer how to start: climb in or receive a gentle lift.",
          "Praise the exact safe action, like back on the seat or buckle click.",
        ],
      },
      custom: {
        title: "Small-step plan",
        sources: ["cdcParenting", "aapTantrums", "unicefPositive"],
        tips: [
          "Connect first, then give one clear direction.",
          "Make the first request smaller than usual.",
          "Offer two acceptable choices and praise the first try.",
        ],
      },
    },
  },
  es: {
    baseSources: ["cdcParenting", "aapTantrums", "unicefPositive", "childMindTantrums"],
    regulation: {
      safety: "Primero haz seguro el espacio. Detén con calma golpes, mordidas, lanzamientos o carreras.",
      fewWords: "Usa pocas palabras mientras la emoción está grande: nombra la emoción, nombra el pasito y pausa.",
      praise: "Cuando el cuerpo se calme, elogia el esfuerzo exacto: mirar, tocar, intentar o aceptar ayuda.",
    },
    needs: {
      control: "Da control dentro del límite: la tarea sigue, pero el niño puede escoger cómo empezar.",
      sensory: "Baja la carga sensorial: voz más suave, menos luz/ruido, textura más cómoda o un primer toque pequeño.",
      transition: "Agrega un puente: avisa una vez, muestra qué sigue y empieza con una acción predecible.",
      fear: "Mantén al adulto cerca, modela el paso primero y deja que mirar cuente como progreso.",
      tired: "Reduce la exigencia y ayuda más. Un niño cansado puede necesitar que el adulto inicie el movimiento.",
    },
    helpers: {
      choice: "Usa dos opciones dirigidas, no una pregunta de sí/no.",
      "tiny-step": "Pide solo la primera acción visible y luego pausa.",
      pretend: "Usa el juego imaginario como puente, manteniendo la tarea clara y no opcional.",
    },
    topics: {
      teeth: {
        title: "Plan para cepillarse",
        sources: ["aapOral", "aapTantrums", "cdcStructure"],
        tips: [
          "Pon el cepillado dentro de una secuencia predecible, como cepillo, cuento, cama.",
          "El adulto puede guiar o supervisar. El niño solo necesita el primer pasito.",
          "Ofrece opciones que sí terminan el cepillado: escoger el cepillo o quién hace tres círculos.",
        ],
      },
      bath: {
        title: "Plan para baño o ducha",
        sources: ["cdcStructure", "unicefPositive", "aapTantrums"],
        tips: [
          "Reduce la sorpresa sensorial: agua tibia, luz suave, palabras tranquilas y una parte del cuerpo primero.",
          "Mantén el mismo orden cada vez para que el niño pueda anticipar lo que sigue.",
          "Deja escoger la primera parte a lavar o el juguete del baño; lavarse sigue siendo la tarea.",
        ],
      },
      food: {
        title: "Plan para comer",
        sources: ["aapFeeding", "aapTantrums"],
        tips: [
          "Evita pelear por la comida. El adulto ofrece; el niño decide cuánto come.",
          "Deja que oler, tocar la cuchara o probar un bocadito cuente como progreso.",
          "Sirve algo familiar junto a la comida nueva o rechazada.",
        ],
      },
      bedtime: {
        title: "Plan para dormir",
        sources: ["aapSleep", "aapOral", "cdcStructure"],
        tips: [
          "Usa un ritual calmado y consistente: cepillo, cuento, cama.",
          "Baja la luz y evita juego intenso o pantallas cerca de dormir.",
          "Ofrece una elección pequeña, como cuento o cobija, y mantén el paso de dormir.",
        ],
      },
      clothes: {
        title: "Plan para vestirse",
        sources: ["cdcStructure", "aapTantrums"],
        tips: [
          "Pide solo un paso de ropa: una media, una manga o un pie cerca del zapato.",
          "Ofrece dos opciones útiles, como camisa primero o medias primero.",
          "Nombra el siguiente evento para que la ropa tenga una razón clara.",
        ],
      },
      cleanup: {
        title: "Plan para recoger",
        sources: ["cdcStructure", "cdcParenting"],
        tips: [
          "Empieza con un objeto y un lugar: un bloque en la caja.",
          "Haz el primer paso lo bastante fácil para lograrlo antes de pedir más.",
          "Elogia la acción específica, no solo el resultado general.",
        ],
      },
      leaving: {
        title: "Plan para irse",
        sources: ["cdcStructure", "aapTantrums"],
        tips: [
          "Usa un puente de transición: un aviso, una despedida y un paso hacia el adulto.",
          "Ofrece opciones dirigidas, como tres pasos grandes o tomar la mano.",
          "No sigas renegociando cuando ya empezó el paso de irse.",
        ],
      },
      car: {
        title: "Plan para el asiento del carro",
        sources: ["aapCar", "aapTantrums"],
        tips: [
          "Mantén claro el límite de seguridad: el asiento del carro no es opcional.",
          "Ofrece cómo empezar: subirse solo o recibir una ayuda suave.",
          "Elogia la acción segura exacta, como espalda en el asiento o clic de hebilla.",
        ],
      },
      custom: {
        title: "Plan de pasito pequeño",
        sources: ["cdcParenting", "aapTantrums", "unicefPositive"],
        tips: [
          "Conecta primero y luego da una instrucción clara.",
          "Haz la primera petición más pequeña de lo normal.",
          "Ofrece dos opciones aceptables y elogia el primer intento.",
        ],
      },
    },
  },
  fr: {
    baseSources: ["cdcParenting", "aapTantrums", "unicefPositive", "childMindTantrums"],
    regulation: {
      safety: "Rends d'abord l'espace sûr. Arrête calmement les coups, morsures, lancers ou fuites.",
      fewWords: "Utilise peu de mots quand l'émotion est forte : nomme l'émotion, le petit pas, puis fais une pause.",
      praise: "Quand le corps se calme, félicite l'effort précis : regarder, toucher, essayer ou accepter l'aide.",
    },
    needs: {
      control: "Donne du contrôle à l'intérieur de la limite : la tâche reste, mais l'enfant choisit comment commencer.",
      sensory: "Réduis la charge sensorielle : voix douce, moins de lumière/bruit, texture plus confortable ou premier toucher minuscule.",
      transition: "Ajoute un pont : préviens une fois, montre la suite, puis commence par une action prévisible.",
      fear: "Garde l'adulte près, montre le geste d'abord, et laisse l'observation compter comme un progrès.",
      tired: "Réduis la demande et aide davantage. Un enfant fatigué peut avoir besoin que l'adulte commence le mouvement.",
    },
    helpers: {
      choice: "Utilise deux choix dirigés, pas une question oui/non.",
      "tiny-step": "Demande seulement la première action visible, puis fais une pause.",
      pretend: "Utilise le jeu imaginaire comme pont, tout en gardant la tâche claire et non optionnelle.",
    },
    topics: {
      teeth: {
        title: "Plan pour se brosser les dents",
        sources: ["aapOral", "aapTantrums", "cdcStructure"],
        tips: [
          "Mets le brossage dans une séquence prévisible, comme brosse, livre, lit.",
          "L'adulte peut guider ou superviser. L'enfant n'a besoin que du premier petit pas.",
          "Offre des choix qui finissent le brossage : choisir la brosse ou qui fait trois cercles.",
        ],
      },
      bath: {
        title: "Plan pour le bain ou la douche",
        sources: ["cdcStructure", "unicefPositive", "aapTantrums"],
        tips: [
          "Réduis la surprise sensorielle : eau tiède, lumière douce, mots calmes et une partie du corps d'abord.",
          "Garde le même ordre pour aider l'enfant à prévoir la suite.",
          "Laisse choisir la première partie à laver ou le jouet; se laver reste la tâche.",
        ],
      },
      food: {
        title: "Plan pour manger",
        sources: ["aapFeeding", "aapTantrums"],
        tips: [
          "Évite les batailles autour de la nourriture. L'adulte propose; l'enfant décide combien manger.",
          "Sentir, toucher la cuillère ou goûter un tout petit morceau compte comme un progrès.",
          "Sers un aliment familier avec l'aliment nouveau ou refusé.",
        ],
      },
      bedtime: {
        title: "Plan pour dormir",
        sources: ["aapSleep", "aapOral", "cdcStructure"],
        tips: [
          "Utilise un rituel calme et constant : brosse, livre, lit.",
          "Baisse la lumière et évite les écrans ou jeux excitants avant le coucher.",
          "Offre un petit choix, comme le livre ou la couverture, puis garde l'étape du coucher.",
        ],
      },
      clothes: {
        title: "Plan pour s'habiller",
        sources: ["cdcStructure", "aapTantrums"],
        tips: [
          "Demande une seule étape : une chaussette, une manche ou un pied près de la chaussure.",
          "Offre deux choix utiles, comme haut d'abord ou chaussettes d'abord.",
          "Nomme l'événement suivant pour donner un sens aux vêtements.",
        ],
      },
      cleanup: {
        title: "Plan pour ranger",
        sources: ["cdcStructure", "cdcParenting"],
        tips: [
          "Commence par un objet et un endroit : un bloc dans la boîte.",
          "Rends le premier pas assez facile pour réussir avant d'en demander plus.",
          "Félicite l'action précise, pas seulement le résultat.",
        ],
      },
      leaving: {
        title: "Plan pour partir",
        sources: ["cdcStructure", "aapTantrums"],
        tips: [
          "Utilise un pont de transition : un avertissement, un au revoir et un pas vers l'adulte.",
          "Offre des choix dirigés, comme trois grands pas ou tenir la main.",
          "Ne renégocie pas une fois que le départ commence.",
        ],
      },
      car: {
        title: "Plan pour le siège auto",
        sources: ["aapCar", "aapTantrums"],
        tips: [
          "Garde la limite de sécurité claire : le siège auto n'est pas optionnel.",
          "Offre comment commencer : monter seul ou recevoir une aide douce.",
          "Félicite l'action sûre précise, comme le dos contre le siège ou le clic de boucle.",
        ],
      },
      custom: {
        title: "Plan du petit pas",
        sources: ["cdcParenting", "aapTantrums", "unicefPositive"],
        tips: [
          "Connecte d'abord, puis donne une consigne claire.",
          "Rends la première demande plus petite que d'habitude.",
          "Offre deux choix acceptables et félicite le premier essai.",
        ],
      },
    },
  },
};

const localeCopy = {
  en: {
    ui: {
      issue: "What is the child resisting?",
      age: "Child age",
      pace: "Video pace",
      length: "Length",
      language: "Language",
      tabProblem: "Problem",
      tabCharacter: "Character",
      tabVideo: "Video",
      tabTips: "Parent tips",
      aiComposer: "AI video composer",
      taskFocus: "Task focus",
      whyHard: "Why it feels hard",
      helperStyle: "Helper style",
      childCharacter: "Child character",
      childName: "Child name",
      childNamePlaceholder: "Example: Mia",
      character: "Character",
      skinTone: "Skin tone",
      bodyShape: "Body shape",
      glasses: "Glasses",
      backgroundPhoto: "Favorite background photo",
      backgroundEmpty: "No background selected",
      backgroundLoaded: "Favorite background ready",
      removeBackground: "Remove photo",
      backgroundPrivacy: "The photo stays on this device and is only used as a local background.",
      miniSketch: "Mini sketch",
      opening: "Opening",
      middle: "Middle",
      ending: "Ending",
      tone: "Tone",
      create: "Create calm video",
      parentGuide: "Parent guide",
      coreTipsLabel: "Calm first steps",
      specificTipsLabel: "For this situation",
      tantrumTipsLabel: "During the tantrum",
      sourcesLabel: "Sources used",
      parentTipSoftVoice: "Use a soft voice and stay near the child.",
      parentTipChoices: "Offer two simple choices when the child is ready.",
      parentTipTinyStep: "Praise the first tiny step toward the task.",
      privacyNote: "The child name can be a nickname. This prototype does not store it.",
    },
    actorFallback: "The character",
    sceneWord: "Scene",
    scriptLabels: {
      narration: "Narration",
      childQuestion: "Child question",
      parentLine: "Parent line",
      coachingNote: "Coaching note",
    },
    pace: {
      "very-slow": { label: "Very slow words", breaths: "We can go very slowly." },
      slow: { label: "Slow words", breaths: "We can go slowly." },
      steady: { label: "Steady words", breaths: "We can go one step at a time." },
    },
    tone: {
      gentle: "The grown-up is close. The voice is soft.",
      playful: "The helper makes it small, light, and a little silly.",
      sensory: "If it feels too loud, too bright, or too much, we make the step smaller.",
    },
    optionLabels: {
      childNeed: {
        control: "Needs control",
        sensory: "Feels sensory",
        transition: "Needs more time",
        fear: "Feels unsure",
        tired: "Low energy",
      },
      helperStyle: {
        choice: "Two choices",
        "tiny-step": "First tiny step",
        pretend: "Pretend play",
      },
      characterStyle: {
        neutral: "Neutral child",
        girl: "Girl",
        boy: "Boy",
        superhero: "Superhero",
      },
      skinTone: {
        light: "Light",
        tan: "Warm tan",
        brown: "Brown",
        dark: "Dark brown",
      },
      bodyShape: {
        small: "Small",
        average: "Average",
        round: "Round",
      },
      sketchStart: {
        "arms-crossed": "Refuses first",
        "backs-away": "Backs away",
        "covers-ears": "Overwhelmed",
      },
      sketchStep: {
        "look-touch": "Look, then touch",
        "one-count": "Try one count",
        "parent-help": "Parent helps hand",
      },
      sketchEnding: {
        proud: "Feels proud",
        calm: "Feels calm",
        celebrate: "Tiny celebration",
      },
    },
    topics: {},
    details: {},
    need: needLibrary,
    helper: helperLibrary,
    sketch: sketchLibrary,
    propNames: {
      teeth: "toothbrush",
      bed: "bed",
      bath: "bath",
      shoes: "clothes",
      toys: "toys",
      car: "car seat",
      plate: "plate",
      generic: "next step",
    },
    templates: {
      feelings: "Big feelings are here. {actor} {sketchStart}. You are safe. {breaths}",
      why: "Today the job is to {task}. {why} {needLine}",
      tinyStep: "We do not have to do the whole thing at once. First, we {childGoal}. {actor} {sketchStep}.",
      choice: "{toneLine} {helperLine} You can {choiceA}, or you can {choiceB}.",
      summary: "{summary} {actor} {sketchEnding}. We did one small step. Now the next step can be easier.",
      lookQuestion: "Can you look at the {propName}?",
      tryQuestion: "Can we try {childGoal}?",
      choiceQuestion: "Which choice feels easier: {choiceA}, or {choiceB}?",
      breathQuestion: "Can your body take one slow breath?",
      summaryQuestion: "What small step did your body try?",
      safeCue: "I am here. Your body is safe. We can breathe first.",
      jobCue: "The job is {task}. I will help you do {tinyStep}.",
      firstCue: "First {childGoal}. Then we pause and notice your brave body.",
      choiceCue: "You can {choiceA}, or {choiceB}. Both choices finish the job.",
      praiseCue: "You tried a hard thing. I saw your effort.",
      startTip: "Start with connection. {needTip}",
      directionTip: "Give one clear direction. Young children do better with concrete words.",
      successTip: "Make the first step easy enough to succeed. Praise effort immediately.",
      choiceTip: "{helperCue} Avoid choices that make the task optional.",
      endTip: "End with specific praise. Name the action the child did, not only the result.",
      sketchResist: "Resist: {actor} {sketchStart}.",
      sketchNotice: "Notice: show why {task} matters.",
      sketchTry: "Try: {childGoal}.",
      sketchChoice: "Choice: {choiceA} / {choiceB}.",
      sketchEnd: "End: {actor} {sketchEnding}.",
    },
    sceneLabels: {
      feelings: "Feelings",
      why: "Why it matters",
      try: "Tiny step",
      choice: "Choice",
      summary: "Summary",
    },
    answerResponses: {
      yes: "Great. Name the exact step and move gently into it now.",
      "not-yet": "Pause. Lower the demand for a moment, then repeat the same small choice.",
      help: "Help the child's hand or body as little as needed, then praise the effort.",
    },
  },
  es: {
    ui: {
      issue: "¿Qué está resistiendo el niño?",
      age: "Edad",
      pace: "Ritmo del video",
      length: "Duración",
      language: "Idioma",
      tabProblem: "Problema",
      tabCharacter: "Personaje",
      tabVideo: "Video",
      tabTips: "Consejos",
      aiComposer: "Compositor de video",
      taskFocus: "Enfoque de la tarea",
      whyHard: "Por qué se siente difícil",
      helperStyle: "Estilo de ayuda",
      childCharacter: "Personaje infantil",
      childName: "Nombre del niño",
      childNamePlaceholder: "Ejemplo: Mía",
      character: "Personaje",
      skinTone: "Tono de piel",
      bodyShape: "Forma del cuerpo",
      glasses: "Lentes",
      backgroundPhoto: "Foto favorita de fondo",
      backgroundEmpty: "No hay fondo seleccionado",
      backgroundLoaded: "Fondo favorito listo",
      removeBackground: "Quitar foto",
      backgroundPrivacy: "La foto se queda en este dispositivo y solo se usa como fondo local.",
      miniSketch: "Mini boceto",
      opening: "Inicio",
      middle: "Medio",
      ending: "Final",
      tone: "Tono",
      create: "Crear video calmado",
      parentGuide: "Guía para padres",
      coreTipsLabel: "Primeros pasos de calma",
      specificTipsLabel: "Para esta situación",
      tantrumTipsLabel: "Durante la rabieta",
      sourcesLabel: "Fuentes usadas",
      parentTipSoftVoice: "Usa una voz suave y quédate cerca del niño.",
      parentTipChoices: "Ofrece dos opciones simples cuando el niño esté listo.",
      parentTipTinyStep: "Elogia el primer pasito hacia la tarea.",
      privacyNote: "El nombre puede ser un apodo. Este prototipo no lo guarda.",
    },
    actorFallback: "El personaje",
    sceneWord: "Escena",
    scriptLabels: {
      narration: "Narración",
      childQuestion: "Pregunta para el niño",
      parentLine: "Frase para el adulto",
      coachingNote: "Nota de apoyo",
    },
    pace: {
      "very-slow": { label: "Palabras muy lentas", breaths: "Podemos ir muy despacio." },
      slow: { label: "Palabras lentas", breaths: "Podemos ir despacio." },
      steady: { label: "Ritmo tranquilo", breaths: "Podemos ir paso a paso." },
    },
    tone: {
      gentle: "El adulto está cerca. La voz es suave.",
      playful: "El ayudante lo hace pequeño, ligero y un poco divertido.",
      sensory: "Si se siente muy fuerte, brillante o incómodo, hacemos el paso más pequeño.",
    },
    optionLabels: {
      childNeed: {
        control: "Necesita control",
        sensory: "Se siente sensorial",
        transition: "Necesita más tiempo",
        fear: "Se siente inseguro",
        tired: "Poca energía",
      },
      helperStyle: {
        choice: "Dos opciones",
        "tiny-step": "Primer pasito",
        pretend: "Juego imaginario",
      },
      characterStyle: {
        neutral: "Niño neutral",
        girl: "Niña",
        boy: "Niño",
        superhero: "Superhéroe",
      },
      skinTone: {
        light: "Claro",
        tan: "Moreno claro",
        brown: "Moreno",
        dark: "Moreno oscuro",
      },
      bodyShape: {
        small: "Pequeño",
        average: "Promedio",
        round: "Redondo",
      },
      sketchStart: {
        "arms-crossed": "Primero se niega",
        "backs-away": "Se aleja",
        "covers-ears": "Abrumado",
      },
      sketchStep: {
        "look-touch": "Mira y toca",
        "one-count": "Prueba una cuenta",
        "parent-help": "El adulto ayuda la mano",
      },
      sketchEnding: {
        proud: "Se siente orgulloso",
        calm: "Se siente calmado",
        celebrate: "Pequeña celebración",
      },
    },
    topics: {
      teeth: { title: "Cepillarse mantiene los dientes fuertes", task: "cepillarse los dientes", why: "Cepillarse limpia los bichitos del azúcar para que los dientes estén fuertes y cómodos." },
      bedtime: { title: "Descansar ayuda al cuerpo a crecer", task: "prepararse para dormir", why: "Descansar le da energía al cuerpo para jugar y aprender mañana." },
      bath: { title: "Lavarse ayuda al cuerpo a sentirse fresco", task: "bañarse", why: "El agua y el jabón quitan la suciedad, el sudor y lo pegajoso." },
      clothes: { title: "La ropa nos ayuda a prepararnos", task: "vestirse", why: "La ropa mantiene el cuerpo cubierto, seguro y listo para salir." },
      cleanup: { title: "Recoger deja espacio para jugar", task: "recoger", why: "Los juguetes son más fáciles de encontrar cuando vuelven a su lugar." },
      leaving: { title: "Irse puede pasar paso a paso", task: "irse de este lugar", why: "Las familias se mueven juntas al siguiente lugar seguro." },
      car: { title: "El asiento del carro cuida el cuerpo", task: "sentarse en el asiento del carro", why: "Las hebillas ayudan a que el cuerpo esté seguro cuando el carro se mueve." },
      food: { title: "La comida le da energía al cuerpo", task: "acercarse a la mesa", why: "La comida le da energía al cuerpo para correr, pensar y jugar." },
      custom: { title: "Un pasito ayuda", task: "probar el siguiente paso", why: "Los pasos pequeños ayudan al cuerpo y a la familia a avanzar." },
    },
    details: {
      "front-teeth": { label: "Cepillar dientes de enfrente", task: "cepillar los dientes de enfrente", childGoal: "tocar los dientes de enfrente con el cepillo", choices: ["hacer tres círculos enfrente", "dejar que el adulto guíe tres círculos"], summary: "Los dientes de enfrente tuvieron un comienzo limpio." },
      "tiny-circles": { label: "Círculos pequeños", task: "hacer círculos pequeños con el cepillo", childGoal: "hacer tres círculos pequeños con el cepillo", choices: ["hacer tres círculos", "mirar al adulto hacer tres círculos"], summary: "Los círculos pequeños ayudaron a limpiar los dientes." },
      "rinse-after": { label: "Cepillar y enjuagar", task: "cepillar y enjuagar", childGoal: "cepillar primero y luego enjuagar una vez", choices: ["enjuagar con el vaso", "escupir con ayuda"], summary: "Cepillar y enjuagar ayudó a que la boca se sintiera fresca." },
      "hands-first": { label: "Manos primero", task: "lavar manos y brazos", childGoal: "tocar el agua con una mano", choices: ["lavar una mano", "dejar que el adulto lave una mano"], summary: "Una mano en el agua hizo que lavarse fuera más fácil." },
      "soap-bubbles": { label: "Burbujas de jabón", task: "hacer burbujas de jabón", childGoal: "frotar jabón en un brazo", choices: ["frotar burbujas en el brazo", "mirar las burbujas primero"], summary: "Las burbujas ayudaron a limpiar el cuerpo." },
      "hair-later": { label: "Cuerpo ahora, pelo después", task: "lavar el cuerpo primero", childGoal: "lavar el cuerpo antes del pelo", choices: ["lavar los brazos primero", "lavar los pies primero"], summary: "Lavar el cuerpo primero hizo que el baño se sintiera más pequeño." },
      "smell-first": { label: "Oler primero", task: "acercarse a la comida", childGoal: "oler la comida primero", choices: ["oler la comida", "tocar la cuchara"], summary: "Oler primero ayudó a que la comida sorprendiera menos." },
      "tiny-bite": { label: "Bocado pequeño", task: "probar un bocado pequeño", childGoal: "dar un bocado pequeño", choices: ["probar un bocado pequeño", "dejar que la cuchara toque los labios"], summary: "Un bocado pequeño ayudó al cuerpo a probar." },
      "sit-table": { label: "Sentarse en la mesa", task: "sentarse cerca de la comida", childGoal: "sentarse cerca del plato", choices: ["sentarse con los pies abajo", "sentarse junto al adulto"], summary: "Sentarse cerca de la comida fue el primer paso." },
      "pajamas-first": { label: "Pijama primero", task: "ponerse la pijama", childGoal: "ponerse una pieza de pijama", choices: ["escoger la blusa de pijama", "escoger el pantalón de pijama"], summary: "La pijama ayudó al cuerpo a saber que viene dormir." },
      "blanket-choice": { label: "Escoger cobija", task: "acomodarse en la cama", childGoal: "escoger la cobija", choices: ["escoger la cobija", "escoger el lado de la almohada"], summary: "Escoger una cobija ayudó a que la hora de dormir se sintiera tranquila." },
      "socks-first": { label: "Medias primero", task: "ponerse medias", childGoal: "ponerse una media", choices: ["probar una media", "dejar que el adulto empiece una media"], summary: "Una media ayudó al cuerpo a prepararse." },
      "shoes-first": { label: "Zapatos primero", task: "ponerse zapatos", childGoal: "poner un pie cerca de un zapato", choices: ["escoger el zapato izquierdo", "escoger el zapato derecho"], summary: "Los zapatos ayudaron al cuerpo a estar listo para salir." },
      "one-toy": { label: "Un juguete", task: "guardar un juguete", childGoal: "poner un juguete en su lugar", choices: ["recoger un bloque", "recoger un juguete suave"], summary: "Un juguete en su lugar hizo que recoger fuera más pequeño." },
      "color-sort": { label: "Ordenar por color", task: "recoger por color", childGoal: "encontrar un color igual", choices: ["encontrar un juguete azul", "encontrar un juguete amarillo"], summary: "Ordenar por color hizo que recoger pareciera un juego." },
      "sit-first": { label: "Sentarse primero", task: "sentarse en el asiento del carro", childGoal: "poner la espalda en el asiento", choices: ["subirse solo", "recibir una ayuda suave"], summary: "Sentarse primero hizo más fácil la hebilla." },
      "buckle-click": { label: "Clic de hebilla", task: "abrochar el asiento del carro", childGoal: "escuchar un clic de la hebilla", choices: ["empujar la hebilla", "dejar que el adulto haga clic"], summary: "El clic de la hebilla ayudó al cuerpo a estar seguro." },
      "three-steps": { label: "Tres pasos", task: "dar tres pasos", childGoal: "dar tres pasos hacia el adulto", choices: ["dar pasos grandes", "tomar la mano del adulto"], summary: "Tres pasos ayudaron a empezar a irse." },
      "wave-goodbye": { label: "Decir adiós", task: "decir adiós a este lugar", childGoal: "decir adiós antes de irse", choices: ["decir adiós con la mano", "mandar un beso de despedida"], summary: "Decir adiós ayudó a que el siguiente paso fuera claro." },
      "tiny-step": { label: "Pasito pequeño", task: "probar el siguiente pasito", childGoal: "hacer un pasito útil", choices: ["probar solo", "probar con ayuda del adulto"], summary: "Un pasito ayudó al cuerpo a prepararse." },
    },
    need: {
      control: { line: "El niño quiere algo de control, así que el video da dos opciones seguras.", parentTip: "Usa opciones que ambas completen la tarea." },
      sensory: { line: "La tarea puede sentirse muy fuerte, brillante, pegajosa, fría o sorpresiva.", parentTip: "Baja la carga sensorial y haz el paso más pequeño." },
      transition: { line: "El niño necesita tiempo para pasar de una cosa a otra.", parentTip: "Nombra el cambio y da un paso puente." },
      fear: { line: "El niño se siente inseguro, así que el video mantiene al adulto cerca.", parentTip: "Muestra el paso primero y deja que mire antes de probar." },
      tired: { line: "El niño tiene poca energía, así que el video hace la tarea pequeña.", parentTip: "Reduce la exigencia y ayuda más de lo usual." },
    },
    helper: {
      choice: { line: "Tienes dos opciones, y las dos ayudan a terminar la tarea.", cue: "Ofrece dos opciones aceptables." },
      "tiny-step": { line: "Ahora solo hacemos el primer pasito.", cue: "Pide solo la primera acción pequeña." },
      pretend: { line: "Podemos fingir que esto es una pequeña misión de caricatura.", cue: "Usa juego imaginario sin volver opcional la tarea." },
    },
    sketch: {
      start: { "arms-crossed": "empieza con los brazos cruzados y dice no", "backs-away": "se aleja de la tarea", "covers-ears": "se ve abrumado y necesita palabras suaves" },
      step: { "look-touch": "mira primero y luego toca la herramienta", "one-count": "prueba la acción por una cuenta lenta", "parent-help": "deja que el adulto ayude su mano" },
      ending: { proud: "nota su intento valiente", calm: "se calma un poco", celebrate: "hace una pequeña celebración" },
    },
    propNames: { teeth: "cepillo", bed: "cama", bath: "baño", shoes: "ropa", toys: "juguetes", car: "asiento del carro", plate: "plato", generic: "siguiente paso" },
    templates: {
      feelings: "Hay sentimientos grandes. {actor} {sketchStart}. Estás seguro. {breaths}",
      why: "Hoy la tarea es {task}. {why} {needLine}",
      tinyStep: "No tenemos que hacerlo todo de una vez. Primero, vamos a {childGoal}. {actor} {sketchStep}.",
      choice: "{toneLine} {helperLine} Puedes {choiceA}, o puedes {choiceB}.",
      summary: "{summary} {actor} {sketchEnding}. Hicimos un pasito. Ahora el siguiente paso puede ser más fácil.",
      lookQuestion: "¿Puedes mirar el {propName}?",
      tryQuestion: "¿Podemos probar: {childGoal}?",
      choiceQuestion: "¿Cuál opción se siente más fácil: {choiceA}, o {choiceB}?",
      breathQuestion: "¿Tu cuerpo puede respirar lento una vez?",
      summaryQuestion: "¿Qué pasito intentó tu cuerpo?",
      safeCue: "Estoy aquí. Tu cuerpo está seguro. Primero respiramos.",
      jobCue: "La tarea es {task}. Te voy a ayudar a hacer {tinyStep}.",
      firstCue: "Primero {childGoal}. Luego hacemos una pausa y notamos tu cuerpo valiente.",
      choiceCue: "Puedes {choiceA}, o {choiceB}. Las dos opciones terminan la tarea.",
      praiseCue: "Intentaste algo difícil. Vi tu esfuerzo.",
      startTip: "Empieza con conexión. {needTip}",
      directionTip: "Da una instrucción clara. A los niños pequeños les ayudan las palabras concretas.",
      successTip: "Haz que el primer paso sea lo bastante fácil para lograrlo. Felicita el esfuerzo de inmediato.",
      choiceTip: "{helperCue} Evita opciones que vuelvan opcional la tarea.",
      endTip: "Termina con elogio específico. Nombra la acción que hizo el niño.",
      sketchResist: "Resiste: {actor} {sketchStart}.",
      sketchNotice: "Nota: muestra por qué importa {task}.",
      sketchTry: "Prueba: {childGoal}.",
      sketchChoice: "Opción: {choiceA} / {choiceB}.",
      sketchEnd: "Final: {actor} {sketchEnding}.",
    },
    sceneLabels: { feelings: "Sentimientos", why: "Por qué importa", try: "Pasito", choice: "Opción", summary: "Resumen" },
    answerResponses: { yes: "Bien. Nombra el paso exacto y avanza con suavidad.", "not-yet": "Pausa. Baja la exigencia por un momento y repite la misma opción pequeña.", help: "Ayuda la mano o el cuerpo del niño solo lo necesario, y luego felicita el esfuerzo." },
  },
  fr: {
    ui: {
      issue: "Que refuse l'enfant ?",
      age: "Âge",
      pace: "Rythme vidéo",
      length: "Durée",
      language: "Langue",
      tabProblem: "Problème",
      tabCharacter: "Personnage",
      tabVideo: "Vidéo",
      tabTips: "Conseils",
      aiComposer: "Compositeur vidéo",
      taskFocus: "Objectif de la tâche",
      whyHard: "Pourquoi c'est difficile",
      helperStyle: "Style d'aide",
      childCharacter: "Personnage enfant",
      childName: "Nom de l'enfant",
      childNamePlaceholder: "Exemple : Mia",
      character: "Personnage",
      skinTone: "Teint",
      bodyShape: "Corpulence",
      glasses: "Lunettes",
      backgroundPhoto: "Photo favorite en fond",
      backgroundEmpty: "Aucun fond sélectionné",
      backgroundLoaded: "Fond favori prêt",
      removeBackground: "Retirer la photo",
      backgroundPrivacy: "La photo reste sur cet appareil et sert seulement de fond local.",
      miniSketch: "Mini croquis",
      opening: "Début",
      middle: "Milieu",
      ending: "Fin",
      tone: "Ton",
      create: "Créer la vidéo calme",
      parentGuide: "Guide parent",
      coreTipsLabel: "Premiers pas calmes",
      specificTipsLabel: "Pour cette situation",
      tantrumTipsLabel: "Pendant la crise",
      sourcesLabel: "Sources utilisées",
      parentTipSoftVoice: "Utilise une voix douce et reste près de l'enfant.",
      parentTipChoices: "Propose deux choix simples quand l'enfant est prêt.",
      parentTipTinyStep: "Encourage le premier petit pas vers la tâche.",
      privacyNote: "Le nom peut être un surnom. Ce prototype ne l'enregistre pas.",
    },
    actorFallback: "Le personnage",
    sceneWord: "Scène",
    scriptLabels: { narration: "Narration", childQuestion: "Question pour l'enfant", parentLine: "Phrase parent", coachingNote: "Note d'accompagnement" },
    pace: {
      "very-slow": { label: "Mots très lents", breaths: "Nous pouvons aller très lentement." },
      slow: { label: "Mots lents", breaths: "Nous pouvons aller lentement." },
      steady: { label: "Rythme calme", breaths: "Nous pouvons avancer pas à pas." },
    },
    tone: {
      gentle: "L'adulte est tout près. La voix est douce.",
      playful: "Le petit aidant rend l'étape légère, petite et un peu amusante.",
      sensory: "Si c'est trop fort, trop lumineux ou trop difficile, on rend l'étape plus petite.",
    },
    optionLabels: {
      childNeed: { control: "Besoin de contrôle", sensory: "Sensation difficile", transition: "Besoin de temps", fear: "Se sent incertain", tired: "Peu d'énergie" },
      helperStyle: { choice: "Deux choix", "tiny-step": "Premier petit pas", pretend: "Jeu imaginaire" },
      characterStyle: { neutral: "Enfant neutre", girl: "Fille", boy: "Garçon", superhero: "Super-héros" },
      skinTone: { light: "Clair", tan: "Hâlé", brown: "Brun", dark: "Brun foncé" },
      bodyShape: { small: "Petit", average: "Moyen", round: "Rond" },
      sketchStart: { "arms-crossed": "Refuse d'abord", "backs-away": "Recule", "covers-ears": "Submergé" },
      sketchStep: { "look-touch": "Regarde puis touche", "one-count": "Essaie un compte", "parent-help": "Le parent aide la main" },
      sketchEnding: { proud: "Se sent fier", calm: "Se sent calme", celebrate: "Petite célébration" },
    },
    topics: {
      teeth: { title: "Le brossage garde les dents fortes", task: "se brosser les dents", why: "Le brossage enlève les petits microbes du sucre pour garder les dents fortes et confortables." },
      bedtime: { title: "Le repos aide le corps à grandir", task: "se préparer à dormir", why: "Le repos donne de l'énergie au corps pour jouer et apprendre demain." },
      bath: { title: "Se laver aide le corps à se sentir frais", task: "prendre un bain", why: "L'eau et le savon enlèvent la saleté, la sueur et les sensations collantes." },
      clothes: { title: "Les vêtements nous aident à nous préparer", task: "s'habiller", why: "Les vêtements gardent le corps couvert, en sécurité et prêt à partir." },
      cleanup: { title: "Ranger crée de la place pour jouer", task: "ranger", why: "Les jouets sont plus faciles à trouver quand ils retournent à leur place." },
      leaving: { title: "Partir peut se faire pas à pas", task: "quitter cet endroit", why: "Les familles vont ensemble vers le prochain endroit sûr." },
      car: { title: "Le siège auto protège le corps", task: "s'asseoir dans le siège auto", why: "Les boucles aident le corps à rester en sécurité quand la voiture bouge." },
      food: { title: "La nourriture donne de l'énergie au corps", task: "venir à table", why: "La nourriture donne de l'énergie au corps pour courir, penser et jouer." },
      custom: { title: "Un petit pas aide", task: "essayer la prochaine étape", why: "Les petits pas aident le corps et la famille à avancer." },
    },
    details: {
      "front-teeth": { label: "Brosser les dents de devant", task: "brosser les dents de devant", childGoal: "toucher les dents de devant avec la brosse", choices: ["faire trois cercles devant", "laisser l'adulte guider trois cercles"], summary: "Les dents de devant ont eu un début propre." },
      "tiny-circles": { label: "Petits cercles", task: "faire de petits cercles avec la brosse", childGoal: "faire trois petits cercles avec la brosse", choices: ["faire trois cercles", "regarder l'adulte faire trois cercles"], summary: "Les petits cercles ont aidé à nettoyer les dents." },
      "rinse-after": { label: "Brosser puis rincer", task: "brosser et rincer", childGoal: "brosser d'abord puis rincer une fois", choices: ["rincer avec le gobelet", "cracher avec de l'aide"], summary: "Brosser et rincer a aidé la bouche à se sentir fraîche." },
      "hands-first": { label: "Les mains d'abord", task: "laver les mains et les bras", childGoal: "toucher l'eau avec une main", choices: ["laver une main", "laisser l'adulte laver une main"], summary: "Une main dans l'eau a rendu le lavage plus facile." },
      "soap-bubbles": { label: "Bulles de savon", task: "faire des bulles de savon", childGoal: "frotter du savon sur un bras", choices: ["frotter des bulles sur le bras", "regarder les bulles d'abord"], summary: "Les bulles ont aidé le corps à devenir propre." },
      "hair-later": { label: "Corps maintenant, cheveux après", task: "laver le corps d'abord", childGoal: "laver le corps avant les cheveux", choices: ["laver les bras d'abord", "laver les pieds d'abord"], summary: "Laver le corps d'abord a rendu le bain plus petit." },
      "smell-first": { label: "Sentir d'abord", task: "s'approcher de la nourriture", childGoal: "sentir la nourriture d'abord", choices: ["sentir la nourriture", "toucher la cuillère"], summary: "Sentir d'abord a rendu la nourriture moins surprenante." },
      "tiny-bite": { label: "Petite bouchée", task: "essayer une petite bouchée", childGoal: "prendre une petite bouchée", choices: ["essayer une petite bouchée", "laisser la cuillère toucher les lèvres"], summary: "Une petite bouchée a aidé le corps à essayer." },
      "sit-table": { label: "S'asseoir à table", task: "s'asseoir près de la nourriture", childGoal: "s'asseoir près de l'assiette", choices: ["s'asseoir les pieds en bas", "s'asseoir près de l'adulte"], summary: "S'asseoir près de la nourriture était le premier pas." },
      "pajamas-first": { label: "Pyjama d'abord", task: "mettre le pyjama", childGoal: "mettre une partie du pyjama", choices: ["choisir le haut du pyjama", "choisir le pantalon du pyjama"], summary: "Le pyjama a aidé le corps à savoir que le sommeil arrive." },
      "blanket-choice": { label: "Choisir la couverture", task: "s'installer au lit", childGoal: "choisir la couverture", choices: ["choisir la couverture", "choisir le côté de l'oreiller"], summary: "Choisir une couverture a rendu le coucher plus calme." },
      "socks-first": { label: "Chaussettes d'abord", task: "mettre les chaussettes", childGoal: "mettre une chaussette", choices: ["essayer une chaussette", "laisser l'adulte commencer une chaussette"], summary: "Une chaussette a aidé le corps à se préparer." },
      "shoes-first": { label: "Chaussures d'abord", task: "mettre les chaussures", childGoal: "mettre un pied près d'une chaussure", choices: ["choisir la chaussure gauche", "choisir la chaussure droite"], summary: "Les chaussures ont aidé le corps à être prêt à partir." },
      "one-toy": { label: "Un jouet", task: "ranger un jouet", childGoal: "mettre un jouet à sa place", choices: ["ramasser un bloc", "ramasser un jouet doux"], summary: "Un jouet à sa place a rendu le rangement plus petit." },
      "color-sort": { label: "Trier par couleur", task: "ranger par couleur", childGoal: "trouver une couleur pareille", choices: ["trouver un jouet bleu", "trouver un jouet jaune"], summary: "Trier par couleur a rendu le rangement plus amusant." },
      "sit-first": { label: "S'asseoir d'abord", task: "s'asseoir dans le siège auto", childGoal: "mettre le dos contre le siège", choices: ["monter seul", "recevoir une aide douce"], summary: "S'asseoir d'abord a rendu la boucle plus facile." },
      "buckle-click": { label: "Clic de boucle", task: "attacher le siège auto", childGoal: "entendre un clic de boucle", choices: ["pousser la boucle", "laisser l'adulte faire clic"], summary: "Le clic de la boucle a aidé le corps à rester en sécurité." },
      "three-steps": { label: "Trois pas", task: "faire trois pas", childGoal: "faire trois pas vers l'adulte", choices: ["faire de grands pas", "tenir la main de l'adulte"], summary: "Trois pas ont aidé à commencer à partir." },
      "wave-goodbye": { label: "Dire au revoir", task: "dire au revoir à cet endroit", childGoal: "faire au revoir avant de partir", choices: ["faire au revoir de la main", "envoyer un bisou d'au revoir"], summary: "Dire au revoir a rendu le prochain pas plus clair." },
      "tiny-step": { label: "Petit pas", task: "essayer le prochain petit pas", childGoal: "faire un petit pas utile", choices: ["essayer seul", "essayer avec l'aide de l'adulte"], summary: "Un petit pas a aidé le corps à se préparer." },
    },
    need: {
      control: { line: "L'enfant veut un peu de contrôle, alors la vidéo donne deux choix sûrs.", parentTip: "Utilise deux choix qui terminent tous les deux la tâche." },
      sensory: { line: "La tâche peut sembler trop forte, lumineuse, collante, froide ou surprenante.", parentTip: "Réduis la charge sensorielle et rends l'étape plus petite." },
      transition: { line: "L'enfant a besoin de temps pour passer d'une chose à l'autre.", parentTip: "Nomme le changement et propose un petit pas de transition." },
      fear: { line: "L'enfant se sent incertain, alors la vidéo garde l'adulte près de lui.", parentTip: "Montre l'étape d'abord et laisse l'enfant regarder avant d'essayer." },
      tired: { line: "L'enfant a peu d'énergie, alors la vidéo rend la tâche toute petite.", parentTip: "Réduis la demande et aide plus que d'habitude." },
    },
    helper: {
      choice: { line: "Tu as deux choix, et les deux aident à finir la tâche.", cue: "Propose deux choix acceptables." },
      "tiny-step": { line: "On fait seulement le premier petit pas maintenant.", cue: "Demande seulement la première petite action." },
      pretend: { line: "On peut faire semblant que c'est une petite mission de dessin animé.", cue: "Utilise le jeu imaginaire sans rendre la tâche optionnelle." },
    },
    sketch: {
      start: { "arms-crossed": "commence les bras croisés et dit non", "backs-away": "recule devant la tâche", "covers-ears": "semble submergé et a besoin de mots doux" },
      step: { "look-touch": "regarde d'abord puis touche l'objet", "one-count": "essaie l'action pendant un compte lent", "parent-help": "laisse l'adulte aider sa main" },
      ending: { proud: "remarque son essai courageux", calm: "se calme un peu", celebrate: "fait une petite célébration" },
    },
    propNames: { teeth: "brosse à dents", bed: "lit", bath: "bain", shoes: "vêtements", toys: "jouets", car: "siège auto", plate: "assiette", generic: "prochaine étape" },
    templates: {
      feelings: "Les grands sentiments sont là. {actor} {sketchStart}. Tu es en sécurité. {breaths}",
      why: "Aujourd'hui, la tâche est de {task}. {why} {needLine}",
      tinyStep: "Nous n'avons pas besoin de tout faire d'un coup. D'abord, nous allons {childGoal}. {actor} {sketchStep}.",
      choice: "{toneLine} {helperLine} Tu peux {choiceA}, ou tu peux {choiceB}.",
      summary: "{summary} {actor} {sketchEnding}. Nous avons fait un petit pas. Le prochain pas peut être plus facile.",
      lookQuestion: "Peux-tu regarder {propName} ?",
      tryQuestion: "Pouvons-nous essayer : {childGoal} ?",
      choiceQuestion: "Quel choix semble plus facile : {choiceA}, ou {choiceB} ?",
      breathQuestion: "Ton corps peut-il respirer lentement une fois ?",
      summaryQuestion: "Quel petit pas ton corps a-t-il essayé ?",
      safeCue: "Je suis là. Ton corps est en sécurité. On respire d'abord.",
      jobCue: "La tâche est de {task}. Je vais t'aider à faire {tinyStep}.",
      firstCue: "D'abord {childGoal}. Ensuite on fait une pause et on remarque ton corps courageux.",
      choiceCue: "Tu peux {choiceA}, ou {choiceB}. Les deux choix terminent la tâche.",
      praiseCue: "Tu as essayé quelque chose de difficile. J'ai vu ton effort.",
      startTip: "Commence par la connexion. {needTip}",
      directionTip: "Donne une consigne claire. Les jeunes enfants comprennent mieux les mots concrets.",
      successTip: "Rends le premier pas assez facile pour réussir. Félicite l'effort tout de suite.",
      choiceTip: "{helperCue} Évite les choix qui rendent la tâche optionnelle.",
      endTip: "Termine avec un compliment précis. Nomme l'action faite par l'enfant.",
      sketchResist: "Résiste : {actor} {sketchStart}.",
      sketchNotice: "Remarque : montre pourquoi {task} compte.",
      sketchTry: "Essaie : {childGoal}.",
      sketchChoice: "Choix : {choiceA} / {choiceB}.",
      sketchEnd: "Fin : {actor} {sketchEnding}.",
    },
    sceneLabels: { feelings: "Sentiments", why: "Pourquoi c'est important", try: "Petit pas", choice: "Choix", summary: "Résumé" },
    answerResponses: { yes: "Très bien. Nomme l'étape exacte et avance doucement.", "not-yet": "Pause. Réduis la demande un moment, puis répète le même petit choix.", help: "Aide la main ou le corps de l'enfant juste assez, puis félicite l'effort." },
  },
};

let currentVideo = null;
let currentSceneIndex = 0;
let playTimer = null;
let wordTimer = null;
let isPlaying = false;
let customBackgroundUrl = null;

function cleanText(value) {
  return value.trim().replace(/\s+/g, " ");
}

function cleanChildName(value) {
  return cleanText(value || "").replace(/[<>]/g, "").slice(0, 24);
}

function getLanguage() {
  return localeCopy[languageInput.value] ? languageInput.value : "en";
}

function getLocale(lang = getLanguage()) {
  return localeCopy[lang] || localeCopy.en;
}

function formatText(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function findTopic(issue) {
  const normalized = issue.toLowerCase();
  return topicLibrary.find((topic) =>
    topic.match.some((keyword) => normalized.includes(keyword)),
  ) || fallbackTopic;
}

function getLocalizedTopic(topic, lang = getLanguage()) {
  const localized = getLocale(lang).topics[topic.id] || {};
  return {
    ...topic,
    ...localized,
  };
}

function getLocalizedTaskDetail(topicId, value, lang = getLanguage()) {
  const base = getSelectedTaskDetail(topicId, value);
  const localized = getLocale(lang).details[base.value] || {};
  return {
    ...base,
    ...localized,
    choices: localized.choices || base.choices,
  };
}

function getPaceConfig(pace, lang = getLanguage()) {
  const locale = getLocale(lang);
  const configs = {
    "very-slow": {
      label: locale.pace["very-slow"].label,
      wordMs: 660,
      speechRate: 0.58,
      breaths: locale.pace["very-slow"].breaths,
    },
    slow: {
      label: locale.pace.slow.label,
      wordMs: 520,
      speechRate: 0.68,
      breaths: locale.pace.slow.breaths,
    },
    steady: {
      label: locale.pace.steady.label,
      wordMs: 410,
      speechRate: 0.78,
      breaths: locale.pace.steady.breaths,
    },
  };

  return configs[pace] || configs.slow;
}

function getToneLine(tone, lang = getLanguage()) {
  const lines = getLocale(lang).tone;
  return lines[tone] || lines.gentle;
}

function getTaskDetails(topicId) {
  return taskDetailLibrary[topicId] || taskDetailLibrary.custom;
}

function getSelectedTaskDetail(topicId, value) {
  const details = getTaskDetails(topicId);
  return details.find((detail) => detail.value === value) || details[0];
}

function getComposerState(topic, lang = getLanguage()) {
  const locale = getLocale(lang);
  const detail = getLocalizedTaskDetail(topic.id, taskDetailInput.value, lang);
  const childName = cleanChildName(childNameInput.value);

  return {
    detail,
    need: locale.need[childNeedInput.value] || locale.need.control,
    helper: locale.helper[helperStyleInput.value] || locale.helper.choice,
    sketchStart: locale.sketch.start[sketchStartInput.value] || locale.sketch.start["arms-crossed"],
    sketchStep: locale.sketch.step[sketchStepInput.value] || locale.sketch.step["look-touch"],
    sketchEnding: locale.sketch.ending[sketchEndingInput.value] || locale.sketch.ending.proud,
    character: {
      childName,
      actor: childName || locale.actorFallback,
      style: characterStyleInput.value,
      skin: skinToneInput.value,
      body: bodyShapeInput.value,
      glasses: glassesInput.checked ? "yes" : "no",
    },
  };
}

function createScenes({ issue, age, pace, length, tone }) {
  const topic = findTopic(issue);
  const lang = getLanguage();
  const locale = getLocale(lang);
  const topicText = getLocalizedTopic(topic, lang);
  const composer = getComposerState(topic, lang);
  const detail = composer.detail;
  const paceConfig = getPaceConfig(pace, lang);
  const toneLine = getToneLine(tone, lang);
  const isYoung = Number(age) <= 3;
  const tinyStep = isYoung
    ? (lang === "es" ? "un pasito" : lang === "fr" ? "un tout petit pas" : "one tiny step")
    : (lang === "es" ? "un paso pequeño" : lang === "fr" ? "un petit pas" : "one small step");
  const choiceA = detail.choices[0];
  const choiceB = detail.choices[1];
  const secondsPerScene = Math.round(Number(length) / 5);

  return {
    lang,
    title: topicText.title,
    topic,
    topicText,
    composer,
    paceConfig,
    secondsPerScene,
    sketchRows: buildSketchRows(topic, composer, lang),
    scenes: [
      {
        key: "feelings",
        label: locale.sceneLabels.feelings,
        mood: "resist",
        prop: topic.prop,
        narration: formatText(locale.templates.feelings, { actor: composer.character.actor, sketchStart: composer.sketchStart, breaths: paceConfig.breaths }),
        childQuestion: locale.templates.breathQuestion,
        parentCue: locale.templates.safeCue,
        parentTip: formatText(locale.templates.startTip, { needTip: composer.need.parentTip }),
      },
      {
        key: "why",
        label: locale.sceneLabels.why,
        mood: "notice",
        prop: topic.prop,
        narration: formatText(locale.templates.why, { task: detail.task, why: topicText.why, needLine: composer.need.line }),
        childQuestion: formatText(locale.templates.lookQuestion, { propName: friendlyPropName(topic.prop, lang) }),
        parentCue: formatText(locale.templates.jobCue, { task: detail.task, tinyStep }),
        parentTip: locale.templates.directionTip,
      },
      {
        key: "try",
        label: locale.sceneLabels.try,
        mood: "try",
        prop: topic.prop,
        narration: formatText(locale.templates.tinyStep, { actor: composer.character.actor, childGoal: detail.childGoal, sketchStep: composer.sketchStep }),
        childQuestion: formatText(locale.templates.tryQuestion, { childGoal: detail.childGoal }),
        parentCue: formatText(locale.templates.firstCue, { childGoal: detail.childGoal }),
        parentTip: locale.templates.successTip,
      },
      {
        key: "choice",
        label: locale.sceneLabels.choice,
        mood: "choose",
        prop: topic.prop,
        narration: formatText(locale.templates.choice, { toneLine, helperLine: composer.helper.line, choiceA, choiceB }),
        childQuestion: formatText(locale.templates.choiceQuestion, { choiceA, choiceB }),
        parentCue: formatText(locale.templates.choiceCue, { choiceA, choiceB }),
        parentTip: formatText(locale.templates.choiceTip, { helperCue: composer.helper.cue }),
      },
      {
        key: "summary",
        label: locale.sceneLabels.summary,
        mood: "accept",
        prop: topic.prop,
        narration: formatText(locale.templates.summary, { actor: composer.character.actor, summary: detail.summary, sketchEnding: composer.sketchEnding }),
        childQuestion: locale.templates.summaryQuestion,
        parentCue: locale.templates.praiseCue,
        parentTip: locale.templates.endTip,
      },
    ],
  };
}

function friendlyPropName(prop, lang = getLanguage()) {
  const names = getLocale(lang).propNames;
  return names[prop] || names.generic;
}

function buildSketchRows(topic, composer, lang = getLanguage()) {
  const locale = getLocale(lang);
  const topicText = getLocalizedTopic(topic, lang);
  return [
    [`${locale.sceneWord} 1`, formatText(locale.templates.sketchResist, { actor: composer.character.actor, sketchStart: composer.sketchStart })],
    [`${locale.sceneWord} 2`, formatText(locale.templates.sketchNotice, { task: topicText.task })],
    [`${locale.sceneWord} 3`, formatText(locale.templates.sketchTry, { childGoal: composer.detail.childGoal })],
    [`${locale.sceneWord} 4`, formatText(locale.templates.sketchChoice, { choiceA: composer.detail.choices[0], choiceB: composer.detail.choices[1] })],
    [`${locale.sceneWord} 5`, formatText(locale.templates.sketchEnd, { actor: composer.character.actor, sketchEnding: composer.sketchEnding })],
  ];
}

function renderSketchRows(rows) {
  sketchPreview.replaceChildren(
    ...rows.map(([label, text]) => {
      const row = document.createElement("div");
      row.className = "sketch-row";

      const scene = document.createElement("span");
      scene.textContent = label;

      const summary = document.createElement("span");
      summary.textContent = text;

      row.append(scene, summary);
      return row;
    }),
  );
}

function syncTaskDetailOptions() {
  const topic = findTopic(cleanText(issueInput.value || ""));
  const previous = taskDetailInput.value;
  const lang = getLanguage();
  const details = getTaskDetails(topic.id);

  taskDetailInput.replaceChildren(
    ...details.map((detail) => {
      const localized = getLocalizedTaskDetail(topic.id, detail.value, lang);
      const option = document.createElement("option");
      option.value = detail.value;
      option.textContent = localized.label;
      return option;
    }),
  );

  if (details.some((detail) => detail.value === previous)) {
    taskDetailInput.value = previous;
  }

  localizeSelectOptions();
  updateSketchPreview();
}

function updateSketchPreview() {
  localizeSelectOptions();
  const topic = findTopic(cleanText(issueInput.value || ""));
  const lang = getLanguage();
  const composer = getComposerState(topic, lang);
  renderSketchRows(buildSketchRows(topic, composer, lang));
  updateParentGuidance();
}

function updateSelectOptionText(select, labels) {
  [...select.options].forEach((option) => {
    if (labels[option.value]) {
      option.textContent = labels[option.value];
    }
  });
}

function localizeSelectOptions() {
  const labels = getLocale().optionLabels;
  localizeStaticText();
  updateSelectOptionText(childNeedInput, labels.childNeed);
  updateSelectOptionText(helperStyleInput, labels.helperStyle);
  updateSelectOptionText(characterStyleInput, labels.characterStyle);
  updateSelectOptionText(skinToneInput, labels.skinTone);
  updateSelectOptionText(bodyShapeInput, labels.bodyShape);
  updateSelectOptionText(sketchStartInput, labels.sketchStart);
  updateSelectOptionText(sketchStepInput, labels.sketchStep);
  updateSelectOptionText(sketchEndingInput, labels.sketchEnding);
}

function setLabelText(control, text) {
  const label = control.closest("label") || document.querySelector(`label[for="${control.id}"]`);
  if (!label) {
    return;
  }

  const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = `${text}\n              `;
  }
}

function setLegendText(fieldset, text) {
  const legend = fieldset?.querySelector("legend");
  if (legend) {
    legend.textContent = text;
  }
}

function setElementText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function clearCustomBackground() {
  if (customBackgroundUrl) {
    URL.revokeObjectURL(customBackgroundUrl);
    customBackgroundUrl = null;
  }

  document.body.classList.remove("has-custom-background");
  document.body.style.removeProperty("--app-custom-bg-image");
  stageEl.classList.remove("has-custom-background");
  stageEl.style.removeProperty("--custom-bg-image");

  if (backgroundPreview) {
    backgroundPreview.classList.remove("has-image");
    backgroundPreview.classList.add("empty");
    backgroundPreview.style.removeProperty("background-image");
  }

  if (backgroundPreviewLabel) {
    backgroundPreviewLabel.textContent = getLocale().ui.backgroundEmpty;
  }

  if (removeBackgroundButton) {
    removeBackgroundButton.disabled = true;
  }

  if (backgroundImageInput) {
    backgroundImageInput.value = "";
  }
}

function applyCustomBackground(url) {
  document.body.classList.add("has-custom-background");
  document.body.style.setProperty("--app-custom-bg-image", `url("${url}")`);
  stageEl.classList.add("has-custom-background");
  stageEl.style.setProperty("--custom-bg-image", `url("${url}")`);

  if (backgroundPreview) {
    backgroundPreview.classList.add("has-image");
    backgroundPreview.classList.remove("empty");
    backgroundPreview.style.backgroundImage = `url("${url}")`;
  }

  if (backgroundPreviewLabel) {
    backgroundPreviewLabel.textContent = getLocale().ui.backgroundLoaded;
  }

  if (removeBackgroundButton) {
    removeBackgroundButton.disabled = false;
  }
}

function handleBackgroundImageChange(event) {
  const [file] = event.target.files || [];

  if (!file) {
    clearCustomBackground();
    return;
  }

  if (!file.type.startsWith("image/")) {
    clearCustomBackground();
    return;
  }

  if (customBackgroundUrl) {
    URL.revokeObjectURL(customBackgroundUrl);
  }

  customBackgroundUrl = URL.createObjectURL(file);
  applyCustomBackground(customBackgroundUrl);
}

function localizeTabsAndTips(ui) {
  const labels = {
    problem: ui.tabProblem,
    character: ui.tabCharacter,
    video: ui.tabVideo,
    tips: ui.tabTips,
  };

  tabButtons.forEach((button) => {
    button.textContent = labels[button.dataset.tabTarget] || button.textContent;
  });

  setElementText("#parent-guide-title", ui.parentGuide);
  setElementText("#core-tips-label", ui.coreTipsLabel);
  setElementText("#specific-tips-label", ui.specificTipsLabel);
  setElementText("#tantrum-tips-label", ui.tantrumTipsLabel);
  setElementText("#sources-label", ui.sourcesLabel);
  setElementText('[data-parent-tip="softVoice"]', ui.parentTipSoftVoice);
  setElementText('[data-parent-tip="choices"]', ui.parentTipChoices);
  setElementText('[data-parent-tip="tinyStep"]', ui.parentTipTinyStep);
  setElementText("#privacy-note", ui.privacyNote);
}

function renderTipList(list, tips) {
  if (!list) {
    return;
  }

  list.replaceChildren(
    ...tips.map((tip) => {
      const item = document.createElement("li");
      item.textContent = tip;
      return item;
    }),
  );
}

function renderSourceLinks(sourceKeys) {
  if (!sourceList) {
    return;
  }

  sourceList.replaceChildren(
    ...sourceKeys.map((key) => {
      const source = guidanceSources[key];
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = source.name;
      return link;
    }),
  );
}

function getParentGuidance(topic, lang = getLanguage()) {
  const guidance = guidanceLibrary[lang] || guidanceLibrary.en;
  const topicGuidance = guidance.topics[topic.id] || guidance.topics.custom;
  const sources = [...new Set([...guidance.baseSources, ...topicGuidance.sources])];
  const needTip = guidance.needs[childNeedInput.value] || guidance.needs.control;
  const helperTip = guidance.helpers[helperStyleInput.value] || guidance.helpers.choice;

  return {
    ...topicGuidance,
    sources,
    tantrumTips: [
      guidance.regulation.safety,
      guidance.regulation.fewWords,
      needTip,
      helperTip,
      guidance.regulation.praise,
    ],
  };
}

function updateParentGuidance() {
  const topic = findTopic(cleanText(issueInput.value || ""));
  const guidance = getParentGuidance(topic);

  if (specificTipsTitle) {
    specificTipsTitle.textContent = guidance.title;
  }

  renderTipList(specificTipsList, guidance.tips);
  renderTipList(tantrumTipsList, guidance.tantrumTips);
  renderSourceLinks(guidance.sources);
}

function localizeStaticText() {
  const ui = getLocale().ui;
  document.documentElement.lang = getLanguage();
  localizeTabsAndTips(ui);
  setLabelText(issueInput, ui.issue);
  setLabelText(ageInput, ui.age);
  setLabelText(paceInput, ui.pace);
  setLabelText(lengthInput, ui.length);
  setLabelText(languageInput, ui.language);
  setLabelText(taskDetailInput, ui.taskFocus);
  setLabelText(childNeedInput, ui.whyHard);
  setLabelText(helperStyleInput, ui.helperStyle);
  setLabelText(childNameInput, ui.childName);
  childNameInput.placeholder = ui.childNamePlaceholder;
  setLabelText(characterStyleInput, ui.character);
  setLabelText(skinToneInput, ui.skinTone);
  setLabelText(bodyShapeInput, ui.bodyShape);
  setLabelText(backgroundImageInput, ui.backgroundPhoto);
  if (backgroundPreviewLabel) {
    backgroundPreviewLabel.textContent = backgroundPreview?.classList.contains("has-image")
      ? ui.backgroundLoaded
      : ui.backgroundEmpty;
  }
  if (removeBackgroundButton) {
    removeBackgroundButton.textContent = ui.removeBackground;
  }
  setElementText("#background-privacy-note", ui.backgroundPrivacy);
  setLabelText(sketchStartInput, ui.opening);
  setLabelText(sketchStepInput, ui.middle);
  setLabelText(sketchEndingInput, ui.ending);

  const composerPanels = document.querySelectorAll(".composer-panel");
  setLegendText(composerPanels[0], ui.aiComposer);
  setLegendText(composerPanels[1], ui.childCharacter);
  setLegendText(document.querySelector(".sketch-panel"), ui.miniSketch);
  setLegendText(document.querySelector(".tone-group"), ui.tone);

  const glassesLabel = glassesInput.closest("label");
  if (glassesLabel) {
    [...glassesLabel.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        node.textContent = `\n              ${ui.glasses}\n            `;
      }
    });
  }

  const createText = [...form.querySelector(".primary-action").childNodes]
    .find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (createText) {
    createText.textContent = ` ${ui.create}`;
  }
}

function renderProp(prop) {
  propZone.replaceChildren();

  const card = document.createElement("span");
  card.className = "prop-card";
  propZone.append(card);

  if (prop === "teeth") {
    const tooth = document.createElement("span");
    tooth.className = "prop-tooth";
    const brush = document.createElement("span");
    brush.className = "prop-brush";
    propZone.append(tooth, brush);
    return;
  }

  const item = document.createElement("span");
  item.className = `prop-${prop || "generic"}`;
  propZone.append(item);
}

function renderCaption(text, activeWordIndex = -1) {
  const words = text.split(" ");
  captionEl.replaceChildren(
    ...words.map((word, index) => {
      const span = document.createElement("span");
      span.className = index === activeWordIndex ? "caption-word active" : "caption-word";
      span.textContent = index === words.length - 1 ? word : `${word} `;
      return span;
    }),
  );
}

function getPikaStatusLabels(lang = getLanguage()) {
  return pikaStatusCopy[lang] || pikaStatusCopy.en;
}

function getPikaFilename(topicId) {
  const asset = preRenderedVideoLibrary[topicId] || preRenderedVideoLibrary.teeth;
  return asset.src.replace("./", "");
}

function buildPikaPrompt(video) {
  const character = video.composer.character;
  const characterNotes = [
    character.style === "superhero" ? "superhero outfit with a small cape" : "simple child outfit",
    `${character.skin} skin tone`,
    `${character.body} body shape`,
    character.glasses === "yes" ? "wearing glasses" : "no glasses",
  ].join(", ");
  const taskPrompt = pikaTaskPromptLibrary[video.topic.id] || pikaTaskPromptLibrary.teeth;

  return [
    "Anime-inspired preschool cartoon, soft rounded shapes, gentle expressive child character, warm friendly colors, child-safe, calming mood.",
    `Character: ${characterNotes}.`,
    taskPrompt,
    "The child starts upset and refusing, then slowly relaxes, tries one tiny step, and ends calmer.",
    "Movement must be very slow and readable for a distressed preschool child.",
    "No text on screen, no logos, no watermark, no scary faces, no fast camera movement, no hard cuts, 10-second loop.",
  ].join(" ");
}

function renderPikaFileList() {
  if (!pikaFileListEl) {
    return;
  }

  pikaFileListEl.replaceChildren(
    ...Object.entries(preRenderedVideoLibrary).map(([topicId, asset]) => {
      const item = document.createElement("li");
      item.textContent = `${topicId}: ${asset.src.replace("./", "")}`;
      return item;
    }),
  );
}

function updatePikaPanel(video, status = "checking") {
  if (!pikaFilenameEl || !pikaStatusEl || !pikaPromptTextEl) {
    return;
  }

  const labels = getPikaStatusLabels(video.lang);
  const filename = getPikaFilename(video.topic.id);

  pikaFilenameEl.textContent = filename;
  pikaFolderEl.textContent = "assets/videos/pika/";
  pikaPromptTextEl.textContent = buildPikaPrompt(video);
  pikaStatusEl.className = `asset-status ${status}`;
  pikaStatusEl.textContent = labels[status] || labels.checking;
  copyPikaPromptButton.textContent = labels.copy;
  renderPikaFileList();
}

async function syncPreRenderedVideo(video) {
  const asset = preRenderedVideoLibrary[video.topic.id];

  updatePikaPanel(video, "checking");
  stageEl.classList.remove("has-prerendered-video");
  prerenderedVideoEl.hidden = true;
  prerenderedVideoEl.pause();
  prerenderedVideoEl.removeAttribute("src");
  prerenderedVideoEl.removeAttribute("poster");
  prerenderedVideoEl.load();

  if (!asset) {
    updatePikaPanel(video, "missing");
    return;
  }

  try {
    const response = await fetch(asset.src, { method: "HEAD", cache: "no-store" });

    if (!response.ok) {
      updatePikaPanel(video, "missing");
      return;
    }

    prerenderedVideoEl.src = asset.src;
    prerenderedVideoEl.poster = asset.poster;
    prerenderedVideoEl.hidden = false;
    stageEl.classList.add("has-prerendered-video");
    prerenderedVideoEl.load();
    updatePikaPanel(video, "ready");
  } catch {
    stageEl.classList.remove("has-prerendered-video");
    prerenderedVideoEl.hidden = true;
    updatePikaPanel(video, "missing");
  }
}

function renderScene(index) {
  if (!currentVideo) {
    return;
  }

  const scene = currentVideo.scenes[index];
  currentSceneIndex = index;
  titleEl.textContent = currentVideo.title;
  pacePill.textContent = currentVideo.paceConfig.label;
  renderProp(scene.prop);
  renderCaption(scene.narration);
  parentCueEl.textContent = scene.parentCue;
  parentTipEl.textContent = scene.parentTip;
  childQuestionEl.textContent = scene.childQuestion;
  progressBar.style.width = `${(index / currentVideo.scenes.length) * 100}%`;
  answerButtons.forEach((button) => button.classList.remove("selected"));
  sceneLabel.textContent = `${getLocale(currentVideo.lang).sceneWord} ${index + 1}/${currentVideo.scenes.length}: ${scene.label}`;
  stageEl.dataset.scene = scene.key || scene.label.toLowerCase().replace(/\s+/g, "-");
  stageEl.dataset.topic = currentVideo.topic.id;
  stageEl.dataset.mood = scene.mood;
  stageEl.dataset.character = currentVideo.composer.character.style;
  stageEl.dataset.skin = currentVideo.composer.character.skin;
  stageEl.dataset.body = currentVideo.composer.character.body;
  stageEl.dataset.glasses = currentVideo.composer.character.glasses;
  stageEl.classList.remove("scene-enter");
  void stageEl.offsetWidth;
  stageEl.classList.add("scene-enter");
}

function buildScript(video) {
  const locale = getLocale(video.lang);
  return video.scenes
    .map((scene, index) => {
      return [
        `${locale.sceneWord} ${index + 1}: ${scene.label}`,
        `${locale.scriptLabels.narration}: ${scene.narration}`,
        `${locale.scriptLabels.childQuestion}: ${scene.childQuestion}`,
        `${locale.scriptLabels.parentLine}: ${scene.parentCue}`,
        `${locale.scriptLabels.coachingNote}: ${scene.parentTip}`,
      ].join("\n");
    })
    .join("\n\n");
}

function generateVideoFromForm() {
  const data = new FormData(form);
  const issue = cleanText(data.get("issue") || "");
  const tone = data.get("tone") || "gentle";
  const lang = getLanguage();
  const fallbackIssue = lang === "es"
    ? "El niño se resiste al siguiente paso."
    : lang === "fr"
      ? "L'enfant résiste à la prochaine étape."
      : "The child is resisting the next task.";

  currentVideo = createScenes({
    issue: issue || fallbackIssue,
    age: ageInput.value,
    pace: paceInput.value,
    length: lengthInput.value,
    tone,
  });

  renderSketchRows(currentVideo.sketchRows);
  scriptText.textContent = buildScript(currentVideo);
  updateParentGuidance();
  stopPlayback();
  renderScene(0);
  syncPreRenderedVideo(currentVideo);
}

function stopPlayback() {
  isPlaying = false;
  stageEl.classList.remove("is-playing");
  prerenderedVideoEl.pause();
  window.clearTimeout(playTimer);
  window.clearInterval(wordTimer);
  playTimer = null;
  wordTimer = null;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function highlightWords(scene) {
  window.clearInterval(wordTimer);
  const words = scene.narration.split(" ");
  let index = 0;

  renderCaption(scene.narration, index);
  wordTimer = window.setInterval(() => {
    index += 1;
    if (index >= words.length) {
      window.clearInterval(wordTimer);
      renderCaption(scene.narration);
      return;
    }

    renderCaption(scene.narration, index);
  }, currentVideo.paceConfig.wordMs);
}

function speakScene(scene) {
  if (!voiceToggle.checked || !("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(scene.narration);
  utterance.lang = currentVideo.lang === "es" ? "es-ES" : currentVideo.lang === "fr" ? "fr-FR" : "en-US";
  utterance.rate = currentVideo.paceConfig.speechRate;
  utterance.pitch = 1.05;
  utterance.volume = 0.86;
  window.speechSynthesis.speak(utterance);
}

function playScene() {
  if (!currentVideo) {
    return;
  }

  isPlaying = true;
  stageEl.classList.add("is-playing");
  if (!prerenderedVideoEl.hidden) {
    prerenderedVideoEl.play().catch(() => {});
  }
  const scene = currentVideo.scenes[currentSceneIndex];
  renderScene(currentSceneIndex);
  highlightWords(scene);
  speakScene(scene);

  const minimumDuration = Math.max(
    currentVideo.secondsPerScene * 1000,
    scene.narration.split(" ").length * currentVideo.paceConfig.wordMs + 900,
  );

  playTimer = window.setTimeout(() => {
    if (!isPlaying) {
      return;
    }

    if (currentSceneIndex < currentVideo.scenes.length - 1) {
      currentSceneIndex += 1;
      playScene();
      return;
    }

    progressBar.style.width = "100%";
    stopPlayback();
  }, minimumDuration);
}

function nextScene() {
  if (!currentVideo) {
    return;
  }

  stopPlayback();
  const next = Math.min(currentVideo.scenes.length - 1, currentSceneIndex + 1);
  renderScene(next);
}

function prevScene() {
  if (!currentVideo) {
    return;
  }

  stopPlayback();
  const previous = Math.max(0, currentSceneIndex - 1);
  renderScene(previous);
}

function handleAnswer(event) {
  const selected = event.currentTarget;
  answerButtons.forEach((button) => button.classList.remove("selected"));
  selected.classList.add("selected");

  const answer = selected.dataset.answer;
  const scene = currentVideo.scenes[currentSceneIndex];
  const responses = getLocale(currentVideo.lang).answerResponses;

  parentTipEl.textContent = `${scene.parentTip} ${responses[answer]}`;
}

function activateTab(tabName) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === tabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.dataset.tabPanel === tabName;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

function handleTabKeydown(event) {
  const currentIndex = tabButtons.indexOf(event.currentTarget);
  const lastIndex = tabButtons.length - 1;
  let nextIndex = currentIndex;

  if (event.key === "ArrowRight") {
    nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
  } else if (event.key === "ArrowLeft") {
    nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = lastIndex;
  } else {
    return;
  }

  event.preventDefault();
  const nextButton = tabButtons[nextIndex];
  activateTab(nextButton.dataset.tabTarget);
  nextButton.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateVideoFromForm();
});

issueInput.addEventListener("input", syncTaskDetailOptions);

languageInput.addEventListener("change", () => {
  syncTaskDetailOptions();
  if (currentVideo) {
    generateVideoFromForm();
  }
});

childNameInput.addEventListener("input", () => {
  updateSketchPreview();
  if (currentVideo) {
    generateVideoFromForm();
  }
});

backgroundImageInput.addEventListener("change", handleBackgroundImageChange);
removeBackgroundButton.addEventListener("click", clearCustomBackground);

[
  taskDetailInput,
  childNeedInput,
  helperStyleInput,
  characterStyleInput,
  skinToneInput,
  bodyShapeInput,
  glassesInput,
  sketchStartInput,
  sketchStepInput,
  sketchEndingInput,
].forEach((input) => {
  input.addEventListener("change", () => {
    updateSketchPreview();
    if (currentVideo) {
      generateVideoFromForm();
    }
  });
});

playButton.addEventListener("click", () => {
  stopPlayback();
  playScene();
});

pauseButton.addEventListener("click", () => {
  stopPlayback();
  if (currentVideo) {
    renderScene(currentSceneIndex);
  }
});

nextButton.addEventListener("click", nextScene);
prevButton.addEventListener("click", prevScene);

copyButton.addEventListener("click", async () => {
  const text = scriptText.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy script";
    }, 1200);
  } catch {
    copyButton.textContent = "Select script to copy";
  }
});

copyPikaPromptButton.addEventListener("click", async () => {
  const text = pikaPromptTextEl.textContent;
  const labels = getPikaStatusLabels();

  try {
    await navigator.clipboard.writeText(text);
    copyPikaPromptButton.textContent = labels.copied;
    window.setTimeout(() => {
      copyPikaPromptButton.textContent = labels.copy;
    }, 1200);
  } catch {
    copyPikaPromptButton.textContent = "Select prompt to copy";
  }
});

answerButtons.forEach((button) => {
  button.addEventListener("click", handleAnswer);
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tabTarget));
  button.addEventListener("keydown", handleTabKeydown);
});

syncTaskDetailOptions();
activateTab("problem");
generateVideoFromForm();
