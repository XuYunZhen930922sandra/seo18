const products = [
  {
    id: 1,
    name: "SOLE VIBE 經典優雅皮質高跟鞋",
    category: "women",
    categoryName: "流行女鞋",
    price: 3680,
    rating: 4.8,
    desc: "採用頂級細膩羊皮打造，細跟高跟鞋設計展現優雅俐落線條，完美修飾腿部比例，是上班及宴會的絕佳選擇。",
    features: [
      "頂級進口羊皮鞋面，親膚舒適",
      "穩固高支撐細跟設計，行走不累腳",
      "高密度乳膠減壓鞋墊，彈力釋壓",
      "特製耐磨防滑橡膠大底"
    ],
    specifications: {
      "材質": "天然羊皮 (鞋面) / 舒適真皮 (內裡)",
      "鞋跟高度": "7.5 cm",
      "產地": "台灣手工製作",
      "尺寸範圍": "EU 35 - EU 40"
    },
    image: "assets/images/prod_1.png",
    isNew: true,
    isHot: false,
    salesRank: 5
  },
  {
    id: 2,
    name: "SOLE VIBE 舒適簡約編織平底鞋",
    category: "women",
    categoryName: "流行女鞋",
    price: 1980,
    rating: 4.6,
    desc: "極簡優雅的圓頭平底鞋，融入透氣編織元素，超軟牛皮材質如第二層肌膚般舒適，最適合日常通勤與隨性穿搭。",
    features: [
      "手工透氣皮革編織工藝",
      "可折疊超柔軟鞋身，攜帶方便",
      "抗菌吸汗真皮內裡，乾爽不悶熱",
      "超輕量防滑橡膠大底"
    ],
    specifications: {
      "材質": "柔軟牛皮 (鞋面) / 吸汗豬皮 (內裡)",
      "鞋跟高度": "1.0 cm",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 35 - EU 41"
    },
    image: "assets/images/prod_2.svg",
    isNew: false,
    isHot: false,
    salesRank: 0
  },
  {
    id: 3,
    name: "SOLE VIBE 潮流厚底拼接老爹鞋",
    category: "women",
    categoryName: "流行女鞋",
    price: 2880,
    rating: 4.7,
    desc: "結合復古跑鞋輪廓與當代街頭厚底元素，異材質拼接撞色設計，內增高視覺拉長腿部比例，輕鬆穿出率性街頭風。",
    features: [
      "超輕發泡厚底，增高 5cm 不笨重",
      "網布與麂皮拼接，極致透氣與層次感",
      "符合人體工學的立體足弓支撐",
      "耐磨橡膠防滑大底"
    ],
    specifications: {
      "材質": "透氣網布 + 牛麂皮 (鞋面) / 網紗 (內裡)",
      "鞋跟高度": "5.0 cm",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 35 - EU 40"
    },
    image: "assets/images/prod_3.svg",
    isNew: true,
    isHot: true,
    salesRank: 3
  },
  {
    id: 4,
    name: "SOLE VIBE 經典英倫風真皮短靴",
    category: "women",
    categoryName: "流行女鞋",
    price: 4280,
    rating: 4.9,
    desc: "精選高質感牛皮，挺括俐落。修飾腳踝的靴筒剪裁，搭配側邊高彈性鬆緊帶，穿脫自如，演繹率性英倫時尚風格。",
    features: [
      "嚴選進口厚實防水小牛皮",
      "側邊高彈力雙鬆緊帶，貼合腳踝",
      "減震防滑耐磨厚底，抗震釋壓",
      "柔軟透氣內裡皮質"
    ],
    specifications: {
      "材質": "高級進口牛皮 (鞋面) / 真皮 + 織物 (內裡)",
      "鞋跟高度": "3.5 cm",
      "產地": "台灣手工製作",
      "尺寸範圍": "EU 35 - EU 41"
    },
    image: "assets/images/prod_4.svg",
    isNew: false,
    isHot: true,
    salesRank: 6
  },
  {
    id: 5,
    name: "SOLE VIBE 經典雕花德比皮鞋",
    category: "men",
    categoryName: "時尚男鞋",
    price: 4800,
    rating: 4.9,
    desc: "精緻的手工布洛克雕花，搭配修長典雅的德比鞋型。精選義大利小牛皮，散發優雅迷人光澤，是正裝與雅痞穿搭的完美靈魂。",
    features: [
      "義大利進口小牛皮，手工擦色工藝",
      "經典翼紋 Brogue 雕花沖孔",
      "耐磨牛皮大底結合防滑橡膠半貼",
      "3D立體乳膠足弓支墊"
    ],
    specifications: {
      "材質": "高級頭層牛皮 (鞋面) / 軟羊皮 (內裡)",
      "鞋跟高度": "3.0 cm",
      "產地": "台灣手工製作",
      "尺寸範圍": "EU 39 - EU 45"
    },
    image: "assets/images/prod_5.svg",
    isNew: true,
    isHot: true,
    salesRank: 2
  },
  {
    id: 6,
    name: "SOLE VIBE 英倫休閒麂皮樂福鞋",
    category: "men",
    categoryName: "時尚男鞋",
    price: 3280,
    rating: 4.7,
    desc: "柔軟舒適的牛麂皮打造，免繫帶穿脫極致便利。修長楦頭線條設計，展現慵懶又不失紳士風範的都會雅痞質感。",
    features: [
      "頂級牛麂皮面料，觸感溫潤柔和",
      "輕便莫卡辛手工馬克縫線",
      "極軟乳膠減震鞋墊，全天候行走舒適",
      "豆豆顆粒防滑橡膠大底"
    ],
    specifications: {
      "材質": "優質牛麂皮 (鞋面) / 柔軟豬皮 (內裡)",
      "鞋跟高度": "1.5 cm",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 39 - EU 44"
    },
    image: "assets/images/prod_6.svg",
    isNew: false,
    isHot: false,
    salesRank: 0
  },
  {
    id: 7,
    name: "SOLE VIBE 經典復古高筒帆布鞋",
    category: "men",
    categoryName: "時尚男鞋",
    price: 1880,
    rating: 4.6,
    desc: "復古經典高筒鞋身，加厚耐磨帆布搭配硫化橡膠大底。舒適透氣不悶腳，無論工裝、美式休閒或運動風均能輕鬆駕馭。",
    features: [
      "12盎司加厚耐磨棉質帆布",
      "防撞耐磨橡膠鞋頭護甲",
      "高回彈加厚鞋墊，久站不累",
      "經典防滑華夫橡膠硫化底"
    ],
    specifications: {
      "材質": "高密度棉質帆布 (鞋面) / 棉質內裡",
      "鞋跟高度": "2.5 cm",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 36 - EU 45"
    },
    image: "assets/images/prod_7.svg",
    isNew: false,
    isHot: false,
    salesRank: 0
  },
  {
    id: 8,
    name: "SOLE VIBE 高質感真皮切爾西靴",
    category: "men",
    categoryName: "時尚男鞋",
    price: 5680,
    rating: 5.0,
    desc: "硬挺俐落的靴型，選用頂級厚實真皮，防潑水耐磨。側邊高張力彈性織帶，修飾腳踝寬度，展現從容優雅的自信氣場。",
    features: [
      "嚴選頭層防水牛皮鞋面",
      "經典無鞋帶雙側彈性織帶",
      "防滑粗獷橡膠發泡輕量大底",
      "透氣抗菌豬皮內裡與真皮鞋墊"
    ],
    specifications: {
      "材質": "高級頭層小牛皮 (鞋面) / 透氣豬皮 (內裡)",
      "鞋跟高度": "3.5 cm",
      "產地": "台灣手工製作",
      "尺寸範圍": "EU 39 - EU 45"
    },
    image: "assets/images/prod_8.svg",
    isNew: true,
    isHot: true,
    salesRank: 4
  },
  {
    id: 9,
    name: "SOLE VIBE 極致透氣避震慢跑鞋",
    category: "sports",
    categoryName: "機能運動",
    price: 3200,
    rating: 4.8,
    desc: "專為跑者設計的超輕量跑鞋，搭載高彈力中底科技，提供絕佳緩震與能量回饋。一體成型飛織鞋面，包覆貼合如影隨形。",
    features: [
      "3D一體飛織高透氣網布鞋面",
      "高彈科技中底，吸震回彈率提升40%",
      "後跟 TPU 穩定片，防止足踝側翻",
      "耐磨防滑高純度橡膠抓地大底"
    ],
    specifications: {
      "材質": "科技飛織面料 (鞋面) / 透氣網紗 (內裡)",
      "單鞋重量": "約 240g (單腳 EU 41)",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 36 - EU 46"
    },
    image: "assets/images/prod_9.svg",
    isNew: true,
    isHot: true,
    salesRank: 1
  },
  {
    id: 10,
    name: "SOLE VIBE 專業越野黃金大底登山鞋",
    category: "sports",
    categoryName: "機能運動",
    price: 4980,
    rating: 4.9,
    desc: "為極端戶外環境打造。抗撕裂鞋面融合高強度防護片，搭載專業級超抓地黃金防滑橡膠大底與防水防泥隔絕層，無懼泥濘與亂石。",
    features: [
      "高強度抗撕裂科技面料與環繞式橡膠保護",
      "防水透氣薄膜，雨水阻隔、汗氣排出",
      "專業凹槽深齒橡膠大底，極致抗滑",
      "高承托力 Ortholite 防菌防臭鞋墊"
    ],
    specifications: {
      "材質": "防潑水科技織物 + 耐磨合成皮革 (鞋面) / 防水內裡",
      "功能特點": "防水防泥、專業避震護踝、強效抓地",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 37 - EU 46"
    },
    image: "assets/images/prod_10.svg",
    isNew: false,
    isHot: true,
    salesRank: 7
  },
  {
    id: 11,
    name: "SOLE VIBE 高機能緩震實戰籃球鞋",
    category: "sports",
    categoryName: "機能運動",
    price: 3880,
    rating: 4.8,
    desc: "專為實戰打造的高筒籃球鞋，提供極致的腳踝保護與抗扭轉性能。前掌回彈科技中底，起跳防禦完美流暢。",
    features: [
      "高筒加厚填充，緊密包覆腳踝預防扭傷",
      "足底抗扭轉 TPU 穩定片，強韌支撐",
      "全掌高避震科技氣墊感中底",
      "人字紋超耐磨橡膠外底，急停防滑"
    ],
    specifications: {
      "材質": "合成皮革 + 強韌飛織 (鞋面) / 網布內裡",
      "功能特點": "腳踝防護、抗扭轉防側翻、強勁急停抓地",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 38 - EU 46"
    },
    image: "assets/images/prod_11.svg",
    isNew: true,
    isHot: false,
    salesRank: 0
  },
  {
    id: 12,
    name: "SOLE VIBE 輕量多功能健身訓練鞋",
    category: "sports",
    categoryName: "機能運動",
    price: 2680,
    rating: 4.7,
    desc: "室內健身與高強度間歇訓練(HIIT)首選。平坦的後跟底設計提供重訓時的極佳穩定度，前掌則保有彈性，兼顧靈活性與支撐力。",
    features: [
      "透氣工程網布，輕盈排汗",
      "平坦寬厚後跟，深蹲硬舉硬核穩定支撐",
      "中足 TPU 貼片，橫向移動不側翻",
      "高耐磨多向防滑橡膠外底"
    ],
    specifications: {
      "材質": "耐用網布 + TPU (鞋面) / 織物 (內裡)",
      "功能特點": "多功能重訓有氧、橫向側向支撐、透氣貼合",
      "產地": "台灣設計製造",
      "尺寸範圍": "EU 36 - EU 45"
    },
    image: "assets/images/prod_12.svg",
    isNew: false,
    isHot: false,
    salesRank: 0
  },
  {
    id: 13,
    name: "SOLE VIBE 可愛動物魔鬼氈機能童鞋",
    category: "kids",
    categoryName: "兒童童鞋",
    price: 1580,
    rating: 4.8,
    desc: "寬楦舒適鞋頭，讓發育中的小腳丫能自由舒展。方便的雙魔鬼氈設計，鍛鍊寶寶動手能力；可愛動物圖案，讓寶貝愛上穿鞋。",
    features: [
      "符合兒童腳型寬楦頭，防撞保護腳趾",
      "大開口雙魔鬼氈設計，小寶貝也能輕鬆穿脫",
      "超輕量彈力防滑底，行走無負擔",
      "防霉抗菌除臭機能鞋墊，透氣排汗"
    ],
    specifications: {
      "材質": "超細纖維皮革 + 透氣織物 (鞋面)",
      "年齡建議": "2 - 6 歲兒童",
      "產地": "台灣設計製造",
      "尺寸範圍": "內長 14cm - 19cm"
    },
    image: "assets/images/prod_13.svg",
    isNew: true,
    isHot: false,
    salesRank: 0
  },
  {
    id: 14,
    name: "SOLE VIBE 繽紛炫彩發光防潑水童鞋",
    category: "kids",
    categoryName: "兒童童鞋",
    price: 1780,
    rating: 4.7,
    desc: "防潑水鞋面無懼雨水與小水窪，漫步踩水樂融融。內置感應式彩光 LED 燈，行走踩踏時大底會閃爍七彩亮光，吸睛又安全。",
    features: [
      "超安全感應發光技術，免充電防水防撞",
      "防潑水皮革鞋面，水滴一擦即乾",
      "加厚釋壓發泡中底，保護膝蓋發育",
      "高抓地深紋防滑橡膠外底"
    ],
    specifications: {
      "材質": "防潑水超纖皮革 (鞋面) / 吸溼內裡",
      "發光壽命": "感應閃爍約 20 萬次",
      "產地": "台灣設計製造",
      "尺寸範圍": "內長 15cm - 21cm"
    },
    image: "assets/images/prod_14.svg",
    isNew: false,
    isHot: true,
    salesRank: 8
  },
  {
    id: 15,
    name: "SOLE VIBE 繽紛鴨子防水防滑雨鞋",
    category: "kids",
    categoryName: "兒童童鞋",
    price: 1280,
    rating: 4.9,
    desc: "環保無毒柔軟橡膠一體成型，百分百防水。可愛小鴨造型與亮麗配色，鞋口束繩設計防雨水灌入，是雨天寶貝踩水玩樂的最佳夥伴。",
    features: [
      "環保無毒天然橡膠，柔軟防折痕",
      "一體成型無接縫，百分百滴水不漏",
      "加深排水溝槽防滑鞋底，防摔跤",
      "貼心鞋口束繩套防風防水流入"
    ],
    specifications: {
      "材質": "環保天然橡膠 (鞋體) / 棉質舒適內襯",
      "功能特點": "100% 防水、防滑、無毒安全",
      "產地": "台灣設計製造",
      "尺寸範圍": "內長 13cm - 18cm"
    },
    image: "assets/images/prod_15.svg",
    isNew: false,
    isHot: false,
    salesRank: 0
  },
  {
    id: 16,
    name: "SOLE VIBE 舒適防滑室內兔子學步鞋",
    category: "kids",
    categoryName: "兒童童鞋",
    price: 980,
    rating: 4.8,
    desc: "專為蹣跚學步的嬰幼兒設計。襪套式針織鞋面極致貼合舒適，鞋底採用超軟環保矽膠防滑墊，給小腳最溫暖的安全防護。",
    features: [
      "高彈性透氣針織襪套，防脫落不緊繃",
      "食品級矽膠包覆大底，止滑防滑耐磨力滿分",
      "柔軟貼合赤足感，引導正確踏步姿勢",
      "可愛兔耳毛絨立體裝飾"
    ],
    specifications: {
      "材質": "高彈棉混紡針織 (鞋面) / 食品級防滑矽膠 (鞋底)",
      "年齡建議": "6 - 24 個月嬰幼兒",
      "產地": "台灣設計製造",
      "尺寸範圍": "內長 11.5cm - 13.5cm"
    },
    image: "assets/images/prod_16.svg",
    isNew: true,
    isHot: false,
    salesRank: 0
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
