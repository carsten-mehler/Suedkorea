const trip = {
  start: "2026-10-16T15:55:00+02:00",
  end: "2026-10-26T18:35:00+01:00",
  travelers: 2,
  route: [
    { code: "MUC", city: "Munich", meta: "16 Oct" },
    { code: "ICN", city: "Seoul", meta: "17-21 Oct" },
    { code: "GJ", city: "Gyeongju", meta: "21-23 Oct" },
    { code: "BUS", city: "Busan", meta: "23-25 Oct" },
    { code: "ICN", city: "Seoul", meta: "25-26 Oct" },
  ],
  stats: [
    { value: "11", label: "calendar days" },
    { value: "9", label: "hotel nights" },
    { value: "5", label: "confirmed bookings" },
    { value: "2", label: "travelers" },
  ],
};

const filters = [
  { id: "all", label: "All" },
  { id: "confirmed", label: "Confirmed" },
  { id: "flight", label: "Flights" },
  { id: "stay", label: "Stays" },
  { id: "transfer", label: "Transfers" },
  { id: "sight", label: "Sights" },
  { id: "food", label: "Food" },
];

const days = Array.from({ length: 11 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 9, 16 + index, 12));
  return {
    day: index + 1,
    date: date.toISOString().slice(0, 10),
    label: date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
    weekday: date.toLocaleDateString("en-GB", { weekday: "short" }),
  };
});

const events = [
  {
    id: "outbound",
    type: "flight",
    status: "confirmed",
    city: "Munich",
    date: "2026-10-16",
    day: 1,
    time: "15:55",
    title: "LH718 to Seoul",
    summary: "Munich Terminal 2 to Incheon. Direct Lufthansa A350-900, 11h 00m.",
    details: [
      "Booking reference: 92ZOBS.",
      "Arrival: 17 October 2026 at 09:55 local time.",
      "Outbound baggage in the confirmation: 1 cabin bag, 1 personal item, and 2 checked bags up to 23 kg per traveler.",
    ],
  },
  {
    id: "seoul-arrival",
    type: "transfer",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-17",
    day: 2,
    time: "Morning",
    title: "Arrive at Incheon",
    summary: "Move to Jongno for the first stay at Amid Hotel Seoul.",
    details: [
      "Hotel check-in starts at 15:00.",
      "Hotel message lists bus 6002, taxi, and AREX plus Line 1 as transfer options.",
    ],
  },
  {
    id: "amid-first",
    type: "stay",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-17",
    day: 2,
    time: "17-21 Oct",
    title: "Amid Hotel Seoul",
    summary: "4 nights in a Standard Twin Room for two adults in Jongno-gu.",
    details: [
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Check-in: 17 October from 15:00. Check-out: 21 October by 12:00.",
      "Planned total at property: KRW 1,230,630.",
    ],
  },
  {
    id: "seoul-palaces",
    type: "sight",
    status: "idea",
    city: "Seoul",
    date: "2026-10-18",
    day: 3,
    time: "Day",
    title: "Palace and Bukchon loop",
    summary: "Gyeongbokgung, Bukchon Hanok Village, Insadong, and tea or noodles near Anguk.",
    details: [
      "Bukchon is residential; current guidance restricts visits in some areas to 10:00-17:00.",
      "Hwangsaengga Kalguksu and Mijin are practical food targets near the route.",
    ],
  },
  {
    id: "seoul-changdeok",
    type: "sight",
    status: "idea",
    city: "Seoul",
    date: "2026-10-19",
    day: 4,
    time: "Day",
    title: "Changdeokgung and Ikseon-dong",
    summary: "UNESCO palace, Secret Garden if reserved, then Ikseon-dong cafes and Cheonggyecheon.",
    details: [
      "Changdeokgung is closed Mondays, so move this if the 2026 calendar or operations change.",
      "Secret Garden access usually needs separate booking.",
    ],
  },
  {
    id: "seoul-market",
    type: "food",
    status: "idea",
    city: "Seoul",
    date: "2026-10-20",
    day: 5,
    time: "Evening",
    title: "Gwangjang Market food run",
    summary: "Classic street food evening before leaving Seoul.",
    details: [
      "Food alley is listed by Visit Seoul as open daily into the late evening.",
      "Useful options: mung bean pancake, gimbap, tteok-bokki, fish cake.",
    ],
  },
  {
    id: "seoul-to-gyeongju",
    type: "transfer",
    status: "confirmed",
    city: "Gyeongju",
    date: "2026-10-21",
    day: 6,
    time: "Midday",
    title: "Change city: Seoul to Gyeongju",
    summary: "Amid check-out by 12:00; Yettle Hanok Stay check-in 16:00-20:00.",
    details: [
      "No city-change transport booking was found in Reisedaten.",
      "Keep the luggage plan open until train tickets are booked.",
    ],
  },
  {
    id: "yettle",
    type: "stay",
    status: "confirmed",
    city: "Gyeongju",
    date: "2026-10-21",
    day: 6,
    time: "21-23 Oct",
    title: "Yettle Hanok Stay",
    summary: "2 nights in a twin room with private bathroom.",
    details: [
      "Address: 9, Balgeunmaeul-gil, 38171 Gyeongju.",
      "Check-in: 16:00-20:00. Check-out: 08:00-10:00.",
      "Total: KRW 260,000.",
    ],
  },
  {
    id: "gyeongju-heritage",
    type: "sight",
    status: "idea",
    city: "Gyeongju",
    date: "2026-10-22",
    day: 7,
    time: "Day",
    title: "Bulguksa, Seokguram, and old capital walk",
    summary: "UNESCO temple morning, then Cheomseongdae, Daereungwon, Donggung and Wolji after dark.",
    details: [
      "Bulguksa and Seokguram sit outside the historic center; group them together.",
      "Cheomseongdae and Wolji are stronger late afternoon or evening.",
    ],
  },
  {
    id: "gyeongju-food",
    type: "food",
    status: "idea",
    city: "Gyeongju",
    date: "2026-10-22",
    day: 7,
    time: "Lunch",
    title: "Ssambap or Hwangnam bread",
    summary: "Leaf-wrap set meal near Cheomseongdae, plus red bean Hwangnam bread in Hwangnam-dong.",
    details: [
      "Ipungnyeo Guro Ssambap is close to Cheomseongdae.",
      "Hwangnambbang is a useful edible souvenir stop.",
    ],
  },
  {
    id: "gyeongju-to-busan",
    type: "transfer",
    status: "confirmed",
    city: "Busan",
    date: "2026-10-23",
    day: 8,
    time: "Midday",
    title: "Change city: Gyeongju to Busan",
    summary: "Yettle check-out 08:00-10:00; Lotte Hotel Busan check-in at 15:00.",
    details: [
      "No train or bus booking for this leg was found in Reisedaten.",
      "Leave enough margin for luggage storage before the hotel room is ready.",
    ],
  },
  {
    id: "lotte",
    type: "stay",
    status: "confirmed",
    city: "Busan",
    date: "2026-10-23",
    day: 8,
    time: "23-25 Oct",
    title: "Lotte Hotel Busan",
    summary: "2 nights in a Superior Twin Room in Busanjin-gu.",
    details: [
      "Address: 772, Gaya-daero, Busanjin-gu, 47285 Busan.",
      "Check-in: 23 October at 15:00. Check-out: 25 October by 11:00.",
      "Paid total: EUR 360.35.",
    ],
  },
  {
    id: "busan-west",
    type: "sight",
    status: "idea",
    city: "Busan",
    date: "2026-10-24",
    day: 9,
    time: "Day",
    title: "Gamcheon, Jagalchi, and Bupyeong night market",
    summary: "Colorful hillside village, seafood market, then late food stalls.",
    details: [
      "Gamcheon is hilly; morning is usually easier for crowds and light.",
      "Bupyeong Kkangtong Market starts its night-market energy around 19:30.",
    ],
  },
  {
    id: "busan-east",
    type: "activity",
    status: "idea",
    city: "Busan",
    date: "2026-10-24",
    day: 9,
    time: "Alternate",
    title: "Haeundae coast option",
    summary: "Haeundae Beach, Blueline Park train or capsule, and Busan X the Sky.",
    details: [
      "Better if the weather is clear.",
      "Reserve Sky Capsule if you choose this as the main Busan day.",
    ],
  },
  {
    id: "busan-to-seoul",
    type: "transfer",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-25",
    day: 10,
    time: "Midday",
    title: "Change city: Busan to Seoul",
    summary: "Lotte check-out by 11:00; final Amid Hotel Seoul check-in at 15:00.",
    details: [
      "No city-change transport booking was found in Reisedaten.",
      "Book this leg after deciding how early to leave Busan.",
    ],
  },
  {
    id: "amid-final",
    type: "stay",
    status: "confirmed",
    city: "Seoul",
    date: "2026-10-25",
    day: 10,
    time: "25-26 Oct",
    title: "Amid Hotel Seoul",
    summary: "Final 1-night Seoul stay before the return flight.",
    details: [
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Check-in: 25 October at 15:00. Check-out: 26 October by 12:00.",
      "Paid total: EUR 182.87.",
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
    title: "LH719 to Munich",
    summary: "Incheon Terminal 1 to Munich. Direct Lufthansa A350-900, 13h 05m.",
    details: [
      "Arrival in Munich: 26 October 2026 at 18:35 local time.",
      "Return baggage in the confirmation: 1 cabin bag, 1 personal item, and 1 checked bag up to 23 kg per traveler.",
      "No return seat selection was found in the source confirmation.",
    ],
  },
];

const weatherCities = [
  {
    city: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
    tripDates: "17-21 Oct and 25-26 Oct",
    climate: "Crisp autumn city weather. Plan layers, a light jacket, and comfortable walking shoes.",
    packing: ["Light jacket", "Umbrella", "Palace walking shoes"],
  },
  {
    city: "Gyeongju",
    latitude: 35.8562,
    longitude: 129.2247,
    tripDates: "21-23 Oct",
    climate: "Cool mornings and evenings around open heritage sites. Add one warmer layer for night views.",
    packing: ["Warm layer", "Day pack", "Temple-appropriate outfit"],
  },
  {
    city: "Busan",
    latitude: 35.1796,
    longitude: 129.0756,
    tripDates: "23-25 Oct",
    climate: "Coastal and breezier than Seoul. Clear days are best for Haeundae, Blueline Park, and viewpoints.",
    packing: ["Wind layer", "Sunglasses", "Charged transit card"],
  },
];

const experiences = [
  {
    city: "Seoul",
    title: "Gyeongbokgung Palace",
    kind: "Palace",
    area: "Jongno",
    time: "2-3h",
    text: "First and largest Joseon palace, practical with Bukchon and Insadong from the Amid Hotel base.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/attractions/Gyeongbokgung-Palace_/73",
  },
  {
    city: "Seoul",
    title: "Changdeokgung Palace and Huwon",
    kind: "UNESCO",
    area: "Anguk",
    time: "2.5-3.5h",
    text: "A stronger garden-focused palace day. Reserve Secret Garden access if this becomes a priority.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/attractions/Changdeokgung-Palace/ENP000295",
  },
  {
    city: "Seoul",
    title: "Bukchon Hanok Village",
    kind: "Walk",
    area: "Anguk",
    time: "1-2h",
    text: "Historic residential hanok lanes between Gyeongbokgung and Changdeokgung. Keep visits quiet and daytime.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/attractions/bukchon-hanok-village_/263",
  },
  {
    city: "Seoul",
    title: "Cheonggyecheon Stream",
    kind: "Evening",
    area: "Central Seoul",
    time: "45-90m",
    text: "An easy evening walk through central Seoul after dinner or market food.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/nature/CheonggyecheonStream/ENP000034",
  },
  {
    city: "Gyeongju",
    title: "Bulguksa Temple",
    kind: "UNESCO",
    area: "Tohamsan",
    time: "2h",
    text: "Representative Silla Buddhist site and the anchor for the out-of-center heritage day.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=94395",
  },
  {
    city: "Gyeongju",
    title: "Seokguram Grotto",
    kind: "UNESCO",
    area: "Near Bulguksa",
    time: "1-1.5h",
    text: "Pairs naturally with Bulguksa. VisitKorea lists it 9 km by car from the temple.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=94436",
  },
  {
    city: "Gyeongju",
    title: "Cheomseongdae and Wolji evening",
    kind: "Historic core",
    area: "Hwangnam",
    time: "2-3h",
    text: "Central old-capital walk; Cheomseongdae is free and works well before an evening pond visit.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsViewCid.do?cmsCid=264256",
  },
  {
    city: "Busan",
    title: "Gamcheon Culture Village",
    kind: "Walk",
    area: "Saha-gu",
    time: "2-3h",
    text: "Colorful hillside lanes, viewpoints, and art project history. Wear shoes for stairs.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000301001001000&uc_seq=365",
  },
  {
    city: "Busan",
    title: "Jagalchi Market",
    kind: "Market",
    area: "Nampo",
    time: "1-2h",
    text: "One of Korea's largest fish markets; combine with BIFF Square and Bupyeong Kkangtong Market.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=412",
  },
  {
    city: "Busan",
    title: "Haeundae Blueline Park",
    kind: "Coast",
    area: "Haeundae",
    time: "2-3h",
    text: "Beach Train and Sky Capsule route along the old coastal railway between Mipo, Cheongsapo, and Songjeong.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=980",
  },
  {
    city: "Busan",
    title: "Busan X the Sky",
    kind: "Viewpoint",
    area: "Haeundae",
    time: "1-1.5h",
    text: "Clear-weather observatory option with coastline, bridge, and city views from LCT Landmark Tower.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=996",
  },
];

const restaurants = [
  {
    city: "Seoul",
    title: "Mijin",
    area: "Jongno / Gwanghwamun",
    type: "Buckwheat noodles",
    text: "Cold Korean-style buckwheat noodles, operating since 1952; close to the Seoul base.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/en/seoul-capital-area/kr-seoul/restaurant/mijin",
  },
  {
    city: "Seoul",
    title: "Hwangsaengga Kalguksu",
    area: "Bukchon",
    type: "Kalguksu and dumplings",
    text: "Noodle soup and dumpling stop that fits the Bukchon and palace loop.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/kr/en/seoul-capital-area/kr-seoul/restaurant/hwangsaengga-kalguksu",
  },
  {
    city: "Seoul",
    title: "Gwanghwamun Gukbap",
    area: "Gwanghwamun",
    type: "Dwaeji-gukbap",
    text: "Clean pork soup option near the historic center; avoid weekday lunch rush if possible.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/en/seoul-capital-area/kr-seoul/restaurant/gwanghwamun-gukbap",
  },
  {
    city: "Seoul",
    title: "Gwangjang Market food alley",
    area: "Jongno 5-ga",
    type: "Street food",
    text: "Traditional market for mung bean pancakes, gimbap, tteok-bokki, and fish cake.",
    source: "Visit Seoul",
    url: "https://english.visitseoul.net/shopping/gwangjang-market_/287",
  },
  {
    city: "Gyeongju",
    title: "Ipungnyeo Guro Ssambap",
    area: "Cheomseongdae",
    type: "Ssambap",
    text: "Leaf-wrap set meal with spicy pork, soybean paste stew, side dishes, and vegetables.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=189246",
  },
  {
    city: "Gyeongju",
    title: "Byeolchaeban Gyodong Ssambap",
    area: "Hwangnam-dong",
    type: "Ssambap",
    text: "Another central ssambap option with pork bulgogi, duck bulgogi, and vegetable-heavy plates.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174261",
  },
  {
    city: "Gyeongju",
    title: "Hwangnambbang",
    area: "Hwangnam-dong",
    type: "Bakery",
    text: "Classic Gyeongju red bean bread souvenir, created in Hwangnam-dong.",
    source: "VisitKorea",
    url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174265",
  },
  {
    city: "Busan",
    title: "Jeongjitgan",
    area: "Saha-gu",
    type: "Dwaeji-gukbap",
    text: "Busan-style pork soup specialist; Michelin notes it is effectively always open.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/kr/en/busan-region/busan_1025838/restaurant/jeongjitgan",
  },
  {
    city: "Busan",
    title: "Hapcheon Gukbapjip",
    area: "Nam-gu",
    type: "Dwaeji-gukbap",
    text: "Traditional pork soup with clear broth and boiled pork slices that can sell out.",
    source: "Michelin Guide",
    url: "https://guide.michelin.com/kr/en/busan-region/busan_1025838/restaurant/hapcheon-gukbapjip",
  },
  {
    city: "Busan",
    title: "Bupyeong Kkangtong Market",
    area: "Nampo",
    type: "Night market",
    text: "Late food-market option that starts around 19:30 and runs into the night.",
    source: "Visit Busan",
    url: "https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000302003001000&uc_seq=1861",
  },
];

const bookings = [
  {
    type: "Flight",
    title: "Lufthansa MUC - ICN - MUC",
    date: "16-26 Oct 2026",
    summary: "Direct return flights for two travelers.",
    facts: [
      "Outbound LH718: Munich 15:55 on 16 Oct, Incheon 09:55 on 17 Oct.",
      "Return LH719: Incheon 13:30, Munich 18:35 on 26 Oct.",
      "Aircraft: Airbus A350-900 both directions.",
      "Total price in confirmation: EUR 3,964.62.",
    ],
  },
  {
    type: "Hotel",
    title: "Amid Hotel Seoul",
    date: "17-21 Oct 2026",
    summary: "4 nights, Standard Twin Room, 2 adults, Jongno-gu.",
    facts: [
      "Check-in from 15:00, check-out by 12:00.",
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Phone in source: +82 2 731 1004.",
      "Total planned at property: KRW 1,230,630.",
    ],
  },
  {
    type: "Hotel",
    title: "Yettle Hanok Stay",
    date: "21-23 Oct 2026",
    summary: "2 nights, twin room with private bathroom, Gyeongju.",
    facts: [
      "Check-in 16:00-20:00, check-out 08:00-10:00.",
      "Address: 9, Balgeunmaeul-gil, 38171 Gyeongju.",
      "Phone in source: +82 10 4129 2494.",
      "Total: KRW 260,000.",
    ],
  },
  {
    type: "Hotel",
    title: "Lotte Hotel Busan",
    date: "23-25 Oct 2026",
    summary: "2 nights, Superior Twin Room, Busanjin-gu.",
    facts: [
      "Check-in at 15:00, check-out by 11:00.",
      "Address: 772, Gaya-daero, Busanjin-gu, 47285 Busan.",
      "Phone in source: +82 51 810 1000.",
      "Paid total: EUR 360.35.",
    ],
  },
  {
    type: "Hotel",
    title: "Amid Hotel Seoul",
    date: "25-26 Oct 2026",
    summary: "1 night, Standard Twin Room, final Seoul stop.",
    facts: [
      "Check-in at 15:00, check-out by 12:00.",
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Phone in source: +82 10 7140 2230.",
      "Paid total: EUR 182.87.",
    ],
  },
];

const deadlines = [
  {
    date: "2026-10-06T23:59:00+09:00",
    label: "6 Oct",
    title: "Yettle Hanok Stay",
    text: "Free cancellation ends at 23:59 KST. From 7 October, the full KRW 260,000 can apply.",
  },
  {
    date: "2026-10-15T23:59:00+09:00",
    label: "15 Oct",
    title: "Amid Hotel Seoul, first stay",
    text: "Free cancellation ends at 23:59 KST. From 16 October, KRW 376,200 can apply.",
  },
  {
    date: "2026-10-15T16:55:00+02:00",
    label: "15 Oct",
    title: "Lufthansa check-in",
    text: "Online check-in opens about 23 hours before the Munich departure.",
  },
  {
    date: "2026-10-21T23:59:00+09:00",
    label: "21 Oct",
    title: "Lotte Hotel Busan",
    text: "Free cancellation ends at 23:59 KST. From 22 October, EUR 360 can apply.",
  },
  {
    date: "2026-10-23T23:59:00+09:00",
    label: "23 Oct",
    title: "Amid Hotel Seoul, final stay",
    text: "Free cancellation ends at 23:59 KST. From 24 October, EUR 183 can apply.",
  },
];

const arrivalNotes = [
  {
    tag: "ICN to Seoul",
    title: "Airport limousine 6002",
    items: [
      "From Incheon Airport to Jongno 2-ga.",
      "About 6 minutes on foot from the stop to Amid Hotel Seoul.",
      "Estimated fare in hotel message: KRW 17,000-18,000.",
    ],
  },
  {
    tag: "ICN to Seoul",
    title: "AREX plus Line 1",
    items: [
      "Incheon Airport Terminal 1 or 2 to Seoul Station by AREX.",
      "Transfer to Line 1 and ride to Jonggak Station.",
      "Hotel message says Jonggak is about 3 minutes on foot from the hotel.",
    ],
  },
  {
    tag: "Open item",
    title: "Intercity tickets",
    items: [
      "No Seoul-Gyeongju, Gyeongju-Busan, or Busan-Seoul ticket was found in Reisedaten.",
      "Add train reservations after deciding exact departure times.",
      "Keep luggage storage plans visible for check-in gaps.",
    ],
  },
];

const weatherCodeLabels = {
  0: "Clear",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Light showers",
  81: "Showers",
  82: "Heavy showers",
  95: "Thunderstorm",
};

const state = {
  filter: "all",
  selectedDay: 1,
  selectedCity: "all",
  recommendationCity: "all",
};

const formatDate = (date) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const dayMonth = (date) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

const daysUntil = (isoDate) => {
  const today = new Date();
  const target = new Date(isoDate);
  const ms = target.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  return Math.ceil(ms / 86400000);
};

function renderStats() {
  const departureDelta = daysUntil(trip.start);
  const dynamicStats = [
    ...trip.stats,
    {
      value: departureDelta > 0 ? departureDelta : "0",
      label: departureDelta > 0 ? "days until departure" : "trip has started",
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
          <span class="day-button__num">Day ${day.day}</span>
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
    <h3 class="day-panel__title">Day ${selected.day}</h3>
    <div class="day-panel__meta">
      ${cities.map((city) => `<span class="pill">${city}</span>`).join("")}
      ${statuses.map((status) => `<span class="pill pill--soft">${status}</span>`).join("")}
    </div>
  `;
}

function renderTimeline() {
  renderDayPanel();
  const list = document.querySelector("#timelineList");
  const visibleEvents = filteredEvents();

  if (!visibleEvents.length) {
    list.innerHTML = `<div class="empty-state">No item matches the selected filters for this day.</div>`;
    return;
  }

  list.innerHTML = visibleEvents
    .map((event) => {
      const [day, month] = dayMonth(event.date).split(" ");
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
                  <span class="pill">${event.type}</span>
                  <span class="pill pill--soft">${event.status}</span>
                  <span class="pill pill--soft">${event.city}</span>
                </div>
                <h3>${event.title}</h3>
                <p class="event-card__time">${event.time} - ${event.summary}</p>
              </div>
              <button class="toggle-button" type="button" aria-label="Toggle details" aria-expanded="false">Details</button>
            </div>
            <div class="event-card__details">
              <ul>${event.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

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
          <div class="weather-card__status">Loading live weather...</div>
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
  if (!response.ok) throw new Error("Weather request failed");
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
        ? `${Math.round(current.temperature_2m)} C now, ${weatherCodeLabels[todayCode] || "weather changing"}, wind ${Math.round(current.wind_speed_10m)} km/h`
        : "Live weather unavailable. Climate planning note shown.";
      const rain = data?.daily?.precipitation_probability_max?.[0];
      const range = data?.daily
        ? `${Math.round(data.daily.temperature_2m_min[0])}-${Math.round(data.daily.temperature_2m_max[0])} C today`
        : "Trip forecast opens closer to departure";

      return `
        <article class="weather-card">
          <div>
            <span class="pill">${city.tripDates}</span>
            <h3>${city.city}</h3>
            <p>${city.climate}</p>
          </div>
          <div class="weather-card__status">
            <strong>${forecastNote}</strong>
            <span>${range}${typeof rain === "number" ? `, ${rain}% precipitation risk` : ""}</span>
          </div>
          <p class="weather-card__note">October 2026 trip-specific forecast will only be available shortly before departure.</p>
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
          ${city === "all" ? "All cities" : city}
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
          <div class="recommendation-card__top">
            <span class="pill">${item.city}</span>
            <span class="pill pill--soft">${item.kind}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <dl>
            <div><dt>Area</dt><dd>${item.area}</dd></div>
            <div><dt>Time</dt><dd>${item.time}</dd></div>
          </dl>
          <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">Source: ${item.source}</a>
        </article>
      `,
    )
    .join("");
}

function renderRestaurants() {
  const visible = restaurants.filter(matchesRecommendationCity);
  document.querySelector("#restaurantGrid").innerHTML = visible
    .map(
      (item) => `
        <article class="restaurant-card">
          <div class="recommendation-card__top">
            <span class="pill">${item.city}</span>
            <span class="pill pill--soft">${item.type}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <p class="restaurant-card__area">${item.area}</p>
          <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">Source: ${item.source}</a>
        </article>
      `,
    )
    .join("");
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
              <button class="toggle-button" type="button" aria-label="Toggle booking details" aria-expanded="${index === 0}">
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
  renderBookings();
  renderDeadlines();
  renderArrivalNotes();
  bindGlobalActions();
}

init();
