"use strict";

// Быстрая настройка: замените здесь название, контакты, адрес, карту и цены кафе.
// Заменяемые заглушки: menu — images/coffee.svg, dessert.svg, breakfast.svg, plate.svg (фото от 1200×800 px);
// gallery — шесть файлов gallery-*.svg в images/ (фото от 1400×1000 px).
const CONFIG = {
  name: "Demo Cafe",
  phoneDisplay: "+998 90 123 45 67",
  phoneTel: "+998901234567",
  address: {
    ru: "ул. Шота Руставели, 57, Яккасарайский район, Ташкент",
    uz: "Shota Rustaveli koʻchasi, 57, Yakkasaroy tumani, Toshkent"
  },
  telegramUrl: "https://t.me/demo_cafe",
  telegramHandle: "@demo_cafe",
  instagramUrl: "https://instagram.com/demo.cafe",
  mapUrl: "https://www.openstreetmap.org/search?query=Shota%20Rustaveli%2057%2C%20Tashkent",
  hours: {
    weekday: "08:00–22:00",
    weekend: "09:00–23:00"
  },
  menu: {
    coffee: [
      { id: "espresso", price: 18000, image: "./images/coffee.svg", alt: "images.coffee" },
      { id: "cappuccino", price: 28000, image: "./images/coffee.svg", alt: "images.coffee" },
      { id: "raf", price: 32000, image: "./images/coffee.svg", alt: "images.coffee" },
      { id: "icedCoffee", price: 30000, image: "./images/coffee.svg", alt: "images.coffee" }
    ],
    desserts: [
      { id: "cheesecake", price: 35000, image: "./images/dessert.svg", alt: "images.dessert" },
      { id: "honeyCake", price: 32000, image: "./images/dessert.svg", alt: "images.dessert" },
      { id: "brownie", price: 29000, image: "./images/dessert.svg", alt: "images.dessert" },
      { id: "croissant", price: 22000, image: "./images/dessert.svg", alt: "images.dessert" }
    ],
    breakfast: [
      { id: "syrniki", price: 42000, image: "./images/breakfast.svg", alt: "images.breakfast" },
      { id: "avocadoToast", price: 48000, image: "./images/breakfast.svg", alt: "images.breakfast" },
      { id: "omelette", price: 39000, image: "./images/breakfast.svg", alt: "images.breakfast" },
      { id: "granola", price: 36000, image: "./images/breakfast.svg", alt: "images.breakfast" }
    ],
    mains: [
      { id: "chickenPasta", price: 68000, image: "./images/plate.svg", alt: "images.plate" },
      { id: "salmonBowl", price: 78000, image: "./images/plate.svg", alt: "images.plate" },
      { id: "beefSandwich", price: 59000, image: "./images/plate.svg", alt: "images.plate" },
      { id: "pumpkinSoup", price: 42000, image: "./images/plate.svg", alt: "images.plate" }
    ]
  }
};

// Все интерфейсные фразы и карточки блюд переведены здесь, без перезагрузки страницы.
const TRANSLATIONS = {
  ru: {
    "meta.title": "Demo Cafe — уютное кафе в Ташкенте",
    "meta.description": "Demo Cafe — кофе, завтраки и уютные встречи в Ташкенте.",
    "skip": "Перейти к содержимому",
    "brand.home": "Demo Cafe — главная",
    "nav.label": "Основная навигация",
    "nav.about": "О нас",
    "nav.menu": "Меню",
    "nav.gallery": "Галерея",
    "nav.contacts": "Контакты",
    "nav.call": "Позвонить",
    "nav.open": "Открыть меню",
    "nav.close": "Закрыть меню",
    "language.label": "Выбор языка",
    "hero.kicker": "Кофе и тёплые встречи в Ташкенте",
    "hero.title": "Ваше место для маленьких радостей",
    "hero.description": "Начните утро с ароматного кофе, загляните на неспешный завтрак или проведите вечер в уютной атмосфере.",
    "hero.menuButton": "Посмотреть меню",
    "hero.telegram": "Заказать в Telegram",
    "hero.note": "Каждый день — с заботой о вкусе",
    "about.eyebrow": "Немного о нас",
    "about.title": "Небольшое кафе с большим сердцем",
    "about.text": "Demo Cafe — место, куда приятно зайти по дороге и хочется вернуться. Мы готовим из свежих продуктов, варим кофе с вниманием к деталям и создаём спокойную атмосферу для каждого гостя.",
    "about.link": "Загляните к нам",
    "about.fresh.title": "Свежие продукты",
    "about.fresh.text": "Отбираем хорошие ингредиенты каждый день.",
    "about.cozy.title": "Уютная атмосфера",
    "about.cozy.text": "Тёплый свет, приятная музыка и место для вас.",
    "about.quick.title": "Быстрая подача",
    "about.quick.text": "Вкусное не заставит себя долго ждать.",
    "menu.eyebrow": "Приготовлено с душой",
    "menu.title": "Наше меню",
    "menu.intro": "Знакомые любимые вкусы и несколько приятных открытий.",
    "menu.tabLabel": "Категории меню",
    "menu.coffee": "Кофе",
    "menu.desserts": "Десерты",
    "menu.breakfast": "Завтраки",
    "menu.mains": "Основные блюда",
    "menu.note": "Цены указаны в сумах. Уточняйте наличие у бариста.",
    "menu.badge": "Любимый выбор",
    "currency": "сум",
    "images.coffee": "Иллюстрация чашки кофе",
    "images.dessert": "Иллюстрация десерта",
    "images.breakfast": "Иллюстрация завтрака",
    "images.plate": "Иллюстрация основного блюда",
    "dish.espresso.title": "Эспрессо",
    "dish.espresso.text": "Насыщенный кофе с плотной бархатистой пенкой.",
    "dish.cappuccino.title": "Капучино",
    "dish.cappuccino.text": "Двойной эспрессо и нежная молочная пена.",
    "dish.raf.title": "Раф с ванилью",
    "dish.raf.text": "Мягкий сливочный кофе с натуральной ванилью.",
    "dish.icedCoffee.title": "Айс-кофе",
    "dish.icedCoffee.text": "Охлаждённый кофе со льдом и молоком.",
    "dish.cheesecake.title": "Чизкейк",
    "dish.cheesecake.text": "Сливочный чизкейк на песочной основе.",
    "dish.honeyCake.title": "Медовик",
    "dish.honeyCake.text": "Тонкие коржи, нежный крем и настоящий мёд.",
    "dish.brownie.title": "Шоколадный брауни",
    "dish.brownie.text": "Влажный шоколадный десерт с орехами.",
    "dish.croissant.title": "Круассан",
    "dish.croissant.text": "Слоёная выпечка с золотистой корочкой.",
    "dish.syrniki.title": "Сырники",
    "dish.syrniki.text": "Творожные сырники со сметаной и ягодами.",
    "dish.avocadoToast.title": "Тост с авокадо",
    "dish.avocadoToast.text": "Зерновой тост, авокадо и яйцо пашот.",
    "dish.omelette.title": "Омлет с овощами",
    "dish.omelette.text": "Воздушный омлет с зеленью и свежими овощами.",
    "dish.granola.title": "Гранола с йогуртом",
    "dish.granola.text": "Домашняя гранола, йогурт и сезонные фрукты.",
    "dish.chickenPasta.title": "Паста с курицей",
    "dish.chickenPasta.text": "Паста в сливочном соусе с курицей и пармезаном.",
    "dish.salmonBowl.title": "Боул с лососем",
    "dish.salmonBowl.text": "Лосось, рис, свежие овощи и лёгкий соус.",
    "dish.beefSandwich.title": "Сэндвич с говядиной",
    "dish.beefSandwich.text": "Мягкая говядина, сыр и фирменный соус.",
    "dish.pumpkinSoup.title": "Тыквенный крем-суп",
    "dish.pumpkinSoup.text": "Нежный суп из тыквы с хрустящими гренками.",
    "gallery.eyebrow": "Моменты в Demo Cafe",
    "gallery.title": "Уют в каждой детали",
    "gallery.intro": "Место для утреннего кофе, долгих разговоров и паузы посреди дня.",
    "gallery.open1": "Открыть фото: чашка кофе",
    "gallery.open2": "Открыть фото: десерт",
    "gallery.open3": "Открыть фото: завтрак",
    "gallery.open4": "Открыть фото: интерьер",
    "gallery.open5": "Открыть фото: сервировка",
    "gallery.open6": "Открыть фото: кофе и выпечка",
    "gallery.alt1": "Чашка кофе на столе",
    "gallery.alt2": "Домашний десерт",
    "gallery.alt3": "Завтрак с тостами",
    "gallery.alt4": "Уютный интерьер кафе",
    "gallery.alt5": "Сервировка для завтрака",
    "gallery.alt6": "Кофе и свежая выпечка",
    "gallery.lightbox": "Фото Demo Cafe",
    "gallery.close": "Закрыть фото",
    "reviews.eyebrow": "Тёплые слова гостей",
    "reviews.title": "Нам приятно, что вы рядом",
    "reviews.stars": "5 из 5 звёзд",
    "reviews.one": "«Очень вкусный капучино и уютное место. Забегаю сюда перед работой — день сразу начинается лучше.»",
    "reviews.two": "«Пришли всей семьёй на завтрак. Порции щедрые, всё свежее, а персонал очень внимательный.»",
    "reviews.three": "«Любимое место для встреч с подругами. Обязательно попробуйте чизкейк — он просто чудесный!»",
    "reviews.malika": "Малика",
    "reviews.aziz": "Азиз",
    "reviews.nilufar": "Нилуфар",
    "reviews.city": "Ташкент",
    "reviews.note": "Отзывы приведены для демонстрации сайта.",
    "contacts.eyebrow": "Мы ждём вас",
    "contacts.title": "Загляните на чашечку кофе",
    "contacts.intro": "Будем рады встрече — приходите в гости или напишите нам.",
    "contacts.address": "Адрес",
    "contacts.phone": "Телефон",
    "contacts.telegram": "Telegram",
    "contacts.hoursTitle": "Часы работы",
    "contacts.mapTitle": "Как нас найти",
    "contacts.mapDescription": "Ташкент, Яккасарайский район",
    "contacts.mapLink": "Открыть карту",
    "day.mon": "Понедельник",
    "day.tue": "Вторник",
    "day.wed": "Среда",
    "day.thu": "Четверг",
    "day.fri": "Пятница",
    "day.sat": "Суббота",
    "day.sun": "Воскресенье",
    "footer.tagline": "Хороший кофе. Хороший день.",
    "footer.demo": "Демонстрационный сайт для портфолио",
    "mobile.label": "Быстрая связь",
    "mobile.telegram": "Telegram"
  },
  uz: {
    "meta.title": "Demo Cafe — Toshkentdagi shinam kafe",
    "meta.description": "Demo Cafe — Toshkentda qahva, nonushta va shinam uchrashuvlar.",
    "skip": "Asosiy mazmunga oʻtish",
    "brand.home": "Demo Cafe — bosh sahifa",
    "nav.label": "Asosiy navigatsiya",
    "nav.about": "Biz haqimizda",
    "nav.menu": "Menyu",
    "nav.gallery": "Galereya",
    "nav.contacts": "Manzil va aloqa",
    "nav.call": "Qoʻngʻiroq qilish",
    "nav.open": "Menyuni ochish",
    "nav.close": "Menyuni yopish",
    "language.label": "Tilni tanlash",
    "hero.kicker": "Toshkentda qahva va iliq uchrashuvlar",
    "hero.title": "Kichik quvonchlar uchun sevimli maskan",
    "hero.description": "Tongni xushboʻy qahva bilan boshlang, bemalol nonushta qiling yoki shinam muhitda kechki payt hordiq chiqaring.",
    "hero.menuButton": "Menyuni koʻrish",
    "hero.telegram": "Telegram orqali buyurtma",
    "hero.note": "Har kuni — ta’mga e’tibor bilan",
    "about.eyebrow": "Biz haqimizda",
    "about.title": "Katta qalbli kichik kafe",
    "about.text": "Demo Cafe — yoʻlingiz ustidagi shinam maskan: bir kirib, yana qaytgingiz keladi. Har kuni yangi mahsulotlardan taom tayyorlaymiz, qahvani mehr bilan damlaymiz va har bir mehmon uchun osoyishta muhit yaratamiz.",
    "about.link": "Mehmon boʻling",
    "about.fresh.title": "Yangi mahsulotlar",
    "about.fresh.text": "Har kuni sifatli masalliqlarni tanlaymiz.",
    "about.cozy.title": "Shinam muhit",
    "about.cozy.text": "Iliq yorugʻlik, yoqimli musiqa va siz uchun joy.",
    "about.quick.title": "Tez xizmat",
    "about.quick.text": "Mazali taomni uzoq kutib qolmaysiz.",
    "menu.eyebrow": "Mehr bilan tayyorlangan",
    "menu.title": "Menyumiz",
    "menu.intro": "Sevimli tanish ta’mlar va bir nechta yoqimli yangiliklar.",
    "menu.tabLabel": "Menyu boʻlimlari",
    "menu.coffee": "Qahva",
    "menu.desserts": "Shirinliklar",
    "menu.breakfast": "Nonushta",
    "menu.mains": "Asosiy taomlar",
    "menu.note": "Narxlar soʻmda koʻrsatilgan. Mavjudligini baristadan soʻrang.",
    "menu.badge": "Sevimli tanlov",
    "currency": "soʻm",
    "images.coffee": "Qahva piyolasi tasviri",
    "images.dessert": "Shirinlik tasviri",
    "images.breakfast": "Nonushta tasviri",
    "images.plate": "Asosiy taom tasviri",
    "dish.espresso.title": "Espresso",
    "dish.espresso.text": "Qalin ta’mli qahva, ustida mayin krema.",
    "dish.cappuccino.title": "Kappuchino",
    "dish.cappuccino.text": "Ikki porsiya espresso va mayin sut koʻpigi.",
    "dish.raf.title": "Vanilli raf",
    "dish.raf.text": "Tabiiy vanilli, yumshoq qaymoqli qahva.",
    "dish.icedCoffee.title": "Muzli qahva",
    "dish.icedCoffee.text": "Muz va sut qoʻshilgan salqin qahva.",
    "dish.cheesecake.title": "Chizkeyk",
    "dish.cheesecake.text": "Qumoq asosli mayin qaymoqli chizkeyk.",
    "dish.honeyCake.title": "Asalli tort",
    "dish.honeyCake.text": "Yupqa qatlamlar, mayin krem va tabiiy asal.",
    "dish.brownie.title": "Shokoladli brauni",
    "dish.brownie.text": "Yongʻoqli, ichi yumshoq shokoladli desert.",
    "dish.croissant.title": "Kruassan",
    "dish.croissant.text": "Usti tillarang, qat-qat xamirli pishiriq.",
    "dish.syrniki.title": "Sirnik",
    "dish.syrniki.text": "Tvorogli sirnik, smetana va rezavorlar bilan.",
    "dish.avocadoToast.title": "Avokadoli tost",
    "dish.avocadoToast.text": "Donli tost, avokado va suvda pishirilgan tuxum.",
    "dish.omelette.title": "Sabzavotli omlet",
    "dish.omelette.text": "Koʻkatlar va yangi sabzavotli mayin omlet.",
    "dish.granola.title": "Yogurtli granola",
    "dish.granola.text": "Uy granolasi, yogurt va mavsumiy mevalar.",
    "dish.chickenPasta.title": "Tovuqli pasta",
    "dish.chickenPasta.text": "Qaymoqli sous, tovuq va parmezan qoʻshilgan pasta.",
    "dish.salmonBowl.title": "Lososli boul",
    "dish.salmonBowl.text": "Losos, guruch, yangi sabzavotlar va yengil sous.",
    "dish.beefSandwich.title": "Mol goʻshtli sendvich",
    "dish.beefSandwich.text": "Mayin mol goʻshti, pishloq va maxsus sous.",
    "dish.pumpkinSoup.title": "Qovoqli krem-shoʻrva",
    "dish.pumpkinSoup.text": "Qarsildoq suxarilar bilan mayin qovoq shoʻrvasi.",
    "gallery.eyebrow": "Demo Cafe lahzalari",
    "gallery.title": "Har bir detalda shinamlik",
    "gallery.intro": "Tonggi qahva, uzoq suhbatlar va kun oʻrtasidagi yoqimli tanaffus uchun maskan.",
    "gallery.open1": "Suratni ochish: qahva piyolasi",
    "gallery.open2": "Suratni ochish: shirinlik",
    "gallery.open3": "Suratni ochish: nonushta",
    "gallery.open4": "Suratni ochish: interyer",
    "gallery.open5": "Suratni ochish: dasturxon",
    "gallery.open6": "Suratni ochish: qahva va pishiriq",
    "gallery.alt1": "Stol ustidagi qahva piyolasi",
    "gallery.alt2": "Uyda tayyorlangan shirinlik",
    "gallery.alt3": "Tostli nonushta",
    "gallery.alt4": "Kafening shinam interyeri",
    "gallery.alt5": "Nonushta uchun dasturxon",
    "gallery.alt6": "Qahva va yangi pishiriq",
    "gallery.lightbox": "Demo Cafe suratlari",
    "gallery.close": "Suratni yopish",
    "reviews.eyebrow": "Mehmonlarimizdan iliq fikrlar",
    "reviews.title": "Yonimizda ekaningizdan xursandmiz",
    "reviews.stars": "5 yulduzdan 5 tasi",
    "reviews.one": "«Kappuchino juda mazali, joy esa shinam. Ishdan oldin kirib oʻtaman — kunim darrov yaxshi boshlanadi.»",
    "reviews.two": "«Oilamiz bilan nonushtaga keldik. Porsiyalar toʻyimli, hammasi yangi, xodimlar esa juda e’tiborli.»",
    "reviews.three": "«Dugonalar bilan uchrashish uchun sevimli joyim. Chizkeykni albatta tatib koʻring — juda ajoyib!»",
    "reviews.malika": "Malika",
    "reviews.aziz": "Aziz",
    "reviews.nilufar": "Nilufar",
    "reviews.city": "Toshkent",
    "reviews.note": "Fikrlar sayt namoyishi uchun keltirilgan.",
    "contacts.eyebrow": "Sizni kutamiz",
    "contacts.title": "Bir piyola qahvaga keling",
    "contacts.intro": "Siz bilan koʻrishishdan xursand boʻlamiz — mehmonga keling yoki bizga yozing.",
    "contacts.address": "Manzil",
    "contacts.phone": "Telefon",
    "contacts.telegram": "Telegram",
    "contacts.hoursTitle": "Ish vaqti",
    "contacts.mapTitle": "Bizni qanday topish mumkin",
    "contacts.mapDescription": "Toshkent, Yakkasaroy tumani",
    "contacts.mapLink": "Xaritani ochish",
    "day.mon": "Dushanba",
    "day.tue": "Seshanba",
    "day.wed": "Chorshanba",
    "day.thu": "Payshanba",
    "day.fri": "Juma",
    "day.sat": "Shanba",
    "day.sun": "Yakshanba",
    "footer.tagline": "Yaxshi qahva. Yaxshi kun.",
    "footer.demo": "Portfolio uchun namoyish sayti",
    "mobile.label": "Tezkor aloqa",
    "mobile.telegram": "Telegram"
  }
};

const GALLERY = [
  { src: "./images/gallery-coffee.svg", key: "gallery.alt1" },
  { src: "./images/gallery-dessert.svg", key: "gallery.alt2" },
  { src: "./images/gallery-breakfast.svg", key: "gallery.alt3" },
  { src: "./images/gallery-interior.svg", key: "gallery.alt4" },
  { src: "./images/gallery-table.svg", key: "gallery.alt5" },
  { src: "./images/gallery-pastry.svg", key: "gallery.alt6" }
];

const languageButtons = document.querySelectorAll("[data-lang]");
const tabs = Array.from(document.querySelectorAll(".menu-tab"));
const menuGrid = document.getElementById("menu-grid");
const storageKey = "demo-cafe-language";
let currentLanguage = "ru";
let currentCategory = "coffee";

function t(key) {
  const value = (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) || TRANSLATIONS.ru[key] || key;
  return value.replace(/Demo Cafe/g, () => CONFIG.name);
}

function readLanguage() {
  try {
    return localStorage.getItem(storageKey);
  } catch (error) {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(storageKey, language);
  } catch (error) {
    // Без доступа к хранилищу выбранный язык действует до перезагрузки страницы.
  }
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  document.title = t("meta.title");
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.content = t("meta.description");
  if (ogTitle) ogTitle.content = t("meta.title");
  if (ogDescription) ogDescription.content = t("meta.description");
  applyConfig();
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"));
  }
  renderMenu(currentCategory);
  updateLightboxLanguage();
}

function setLanguage(language, persist = true) {
  if (!TRANSLATIONS[language]) return;
  currentLanguage = language;
  applyTranslations();
  if (persist) saveLanguage(language);
}

function formatPrice(price) {
  const locale = currentLanguage === "uz" ? "uz-UZ" : "ru-RU";
  return new Intl.NumberFormat(locale).format(price) + " " + t("currency");
}

function renderMenu(category) {
  if (!menuGrid) return;
  currentCategory = category;
  tabs.forEach((tab) => {
    const active = tab.dataset.category === category;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  const selectedTab = document.querySelector('[data-category="' + category + '"]');
  if (selectedTab) menuGrid.setAttribute("aria-labelledby", selectedTab.id);
  menuGrid.replaceChildren();
  (CONFIG.menu[category] || []).forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    const imageWrap = document.createElement("div");
    imageWrap.className = "menu-card-image";
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = t(item.alt);
    image.loading = "lazy";
    image.decoding = "async";
    imageWrap.append(image);
    const body = document.createElement("div");
    body.className = "menu-card-body";
    const title = document.createElement("h3");
    title.textContent = t("dish." + item.id + ".title");
    const description = document.createElement("p");
    description.textContent = t("dish." + item.id + ".text");
    const footer = document.createElement("div");
    footer.className = "menu-card-footer";
    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = formatPrice(item.price);
    const tag = document.createElement("span");
    tag.className = "menu-tag";
    tag.textContent = t("menu.badge");
    footer.append(price, tag);
    body.append(title, description, footer);
    card.append(imageWrap, body);
    menuGrid.append(card);
  });
}

function applyConfig() {
  document.querySelectorAll("[data-config='name']").forEach((element) => { element.textContent = CONFIG.name; });
  document.querySelectorAll("[data-phone-link]").forEach((element) => { element.href = "tel:" + CONFIG.phoneTel; });
  document.querySelectorAll("[data-phone-display]").forEach((element) => { element.textContent = CONFIG.phoneDisplay; });
  document.querySelectorAll("[data-telegram-link]").forEach((element) => { element.href = CONFIG.telegramUrl; });
  document.querySelectorAll("[data-telegram-display]").forEach((element) => { element.textContent = CONFIG.telegramHandle; });
  document.querySelectorAll("[data-instagram-link]").forEach((element) => { element.href = CONFIG.instagramUrl; });
  document.querySelectorAll("[data-map-link]").forEach((element) => { element.href = CONFIG.mapUrl; });
  document.querySelectorAll("[data-address]").forEach((element) => { element.textContent = CONFIG.address[currentLanguage] || CONFIG.address.ru; });
  document.querySelectorAll("[data-hours]").forEach((element) => { element.textContent = CONFIG.hours[element.dataset.hours]; });
  document.querySelectorAll("[data-current-year]").forEach((element) => { element.textContent = String(new Date().getFullYear()); });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => renderMenu(tab.dataset.category));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    tabs[next].focus();
    renderMenu(tabs[next].dataset.category);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.getElementById("primary-nav");
if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    menuToggle.setAttribute("aria-label", t(open ? "nav.open" : "nav.close"));
    primaryNav.classList.toggle("is-open", !open);
  });
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", t("nav.open"));
      primaryNav.classList.remove("is-open");
    });
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
function updateLightboxLanguage() {
  if (!lightbox || !lightbox.open || lightbox.dataset.galleryIndex === undefined) return;
  const item = GALLERY[Number(lightbox.dataset.galleryIndex)];
  if (!item) return;
  lightboxImage.alt = t(item.key);
  lightboxCaption.textContent = t(item.key);
}
document.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = GALLERY[Number(button.dataset.gallery)];
    if (!item || !lightbox || typeof lightbox.showModal !== "function") return;
    lightbox.dataset.galleryIndex = button.dataset.gallery;
    lightboxImage.src = item.src;
    lightboxImage.alt = t(item.key);
    lightboxCaption.textContent = t(item.key);
    lightbox.showModal();
  });
});
const lightboxClose = document.querySelector(".lightbox-close");
if (lightboxClose && lightbox) lightboxClose.addEventListener("click", () => lightbox.close());
if (lightbox) lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

document.documentElement.classList.add("js");
applyConfig();
const storedLanguage = readLanguage();
setLanguage(storedLanguage === "uz" ? "uz" : "ru", false);
