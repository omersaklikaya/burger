export interface Product {
  slug: string;
  name: { tr: string; en: string };
  category: string;
  description: { tr: string; en: string };
  ingredients: string[];
  calories: number;
  tags: string[];
  price: number;
  image?: string;
}

export const products: Product[] = [
  {
    slug: "bulls-burger",
    name: { tr: "Bulls Burger", en: "Bulls Burger" },
    category: "Burgerler",
    description: {
      tr: "Çift smash köfte, karamelize soğan, turşu ve Bulls imzalı özel sos ile klasik ama güçlü bir imza burger.",
      en: "Double smash patty, caramelized onions, pickles and Bulls signature sauce – a classic but bold signature burger."
    },
    ingredients: [
      "Çift smash dana köfte",
      "Cheddar peyniri",
      "Karamelize soğan",
      "Turşu dilimleri",
      "Bulls özel sos",
      "Tereyağda kızarmış brioche ekmek"
    ],
    calories: 780,
    tags: ["signature"],
    price: 295,
    image: "/images/burgers/bulls-burger.png"
  },
  {
    slug: "kafayi-yediren-cheeseburger",
    name: { tr: "Kafayı Yediren Cheeseburger", en: "Cheese Madness Burger" },
    category: "Burgerler",
    description: {
      tr: "Bol eriyik peynir odaklı; taze soğan dokunuşu ve hafif sarımsaklı mayo ile akıp gidiyor.",
      en: "Cheese-forward, melty and rich, balanced with fresh onion and a light garlic mayo."
    },
    ingredients: [
      "Çift dana köfte",
      "Cheddar + gouda karışımı",
      "Taze soğan (ince dilim)",
      "Turşu dilimleri",
      "Marul",
      "Hafif sarımsaklı mayo"
    ],
    calories: 820,
    tags: ["cheesy"],
    price: 305,
    image: "/images/burgers/kafayi-yediren-cheeseburger.png"
  },
  {
    slug: "double-trouble",
    name: { tr: "Double Trouble", en: "Double Trouble" },
    category: "Burgerler",
    description: {
      tr: "İçinde gizli çıtır soğan halkası olan, tok ve çıtır karakterli doyurucu burger.",
      en: "A filling burger with a hidden crispy onion ring for that extra crunch."
    },
    ingredients: [
      "İki kalın dana köfte",
      "Cheddar peyniri",
      "Dil peyniri",
      "Domates",
      "Marul",
      "Çıtır soğan halkası",
      "BBQ-mayo sos"
    ],
    calories: 980,
    tags: ["filling", "crispy"],
    price: 345,
    image: "/images/burgers/double-trouble.png"
  },
  {
    slug: "truf-mu-dedim",
    name: { tr: "Trüf mü Dedim?", en: "Did I Say Truffle?" },
    category: "Burgerler",
    description: {
      tr: "Mantar sote, isli kaşar ve hafif trüf mayo ile gurme ama boğmayan bir tat.",
      en: "Sautéed mushrooms, smoked cheese and a subtle truffle mayo—gourmet without being heavy."
    },
    ingredients: [
      "Dana köfte",
      "İsli kaşar",
      "Mantar sote",
      "Karamelize soğan",
      "Trüf aromalı mayo",
      "Brioche ekmek"
    ],
    calories: 860,
    tags: ["gourmet"],
    price: 365,
    image: "/images/burgers/truf-mu-dedim.png"
  },
  {
    slug: "sokagin-bbqu",
    name: { tr: "Sokağın BBQ'u", en: "Street BBQ" },
    category: "Burgerler",
    description: {
      tr: "Köftenin üstünde az miktar lif lif BBQ et; tatlı-dumanlı sos ile farklı bir seviye.",
      en: "A touch of shredded BBQ beef on top, finished with a sweet-smoky sauce."
    },
    ingredients: [
      "Dana köfte",
      "Cheddar peyniri",
      "Lif lif BBQ et (az miktar)",
      "Turşu dilimleri",
      "Kırmızı soğan",
      "Ev yapımı BBQ sos"
    ],
    calories: 910,
    tags: ["bbq"],
    price: 355,
    image: "/images/burgers/sokagin-bbqu.png"
  },
  {
    slug: "jalapeno-crisis",
    name: { tr: "Jalapeno Crisis", en: "Jalapeno Crisis" },
    category: "Burgerler",
    description: {
      tr: "Jalapeno ve chipotle acısıyla birlikte, ufak nacho çıtırtılarıyla sürprizli bir burger.",
      en: "Chipotle heat, jalapenos and tiny nacho crunch for a surprising bite."
    },
    ingredients: [
      "Dana köfte",
      "Cheddar peyniri",
      "Jalapeno turşusu",
      "Chipotle sos",
      "Acı mayo",
      "Nacho kırığı (az miktar)"
    ],
    calories: 870,
    tags: ["spicy", "crispy"],
    price: 335,
    image: "/images/burgers/jalepano-crisis.png"
  },
  {
    slug: "anadolu-smokehouse",
    name: { tr: "Anadolu Smokehouse", en: "Anatolian Smokehouse" },
    category: "Burgerler",
    description: {
      tr: "Izgara patlıcan, eski kaşar ve yoğurtlu sosla yerel bir dokunuş: farklı ama dengeli.",
      en: "Grilled eggplant, aged cheese and a yogurt-herb sauce—local flair, well balanced."
    },
    ingredients: [
      "Dana köfte",
      "Eski kaşar",
      "Izgara patlıcan şerit",
      "Köy biberi turşusu",
      "Yoğurtlu otlu sos",
      "Hafif dumanlı yağ dokunuşu"
    ],
    calories: 840,
    tags: ["gourmet"],
    price: 345,
    image: "/images/burgers/anadolu-smokehouse.png"
  },
  {
    slug: "crispy-chicken-hustle",
    name: { tr: "Crispy Chicken Hustle", en: "Crispy Chicken Hustle" },
    category: "Burgerler",
    description: {
      tr: "Çıtır tavuk, turşu ve ballı hardal-mayo ile tatlı-tuzlu dengesi yakalayan net bir favori.",
      en: "Crispy chicken, pickles and honey-mustard mayo—clean, sweet-salty balance."
    },
    ingredients: [
      "Çıtır tavuk panel",
      "Iceberg marul",
      "Turşu dilimleri",
      "Ballı hardal-mayo sos"
    ],
    calories: 760,
    tags: ["chicken", "crispy"],
    price: 315,
    image: "/images/burgers/crispy-chicken-hustle.png"
  },
  {
    slug: "vege-smash",
    name: { tr: "Vege Smash", en: "Veggie Smash" },
    category: "Burgerler",
    description: {
      tr: "Sebze köftesi, turşu ve otlu sosla hafif ama karakterli bir alternatif.",
      en: "A light but flavorful veggie option with pickles and a herb-forward sauce."
    },
    ingredients: [
      "Sebze köftesi (nohut/mercimek bazlı)",
      "Cheddar (opsiyonel)",
      "Domates",
      "Marul",
      "Turşu dilimleri",
      "Yoğurtlu otlu sos"
    ],
    calories: 640,
    tags: ["vegetarian"],
    price: 285,
    image: "/images/burgers/vege-smash.png"
  },

  // Hot Doglar
  {
    slug: "bulls-classic-dog",
    name: { tr: "Bulls Classic Dog", en: "Bulls Classic Dog" },
    category: "Hot Doglar",
    description: {
      tr: "Kızarmış ekmek, dana sosis, soğan, turşu ve Bulls imzalı sos ile sade ama tok bir klasik.",
      en: "Toasted bun, beef sausage, onions, pickles and Bulls signature sauce – a clean, filling classic."
    },
    ingredients: [
      "Kızarmış hot dog ekmeği",
      "Dana sosis",
      "İnce doğranmış soğan",
      "Turşu dilimleri",
      "Bulls özel sos"
    ],
    calories: 610,
    tags: ["hotdog", "classic"],
    price: 245,
    image: "/images/hotdogs/bulls-classic-dog.jpg"
  },
  {
    slug: "street-bbq-dog",
    name: { tr: "Street BBQ Dog", en: "Street BBQ Dog" },
    category: "Hot Doglar",
    description: {
      tr: "Üstünde az miktar lif lif BBQ et, karamelize soğan ve dumanlı sos ile sokak stili hot dog.",
      en: "Beef sausage topped with a touch of shredded BBQ beef, caramelized onions and smoky sauce."
    },
    ingredients: [
      "Dana sosis",
      "Lif lif BBQ et (az miktar)",
      "Karamelize soğan",
      "Turşu",
      "BBQ sos",
      "Mayonez"
    ],
    calories: 680,
    tags: ["hotdog", "bbq"],
    price: 265,
    image: "/images/hotdogs/street-bbq-dog.jpg"
  },
  {
    slug: "jalapeno-crisis-dog",
    name: { tr: "Jalapeno Crisis Dog", en: "Jalapeno Crisis Dog" },
    category: "Hot Doglar",
    description: {
      tr: "Jalapeno, çedar sos ve nacho kırıklarıyla acı ve çıtır sevenlere.",
      en: "Jalapenos, cheddar sauce and nacho crumbs for heat and crunch."
    },
    ingredients: [
      "Dana sosis",
      "Jalapeno dilimleri",
      "Çedar sos",
      "Nacho kırığı",
      "Chipotle sos",
      "Acı mayo"
    ],
    calories: 670,
    tags: ["hotdog", "spicy"],
    price: 265,
    image: "/images/hotdogs/jalapeno-crisis-dog.jpg"
  },
  {
    slug: "anadolu-smoke-dog",
    name: { tr: "Anadolu Smoke Dog", en: "Anatolian Smoke Dog" },
    category: "Hot Doglar",
    description: {
      tr: "Izgara patlıcan, eski kaşar ve yoğurtlu sosla Anadolu dokunuşlu hot dog.",
      en: "Grilled eggplant, aged cheese and yogurt sauce for an Anatolian twist."
    },
    ingredients: [
      "Dana sosis",
      "Izgara patlıcan şerit",
      "Eski kaşar",
      "Köy biberi turşusu",
      "Yoğurtlu sarımsaklı sos"
    ],
    calories: 650,
    tags: ["hotdog", "gourmet"],
    price: 275,
    image: "/images/hotdogs/anadolu-smoke-dog.jpg"
  },
  {
    slug: "crispy-chicken-dog",
    name: { tr: "Crispy Chicken Dog", en: "Crispy Chicken Dog" },
    category: "Hot Doglar",
    description: {
      tr: "Uzun çıtır tavuk panel, marul ve ballı hardal-mayo ile tatlı-tuzlu dengeli bir alternatif.",
      en: "Long crispy chicken strip, lettuce and honey-mustard mayo for a sweet-salty balance."
    },
    ingredients: [
      "Çıtır tavuk strip",
      "Kızarmış hot dog ekmeği",
      "Iceberg marul",
      "Turşu",
      "Ballı hardal-mayo sos"
    ],
    calories: 640,
    tags: ["hotdog", "chicken"],
    price: 255,
    image: "/images/hotdogs/crispy-chicken-dog.jpg"
  },

  // Atıştırmalıklar
  {
    slug: "classic-fries",
    name: { tr: "Classic Fries", en: "Classic Fries" },
    category: "Atıştırmalıklar",
    description: {
      tr: "İnce kesim, çıtır ve net tuz dengesi. İstersen OG baharatı ile.",
      en: "Thin-cut, crispy fries with a clean salt balance. Optional OG seasoning."
    },
    ingredients: ["Patates", "Tuz", "İsteğe bağlı OG baharat karışımı"],
    calories: 420,
    tags: ["fries"],
    price: 125,
    image: "/images/others/crispy-fries.png"
  },
  {
    slug: "loaded-fries",
    name: { tr: "Loaded Fries", en: "Loaded Fries" },
    category: "Atıştırmalıklar",
    description: {
      tr: "Cheddar sos, jalapeno ve yeşil soğanla tam ‘yanına bir şey’ değil, başlı başına olay.",
      en: "Cheddar sauce, jalapenos and green onions—this is a main-character side."
    },
    ingredients: ["Patates", "Cheddar sos", "Jalapeno", "Yeşil soğan"],
    calories: 640,
    tags: ["fries", "cheesy"],
    price: 165,
    image: "/images/others/loaded-fries.png"
  },
  {
    slug: "onion-rings",
    name: { tr: "Soğan Halkası", en: "Onion Rings" },
    category: "Atıştırmalıklar",
    description: {
      tr: "Kalın kesim, çıtır kaplama. Yanına BBQ veya sarımsaklı mayo gider.",
      en: "Thick-cut, crispy battered onion rings. Perfect with BBQ or garlic mayo."
    },
    ingredients: ["Soğan", "Çıtır kaplama", "Baharat karışımı"],
    calories: 520,
    tags: ["crispy"],
    price: 155,
    image: "/images/others/sogan-halkasi.jpg"
  },
  {
    slug: "mac-cheese-balls",
    name: { tr: "Mac & Cheese Balls", en: "Mac & Cheese Balls" },
    category: "Atıştırmalıklar",
    description: {
      tr: "Dışı çıtır, içi akışkan mac&cheese. Yanında hafif acı sosla efsane olur.",
      en: "Crispy outside, creamy mac & cheese inside—great with a light spicy dip."
    },
    ingredients: ["Makarnalı peynir dolgusu", "Çıtır kaplama"],
    calories: 610,
    tags: ["cheesy", "crispy"],
    price: 175,
    image: "/images/others/mac-cheese-balls.jpg"
  },
  {
    slug: "mozzarella-sticks",
    name: { tr: "Mozzarella Sticks", en: "Mozzarella Sticks" },
    category: "Atıştırmalıklar",
    description: {
      tr: "Uzayan mozzarella, çıtır kaplama. Yanında marinara sos.",
      en: "Stretchy mozzarella in a crispy coat, served with marinara sauce."
    },
    ingredients: ["Mozzarella", "Çıtır kaplama", "Marinara sos (yanında)"],
    calories: 590,
    tags: ["cheesy", "crispy"],
    price: 185,
    image: "/images/others/mozarella-sticks.jpg"
  },

  // Milkshake
  {
    slug: "vanilla-classic-shake",
    name: { tr: "Vanilla Classic Shake", en: "Vanilla Classic Shake" },
    category: "Milkshake",
    description: {
      tr: "Klasik vanilya: kremamsı, net ve tam kıvamında.",
      en: "Classic vanilla: creamy, clean, perfectly thick."
    },
    ingredients: ["Süt", "Vanilya dondurma", "Kremamsı baz"],
    calories: 520,
    tags: ["shake"],
    price: 160,
    image: "/images/others/vanilla-classic-shake.jpg"
  },
  {
    slug: "double-chocolate-shake",
    name: { tr: "Double Chocolate Shake", en: "Double Chocolate Shake" },
    category: "Milkshake",
    description: {
      tr: "Kakao baz + bitter parçalarla yoğun çikolata sevenlere.",
      en: "Cocoa base with dark chocolate bits for serious chocolate lovers."
    },
    ingredients: ["Süt", "Çikolata dondurma", "Kakao", "Bitter çikolata parçaları"],
    calories: 590,
    tags: ["shake", "chocolate"],
    price: 175,
    image: "/images/others/double-chocolate-shake.jpg"
  },
  {
    slug: "strawberry-jam-shake",
    name: { tr: "Strawberry Jam Shake", en: "Strawberry Jam Shake" },
    category: "Milkshake",
    description: {
      tr: "Çilek püresiyle meyvemsi ve ferah; üstünde çilek swirl.",
      en: "Fruity and fresh with strawberry purée and a strawberry swirl on top."
    },
    ingredients: ["Süt", "Vanilya dondurma", "Çilek püresi"],
    calories: 540,
    tags: ["shake", "strawberry"],
    price: 175,
    image: "/images/others/strawberry-jam-shake.jpg"
  },
  {
    slug: "biscoff-crunch-shake",
    name: { tr: "Biscoff Crunch Shake", en: "Biscoff Crunch Shake" },
    category: "Milkshake",
    description: {
      tr: "Bisküvi ezmesi ve kıtır dokunuş: tatlı menüsünün en konuşulanı olmaya aday.",
      en: "Cookie butter with a crunchy finish—built to be the most talked-about shake."
    },
    ingredients: ["Süt", "Vanilya dondurma", "Bisküvi ezmesi", "Bisküvi kırığı"],
    calories: 680,
    tags: ["shake"],
    price: 195,
    image: "/images/others/biscoff-crunch-shake.jpg"
  },

  // Tatlılar
  {
    slug: "brownie-parca-parca",
    name: { tr: "Brownie Parça Parça", en: "Chunky Brownie" },
    category: "Tatlılar",
    description: {
      tr: "Çikolata yoğun, içi nemli brownie. Yanına sade top ile mükemmel.",
      en: "Rich chocolate, fudgy brownie. Perfect with a simple scoop on the side."
    },
    ingredients: ["Brownie", "Çikolata sos (opsiyonel)", "Yanında sade top (opsiyonel)"],
    calories: 510,
    tags: ["dessert", "chocolate"],
    price: 165,
    image: "/images/others/brownie-parca-parca.jpg"
  },
  {
    slug: "cheesecake-slice",
    name: { tr: "Cheesecake Slice", en: "Cheesecake Slice" },
    category: "Tatlılar",
    description: {
      tr: "New York usulü cheesecake dilimi. Üstüne çilek veya karamel seç.",
      en: "New York–style cheesecake slice. Choose strawberry or caramel on top."
    },
    ingredients: ["Cheesecake", "Çilek sos veya karamel sos"],
    calories: 560,
    tags: ["dessert"],
    price: 185,
    image: "/images/others/cheesecake-slice.jpg"
  },
  {
    slug: "mini-donut-box",
    name: { tr: "Mini Donut Box", en: "Mini Donut Box" },
    category: "Tatlılar",
    description: {
      tr: "Kutu kutu mutluluk: mini donutlar, üstünde pudra ve sos dokunuşu.",
      en: "Box of happiness: mini donuts finished with powdered sugar and sauce."
    },
    ingredients: ["Mini donut (3-4 adet)", "Pudra şekeri", "Çikolata veya karamel sos"],
    calories: 620,
    tags: ["dessert"],
    price: 175,
    image: "/images/others/mini-donut-box.jpg"
  },

  // İçecekler
  {
    slug: "coca-cola",
    name: { tr: "Coca‑Cola", en: "Coca‑Cola" },
    category: "İçecekler",
    description: {
      tr: "Kutu Coca‑Cola, klasik gazlı içecek.",
      en: "Can of classic Coca‑Cola."
    },
    ingredients: ["Coca‑Cola"],
    calories: 139,
    tags: ["drink", "soda"],
    price: 65,
    image: "/images/drinks/coca-cola.jpg"
  },
  {
    slug: "coca-cola-zero",
    name: { tr: "Coca‑Cola Zero", en: "Coca‑Cola Zero" },
    category: "İçecekler",
    description: {
      tr: "Şekersiz Coca‑Cola Zero.",
      en: "Sugar‑free Coca‑Cola Zero."
    },
    ingredients: ["Coca‑Cola Zero"],
    calories: 1,
    tags: ["drink", "soda", "zero"],
    price: 65,
    image: "/images/drinks/coca-cola-zero.jpg"
  },
  {
    slug: "coca-cola-light",
    name: { tr: "Coca‑Cola Light", en: "Coca‑Cola Light" },
    category: "İçecekler",
    description: {
      tr: "Daha hafif içim isteyenlere Coca‑Cola Light.",
      en: "Coca‑Cola Light for a lighter taste."
    },
    ingredients: ["Coca‑Cola Light"],
    calories: 1,
    tags: ["drink", "soda", "light"],
    price: 65,
    image: "/images/drinks/coca-cola-light.jpg"
  },
  {
    slug: "sprite",
    name: { tr: "Sprite", en: "Sprite" },
    category: "İçecekler",
    description: {
      tr: "Limonlu gazlı içecek.",
      en: "Lemon‑lime soda."
    },
    ingredients: ["Sprite"],
    calories: 140,
    tags: ["drink", "soda"],
    price: 65,
    image: "/images/drinks/sprite.jpg"
  },
  {
    slug: "ice-tea-limon",
    name: { tr: "Ice Tea Limon", en: "Ice Tea Lemon" },
    category: "İçecekler",
    description: {
      tr: "Limon aromalı soğuk çay.",
      en: "Lemon flavored iced tea."
    },
    ingredients: ["Ice Tea Limon"],
    calories: 90,
    tags: ["drink", "ice-tea"],
    price: 60,
    image: "/images/drinks/ice-tea-limon.jpg"
  },
  {
    slug: "ice-tea-seftali",
    name: { tr: "Ice Tea Şeftali", en: "Ice Tea Peach" },
    category: "İçecekler",
    description: {
      tr: "Şeftali aromalı soğuk çay.",
      en: "Peach flavored iced tea."
    },
    ingredients: ["Ice Tea Şeftali"],
    calories: 90,
    tags: ["drink", "ice-tea"],
    price: 60,
    image: "/images/drinks/ice-tea-seftali.jpg"
  },
  {
    slug: "bira",
    name: { tr: "Bira", en: "Beer" },
    category: "İçecekler",
    description: {
      tr: "Şişe bira. Yalnızca restoran tüketimi için.",
      en: "Bottled beer. For on‑premise consumption only."
    },
    ingredients: ["Bira"],
    calories: 150,
    tags: ["drink", "beer"],
    price: 95,
    image: "/images/drinks/bira.jpg"
  }
];

