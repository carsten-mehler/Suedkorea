const commonsImage = (file, width = 900) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const commonsPage = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const trip = {
  start: "2026-10-16T15:55:00+02:00",
  end: "2026-10-26T18:35:00+01:00",
  travelers: 2,
  route: [
    { code: "MUC", city: "München", meta: "16. Okt." },
    { code: "ICN", city: "Seoul", meta: "17.-21. Okt." },
    { code: "GJ", city: "Gyeongju", meta: "21.-23. Okt." },
    { code: "BUS", city: "Busan", meta: "23.-25. Okt." },
    { code: "ICN", city: "Seoul", meta: "25.-26. Okt." },
  ],
  stats: [
    { value: "11", label: "Kalendertage" },
    { value: "9", label: "bestätigte Hotelnächte" },
    { value: "5", label: "bestätigte Buchungen" },
    { value: "2", label: "Reisende" },
  ],
};

const filters = [
  { id: "all", label: "Alle" },
  { id: "confirmed", label: "Bestätigt" },
  { id: "flight", label: "Flüge" },
  { id: "stay", label: "Hotels" },
  { id: "transfer", label: "Transfers" },
  { id: "sight", label: "Sehenswürdigkeiten" },
  { id: "food", label: "Essen" },
];

const typeLabels = {
  activity: "Aktivität",
  flight: "Flug",
  food: "Essen",
  sight: "Sehenswürdigkeit",
  stay: "Hotel",
  transfer: "Transfer",
};

const statusLabels = {
  confirmed: "bestätigt",
  idea: "Idee",
};

const days = Array.from({ length: 11 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 9, 16 + index, 12));
  return {
    day: index + 1,
    date: date.toISOString().slice(0, 10),
    label: date.toLocaleDateString("de-DE", { day: "2-digit", month: "short" }),
    weekday: date.toLocaleDateString("de-DE", { weekday: "short" }),
  };
});

const events = [
  {
    id: "outbound",
    type: "flight",
    status: "confirmed",
    city: "München",
    date: "2026-10-16",
    day: 1,
    time: "15:55",
    title: "LH718 nach Seoul",
    summary: "München Terminal 2 nach Incheon. Direktflug mit Lufthansa A350-900, 11 Std. 00 Min.",
    details: [
      "Buchungsreferenz: 92ZOBS.",
      "Ankunft: 17. Oktober 2026 um 09:55 Uhr Ortszeit.",
      "Gepäck laut Bestätigung: 1 Handgepäckstück, 1 persönlicher Gegenstand und 2 Aufgabegepäckstücke bis 23 kg pro Reisendem.",
    ],
  },
  {
    id: "seoul-arrival",
    type: "transfer",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-17",
    day: 2,
    time: "Morgen",
    title: "Ankunft in Incheon",
    summary: "Weiterfahrt nach Jongno für den ersten Aufenthalt im Amid Hotel Seoul.",
    details: [
      "Hotel-Check-in ab 15:00 Uhr.",
      "Die Hotelnachricht nennt Bus 6002, Taxi und AREX plus Linie 1 als Transferoptionen.",
    ],
  },
  {
    id: "amid-first",
    type: "stay",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-17",
    day: 2,
    time: "17.-21. Okt.",
    title: "Amid Hotel Seoul",
    summary: "4 Nächte im Standard Twin Room für zwei Erwachsene in Jongno-gu.",
    details: [
      "Adresse: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Check-in: 17. Oktober ab 15:00 Uhr. Check-out: 21. Oktober bis 12:00 Uhr.",
      "Geplanter Betrag vor Ort: KRW 1.230.630.",
    ],
  },
  {
    id: "seoul-palaces",
    type: "sight",
    status: "idea",
    city: "Seoul",
    date: "2026-10-18",
    day: 3,
    time: "Tag",
    title: "Palast- und Bukchon-Runde",
    summary: "Gyeongbokgung, Bukchon Hanok Village, Insadong und Tee oder Nudeln rund um Anguk.",
    details: [
      "Bukchon ist ein Wohnviertel; aktuelle Hinweise begrenzen Besuche in Teilen auf 10:00-17:00 Uhr.",
      "Hwangsaengga Kalguksu und Mijin passen praktisch in diese Route.",
    ],
  },
  {
    id: "seoul-changdeok",
    type: "sight",
    status: "idea",
    city: "Seoul",
    date: "2026-10-19",
    day: 4,
    time: "Tag",
    title: "Changdeokgung und Ikseon-dong",
    summary: "UNESCO-Palast, Secret Garden bei Reservierung, danach Cafés in Ikseon-dong und Cheonggyecheon.",
    details: [
      "Changdeokgung ist montags geschlossen; bei geänderten Öffnungszeiten für 2026 verschieben.",
      "Für den Secret Garden ist üblicherweise eine separate Buchung nötig.",
    ],
  },
  {
    id: "seoul-market",
    type: "food",
    status: "idea",
    city: "Seoul",
    date: "2026-10-20",
    day: 5,
    time: "Abend",
    title: "Streetfood im Gwangjang Market",
    summary: "Klassischer Streetfood-Abend vor der Weiterreise aus Seoul.",
    details: [
      "Visit Seoul führt die Food Alley täglich bis in den späten Abend.",
      "Gute Optionen: Mungbohnen-Pfannkuchen, Gimbap, Tteokbokki und Fischkuchen.",
    ],
  },
  {
    id: "seoul-to-gyeongju",
    type: "transfer",
    status: "confirmed",
    city: "Gyeongju",
    date: "2026-10-21",
    day: 6,
    time: "Mittag",
    title: "Stadtwechsel: Seoul nach Gyeongju",
    summary: "Check-out im Amid bis 12:00 Uhr; Check-in im Yettle Hanok Stay 16:00-20:00 Uhr.",
    details: [
      "In Reisedaten wurde noch keine Buchung für diesen Stadtwechsel gefunden.",
      "Gepäckplan offenlassen, bis die Zugtickets gebucht sind.",
    ],
  },
  {
    id: "yettle",
    type: "stay",
    status: "confirmed",
    city: "Gyeongju",
    date: "2026-10-21",
    day: 6,
    time: "21.-23. Okt.",
    title: "Yettle Hanok Stay",
    summary: "2 Nächte im Zweibettzimmer mit eigenem Bad.",
    details: [
      "Adresse: 9, Balgeunmaeul-gil, 38171 Gyeongju.",
      "Check-in: 16:00-20:00 Uhr. Check-out: 08:00-10:00 Uhr.",
      "Gesamt: KRW 260.000.",
    ],
  },
  {
    id: "gyeongju-heritage",
    type: "sight",
    status: "idea",
    city: "Gyeongju",
    date: "2026-10-22",
    day: 7,
    time: "Tag",
    title: "Bulguksa, Seokguram und Altstadtspaziergang",
    summary: "UNESCO-Tempel am Morgen, danach Cheomseongdae, Daereungwon sowie Donggung und Wolji nach Einbruch der Dunkelheit.",
    details: [
      "Bulguksa und Seokguram liegen außerhalb des historischen Zentrums; zusammen planen.",
      "Cheomseongdae und Wolji wirken am späten Nachmittag oder Abend stärker.",
    ],
  },
  {
    id: "gyeongju-food",
    type: "food",
    status: "idea",
    city: "Gyeongju",
    date: "2026-10-22",
    day: 7,
    time: "Mittag",
    title: "Ssambap oder Hwangnam-Brot",
    summary: "Leaf-wrap-Menü nahe Cheomseongdae plus Hwangnam-Brot mit roter Bohnenpaste in Hwangnam-dong.",
    details: [
      "Ipungnyeo Guro Ssambap liegt nahe Cheomseongdae.",
      "Hwangnambbang ist ein sinnvoller essbarer Souvenir-Stopp.",
    ],
  },
  {
    id: "gyeongju-to-busan",
    type: "transfer",
    status: "confirmed",
    city: "Busan",
    date: "2026-10-23",
    day: 8,
    time: "Mittag",
    title: "Stadtwechsel: Gyeongju nach Busan",
    summary: "Check-out im Yettle 08:00-10:00 Uhr; Check-in im Lotte Hotel Busan ab 15:00 Uhr.",
    details: [
      "In Reisedaten wurde noch keine Zug- oder Busbuchung für diese Strecke gefunden.",
      "Genug Puffer für Gepäckaufbewahrung einplanen, bevor das Zimmer bereit ist.",
    ],
  },
  {
    id: "lotte",
    type: "stay",
    status: "confirmed",
    city: "Busan",
    date: "2026-10-23",
    day: 8,
    time: "23.-25. Okt.",
    title: "Lotte Hotel Busan",
    summary: "2 Nächte im Superior Twin Room in Busanjin-gu.",
    details: [
      "Adresse: 772, Gaya-daero, Busanjin-gu, 47285 Busan.",
      "Check-in: 23. Oktober um 15:00 Uhr. Check-out: 25. Oktober bis 11:00 Uhr.",
      "Bezahlt: EUR 360,35.",
    ],
  },
  {
    id: "busan-west",
    type: "sight",
    status: "idea",
    city: "Busan",
    date: "2026-10-24",
    day: 9,
    time: "Tag",
    title: "Gamcheon, Jagalchi und Bupyeong Night Market",
    summary: "Farbiges Hangviertel, Fischmarkt und danach späte Food-Stände.",
    details: [
      "Gamcheon ist hügelig; morgens sind Licht und Besucherandrang meist günstiger.",
      "Der Bupyeong Kkangtong Market wird ab etwa 19:30 Uhr zum Night Market.",
    ],
  },
  {
    id: "busan-east",
    type: "activity",
    status: "idea",
    city: "Busan",
    date: "2026-10-24",
    day: 9,
    time: "Alternative",
    title: "Küstenoption Haeundae",
    summary: "Haeundae Beach, Blueline Park Train oder Capsule und Busan X the Sky.",
    details: [
      "Besser bei klarer Sicht.",
      "Sky Capsule reservieren, falls dies der Haupttag in Busan wird.",
    ],
  },
  {
    id: "busan-to-seoul",
    type: "transfer",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-25",
    day: 10,
    time: "Mittag",
    title: "Stadtwechsel: Busan nach Seoul",
    summary: "Check-out im Lotte bis 11:00 Uhr; letzter Check-in im Amid Hotel Seoul ab 15:00 Uhr.",
    details: [
      "In Reisedaten wurde noch keine Buchung für diesen Stadtwechsel gefunden.",
      "Diese Strecke buchen, sobald die gewünschte Abfahrtszeit aus Busan feststeht.",
    ],
  },
  {
    id: "amid-final",
    type: "stay",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-25",
    day: 10,
    time: "25.-26. Okt.",
    title: "Amid Hotel Seoul",
    summary: "Letzte Nacht in Seoul vor dem Rückflug.",
    details: [
      "Adresse: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Check-in: 25. Oktober um 15:00 Uhr. Check-out: 26. Oktober bis 12:00 Uhr.",
      "Bezahlt: EUR 182,87.",
    ],
  },
  {
    id: "return",
    type: "flight",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-26",
    day: 11,
    time: "13:30",
    title: "LH719 nach München",
    summary: "Incheon Terminal 1 nach München. Direktflug mit Lufthansa A350-900, 13 Std. 05 Min.",
    details: [
      "Ankunft in München: 26. Oktober 2026 um 18:35 Uhr Ortszeit.",
      "Gepäck laut Rückflugbestätigung: 1 Handgepäckstück, 1 persönlicher Gegenstand und 1 Aufgabegepäckstück bis 23 kg pro Reisendem.",
      "In der Bestätigung wurde keine Sitzplatzauswahl für den Rückflug gefunden.",
    ],
  },
];

const weatherCities = [
  {
    city: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
    tripDates: "17.-21. Okt. und 25.-26. Okt.",
    climate: "Frisches Herbstwetter in der Stadt. Schichten, leichte Jacke und bequeme Schuhe einplanen.",
    packing: ["Leichte Jacke", "Regenschirm", "Bequeme Schuhe für Paläste"],
  },
  {
    city: "Gyeongju",
    latitude: 35.8562,
    longitude: 129.2247,
    tripDates: "21.-23. Okt.",
    climate: "Kühle Morgen und Abende rund um offene Kulturerbestätten. Für Abendansichten eine wärmere Schicht einpacken.",
    packing: ["Wärmere Schicht", "Tagesrucksack", "Tempelgeeignete Kleidung"],
  },
  {
    city: "Busan",
    latitude: 35.1796,
    longitude: 129.0756,
    tripDates: "23.-25. Okt.",
    climate: "An der Küste windiger als Seoul. Klare Tage sind ideal für Haeundae, Blueline Park und Aussichtspunkte.",
    packing: ["Windjacke", "Sonnenbrille", "Geladene Transitkarte"],
  },
];

const experiences = [
  {
    city: "Seoul",
    title: "Gyeongbokgung-Palast",
    kind: "Palast",
    area: "Jongno",
    time: "2-3 Std.",
    text: "Erster und größter Joseon-Palast, vom Amid Hotel gut mit Bukchon und Insadong kombinierbar.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/attractions/Gyeongbokgung-Palace_/73",
    image: commonsImage("Gyeongbokgung Palace, Seoul.jpg"),
    imageAlt: "Wachwechsel-Szene im Gyeongbokgung Palace in Seoul",
    imageCredit: "AshleyBrownPix / Wikimedia Commons",
    imagePage: commonsPage("Gyeongbokgung Palace, Seoul.jpg"),
  },
  {
    city: "Seoul",
    title: "Changdeokgung-Palast und Huwon",
    kind: "UNESCO",
    area: "Anguk",
    time: "2,5-3,5 Std.",
    text: "Der bessere Palasttag mit Gartenfokus. Secret-Garden-Zugang reservieren, falls das Priorität bekommt.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/attractions/Changdeokgung-Palace/ENP000295",
    image: commonsImage("Changdeokgung Palace.jpg"),
    imageAlt: "Eingangsbereich des Changdeokgung Palace in Seoul",
    imageCredit: "Diego Manrique / Wikimedia Commons",
    imagePage: commonsPage("Changdeokgung Palace.jpg"),
  },
  {
    city: "Seoul",
    title: "Bukchon Hanok Village",
    kind: "Spaziergang",
    area: "Anguk",
    time: "1-2 Std.",
    text: "Historische Hanok-Gassen zwischen Gyeongbokgung und Changdeokgung. Ruhig und tagsüber besuchen.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/attractions/bukchon-hanok-village_/263",
    image: commonsImage("Bukchon Hanok Village 02.jpg"),
    imageAlt: "Hanok-Dächer und Gassen im Bukchon Hanok Village",
    imageCredit: "Bgag / Wikimedia Commons",
    imagePage: commonsPage("Bukchon Hanok Village 02.jpg"),
  },
  {
    city: "Seoul",
    title: "Cheonggyecheon",
    kind: "Abend",
    area: "Zentrales Seoul",
    time: "45-90 Min.",
    text: "Ein einfacher Abendspaziergang durch das Zentrum nach Dinner oder Marktessen.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/nature/CheonggyecheonStream/ENP000034",
    image: commonsImage("Cheonggyecheon stream (2533063423).jpg"),
    imageAlt: "Cheonggyecheon Stream mit Fußweg im Zentrum von Seoul",
    imageCredit: "Francisco Anzola / Wikimedia Commons",
    imagePage: commonsPage("Cheonggyecheon stream (2533063423).jpg"),
  },
  {
    city: "Gyeongju",
    title: "Bulguksa-Tempel",
    kind: "UNESCO",
    area: "Tohamsan",
    time: "2 Std.",
    text: "Repräsentative buddhistische Silla-Stätte und Anker für den Kulturerbe-Tag außerhalb des Zentrums.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=94395",
    image: commonsImage("Bulguksa temple main building.jpg"),
    imageAlt: "Hauptgebäude des Bulguksa Temple in Gyeongju",
    imageCredit: "Kmonsoor / Wikimedia Commons",
    imagePage: commonsPage("Bulguksa temple main building.jpg"),
  },
  {
    city: "Gyeongju",
    title: "Seokguram-Grotte",
    kind: "UNESCO",
    area: "nahe Bulguksa",
    time: "1-1,5 Std.",
    text: "Passt natürlich zu Bulguksa. VisitKorea nennt etwa 9 km mit dem Auto ab dem Tempel.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=94436",
    image: commonsImage("Seokguram Grotto 01.jpg"),
    imageAlt: "Außenbereich der Seokguram Grotto in Gyeongju",
    imageCredit: "Bgag / Wikimedia Commons",
    imagePage: commonsPage("Seokguram Grotto 01.jpg"),
  },
  {
    city: "Gyeongju",
    title: "Cheomseongdae und Wolji-Abend",
    kind: "Historisches Zentrum",
    area: "Hwangnam",
    time: "2-3 Std.",
    text: "Zentraler Spaziergang durch die alte Hauptstadt; Cheomseongdae ist kostenlos und passt vor Wolji am Abend.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsViewCid.do?cmsCid=264256",
    image: commonsImage("Cheomseongdae astronomical observatory.jpg"),
    imageAlt: "Cheomseongdae-Sternwarte in Gyeongju",
    imageCredit: "Mosbatho / Wikimedia Commons",
    imagePage: commonsPage("Cheomseongdae astronomical observatory.jpg"),
  },
  {
    city: "Busan",
    title: "Gamcheon Culture Village",
    kind: "Spaziergang",
    area: "Saha-gu",
    time: "2-3 Std.",
    text: "Bunte Hanggassen, Aussichtspunkte und Kunstprojekt-Geschichte. Schuhe für Treppen tragen.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000301001001000&uc_seq=365",
    image: commonsImage("Gamcheon Culture Village.jpg"),
    imageAlt: "Blick über das farbige Gamcheon Culture Village in Busan",
    imageCredit: "Bgag / Wikimedia Commons",
    imagePage: commonsPage("Gamcheon Culture Village.jpg"),
  },
  {
    city: "Busan",
    title: "Jagalchi Market",
    kind: "Markt",
    area: "Nampo",
    time: "1-2 Std.",
    text: "Einer der größten Fischmärkte Koreas; gut mit BIFF Square und Bupyeong Kkangtong Market kombinierbar.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=412",
    image: commonsImage("Jagalchi Fish Market 1.jpg"),
    imageAlt: "Innenbereich des Jagalchi Fish Market in Busan",
    imageCredit: "Dudva / Wikimedia Commons",
    imagePage: commonsPage("Jagalchi Fish Market 1.jpg"),
  },
  {
    city: "Busan",
    title: "Haeundae Blueline Park",
    kind: "Küste",
    area: "Haeundae",
    time: "2-3 Std.",
    text: "Beach Train und Sky Capsule auf der alten Küstenbahn zwischen Mipo, Cheongsapo und Songjeong.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=980",
    image: commonsImage("Songjeong buildings from above.jpg"),
    imageAlt: "Küstenblick rund um Songjeong am Haeundae Blue Line Park",
    imageCredit: "Wikimedia Commons",
    imagePage: commonsPage("Songjeong buildings from above.jpg"),
  },
  {
    city: "Busan",
    title: "Busan X the Sky",
    kind: "Aussicht",
    area: "Haeundae",
    time: "1-1,5 Std.",
    text: "Aussichtsoption bei klarer Sicht mit Küste, Brücke und Stadtblick vom LCT Landmark Tower.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=996",
    image: commonsImage("Skyline of Busan Including Gwangan Bridge, Marine City and LCT Skyscrapers.jpg"),
    imageAlt: "Busan-Skyline mit Gwangan Bridge, Marine City und LCT-Türmen",
    imageCredit: "Wikimedia Commons",
    imagePage: commonsPage("Skyline of Busan Including Gwangan Bridge, Marine City and LCT Skyscrapers.jpg"),
  },
];

const restaurants = [
  {
    city: "Seoul",
    title: "Mijin",
    area: "Jongno / Gwanghwamun",
    type: "Buchweizennudeln",
    text: "Kalte koreanische Buchweizennudeln, seit 1952 in Betrieb und nah an der Seoul-Basis.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/en/seoul-capital-area/kr-seoul/restaurant/mijin",
    image: commonsImage("Korean cold buckwheat noodle soup-Mul naengmyeon-01.jpg"),
    imageAlt: "Schale mit kalten koreanischen Buchweizennudeln",
    imageCredit: "Jinho Jung / Wikimedia Commons",
    imagePage: commonsPage("Korean cold buckwheat noodle soup-Mul naengmyeon-01.jpg"),
  },
  {
    city: "Seoul",
    title: "Hwangsaengga Kalguksu",
    area: "Bukchon",
    type: "Kalguksu und Mandu",
    text: "Nudelsuppe und Teigtaschen, passend zur Bukchon- und Palastrunde.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/kr/en/seoul-capital-area/kr-seoul/restaurant/hwangsaengga-kalguksu",
    image: commonsImage("Korean.noodle-Kalguksu-01.jpg"),
    imageAlt: "Koreanische Kalguksu-Nudelsuppe",
    imageCredit: "jslander / Wikimedia Commons",
    imagePage: commonsPage("Korean.noodle-Kalguksu-01.jpg"),
  },
  {
    city: "Seoul",
    title: "Gwanghwamun Gukbap",
    area: "Gwanghwamun",
    type: "Dwaeji-gukbap",
    text: "Klare Schweinesuppe nahe dem historischen Zentrum; wenn möglich die Mittagszeit an Werktagen meiden.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/en/seoul-capital-area/kr-seoul/restaurant/gwanghwamun-gukbap",
    image: commonsImage("Dwaeji-gukbap 1.jpg"),
    imageAlt: "Dwaeji-gukbap mit Beilagen",
    imageCredit: "chomjong / Wikimedia Commons",
    imagePage: commonsPage("Dwaeji-gukbap 1.jpg"),
  },
  {
    city: "Seoul",
    title: "Gwangjang Market Food Alley",
    area: "Jongno 5-ga",
    type: "Streetfood",
    text: "Traditioneller Markt für Mungbohnen-Pfannkuchen, Gimbap, Tteokbokki und Fischkuchen.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/shopping/gwangjang-market_/287",
    image: commonsImage("Gwangjang market.png"),
    imageAlt: "Streetfood-Stände im Gwangjang Market in Seoul",
    imageCredit: "ApoCloéMorgane / Wikimedia Commons",
    imagePage: commonsPage("Gwangjang market.png"),
  },
  {
    city: "Gyeongju",
    title: "Ipungnyeo Guro Ssambap",
    area: "Cheomseongdae",
    type: "Ssambap",
    text: "Leaf-wrap-Menü mit scharfem Schweinefleisch, Doenjang-Eintopf, Banchan und Gemüse.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=189246",
    image: commonsImage("Korean cuisine-Ssambap-01.jpg"),
    imageAlt: "Koreanisches Ssambap-Menü mit vielen Beilagen",
    imageCredit: "ebifry / Wikimedia Commons",
    imagePage: commonsPage("Korean cuisine-Ssambap-01.jpg"),
  },
  {
    city: "Gyeongju",
    title: "Byeolchaeban Gyodong Ssambap",
    area: "Hwangnam-dong",
    type: "Ssambap",
    text: "Weitere zentrale Ssambap-Option mit Schweine-Bulgogi, Enten-Bulgogi und gemüsereichen Tellern.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174261",
    image: commonsImage("Korean cuisine-Ssam-01.jpg"),
    imageAlt: "Koreanische Ssam-Wraps mit Gemüseblättern",
    imageCredit: "Wikimedia Commons",
    imagePage: commonsPage("Korean cuisine-Ssam-01.jpg"),
  },
  {
    city: "Gyeongju",
    title: "Hwangnambbang",
    area: "Hwangnam-dong",
    type: "Bäckerei",
    text: "Klassisches Gyeongju-Gebäck mit roter Bohnenpaste, entstanden in Hwangnam-dong.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174265",
    image: commonsImage("Hwangnam bread.JPG"),
    imageAlt: "Hwangnam-Brot mit roter Bohnenpaste",
    imageCredit: "ProjectManhattan / Wikimedia Commons",
    imagePage: commonsPage("Hwangnam bread.JPG"),
  },
  {
    city: "Busan",
    title: "Jeongjitgan",
    area: "Saha-gu",
    type: "Dwaeji-gukbap",
    text: "Spezialist für Busaner Schweinesuppe; Michelin beschreibt es als praktisch durchgehend geöffnet.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/kr/en/busan-region/busan_1025838/restaurant/jeongjitgan",
    image: commonsImage("Dwaeji Gukbap a0.jpg"),
    imageAlt: "Busaner Dwaeji-gukbap auf dem Tisch",
    imageCredit: "CYAN / Wikimedia Commons",
    imagePage: commonsPage("Dwaeji Gukbap a0.jpg"),
  },
  {
    city: "Busan",
    title: "Hapcheon Gukbapjip",
    area: "Nam-gu",
    type: "Dwaeji-gukbap",
    text: "Traditionelle Schweinesuppe mit klarer Brühe und gekochten Schweinefleischscheiben, kann ausverkaufen.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/kr/en/busan-region/busan_1025838/restaurant/hapcheon-gukbapjip",
    image: commonsImage("Dwaeji-gukbap 2.jpg"),
    imageAlt: "Schale Dwaeji-gukbap mit Beilagen",
    imageCredit: "chomjong / Wikimedia Commons",
    imagePage: commonsPage("Dwaeji-gukbap 2.jpg"),
  },
  {
    city: "Busan",
    title: "Bupyeong Kkangtong Market",
    area: "Nampo",
    type: "Night Market",
    text: "Späte Food-Markt-Option, die gegen 19:30 Uhr startet und bis in die Nacht läuft.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000302003001000&uc_seq=1861",
    image: commonsImage("Bupyeong Kkangtong Night Market.jpg"),
    imageAlt: "Bupyeong Kkangtong Night Market in Busan bei Nacht",
    imageCredit: "Christophe95 / Wikimedia Commons",
    imagePage: commonsPage("Bupyeong Kkangtong Night Market.jpg"),
  },
  {
    city: "Seoul",
    title: "Mingles",
    area: "Gangnam / Cheongdam",
    type: "3 Michelin-Sterne",
    text: "Aktuelle Spitzenoption der Korea-Ausgabe 2026: modernes koreanisches Tasting-Menü, nur mit früher Reservierung realistisch.",
    source: "Michelin Guide 2026",
    url: "https://guide.michelin.com/en/seoul-capital-area/kr-seoul/restaurant/mingles",
    image: commonsImage("Korean cuisine-Hanjeongsik-01.jpg"),
    imageAlt: "Koreanisches Hanjeongsik-Menü mit vielen Beilagen",
    imageCredit: "James and Winnie Maeng / Wikimedia Commons",
    imagePage: commonsPage("Korean cuisine-Hanjeongsik-01.jpg"),
  },
  {
    city: "Seoul",
    title: "Jungsik",
    area: "Gangnam / Cheongdam",
    type: "2 Michelin-Sterne",
    text: "Koreanische Fine-Dining-Adresse mit zeitgenössischem Menü. Als besonderer Abend einplanen, nicht als spontanen Food-Stopp.",
    source: "Michelin Guide 2026",
    url: "https://guide.michelin.com/kr/en/seoul-capital-area/kr-seoul/restaurant/jungsik511965",
    image: commonsImage("Korean cuisine-Gujeolpan-Platter of nine delicacies-01.jpg"),
    imageAlt: "Gujeolpan-Platte als Beispiel koreanischer Feinheiten",
    imageCredit: "Camemberu / Wikimedia Commons",
    imagePage: commonsPage("Korean cuisine-Gujeolpan-Platter of nine delicacies-01.jpg"),
  },
  {
    city: "Seoul",
    title: "La Yeon",
    area: "Jung-gu / The Shilla Hotel",
    type: "2 Michelin-Sterne",
    text: "Koreanische Küche mit Hotelblick vom 23. Stock. Passt besser zu einem ruhigen Seoul-Abend als zu einem engen Sightseeing-Tag.",
    source: "Michelin Guide 2026",
    url: "https://guide.michelin.com/us/en/seoul-capital-area/kr-seoul/restaurant/la-yeon",
    image: commonsImage("Korea.royal.cuisine-Sinseollo-01.jpg"),
    imageAlt: "Sinseollo aus der koreanischen Hofküche",
    imageCredit: "adifromusa / Wikimedia Commons",
    imagePage: commonsPage("Korea.royal.cuisine-Sinseollo-01.jpg"),
  },
  {
    city: "Busan",
    title: "Fiotto",
    area: "Haeundae / Dalmaji Hill",
    type: "1 Michelin-Stern",
    text: "Kleines Farm-to-table-Restaurant mit italienisch geprägtem Tasting-Menü; gute Busan-Option bei Haeundae-Fokus.",
    source: "Michelin Guide 2026",
    url: "https://guide.michelin.com/us/en/busan-region/busan_1025838/restaurant/fiotto",
    image: commonsImage("Spaghetti alle vongole.jpg"),
    imageAlt: "Teller Spaghetti alle vongole als Pastabeispiel",
    imageCredit: "AlMare / Wikimedia Commons",
    imagePage: commonsPage("Spaghetti alle vongole.jpg"),
  },
  {
    city: "Busan",
    title: "Le DORER",
    area: "Haeundae / Marine City",
    type: "1 Michelin-Stern",
    text: "2026 zum Stern promoted: modernes koreanisches Tasting-Menü mit lokalen Zutaten und Blickrichtung Meer.",
    source: "Michelin Guide 2026",
    url: "https://guide.michelin.com/kr/en/busan-region/busan_1025838/restaurant/le-dorer",
    image: commonsImage("Korean.food-Hanjungsik-01.jpg"),
    imageAlt: "Koreanisches Hanjungsik-Menü auf einem Tisch",
    imageCredit: "http2007 / Wikimedia Commons",
    imagePage: commonsPage("Korean.food-Hanjungsik-01.jpg"),
  },
];

const dayRecommendations = [
  {
    day: 3,
    city: "Seoul",
    title: "Palasttag ab Jongno",
    note: "Kurze Wege zwischen Palast, Bukchon und den Nudelstopps rund um Anguk.",
    sights: ["Gyeongbokgung-Palast", "Bukchon Hanok Village"],
    restaurants: ["Hwangsaengga Kalguksu", "Mijin"],
  },
  {
    day: 4,
    city: "Seoul",
    title: "Garten, Gassen und Stream",
    note: "Changdeokgung nur einplanen, wenn der Montag nicht zum Schließtag wird oder die Tour verschoben wird.",
    sights: ["Changdeokgung-Palast und Huwon", "Cheonggyecheon"],
    restaurants: ["Gwanghwamun Gukbap"],
  },
  {
    day: 5,
    city: "Seoul",
    title: "Marktabend",
    note: "Tagsüber flexibel lassen und den Abend für Streetfood bündeln.",
    sights: ["Cheonggyecheon"],
    restaurants: ["Gwangjang Market Food Alley"],
  },
  {
    day: 7,
    city: "Gyeongju",
    title: "Silla-Kulturerbe und lokale Klassiker",
    note: "Bulguksa und Seokguram zusammenlegen, danach zurück ins historische Zentrum.",
    sights: ["Bulguksa-Tempel", "Seokguram-Grotte", "Cheomseongdae und Wolji-Abend"],
    restaurants: ["Ipungnyeo Guro Ssambap", "Hwangnambbang"],
  },
  {
    day: 9,
    city: "Busan",
    title: "West-Busan oder Haeundae",
    note: "Bei klarem Wetter die Haeundae-Option höher priorisieren, sonst Märkte und Gamcheon bündeln.",
    sights: ["Gamcheon Culture Village", "Jagalchi Market", "Haeundae Blueline Park", "Busan X the Sky"],
    restaurants: ["Bupyeong Kkangtong Market", "Jeongjitgan"],
  },
  {
    day: 10,
    city: "Seoul",
    title: "Letzte Seoul-Reserve",
    note: "Nach Ankunft aus Busan nur kurze Wege ab Jongno planen.",
    sights: ["Cheonggyecheon"],
    restaurants: ["Mijin", "Gwanghwamun Gukbap"],
  },
];

const youngTips = [
  {
    tag: "Seoul",
    title: "Hongdae statt nur Myeongdong",
    text: "Für einen Abend mit Streetstyle, Live-Musik, kleinen Clubs, Fotoboxen und späten Snacks ist Hongdae stärker als reine Shoppingstraßen.",
    detail: "Praktisch nach einem lockeren Seoul-Tag; Rückweg per U-Bahn oder Taxi vorher prüfen.",
  },
  {
    tag: "Seoul",
    title: "Euljiro und Ikseon-dong",
    text: "Euljiro passt für Bars, Neon-Gassen und junge Cafés; Ikseon-dong ist tagsüber fotogen, wird aber schnell voll.",
    detail: "Wer es ruhiger will, geht früh am Tag nach Ikseon-dong und abends nach Euljiro.",
  },
  {
    tag: "Busan",
    title: "Gwangalli am Abend",
    text: "Gwangalli Beach ist für Menschen um 20 oft spannender als ein weiterer Marktstopp: Strand, Brückenblick, Cafés und entspannte Bars.",
    detail: "Gut als Alternative, wenn Haeundae tagsüber schon abgedeckt ist.",
  },
  {
    tag: "Budget",
    title: "Convenience-Store und T-Money",
    text: "Eine aufgeladene Transitkarte, Naver Map oder Kakao Map und ein paar Convenience-Store-Mahlzeiten sparen Zeit und Budget.",
    detail: "Für spontane Tage außerdem Schließfächer an größeren Stationen nutzen.",
  },
];

const insiderTips = [
  {
    tag: "Seoul",
    title: "Seochon nach Gyeongbokgung",
    text: "Westlich des Palasts liegen ruhigere Gassen, kleine Cafés und Läden. Das ist ein guter Kontrast zu Bukchon und Insadong.",
    detail: "Als kurze Schleife nach dem Palast einbauen, bevor der Tag zu voll wird.",
  },
  {
    tag: "Seoul",
    title: "Cheonggyecheon spät statt mittags",
    text: "Der Stream wirkt abends stärker und verbindet Gwanghwamun, Jongno und Euljiro ohne großen Planungsaufwand.",
    detail: "Guter Low-Energy-Stopp nach Fine Dining, Marktessen oder Jetlag-Tag.",
  },
  {
    tag: "Gyeongju",
    title: "Wolji zur blauen Stunde",
    text: "Donggung und Wolji nicht nur als Tagespunkt sehen: kurz nach Sonnenuntergang ist die Spiegelung meist der stärkste Moment.",
    detail: "Vorher Hwangnidan-gil früh erledigen, weil es später voller wird.",
  },
  {
    tag: "Busan",
    title: "Cheongsapo statt nur Haeundae",
    text: "Wenn die Küstenroute Priorität hat, lohnt Cheongsapo mit Sky Capsule, Daritdol Skywalk und Kaffee am Meer.",
    detail: "Reservierung für die Capsule prüfen, falls das der Haupttag in Busan wird.",
  },
];

const bookings = [
  {
    type: "Flug",
    title: "Lufthansa MUC - ICN - MUC",
    date: "16.-26. Okt. 2026",
    summary: "Direkte Hin- und Rückflüge für zwei Reisende.",
    facts: [
      "Hinflug LH718: München 15:55 Uhr am 16. Okt., Incheon 09:55 Uhr am 17. Okt.",
      "Rückflug LH719: Incheon 13:30 Uhr, München 18:35 Uhr am 26. Okt.",
      "Flugzeug: Airbus A350-900 auf beiden Strecken.",
      "Gesamtpreis laut Bestätigung: EUR 3.964,62.",
    ],
  },
  {
    type: "Hotel",
    title: "Amid Hotel Seoul",
    date: "17.-21. Okt. 2026",
    summary: "4 Nächte, Standard Twin Room, 2 Erwachsene, Jongno-gu.",
    facts: [
      "Check-in ab 15:00 Uhr, Check-out bis 12:00 Uhr.",
      "Adresse: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Telefon laut Quelle: +82 2 731 1004.",
      "Geplanter Betrag vor Ort: KRW 1.230.630.",
    ],
  },
  {
    type: "Hotel",
    title: "Yettle Hanok Stay",
    date: "21.-23. Okt. 2026",
    summary: "2 Nächte, Zweibettzimmer mit eigenem Bad, Gyeongju.",
    facts: [
      "Check-in 16:00-20:00 Uhr, Check-out 08:00-10:00 Uhr.",
      "Adresse: 9, Balgeunmaeul-gil, 38171 Gyeongju.",
      "Telefon laut Quelle: +82 10 4129 2494.",
      "Gesamt: KRW 260.000.",
    ],
  },
  {
    type: "Hotel",
    title: "Lotte Hotel Busan",
    date: "23.-25. Okt. 2026",
    summary: "2 Nächte, Superior Twin Room, Busanjin-gu.",
    facts: [
      "Check-in um 15:00 Uhr, Check-out bis 11:00 Uhr.",
      "Adresse: 772, Gaya-daero, Busanjin-gu, 47285 Busan.",
      "Telefon laut Quelle: +82 51 810 1000.",
      "Bezahlt: EUR 360,35.",
    ],
  },
  {
    type: "Hotel",
    title: "Amid Hotel Seoul",
    date: "25.-26. Okt. 2026",
    summary: "1 Nacht, Standard Twin Room, letzter Seoul-Stopp.",
    facts: [
      "Check-in um 15:00 Uhr, Check-out bis 12:00 Uhr.",
      "Adresse: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Telefon laut Quelle: +82 10 7140 2230.",
      "Bezahlt: EUR 182,87.",
    ],
  },
];

const deadlines = [
  {
    date: "2026-10-06T23:59:00+09:00",
    label: "6. Okt.",
    title: "Yettle Hanok Stay",
    text: "Kostenfreie Stornierung endet um 23:59 Uhr KST. Ab 7. Oktober können die vollen KRW 260.000 anfallen.",
  },
  {
    date: "2026-10-15T23:59:00+09:00",
    label: "15. Okt.",
    title: "Amid Hotel Seoul, erster Aufenthalt",
    text: "Kostenfreie Stornierung endet um 23:59 Uhr KST. Ab 16. Oktober können KRW 376.200 anfallen.",
  },
  {
    date: "2026-10-15T16:55:00+02:00",
    label: "15. Okt.",
    title: "Lufthansa-Check-in",
    text: "Online-Check-in öffnet etwa 23 Stunden vor Abflug in München.",
  },
  {
    date: "2026-10-21T23:59:00+09:00",
    label: "21. Okt.",
    title: "Lotte Hotel Busan",
    text: "Kostenfreie Stornierung endet um 23:59 Uhr KST. Ab 22. Oktober können EUR 360 anfallen.",
  },
  {
    date: "2026-10-23T23:59:00+09:00",
    label: "23. Okt.",
    title: "Amid Hotel Seoul, letzter Aufenthalt",
    text: "Kostenfreie Stornierung endet um 23:59 Uhr KST. Ab 24. Oktober können EUR 183 anfallen.",
  },
];

const arrivalNotes = [
  {
    tag: "ICN nach Seoul",
    title: "Airport-Limousine 6002",
    items: [
      "Vom Incheon Airport bis Jongno 2-ga.",
      "Etwa 6 Minuten zu Fuß von der Haltestelle zum Amid Hotel Seoul.",
      "Geschätzter Fahrpreis laut Hotelnachricht: KRW 17.000-18.000.",
    ],
  },
  {
    tag: "ICN nach Seoul",
    title: "AREX plus Linie 1",
    items: [
      "Mit AREX von Incheon Airport Terminal 1 oder 2 bis Seoul Station.",
      "Umstieg in Linie 1 und weiter bis Jonggak Station.",
      "Laut Hotelnachricht liegt Jonggak etwa 3 Minuten zu Fuß vom Hotel entfernt.",
    ],
  },
  {
    tag: "Offen",
    title: "Intercity-Tickets",
    items: [
      "Kein Ticket Seoul-Gyeongju, Gyeongju-Busan oder Busan-Seoul wurde in Reisedaten gefunden.",
      "Zugreservierungen ergänzen, sobald die genauen Abfahrtszeiten feststehen.",
      "Gepäckaufbewahrung für Check-in-Lücken sichtbar halten.",
    ],
  },
];

const weatherCodeLabels = {
  0: "Klar",
  1: "Überwiegend klar",
  2: "Teilweise bewölkt",
  3: "Bedeckt",
  45: "Nebel",
  48: "Raureifnebel",
  51: "Leichter Nieselregen",
  53: "Nieselregen",
  55: "Dichter Nieselregen",
  61: "Leichter Regen",
  63: "Regen",
  65: "Starker Regen",
  71: "Leichter Schnee",
  73: "Schnee",
  75: "Starker Schnee",
  80: "Leichte Schauer",
  81: "Schauer",
  82: "Starke Schauer",
  95: "Gewitter",
};

const storageKeys = {
  likes: "suedkorea.likes.v1",
  dayPhotos: "suedkorea.dayPhotos.v1",
};

function loadStoredObject(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}

function saveStoredObject(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

const state = {
  filter: "all",
  selectedDay: 1,
  selectedCity: "all",
  recommendationCity: "all",
  likes: loadStoredObject(storageKeys.likes),
  dayPhotos: loadStoredObject(storageKeys.dayPhotos),
};

const formatDate = (date) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const dayMonth = (date) => {
  const parts = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "short",
  }).formatToParts(new Date(`${date}T12:00:00Z`));

  return {
    day: parts.find((part) => part.type === "day")?.value || "",
    month: (parts.find((part) => part.type === "month")?.value || "").replace(".", ""),
  };
};

const daysUntil = (isoDate) => {
  const today = new Date();
  const target = new Date(isoDate);
  const ms = target.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  return Math.ceil(ms / 86400000);
};

const favoriteKey = (type, title) => `${type}:${title}`;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

function isLiked(key) {
  return Boolean(state.likes[key]);
}

function likeButton(key, title) {
  const liked = isLiked(key);
  const safeKey = escapeHtml(key);
  const safeTitle = escapeHtml(title);
  return `
    <button class="like-button" type="button" data-like-key="${safeKey}" aria-label="${safeTitle} merken" aria-pressed="${liked}">
      <span aria-hidden="true">♥</span>
      <span>${liked ? "Gemerkt" : "Merken"}</span>
    </button>
  `;
}

function updateLikeButtons(key) {
  document.querySelectorAll(".like-button").forEach((button) => {
    if (button.dataset.likeKey !== key) return;
    const liked = isLiked(key);
    button.setAttribute("aria-pressed", String(liked));
    button.querySelector("span:last-child").textContent = liked ? "Gemerkt" : "Merken";
  });
}

function bindLikeButtons(scope = document) {
  scope.querySelectorAll(".like-button").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.likeKey;
      if (!key) return;

      if (isLiked(key)) {
        delete state.likes[key];
      } else {
        state.likes[key] = true;
      }

      saveStoredObject(storageKeys.likes, state.likes);
      updateLikeButtons(key);
    });
  });
}

function dayPhotos(day) {
  return state.dayPhotos[String(day)] || [];
}

function photoGallery(day) {
  const photos = dayPhotos(day);

  if (!photos.length) {
    return `<p class="photo-empty">Noch keine Fotos für diesen Tag.</p>`;
  }

  return `
    <div class="photo-grid">
      ${photos
        .map((photo) => {
          const dataUrl = String(photo.dataUrl || "");
          if (!dataUrl.startsWith("data:image/")) return "";
          const id = escapeHtml(photo.id || "");
          const name = escapeHtml(photo.name || "Reisefoto");
          return `
            <figure class="photo-thumb">
              <img src="${escapeHtml(dataUrl)}" alt="${name}" loading="lazy">
              <figcaption>${name}</figcaption>
              <button class="photo-remove" type="button" data-photo-id="${id}" aria-label="Foto entfernen">Entfernen</button>
            </figure>
          `;
        })
        .join("")}
    </div>
  `;
}

function resizePhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const image = new Image();

      image.addEventListener("load", () => {
        const maxSide = 1200;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        resolve({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          name: file.name,
          dataUrl: canvas.toDataURL("image/jpeg", 0.82),
        });
      });

      image.addEventListener("error", reject);
      image.src = reader.result;
    });

    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

async function addPhotos(day, files) {
  const imageFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
  if (!imageFiles.length) return;

  const photos = await Promise.all(imageFiles.map(resizePhoto));
  const dayKey = String(day);
  state.dayPhotos[dayKey] = [...dayPhotos(day), ...photos].slice(-12);

  if (!saveStoredObject(storageKeys.dayPhotos, state.dayPhotos)) {
    window.alert("Die Fotos konnten nicht gespeichert werden. Bitte kleinere oder weniger Bilder auswählen.");
  }

  renderTimeline();
}

function bindPhotoControls(day) {
  const input = document.querySelector("#dayPhotoInput");
  if (input) {
    input.addEventListener("change", () => {
      addPhotos(day, input.files);
      input.value = "";
    });
  }

  document.querySelectorAll(".photo-remove").forEach((button) => {
    button.addEventListener("click", () => {
      const dayKey = String(day);
      state.dayPhotos[dayKey] = dayPhotos(day).filter((photo) => photo.id !== button.dataset.photoId);
      saveStoredObject(storageKeys.dayPhotos, state.dayPhotos);
      renderTimeline();
    });
  });
}

function renderStats() {
  const departureDelta = daysUntil(trip.start);
  const dynamicStats = [
    ...trip.stats,
    {
      value: departureDelta > 0 ? departureDelta : "0",
      label: departureDelta > 0 ? "Tage bis Abreise" : "Reise hat begonnen",
    },
  ];

  document.querySelector("#stats").innerHTML = dynamicStats
    .map(
      (item) => `
        <article class="stat">
          <span class="stat__value">${item.value}</span>
          <span class="stat__label">${item.label}</span>
        </article>
      `,
    )
    .join("");
}

function renderRoute() {
  const routeMap = document.querySelector("#routeMap");

  routeMap.innerHTML = trip.route
    .map(
      (stop, index) => `
        <button class="route-stop" type="button" data-city="${stop.city}" aria-pressed="${state.selectedCity === stop.city}">
          <span class="route-stop__index">${index + 1}</span>
          <span class="route-stop__code">${stop.code}</span>
          <span class="route-stop__city">${stop.city}</span>
          <span class="route-stop__meta">${stop.meta}</span>
        </button>
      `,
    )
    .join("");

  routeMap.querySelectorAll(".route-stop").forEach((button) => {
    button.addEventListener("click", () => {
      const city = button.dataset.city;
      state.selectedCity = state.selectedCity === city ? "all" : city;
      renderRoute();
      renderTimeline();
    });
  });
}

function renderFilters() {
  document.querySelector("#filters").innerHTML = filters
    .map(
      (filter) => `
        <button type="button" data-filter="${filter.id}" aria-pressed="${state.filter === filter.id}">
          ${filter.label}
        </button>
      `,
    )
    .join("");

  document.querySelectorAll("#filters button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderFilters();
      renderTimeline();
    });
  });
}

function renderDays() {
  document.querySelector("#dayStrip").innerHTML = days
    .map(
      (day) => `
        <button class="day-button" type="button" data-day="${day.day}" aria-pressed="${state.selectedDay === day.day}">
          <span class="day-button__num">Tag ${day.day}</span>
          <span class="day-button__date">${day.weekday} ${day.label}</span>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".day-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDay = Number(button.dataset.day);
      renderDays();
      renderTimeline();
    });
  });
}

function filteredEvents() {
  return events.filter((event) => {
    const filterMatch =
      state.filter === "all" ||
      event.type === state.filter ||
      (state.filter === "confirmed" && event.status === "confirmed");
    const dayMatch = event.day === state.selectedDay;
    const cityMatch = state.selectedCity === "all" || event.city === state.selectedCity;
    return filterMatch && dayMatch && cityMatch;
  });
}

function renderDayPanel() {
  const selected = days.find((day) => day.day === state.selectedDay);
  const dayEvents = events.filter((event) => event.day === state.selectedDay);
  const cities = [...new Set(dayEvents.map((event) => event.city))];
  const statuses = [...new Set(dayEvents.map((event) => event.status))];

  document.querySelector("#dayPanel").innerHTML = `
    <p class="day-panel__date">${formatDate(selected.date)}</p>
    <h3 class="day-panel__title">Tag ${selected.day}</h3>
    <div class="day-panel__meta">
      ${cities.map((city) => `<span class="pill">${city}</span>`).join("")}
      ${statuses.map((status) => `<span class="pill pill--soft">${statusLabels[status] || status}</span>`).join("")}
    </div>
    <div class="day-photos">
      <div class="day-photos__head">
        <h4>Fotos</h4>
        <label class="photo-upload-button" for="dayPhotoInput">Hochladen</label>
        <input class="visually-hidden" id="dayPhotoInput" type="file" accept="image/*" multiple>
      </div>
      ${photoGallery(selected.day)}
    </div>
  `;

  bindPhotoControls(selected.day);
}

function recommendationByTitle(collection, title) {
  return collection.find((item) => item.title === title);
}

function recommendationItem(item, label, type) {
  if (!item) return "";

  return `
    <article class="daily-card">
      <img class="daily-card__image" src="${item.image}" alt="${item.imageAlt}" loading="lazy">
      <div class="daily-card__body">
        <div class="recommendation-card__top">
          <span class="pill">${label}</span>
          <span class="pill pill--soft">${item.city}</span>
        </div>
        <h4>${item.title}</h4>
        <p>${item.area}${item.time ? ` · ${item.time}` : ""}</p>
        ${likeButton(favoriteKey(type, item.title), item.title)}
        <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">Quelle: ${item.source}</a>
      </div>
    </article>
  `;
}

function filteredDayRecommendations() {
  const plan = dayRecommendations.find((item) => item.day === state.selectedDay);
  const filterAllowsSights = state.filter === "all" || state.filter === "sight";
  const filterAllowsFood = state.filter === "all" || state.filter === "food";
  const cityMatches = !plan || state.selectedCity === "all" || state.selectedCity === plan.city;

  if (!plan || !cityMatches || (!filterAllowsSights && !filterAllowsFood)) return "";

  const sightItems = filterAllowsSights
    ? plan.sights.map((title) => recommendationByTitle(experiences, title)).filter(Boolean)
    : [];
  const restaurantItems = filterAllowsFood
    ? plan.restaurants.map((title) => recommendationByTitle(restaurants, title)).filter(Boolean)
    : [];
  const cards = [
    ...sightItems.map((item) => recommendationItem(item, "Sehen", "experience")),
    ...restaurantItems.map((item) => recommendationItem(item, "Essen", "restaurant")),
  ].join("");

  if (!cards) return "";

  return `
    <section class="daily-recommendations" aria-labelledby="daily-recommendations-title">
      <div class="daily-recommendations__head">
        <span class="pill">${plan.city}</span>
        <div>
          <h3 id="daily-recommendations-title">${plan.title}</h3>
          <p>${plan.note}</p>
        </div>
      </div>
      <div class="daily-recommendations__grid">${cards}</div>
    </section>
  `;
}

function renderTimeline() {
  renderDayPanel();
  const list = document.querySelector("#timelineList");
  const visibleEvents = filteredEvents();
  const recommendations = filteredDayRecommendations();

  if (!visibleEvents.length && !recommendations) {
    list.innerHTML = `<div class="empty-state">Kein Eintrag passt zu den gewählten Filtern für diesen Tag.</div>`;
    return;
  }

  const eventMarkup = visibleEvents
    .map((event) => {
      const { day, month } = dayMonth(event.date);
      const eventLike = ["sight", "activity", "food"].includes(event.type)
        ? likeButton(favoriteKey(event.type, event.title), event.title)
        : "";
      return `
        <article class="event-card" data-type="${event.type}">
          <div class="event-card__date" aria-hidden="true">
            <span class="event-card__day">${day}</span>
            <span class="event-card__month">${month}</span>
          </div>
          <div class="event-card__body">
            <div class="event-card__head">
              <div>
                <div class="event-card__tags">
                  <span class="pill">${typeLabels[event.type] || event.type}</span>
                  <span class="pill pill--soft">${statusLabels[event.status] || event.status}</span>
                  <span class="pill pill--soft">${event.city}</span>
                </div>
                <h3>${event.title}</h3>
                <p class="event-card__time">${event.time} - ${event.summary}</p>
              </div>
              <div class="event-card__actions">
                ${eventLike}
                <button class="toggle-button" type="button" aria-label="Details umschalten" aria-expanded="false">Details</button>
              </div>
            </div>
            <div class="event-card__details">
              <ul>${event.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  list.innerHTML = `${eventMarkup}${recommendations || ""}`;

  bindLikeButtons(list);

  list.querySelectorAll(".toggle-button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".event-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderWeatherSkeleton() {
  document.querySelector("#weatherGrid").innerHTML = weatherCities
    .map(
      (city) => `
        <article class="weather-card">
          <div>
            <span class="pill">${city.tripDates}</span>
            <h3>${city.city}</h3>
            <p>${city.climate}</p>
          </div>
          <div class="weather-card__status">Live-Wetter wird geladen...</div>
          <ul>${city.packing.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

async function getWeather(city) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: city.latitude,
    longitude: city.longitude,
    current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "Asia/Seoul",
    forecast_days: "7",
  }).toString();

  const response = await fetch(url);
  if (!response.ok) throw new Error("Wetteranfrage fehlgeschlagen");
  return response.json();
}

async function renderWeather() {
  renderWeatherSkeleton();
  const weatherGrid = document.querySelector("#weatherGrid");

  const results = await Promise.allSettled(weatherCities.map((city) => getWeather(city)));

  weatherGrid.innerHTML = weatherCities
    .map((city, index) => {
      const result = results[index];
      const data = result.status === "fulfilled" ? result.value : null;
      const current = data?.current;
      const todayCode = current?.weather_code;
      const forecastNote = current
        ? `${Math.round(current.temperature_2m)} °C aktuell, ${weatherCodeLabels[todayCode] || "wechselhaft"}, Wind ${Math.round(current.wind_speed_10m)} km/h`
        : "Live-Wetter nicht verfügbar. Klimanotiz wird angezeigt.";
      const rain = data?.daily?.precipitation_probability_max?.[0];
      const range = data?.daily
        ? `${Math.round(data.daily.temperature_2m_min[0])}-${Math.round(data.daily.temperature_2m_max[0])} °C heute`
        : "Reisewetter ist erst kurz vor Abreise verfügbar";

      return `
        <article class="weather-card">
          <div>
            <span class="pill">${city.tripDates}</span>
            <h3>${city.city}</h3>
            <p>${city.climate}</p>
          </div>
          <div class="weather-card__status">
            <strong>${forecastNote}</strong>
            <span>${range}${typeof rain === "number" ? `, ${rain}% Niederschlagsrisiko` : ""}</span>
          </div>
          <p class="weather-card__note">Die reisenahe Prognose für Oktober 2026 ist erst kurz vor Abreise verfügbar.</p>
          <ul>${city.packing.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `;
    })
    .join("");
}

function cityOptions() {
  return ["all", ...new Set(experiences.map((item) => item.city))];
}

function renderCityFilters() {
  document.querySelector("#cityFilters").innerHTML = cityOptions()
    .map(
      (city) => `
        <button type="button" data-city="${city}" aria-pressed="${state.recommendationCity === city}">
          ${city === "all" ? "Alle Städte" : city}
        </button>
      `,
    )
    .join("");

  document.querySelectorAll("#cityFilters button").forEach((button) => {
    button.addEventListener("click", () => {
      state.recommendationCity = button.dataset.city;
      renderCityFilters();
      renderExperiences();
      renderRestaurants();
    });
  });
}

function matchesRecommendationCity(item) {
  return state.recommendationCity === "all" || item.city === state.recommendationCity;
}

function renderExperiences() {
  const visible = experiences.filter(matchesRecommendationCity);
  document.querySelector("#experienceGrid").innerHTML = visible
    .map(
      (item) => `
        <article class="recommendation-card">
          <img class="card-photo" src="${item.image}" alt="${item.imageAlt}" loading="lazy">
          <div class="recommendation-card__body">
            <div class="recommendation-card__top">
              <span class="pill">${item.city}</span>
              <span class="pill pill--soft">${item.kind}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <dl>
              <div><dt>Gebiet</dt><dd>${item.area}</dd></div>
              <div><dt>Dauer</dt><dd>${item.time}</dd></div>
            </dl>
            ${likeButton(favoriteKey("experience", item.title), item.title)}
            <div class="source-stack">
              <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">Quelle: ${item.source}</a>
              <a class="source-link source-link--muted" href="${item.imagePage}" target="_blank" rel="noreferrer">Bild: ${item.imageCredit}</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  bindLikeButtons(document.querySelector("#experienceGrid"));
}

function renderRestaurants() {
  const visible = restaurants.filter(matchesRecommendationCity);
  document.querySelector("#restaurantGrid").innerHTML = visible
    .map(
      (item) => `
        <article class="restaurant-card">
          <img class="card-photo" src="${item.image}" alt="${item.imageAlt}" loading="lazy">
          <div class="restaurant-card__body">
            <div class="recommendation-card__top">
              <span class="pill">${item.city}</span>
              <span class="pill pill--soft">${item.type}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <p class="restaurant-card__area">${item.area}</p>
            ${likeButton(favoriteKey("restaurant", item.title), item.title)}
            <div class="source-stack">
              <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">Quelle: ${item.source}</a>
              <a class="source-link source-link--muted" href="${item.imagePage}" target="_blank" rel="noreferrer">Bild: ${item.imageCredit}</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  bindLikeButtons(document.querySelector("#restaurantGrid"));
}

function renderTipGrid(selector, tips) {
  document.querySelector(selector).innerHTML = tips
    .map(
      (tip) => `
        <article class="tip-card">
          <div class="tip-card__top">
            <span class="tip-card__tag">${tip.tag}</span>
            ${likeButton(favoriteKey("tip", tip.title), tip.title)}
          </div>
          <h4>${tip.title}</h4>
          <p>${tip.text}</p>
          <p class="tip-card__detail">${tip.detail}</p>
        </article>
      `,
    )
    .join("");

  bindLikeButtons(document.querySelector(selector));
}

function renderTips() {
  renderTipGrid("#youngTipsGrid", youngTips);
  renderTipGrid("#insiderTipsGrid", insiderTips);
}

function renderBookings() {
  document.querySelector("#bookingGrid").innerHTML = bookings
    .map(
      (booking, index) => `
        <article class="booking-card ${index === 0 ? "is-open" : ""}">
          <div class="booking-card__main">
            <div class="booking-card__top">
              <div>
                <div class="booking-card__meta">
                  <span class="pill">${booking.type}</span>
                  <span class="pill pill--soft">${booking.date}</span>
                </div>
                <h3>${booking.title}</h3>
              </div>
              <button class="toggle-button" type="button" aria-label="Buchungsdetails umschalten" aria-expanded="${index === 0}">
                Details
              </button>
            </div>
            <p class="booking-card__summary">${booking.summary}</p>
          </div>
          <div class="booking-card__details">
            <ul>${booking.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".booking-card .toggle-button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".booking-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderDeadlines() {
  document.querySelector("#deadlineList").innerHTML = deadlines
    .map(
      (deadline) => `
        <article class="deadline-item">
          <div class="deadline-item__date">${deadline.label}</div>
          <div>
            <p class="deadline-item__title">${deadline.title}</p>
            <p class="deadline-item__text">${deadline.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderArrivalNotes() {
  document.querySelector("#arrivalNotes").innerHTML = arrivalNotes
    .map(
      (note) => `
        <article class="note-card">
          <span class="note-card__tag">${note.tag}</span>
          <h3>${note.title}</h3>
          <ul>${note.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function bindGlobalActions() {
  document.querySelector("#collapseAll").addEventListener("click", () => {
    document.querySelectorAll(".booking-card.is-open, .event-card.is-open").forEach((card) => {
      card.classList.remove("is-open");
      const toggle = card.querySelector("[aria-expanded]");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelector("#refreshWeather").addEventListener("click", () => {
    renderWeather();
  });
}

function init() {
  renderStats();
  renderRoute();
  renderFilters();
  renderDays();
  renderTimeline();
  renderWeather();
  renderCityFilters();
  renderExperiences();
  renderRestaurants();
  renderTips();
  renderBookings();
  renderDeadlines();
  renderArrivalNotes();
  bindGlobalActions();
}

init();
