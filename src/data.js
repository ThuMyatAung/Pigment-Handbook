export const chapters = [
  {
    id: "history",
    no: "01",
    title: "A History of Pigment",
    subtitle: "From ancient earth to modern colour chemistry",
    intro: "Pigment making is presented as a material history: earth, minerals, plants, animals, heat, water and increasingly controlled chemistry.",
    topics: ["Origins", "Calcination", "Indigenous use", "Folklore", "Medieval practice", "Synthetic pigments", "Industrial innovation"]
  },
  {
    id: "science",
    no: "02",
    title: "The Science of Pigment",
    subtitle: "Particles, lakes, extraction and transformation",
    intro: "This section turns pigment making into a material-science problem: particle size, substrates, precipitation, oxidation, pH and binders.",
    topics: ["What is a pigment?", "Particle clustering", "Lake pigments", "Laking chemistry", "Fermentation"]
  },
  {
    id: "properties",
    no: "03",
    title: "Pigment Properties & Effects",
    subtitle: "How material structure changes colour and paint behaviour",
    intro: "Density, hardness, refractive index, particle morphology, oil absorption, granulation and calcination all affect the final paint.",
    topics: ["Density", "Hardness", "Refractive index", "Granulation", "Calcination", "Iron oxides", "Purple earths"]
  },
  {
    id: "journeys",
    no: "04",
    title: "Art Journeys in Pigment",
    subtitle: "Ultramarine, copper blues, greens and verditer",
    intro: "Pigments are followed through their geological, historical and studio lives.",
    topics: ["Lapis lazuli", "Ultramarine", "Azurite", "Malachite", "Verditer", "Natural surfactants"]
  },
  {
    id: "mixing",
    no: "05",
    title: "The Mixing of Pigment",
    subtitle: "Binders, historical palettes and compatibility",
    intro: "Pigment becomes paint when particles are combined with a suitable medium. Historical palettes reveal different approaches to this relationship.",
    topics: ["Casein", "Egg tempera", "Cochineal", "Historical palettes", "Pigment incompatibilities"]
  },
  {
    id: "future",
    no: "06",
    title: "The Future of Pigment Practice",
    subtitle: "Local materials, waste streams and responsible making",
    intro: "The final chapter asks how pigment practice can reconnect artists with materials while considering provenance, sustainability and traditional knowledge.",
    topics: ["Raw earth", "Waste pigments", "Oak gall ink", "Verdigris", "Local binders", "Vegan alternatives"]
  }
];

export const pigments = [
  {
    id: "yellow-ochre",
    name: "Yellow Ochre",
    family: "Earth",
    hue: "Yellow",
    hex: "#C7A34B",
    formula: "α-FeO(OH) + clay minerals",
    material: "Hydrous iron oxide hydroxide carried by clay minerals.",
    behaviour: "Usually opaque and earthy; natural composition varies with geological origin.",
    transformation: "Heating can dehydrate goethite and move the colour toward red.",
    history: "Earth pigments are described as among humanity's earliest colour materials.",
    source: "Chapter 1"
  },
  {
    id: "red-ochre",
    name: "Red Ochre",
    family: "Earth",
    hue: "Red",
    hex: "#9B3D2E",
    formula: "Fe₂O₃ + clay minerals",
    material: "Anhydrous iron oxide with clay/aluminosilicate material.",
    behaviour: "Warm, durable earth red; often associated with hematite.",
    transformation: "Yellow ochre can be transformed toward red through calcination.",
    history: "Red ochre has a long record in painting, ritual and body decoration.",
    source: "Chapter 1"
  },
  {
    id: "raw-sienna",
    name: "Raw Sienna",
    family: "Earth",
    hue: "Orange-brown",
    hex: "#A56A32",
    formula: "Goethite + manganese oxide + accessory minerals",
    material: "Iron-bearing earth with relatively low manganese content.",
    behaviour: "Rich orange-brown and more transparent than many ochres.",
    transformation: "Calcination produces burnt sienna with a warmer red-brown character.",
    history: "Presented within the broader family of natural earth colours.",
    source: "Chapter 1"
  },
  {
    id: "raw-umber",
    name: "Raw Umber",
    family: "Earth",
    hue: "Brown",
    hex: "#5B4936",
    formula: "Goethite + manganese oxide + quartz/clay/carbonate",
    material: "Dark earth with a comparatively higher manganese proportion.",
    behaviour: "Deep brown with a mineral, earthy character.",
    transformation: "Calcination converts goethite toward hematite and produces burnt umber.",
    history: "An important member of the traditional earth palette.",
    source: "Chapter 1"
  },
  {
    id: "green-earth",
    name: "Green Earth",
    family: "Mineral",
    hue: "Green",
    hex: "#718064",
    formula: "Glauconite / celadonite",
    material: "Iron-, potassium-, aluminium-, magnesium- and silicon-bearing minerals.",
    behaviour: "Muted mineral green with a geological rather than botanical character.",
    transformation: "Appearance depends strongly on mineral composition and particle structure.",
    history: "Used as a mineral green within historical palettes.",
    source: "Chapter 1"
  },
  {
    id: "blue-earth",
    name: "Blue Earth / Vivianite",
    family: "Mineral",
    hue: "Blue",
    hex: "#557B91",
    formula: "Hydrated iron phosphate",
    material: "Vivianite, an iron phosphate hydrate.",
    behaviour: "Can change visually on exposure to oxygen, moving from pale/white toward blue.",
    transformation: "Oxidation is central to its colour development.",
    history: "Included as a less-common natural earth blue.",
    source: "Chapter 1"
  },
  {
    id: "woad",
    name: "Woad",
    family: "Plant / Lake",
    hue: "Blue",
    hex: "#315C83",
    formula: "Indigotin, C₁₆H₁₀N₂O₂",
    material: "Indigo-type colourant obtained from woad leaves.",
    behaviour: "Crystalline blue pigment; the book notes sensitivity to direct sunlight.",
    transformation: "Extraction, alkalization and oxidation convert precursor chemistry into insoluble blue pigment.",
    history: "Historically important in European textile dyeing and colour culture.",
    source: "Chapter 2"
  },
  {
    id: "weld",
    name: "Weld Lake",
    family: "Plant / Lake",
    hue: "Yellow",
    hex: "#D4B63E",
    formula: "Plant-derived yellow dye fixed to a mineral substrate",
    material: "Weld (Reseda luteola) dye converted into an insoluble lake.",
    behaviour: "Bright yellow lake; useful historically in textile and painting contexts.",
    transformation: "Dye extraction followed by laking onto an aluminium-containing substrate.",
    history: "One of the important historic European yellow dye sources.",
    source: "Chapter 2"
  },
  {
    id: "madder",
    name: "Madder",
    family: "Plant / Lake",
    hue: "Red",
    hex: "#A43B37",
    formula: "Anthraquinone-type colourants",
    material: "Root-derived red colourants converted into pigment through lake chemistry.",
    behaviour: "Red lake whose final character depends on extraction and precipitation conditions.",
    transformation: "Extraction and laking turn soluble colourants into an insoluble pigment.",
    history: "A major historic red colour source.",
    source: "Chapter 2"
  },
  {
    id: "lapis",
    name: "Lapis Lazuli / Natural Ultramarine",
    family: "Mineral",
    hue: "Blue",
    hex: "#294D91",
    formula: "Complex sulfur-containing aluminosilicate mineral system",
    material: "Natural lapis lazuli processed to separate and concentrate the blue fraction.",
    behaviour: "Strong, distinctive mineral blue; processing quality has a major effect.",
    transformation: "Mechanical separation and purification are central to producing the blue pigment.",
    history: "One of the historically prestigious blue materials.",
    source: "Chapter 4"
  },
  {
    id: "azurite",
    name: "Azurite",
    family: "Copper mineral",
    hue: "Blue",
    hex: "#216B91",
    formula: "Cu₃(CO₃)₂(OH)₂",
    material: "Basic copper carbonate mineral.",
    behaviour: "Mineral blue with particle size and processing affecting visual character.",
    transformation: "Grinding and levigation can refine the pigment.",
    history: "A historically important copper blue.",
    source: "Chapter 4"
  },
  {
    id: "malachite",
    name: "Malachite",
    family: "Copper mineral",
    hue: "Green",
    hex: "#477B52",
    formula: "Cu₂CO₃(OH)₂",
    material: "Basic copper carbonate mineral.",
    behaviour: "Mineral green; particle processing influences transparency and handling.",
    transformation: "Mechanical reduction and grading refine the material.",
    history: "Used as a natural green in many historical contexts.",
    source: "Chapter 4"
  },
  {
    id: "verditer",
    name: "Verditer",
    family: "Copper pigment",
    hue: "Blue / Green",
    hex: "#3F8C8C",
    formula: "Copper carbonate-based material",
    material: "Synthetic/historic copper carbonate pigments related to azurite and malachite.",
    behaviour: "Blue or green depending on composition and process.",
    transformation: "Chemical precipitation produces the pigment.",
    history: "The book follows historical English and European recipes.",
    source: "Chapter 4"
  },
  {
    id: "cochineal",
    name: "Cochineal Lake",
    family: "Animal / Lake",
    hue: "Crimson",
    hex: "#A62D4F",
    formula: "Carmine-type insect-derived colourant",
    material: "Insect-derived soluble colourant converted into an insoluble lake.",
    behaviour: "Strong red/crimson lake; colour depends on extraction and substrate chemistry.",
    transformation: "Extraction followed by laking.",
    history: "Important in European and global colour histories.",
    source: "Chapter 5"
  },
  {
    id: "oak-gall",
    name: "Oak Gall Ink",
    family: "Plant / Ink",
    hue: "Black",
    hex: "#292722",
    formula: "Tannin + iron chemistry",
    material: "Oak gall tannins reacted with iron-containing material to produce a dark writing medium.",
    behaviour: "Dark ink whose chemistry is historically important in manuscript practice.",
    transformation: "Extraction and reaction create a dark iron-tannin complex.",
    history: "A major historical writing ink.",
    source: "Chapter 6"
  },
  {
    id: "verdigris",
    name: "Verdigris",
    family: "Copper",
    hue: "Blue-green",
    hex: "#4B8A72",
    formula: "Copper acetate / basic copper salts",
    material: "A family of copper salts formed through copper corrosion processes.",
    behaviour: "Distinctive blue-green; historical recipes can be variable.",
    transformation: "Copper reacts with moisture, oxygen, salts and/or acetic environments.",
    history: "Historically important but requires careful handling.",
    source: "Chapter 6"
  }
];

export const recipes = [
  {
    id: "calcination",
    title: "Calcination of Ochre",
    chapter: "history",
    type: "Transformation",
    pigment: "Yellow Ochre → Red / Burnt Earth",
    difficulty: "Beginner",
    duration: "Variable",
    risk: "Heat + dust",
    ingredients: ["Finely ground ochre", "Optional: kaolin for press-cake method"],
    equipment: ["Heat-resistant PPE", "Cast-iron/carbon-steel pan OR kiln", "Tongs", "Jar", "Dust protection", "Ventilation"],
    science: "Heating can dehydrate iron oxyhydroxide phases and move goethite toward hematite, changing the colour toward warmer reds and browns.",
    steps: [
      "Prepare a dry, finely ground ochre. A levigated, iron-rich sample is preferable for a clear experiment.",
      "Choose a controlled heating method: pan, kiln, fire, or a small press-cake/direct-flame experiment.",
      "Heat gradually and observe the hue rather than assuming one final colour. The source notes that visible changes can begin at relatively low temperatures.",
      "For a pan trial, spread a small sample and stir so the material heats evenly. Remove tiny samples periodically for side-by-side comparison.",
      "For a kiln experiment, divide the sample into small portions and test different temperature intervals while following the kiln manufacturer's limits.",
      "Allow the material to cool completely before grinding or storing.",
      "Record the original colour, heating condition, final colour, texture and particle behaviour in the journal."
    ],
    note: "The source presents several heating approaches and emphasizes observation because colour changes depend on material and temperature."
  },
  {
    id: "watercolour",
    title: "Handmade Watercolour",
    chapter: "history",
    type: "Binder",
    pigment: "Any suitable finely ground pigment",
    difficulty: "Beginner",
    duration: "1 session + drying",
    risk: "Low; hygiene / dust",
    ingredients: ["Gum arabic", "Raw ground pigment", "Boiling water", "Honey", "1–2 drops essential oil"],
    equipment: ["Pestle and mortar", "Fine sieve or muslin", "Grinding slab and muller", "Watercolour pans"],
    science: "The binder holds pigment particles together and lets the dried paint re-wet. Pigment particle size and surface structure change the amount of binder required.",
    steps: [
      "Grind solid gum arabic to a powder.",
      "Dissolve gum arabic in hot water; the book gives a starting ratio of 1 part gum to 3 parts boiling water.",
      "Filter the solution to remove bark and other insoluble material.",
      "Add honey carefully. The source gives a starting point of roughly 8 parts gum solution to 1 part honey.",
      "Add a small amount of essential oil if desired for antimicrobial support.",
      "Place some binder on the grinding slab and incorporate pigment gradually with the muller.",
      "Grind in a figure-eight motion, scraping the mixture back toward the centre periodically.",
      "Adjust the pigment/binder balance until the mixture is homogeneous; different pigments need different ratios.",
      "Fill pans in thin layers and allow them to dry. Record whether cracking, tackiness, poor release or weak adhesion occurs."
    ],
    note: "The book stresses experimentation because every pigment can require a different binder ratio."
  },
  {
    id: "lake-standard",
    title: "Standard Lake Pigment",
    chapter: "science",
    type: "Lake",
    pigment: "Plant or animal dye → insoluble lake",
    difficulty: "Intermediate",
    duration: "Several hours + drying",
    risk: "Alkaline solutions + dust",
    ingredients: ["Dye source: 100 g dry plant/animal material (50 g if fresh)", "Alum: about 10 g starting point", "Potassium carbonate: about 5 g", "Distilled water"],
    equipment: ["Glass vessel", "Stainless stirrer", "Muslin", "Filter paper + funnel", "pH strips", "PPE"],
    science: "A soluble dye is converted into an insoluble pigment by fixing it to a mineral substrate. Alum supplies aluminium chemistry and carbonate shifts the solution toward precipitation.",
    steps: [
      "Extract colour from the dry source with a gentle simmer and strain the liquid.",
      "Prepare an alum solution and a separate potassium-carbonate solution.",
      "Combine the dye extract with the alum solution.",
      "Add the carbonate solution slowly while stirring. Observe clouding and precipitation rather than adding everything at once.",
      "Allow the precipitated material to settle.",
      "Filter the solid and wash it with distilled water to remove soluble residues.",
      "Dry the pigment thoroughly, then grind it if necessary.",
      "Record the exact ratios and compare colour strength. If the result is weak, adjust the dye extraction rather than automatically increasing alum."
    ],
    note: "The source recommends recording experimental quantities because lake formation is sensitive to ratios and source material."
  },
  {
    id: "woad",
    title: "Woad Pigment",
    chapter: "science",
    type: "Plant / Lake",
    pigment: "Woad (Isatis tinctoria)",
    difficulty: "Intermediate",
    duration: "1 day + drying",
    risk: "Alkaline solution + dust",
    ingredients: ["Fresh woad leaves: 500 g", "Sodium carbonate: 20 g", "Distilled water", "White vinegar: 100 ml"],
    equipment: ["Large inert pot", "Fine sieve/muslin", "Filter paper + funnel", "Stirrer", "Pestle and mortar", "Optional dehydrator", "PPE"],
    science: "Woad contains an indigo precursor. Extraction releases the colour chemistry; alkalization and vigorous aeration/oxidation help form insoluble blue indigotin.",
    steps: [
      "Wash and finely chop freshly harvested leaves.",
      "Steep the leaves in hot water around 80°C, keeping the extraction below a full boil.",
      "Strain the leaves and press out as much liquid as practical.",
      "Add sodium carbonate and verify the strongly alkaline direction of the process with pH paper.",
      "Aerate the solution vigorously to promote oxidation and blue pigment formation.",
      "Let the blue material form and settle, then collect it through fine filter paper.",
      "Rinse with distilled water to remove residual alkali.",
      "Use diluted vinegar as a neutralizing wash, followed by another distilled-water wash.",
      "Dry the pigment and grind gently. Store it dry and away from direct sunlight."
    ],
    note: "The source gives an approximate dry yield of 2–4 g and notes that leaf quality and extraction efficiency strongly affect yield."
  },
  {
    id: "weld",
    title: "Weld Lake Pigment",
    chapter: "science",
    type: "Plant / Lake",
    pigment: "Weld (Reseda luteola)",
    difficulty: "Intermediate",
    duration: "Several hours + drying",
    risk: "Alkaline solution + dust",
    ingredients: ["Weld plant material", "Alum", "Potassium/sodium carbonate as specified by the chosen laking setup", "Distilled water"],
    equipment: ["Heat-safe vessel", "Muslin/filter", "Glass beakers", "Stirrer", "pH strips", "PPE"],
    science: "The yellow dye is extracted from weld and converted from a soluble colourant into an insoluble lake by precipitation onto an aluminium-containing substrate.",
    steps: [
      "Prepare a weld dye extract by controlled hot-water extraction.",
      "Strain the plant material thoroughly.",
      "Prepare the alum and carbonate solutions separately.",
      "Combine the dye and alum phases.",
      "Add the alkaline solution gradually while stirring and watch for precipitation.",
      "Allow the lake to settle before filtration.",
      "Wash the collected pigment to reduce soluble salts.",
      "Dry completely and grind only after the pigment is fully dry.",
      "Record the colour and compare it with the liquid dye before precipitation."
    ],
    note: "Weld is also discussed historically in combination with woad to produce green textile colours."
  },
  {
    id: "madder",
    title: "Madder Pigment",
    chapter: "science",
    type: "Plant / Lake",
    pigment: "Madder root",
    difficulty: "Intermediate",
    duration: "Extended",
    risk: "Heat + dust",
    ingredients: ["Madder root", "Water", "Alum", "Carbonate/alkali according to the laking setup"],
    equipment: ["Heat-safe extraction vessel", "Filter", "Glass vessels", "Stirrer", "PPE"],
    science: "Madder contains red anthraquinone-type colourants. Extraction makes the colour available in solution; laking fixes it into an insoluble pigment.",
    steps: [
      "Prepare the madder material for extraction and use controlled heat to release the colourants.",
      "Filter the extract carefully.",
      "Prepare the mineral salt and alkaline components used for precipitation.",
      "Combine the extracted dye with the substrate-forming phase.",
      "Introduce the alkaline phase gradually and monitor precipitation.",
      "Allow the pigment to settle, then filter and wash.",
      "Dry completely before grinding.",
      "Document the source material, extraction conditions and final hue because these variables influence the lake."
    ],
    note: "The book treats fermentation and extraction as important parts of understanding plant colour chemistry."
  },
  {
    id: "lapis",
    title: "Lapis Lazuli Study",
    chapter: "journeys",
    type: "Mineral Processing",
    pigment: "Natural ultramarine",
    difficulty: "Advanced",
    duration: "Extended",
    risk: "Fine mineral dust",
    ingredients: ["Lapis lazuli", "Process-specific separating materials"],
    equipment: ["Mortar/pestle", "Grinding tools", "Fine separation tools", "Dust protection"],
    science: "Natural ultramarine is a complex sulfur-containing mineral system. The blue fraction must be separated and concentrated from the rock matrix.",
    steps: [
      "Select and document the raw lapis sample before processing.",
      "Reduce the material carefully rather than creating unnecessary airborne dust.",
      "Use staged grinding and separation to distinguish the blue-bearing fraction from lighter matrix minerals.",
      "Grade the material by particle size and colour intensity.",
      "Keep experimental fractions separate so the effect of processing can be compared.",
      "Prepare a small paint test with a compatible binder and record transparency, granulation and hue."
    ],
    note: "The book treats natural ultramarine as a journey through geology, material separation and art history rather than simply a colour recipe."
  },
  {
    id: "azurite",
    title: "Azurite Processing",
    chapter: "journeys",
    type: "Mineral Processing",
    pigment: "Azurite",
    difficulty: "Intermediate",
    duration: "1–2 sessions",
    risk: "Mineral dust",
    ingredients: ["Azurite mineral", "Water"],
    equipment: ["Mortar/pestle", "Levigation vessel", "Sieve/filter", "Dust protection"],
    science: "Grinding changes particle size; water-based levigation separates particles by settling behaviour and can remove unwanted coarse material.",
    steps: [
      "Break the mineral into manageable pieces.",
      "Grind gradually while controlling dust.",
      "Suspend the ground material in water.",
      "Allow heavier/coarser fractions to settle and decant or separate according to the desired grade.",
      "Repeat grading to create fractions with different particle sizes.",
      "Dry the selected fraction completely.",
      "Prepare a small paint swatch to compare colour and texture between grades."
    ],
    note: "The same material can produce visibly different paint behaviour depending on particle size."
  },
  {
    id: "casein",
    title: "Casein Binder",
    chapter: "mixing",
    type: "Binder",
    pigment: "Protein binder",
    difficulty: "Intermediate",
    duration: "1 session",
    risk: "Food-derived protein; hygiene",
    ingredients: ["Casein source", "Water", "Alkaline/activating component according to the binder method", "Pigment"],
    equipment: ["Mixing vessel", "Stirrer", "Mortar/pestle", "Brush and test surface"],
    science: "Casein is a milk protein that can form a strong film when activated and dried. It behaves differently from gum-based watercolour binders.",
    steps: [
      "Prepare and separate the casein protein according to the chosen historical binder method.",
      "Activate the protein so it becomes workable as a binder.",
      "Introduce pigment gradually rather than flooding the mixture with dry powder.",
      "Mull until the paint is uniform.",
      "Test adhesion, gloss, flexibility and re-solubility on the intended support.",
      "Adjust the binder/pigment balance and record the result."
    ],
    note: "Use the recipe as a historical/material-study reference and test compatibility on a sample before committing to artwork."
  },
  {
    id: "egg-tempera",
    title: "Egg Tempera",
    chapter: "mixing",
    type: "Binder",
    pigment: "Egg-based binder",
    difficulty: "Intermediate",
    duration: "1 session",
    risk: "Biological material / hygiene",
    ingredients: ["Egg component", "Pigment", "Water"],
    equipment: ["Small mixing palette", "Mortar/pestle or muller", "Brush", "Test panel"],
    science: "Egg proteins and lipids create a film as the medium dries. The balance between pigment and binder controls handling and surface character.",
    steps: [
      "Prepare a fresh small quantity of egg medium.",
      "Grind the pigment separately until smooth.",
      "Combine pigment and medium in small increments.",
      "Mull until the paint has an even consistency.",
      "Apply a thin test layer and allow it to dry.",
      "Observe opacity, gloss, adhesion and brush behaviour.",
      "Record the ratio used; different pigments need different amounts of medium."
    ],
    note: "Because organic binders can spoil, make small batches and use clean tools."
  },
  {
    id: "cochineal",
    title: "Contemporary Cochineal Lake",
    chapter: "mixing",
    type: "Animal / Lake",
    pigment: "Cochineal",
    difficulty: "Intermediate",
    duration: "Several hours + drying",
    risk: "Alkaline solution + biological material",
    ingredients: ["Cochineal colour source", "Alum", "Alkali/carbonate", "Water"],
    equipment: ["Heat-safe vessel", "Filter", "Glass vessels", "PPE"],
    science: "The insect-derived colourant is soluble until it is converted into a solid lake. Metal-ion/substrate chemistry fixes the colourant into an insoluble material.",
    steps: [
      "Extract the colourant from the cochineal source using controlled heat.",
      "Filter the extract.",
      "Prepare the mineral salt and alkaline phases separately.",
      "Combine the extract with the substrate-forming phase.",
      "Add the alkaline component gradually while observing the change.",
      "Settle, filter and wash the pigment.",
      "Dry and grind only when fully dry.",
      "Record hue and yield; source material and pH can change the result."
    ],
    note: "This recipe belongs to the book's wider discussion of appropriated colours and historical colour movement."
  },
  {
    id: "oak-gall",
    title: "Oak Gall Ink",
    chapter: "future",
    type: "Ink",
    pigment: "Tannin + iron complex",
    difficulty: "Intermediate",
    duration: "Several days depending on method",
    risk: "Iron salts / stains",
    ingredients: ["Oak galls", "Water", "Iron source", "Optional gum/binder"],
    equipment: ["Non-food vessel", "Filter", "Stirrer", "Ink bottle", "Gloves"],
    science: "Oak-gall tannins react with iron to create a dark iron-tannin colourant. The chemistry is fundamentally different from a simple carbon-black ink.",
    steps: [
      "Crush the oak galls to increase the extraction surface.",
      "Extract the tannins in water.",
      "Filter the liquid to remove solid plant matter.",
      "Introduce the iron component gradually and observe the darkening reaction.",
      "Allow the mixture to mature according to the chosen historical approach.",
      "Filter again before bottling.",
      "Test on the intended paper and monitor drying, flow and long-term behaviour."
    ],
    note: "Use dedicated equipment: historical ink chemistry can stain and should not be prepared in food cookware."
  },
  {
    id: "verdigris",
    title: "Historical Verdigris Study",
    chapter: "future",
    type: "Copper Pigment",
    pigment: "Copper salts",
    difficulty: "Advanced",
    duration: "Days to weeks",
    risk: "Copper compounds + acids + dust",
    ingredients: ["Copper material", "Salt/moisture system or acetic environment depending on historical variant"],
    equipment: ["Dedicated non-food container", "Scraper", "Mortar/pestle", "Gloves", "Eye protection", "Ventilation"],
    science: "Verdigris is a family of copper salts formed as copper oxidizes and reacts with moisture, carbon dioxide, salts and/or acetic conditions.",
    steps: [
      "Select the historical variant to study and keep all materials clearly labelled.",
      "Expose the copper to the chosen controlled environment without using food equipment.",
      "Allow the copper salts to form over time; do not rush the corrosion process.",
      "Collect the formed material carefully and avoid generating airborne dust.",
      "Grind only in a controlled, ventilated setup.",
      "Prepare a tiny test swatch with a suitable binder.",
      "Record the copper source, exposure environment, time and resulting hue."
    ],
    note: "The source emphasizes that historical verdigris recipes are variable and can be difficult to reproduce exactly."
  },
  {
    id: "local-binder",
    title: "Local Watercolour Binder",
    chapter: "future",
    type: "Binder",
    pigment: "Prunus sap binder",
    difficulty: "Beginner",
    duration: "1 session",
    risk: "Plant material / hygiene",
    ingredients: ["Sap from fruit-bearing Prunus species", "Distilled water", "Optional honey or vegetable glycerin", "Optional essential oil"],
    equipment: ["Small knife", "Receptacle", "Gloves", "Funnel", "Muslin", "Pestle/mortar"],
    science: "Water-soluble tree saps can act as local alternatives to gum arabic, although their binding strength differs.",
    steps: [
      "Collect suitable fresh sap responsibly from a fruit-bearing Prunus species.",
      "Soak hardened sap in hot water at roughly a 1:1 starting ratio.",
      "Stir until dissolved, then filter through muslin.",
      "Adjust with water until the binder becomes smooth and syrup-like rather than excessively thick.",
      "Optionally add a small amount of honey or vegetable glycerin to reduce brittleness; keep the addition modest.",
      "Combine binder and powdered pigment in small amounts and mull.",
      "Test on paper or board and adjust the ratio based on gloss, tackiness and pigment adhesion.",
      "Store sealed and cool; refrigeration can help slow mould growth."
    ],
    note: "The source notes that cherry sap is weaker than gum arabic, so the final concentration and pigment ratio need experimentation."
  }
];


export const colorPigmentChart = [
  {name:"Alizarin crimson",family:"Red",color:"blue-leaning red",type:"organic",transparency:"transparent",staining:"high",lightfastness:"II or III"},
  {name:"Cadmium red",family:"Red",color:"yellow-leaning red",type:"inorganic",transparency:"opaque",staining:"low",lightfastness:"I"},
  {name:"Quinacridone red",family:"Red",color:"blue-leaning red",type:"synthetic organic",transparency:"transparent",staining:"high",lightfastness:"I"},
  {name:"Naphthol red",family:"Red",color:"yellow-leaning red",type:"synthetic organic",transparency:"semi-opaque",staining:"high",lightfastness:"I"},
  {name:"Perylene red",family:"Red",color:"slightly blue-leaning red",type:"synthetic organic",transparency:"transparent",staining:"medium",lightfastness:"I"},
  {name:"Pyrrole red",family:"Red",color:"yellow-leaning red",type:"synthetic organic",transparency:"semi-opaque",staining:"high",lightfastness:"I"},
  {name:"Dioxazine purple",family:"Purple",color:"blue-leaning violet",type:"synthetic organic",transparency:"transparent",staining:"high",lightfastness:"I"},
  {name:"Quinacridone violet / Quinacridone magenta",family:"Purple",color:"red-leaning violet",type:"synthetic organic",transparency:"transparent",staining:"medium",lightfastness:"I"},
  {name:"Ultramarine blue",family:"Blue",color:"red-leaning blue",type:"inorganic",transparency:"semi-transparent",staining:"low",lightfastness:"I"},
  {name:"Phthalo blue",family:"Blue",color:"yellow-leaning or red-leaning",type:"synthetic organic",transparency:"transparent",staining:"high",lightfastness:"I"},
  {name:"Manganese blue",family:"Blue",color:"yellow-leaning blue",type:"inorganic",transparency:"transparent",staining:"high",lightfastness:"I"},
  {name:"Cobalt blue",family:"Blue",color:"slightly yellow-leaning blue",type:"inorganic",transparency:"semi-transparent",staining:"low",lightfastness:"I"},
  {name:"Cerulean blue",family:"Blue",color:"yellow-leaning blue",type:"inorganic",transparency:"semi-transparent",staining:"low",lightfastness:"I"},
  {name:"Phthalo green",family:"Green",color:"blue-leaning green",type:"synthetic organic",transparency:"transparent",staining:"high",lightfastness:"I"},
  {name:"Cobalt green",family:"Green",color:"yellow-leaning green",type:"inorganic",transparency:"semi-transparent",staining:"low",lightfastness:"I"},
  {name:"Terre verte",family:"Green",color:"olive green",type:"inorganic",transparency:"transparent",staining:"low",lightfastness:"I"},
  {name:"Viridian",family:"Green",color:"blue-leaning green",type:"inorganic",transparency:"transparent",staining:"low",lightfastness:"I"},
  {name:"Aureolin",family:"Yellow",color:"primary yellow",type:"inorganic",transparency:"transparent",staining:"low",lightfastness:"II"},
  {name:"Hansa yellow / Lemon yellow",family:"Yellow",color:"bright blue-leaning yellow",type:"synthetic organic",transparency:"semi-transparent",staining:"low to medium",lightfastness:"II"},
  {name:"Nickel azo yellow",family:"Yellow",color:"brownish yellow",type:"synthetic organic",transparency:"transparent",staining:"medium",lightfastness:"I"},
  {name:"Cadmium yellow",family:"Yellow",color:"red-leaning yellow",type:"inorganic",transparency:"opaque",staining:"low",lightfastness:"I"},
  {name:"Burnt sienna",family:"Earth",color:"red-leaning brown",type:"inorganic",transparency:"transparent",staining:"low",lightfastness:"I"},
  {name:"Burnt umber",family:"Earth",color:"red-leaning brown",type:"inorganic",transparency:"transparent",staining:"low",lightfastness:"I"},
  {name:"Raw sienna",family:"Earth",color:"yellow-leaning brown",type:"inorganic",transparency:"transparent",staining:"low",lightfastness:"I"},
  {name:"Raw umber",family:"Earth",color:"varied; often gray-or green-leaning brown",type:"inorganic",transparency:"transparent",staining:"low",lightfastness:"I"},
  {name:"Yellow ochre",family:"Earth",color:"orange-leaning yellow",type:"inorganic",transparency:"opaque",staining:"low",lightfastness:"I"},
  {name:"Ivory or bone black",family:"Black",color:"warm black",type:"inorganic",transparency:"semi-transparent",staining:"high",lightfastness:"I"},
  {name:"Mars black",family:"Black",color:"cool black",type:"inorganic",transparency:"opaque",staining:"high",lightfastness:"I"},
  {name:"Titanium white",family:"White",color:"blue-leaning white",type:"inorganic",transparency:"opaque",staining:"N/A",lightfastness:"I"},
  {name:"Zinc white / Chinese white",family:"White",color:"blue-leaning white",type:"inorganic",transparency:"semi-opaque",staining:"N/A",lightfastness:"I"}
];

export const whereToUse = [
  {id:"watercolor",media:"Watercolor",title:"Watercolor language",mmTitle:"Watercolor မှာ အသုံးချနည်း",text:"Use transparency, staining behaviour, granulation and water-to-pigment ratio as primary decisions. Transparent colours are especially useful for luminous washes and glazing; staining colours are harder to lift.",mm:"Watercolor မှာ transparency၊ staining နဲ့ granulation ကို အဓိကစဉ်းစားပါ။ Transparent pigment တွေက wash/glaze အတွက်ကောင်းပြီး staining pigment တွေက စက္ကူပေါ်ကနေ ပြန်ဖယ်ရခက်ပါတယ်။",tips:["Transparent pigments → luminous washes / glazing","Staining pigments → decisive colour passages","Granulating pigments → texture, atmosphere, mineral effects","Warm/cool pairs → depth and colour temperature"]},
  {id:"acrylic",media:"Acrylic",title:"Acrylic language",mmTitle:"Acrylic မှာ အသုံးချနည်း",text:"Acrylic supports direct mixing, palette-knife work, layering and glazing. Use opaque colours for coverage and focal passages; transparent colours can build luminous layers.",mm:"Acrylic မှာ palette ပေါ်တိုက်ရိုက်ရောစပ်ခြင်း၊ palette knife၊ layer နဲ့ glaze တွေကို လွယ်လွယ်ကူကူ အသုံးချနိုင်ပါတယ်။ Opaque pigment က coverage ကောင်းပြီး transparent pigment က luminous layer တည်ဆောက်ဖို့ သင့်တော်ပါတယ်။",tips:["Opaque → block-in / foreground / highlights","Transparent → glazing / colour unity","Palette knife → thick, graphic, broken colour","Dry between glazes → cleaner layered colour"]},
  {id:"oil",media:"Oil",title:"Oil language",mmTitle:"Oil Painting မှာ အသုံးချနည်း",text:"Oil paint is slow-drying and luminous. Build colour through mixtures, scumbling and glazes; judge value and temperature alongside hue.",mm:"Oil paint က ခြောက်ချိန်နှေးပြီး luminous ဖြစ်ပါတယ်။ Mixture၊ scumbling၊ glaze တွေနဲ့ အရောင်တည်ဆောက်နိုင်ပြီး hue တစ်ခုတည်းမဟုတ်ဘဲ value နဲ့ temperature ကိုပါ တစ်ပြိုင်နက်ကြည့်ပါ။",tips:["Transparent pigments → deep glazes","Opaque pigments → body colour / lights","Warm-cool contrast → focus and spatial depth","Neutral + saturated colour → hierarchy"]},
  {id:"landscape",media:"Application",title:"Landscape & atmosphere",mmTitle:"Landscape နဲ့ အလင်းအဝေး",text:"Foreground colours can be warmer, brighter and more detailed. Distant objects generally become cooler, bluer/greyer, lower in contrast and less detailed.",mm:"ရှေ့ပိုင်းမှာ အရောင်ပိုတောက်၊ ပိုနွေးပြီး detail ပိုများနိုင်ပါတယ်။ အဝေးသွားလေလေ အရောင်က ပိုအေး၊ ပိုပြာ/မီးခိုးဆန်၊ contrast နည်းပြီး detail လျော့သွားစေခြင်းက atmospheric depth ကို ဖန်တီးပေးပါတယ်။",tips:["Foreground → brighter / warmer / higher contrast","Distance → cooler / muted / lower contrast","Warm light → often cooler shadows","Cool light → often warmer shadows"]},
  {id:"composition",media:"Application",title:"Composition & focal point",mmTitle:"Composition မှာ အရောင်သုံးနည်း",text:"Value, edge, chroma and temperature contrast can direct the viewer's eye. A bright saturated accent can command attention when surrounded by quieter colour.",mm:"Value၊ edge၊ chroma နဲ့ temperature contrast တွေကို အသုံးချပြီး ကြည့်သူရဲ့မျက်စိကို focal point ဆီ ဦးတည်နိုင်ပါတယ်။ အရောင်တောက်တောက်တစ်စက်ကို muted field ထဲ ထားရင် အာရုံစိုက်မှု တိုးလာနိုင်ပါတယ်။",tips:["Light next to dark → value focus","Crisp edge → visual focus","Saturated next to neutral → chroma focus","Warm inside cool field → temperature focus"]},
  {id:"mixing",media:"Mixing",title:"Mixing intelligence",mmTitle:"အရောင်ရောစပ်ရာမှာ",text:"Limit complex mixtures. The source recommends two or three pigments as a useful starting discipline, because too many pigments can produce muddy results.",mm:"အရောင်ရောစပ်ရာမှာ pigment နှစ်မျိုး၊ သုံးမျိုးကနေ စတင်တာက ရလဒ်ကို ရှင်းလင်းစေပါတယ်။ Pigment များလွန်းရင် အရောင်ညစ်သွားနိုင်ပါတယ်။",tips:["Warm + cool primaries expand mixing range","Complementary colours can neutralize","Ratios matter as much as pigment choice","Always make a small swatch before committing"]}
];

export const colorTheory = [
  ["Hue","The colour family: red, yellow, green, blue, violet, etc.","Hue ဆိုတာ အရောင်မိသားစုကို ဆိုလိုပါတယ် — အနီ၊ အဝါ၊ အစိမ်း၊ အပြာ၊ ခရမ်း စသည်ဖြင့်။"],
  ["Saturation / Chroma","How brilliant or muted a colour appears.","Saturation/Chroma က အရောင်ရဲ့ တောက်ပမှုနဲ့ ညစ်မှိုင်းမှုအဆင့်ကို ဖော်ပြပါတယ်။"],
  ["Value","The lightness or darkness of a colour.","Value က အရောင်ရဲ့ အလင်း/အမှောင် အဆင့်ပါ။ ပန်းချီဖတ်ရလွယ်မလွယ်အတွက် အလွန်အရေးကြီးပါတယ်။"],
  ["Temperature","Warm and cool relationships affect depth, focus and mood.","Warm/Cool temperature က နေရာအဝေးအနီး၊ focal point နဲ့ mood ကို ပြောင်းလဲစေပါတယ်။"],
  ["Complementary","Colours opposite each other on the wheel; strong contrast and useful for neutralizing.","Color wheel ပေါ်မှာ ဆန့်ကျင်ဘက်နေရာက အရောင်နှစ်ခုပါ။ Contrast ပြင်းပြီး neutralization အတွက် အသုံးဝင်ပါတယ်။"],
  ["Analogous","Neighbouring hues that create unity.","ဘေးချင်းကပ် hue တွေကို တွဲသုံးတာဖြစ်ပြီး harmony နဲ့ unity ကောင်းစေပါတယ်။"],
  ["Monochromatic","One hue with its tints, tones and shades.","Hue တစ်မျိုးတည်းကို tint၊ tone၊ shade အမျိုးမျိုးနဲ့ တည်ဆောက်တာပါ။"],
  ["Triadic","Three hues spaced evenly around the wheel.","Color wheel ပေါ်မှာ အကွာအဝေးညီတဲ့ hue သုံးမျိုးကို အသုံးပြုတဲ့ scheme ပါ။"],
  ["Split Complementary","A base hue plus the two neighbours of its complement.","မူလ hue တစ်ခုနဲ့ complementary ရဲ့ ဘေးနှစ်ဖက် hue နှစ်ခုကို တွဲသုံးတဲ့ scheme ပါ။"],
  ["Tetrad","Two hue pairs and their complements; requires hierarchy.","Hue နှစ်စုံနဲ့ complementary ဆက်စပ်မှုတွေကို သုံးတာဖြစ်လို့ dominant colour သတ်မှတ်ဖို့လိုပါတယ်။"]
];

export const sources = [
  {title:"The Natural Pigment Handbook — Lucy Mayes",kind:"Book / attached source",note:"Primary making, pigment-process, material and historical study source supplied in the project."},
  {title:"Color: A Practical Guide to Color and Its Uses in Art",kind:"Book / attached source",note:"Color theory, pigment chart, mixing, psychology, composition and medium-specific painting practice."},
  {title:"Colour Pigment Manufacturers’ Association — pigments.org",kind:"Open web reference",url:"https://www.pigments.org/",note:"Pigment definition, organic/inorganic classification, historical development, lakes, crystal structure, dispersion and industrial pigment chemistry."}
];

export const glossary = [
  ["Pigment", "A finely divided colouring material that is generally insoluble in the medium in which it is used."],
  ["Dye", "A colourant that is soluble in the relevant medium; laking can convert a soluble dye into an insoluble pigment."],
  ["Lake", "An insoluble pigment made by fixing a soluble colourant onto a solid substrate."],
  ["Calcination", "Controlled heating used to change a material's chemical/mineral state; in iron earths it can drive dehydration and colour change."],
  ["Levigation", "Using water and settling behaviour to grade mineral particles and remove or separate unwanted fractions."],
  ["Precipitate", "A solid that forms from a solution during a chemical reaction or change in conditions."],
  ["Granulation", "Visible particle texture in paint, influenced by particle size, shape, density and binder."],
  ["Refractive index", "A measure of how light bends through a material; it influences scattering, opacity and visual brilliance."],
  ["Binder", "The medium that holds pigment particles together and helps them adhere to a support."],
  ["Mulling", "Grinding pigment into a binder on a slab to improve dispersion and consistency."]
];

export const safety = [
  "Treat pigment powders as airborne particulate hazards: avoid breathing dust and use appropriate respiratory protection.",
  "Use eye protection and gloves when handling powders, alkaline solutions, metal salts or hot material.",
  "Heat pigment only with appropriate heat-resistant equipment, ventilation and a controlled setup.",
  "Never use food cookware, utensils or storage containers for pigment chemistry.",
  "Label every experiment with material, date, quantities, pH (when relevant), heat conditions and observations.",
  "Copper compounds, strong alkalis, acids and other chemicals require appropriate local hazardous-material handling.",
  "Do not assume a natural material is automatically non-toxic. Research the specific material before handling.",
  "Use ethical foraging practices and avoid harvesting protected, scarce or culturally significant materials.",
  "Treat historical recipes as material studies: reproduce them at small scale and document uncertainty.",
  "Test finished paint on a sample support before using it on an important artwork."
];
