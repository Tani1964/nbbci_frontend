// Single source of truth for church facts used across the site.
// Every value here was taken from the previous site, the church's own
// YouTube channel, or church flyers. Do not add facts that the church
// has not confirmed. Items needing confirmation are marked `// CONFIRM`.

export const church = {
  name: "New Birth Baptist Church",
  shortName: "NBBC",
  town: "Ikorodu",
  slogan: "Raising Fruitful Disciples",
  sloganRef: "John 15:16",
  address: {
    line1: "5, Olateru Street",
    line2: "Off Haruna Bus-stop",
    city: "Ikorodu",
    region: "Lagos State",
    country: "Nigeria",
  },
  mapsQuery: "New Birth Baptist Church, 5 Olateru Street, Haruna, Ikorodu, Lagos",
  phones: [
    { display: "+234 808 149 4141", href: "tel:+2348081494141" },
    { display: "+234 906 802 2226", href: "tel:+2349068022226" },
  ],
  // Previous site listed both newbbcil@ and newbbci@. newbbcil matches the
  // @nbbcil social handle and appeared in two of three places. CONFIRM
  email: "newbbcil@gmail.com",
  whatsapp: "https://wa.me/2348081494141", // CONFIRM number is on WhatsApp
  virtualPrayerLine: "https://join.freeconferencecall.com/newbbci",
  site: "https://www.nbbcil.org", // printed on church flyers. CONFIRM live domain
};

export const socials = [
  { id: "youtube", label: "YouTube", handle: "@nbbcil", href: "https://www.youtube.com/@nbbcil" },
  { id: "facebook", label: "Facebook", handle: "nbbcil", href: "https://facebook.com/nbbcil" },
  { id: "instagram", label: "Instagram", handle: "nbbcil", href: "https://instagram.com/nbbcil" },
  { id: "radio", label: "NBBCI Radio", handle: "Listen live", href: "https://nbbciradio.ismyradio.com" },
];

export const yearTheme = {
  year: 2026,
  title: "Our Year of Exponential Growth",
  verse:
    "May the Lord give you increase more and more, you and your children. May you be blessed by the Lord, who made heaven and earth.",
  ref: "Psalm 115:14–15",
  alsoRef: "Colossians 2:6–7",
};

// Sunday sequence – the heart of "what to expect".
export const sundayFlow = [
  { time: "8:00", meridiem: "AM", title: "Pre-Worship Encounter", note: "We begin by seeking God together in prayer and expectation.", end: "8:30 AM" },
  { time: "8:30", meridiem: "AM", title: "Sunday School", note: "Interactive Bible study for every age, in classes.", end: "9:30 AM" },
  { time: "9:30", meridiem: "AM", title: "Worship Service", note: "Heartfelt worship, the preaching of the Word, and fellowship.", end: "11:30 AM" },
];

export const weekly = [
  { day: "Sunday", title: "Pre-Worship Encounter", time: "8:00 – 8:30 AM", place: "Church Auditorium" },
  { day: "Sunday", title: "Sunday School", time: "8:30 – 9:30 AM", place: "Church Auditorium" },
  { day: "Sunday", title: "Worship Service", time: "9:30 – 11:30 AM", place: "Church Auditorium", highlight: true },
  { day: "Monday", title: "Dew of Hermon", subtitle: "Early morning prayer", time: "6:00 – 6:30 AM", place: "Virtual", virtual: true },
  { day: "Tuesday", title: "Business Men & Women Fellowship", subtitle: "Prayer session", time: "5:00 – 6:00 AM", place: "Virtual", virtual: true },
  { day: "Wednesday", title: "Midweek Service", time: "5:30 – 7:00 PM", place: "Church Auditorium · streamed live" },
  { day: "Saturday", title: "Choir Rehearsal", time: "12:00 Noon", place: "Church Auditorium" },
];

// Dated programme. Past items are hidden automatically on the Events page.
// Update this list each month from the church bulletin.
export const programme = {
  label: "September 2026",
  items: [
    { start: "2026-08-30", end: "2026-09-02", title: "Family Week", detail: "Christian Family Growing Together in Christ (Hebrews 10:23–25). Guest Minister: Rev. Mike Babatunde.", time: "As scheduled", place: "Church Auditorium" },
    { start: "2026-09-03", title: "Let My Gate Be Opened", detail: "Abiding for Fruitfulness (John 15:4).", time: "5:30 PM", place: "Virtual" },
    { start: "2026-09-06", title: "Monthly Thanksgiving Service", detail: "Celebrate God's faithfulness with grateful hearts.", time: "9:30 AM", place: "Church Auditorium" },
    { start: "2026-09-06", title: "Discipleship Class", detail: "Be equipped for effective Christian living and service. Also on 20 September.", time: "8:00 AM", place: "Designated classes" },
    { start: "2026-09-06", title: "Sunday School Preparatory Class", detail: "Deepen your understanding of God's Word and its application. Also on 20 September.", time: "10:00 AM", place: "Sunday School classes" },
    { start: "2026-09-08", title: "Church Council Meeting", detail: "Prayer, planning and kingdom advancement.", time: "5:30 PM", place: "Church Auditorium" },
    { start: "2026-09-13", title: "Single and Useful", detail: "Topic: Love that lasts (1 Corinthians 13).", time: "12:00 Noon", place: "Church Auditorium" },
    { start: "2026-09-13", title: "G.A. Week", detail: "Topic to be announced.", time: "9:30 AM", place: "Church Auditorium" },
    { start: "2026-09-13", title: "Home Fellowship", detail: "Warmth, prayer and growth in small groups. Also on 27 September.", time: "5:30 PM", place: "Various centres" },
    { start: "2026-09-18", title: "Intercessory Night", detail: "Special intercession for homes. Topic: Heal Our Homes (Song of Solomon 2:15).", time: "5:30 PM", place: "Virtual" },
    { start: "2026-09-20", title: "Discipleship Class", detail: "Second session this month.", time: "8:00 AM", place: "Designated classes" },
    { start: "2026-09-20", title: "Sunday School Preparatory Class", detail: "Second session this month.", time: "10:00 AM", place: "Sunday School classes" },
    { start: "2026-09-27", title: "Home Fellowship", detail: "Second meeting this month.", time: "5:30 PM", place: "Various centres" },
  ],
};

export const about = {
  intro:
    "New Birth Baptist Church Ikorodu is a vibrant community committed to raising fruitful disciples.",
  story: [
    "At New Birth Baptist Church (NBBC) Ikorodu, we are an enthusiastic, Spirit-filled community of believers passionately committed to making disciples for Christ. Our church slogan, “Raising Fruitful Disciples” (John 15:16), captures our unwavering focus and driving purpose: to nurture followers of Jesus who bear lasting spiritual fruit that glorifies God.",
    "Established decades ago in the heart of Ikorodu, NBBC has a rich history of ministry and impact in our local community and beyond. Our diverse, multicultural congregation comes together with one accord to worship God, grow in faith, and serve our local and global communities.",
    "As a church, we provide a warm, welcoming, and inspiring atmosphere for Christian worship, teaching, and community. We are committed to proclaiming the truth of God's word, equipping believers to live out their faith, and raising up leaders who will continue this important work. Through dynamic preaching, engaging small groups, and Spirit-led ministries, we aim to see lives transformed by the power of the gospel, producing fruit that will last for eternity.",
  ],
  invitation:
    "Whether you are searching for a place to call home, exploring questions of faith, or simply curious about our community, we warmly invite you to join us on this journey of raising fruitful disciples for Christ.",
  pillars: ["Evangelism", "Worship", "Fellowship", "Discipleship", "Ministry"],
  missionLead: "Empowered by the Holy Spirit, we exist to:",
  mission: [
    { letter: "W", text: "Win souls" },
    { letter: "M", text: "Make true worshippers" },
    { letter: "I", text: "Integrate into the family" },
    { letter: "T", text: "Train into maturity" },
    { letter: "E", text: "Equip for service" },
  ],
  vision: "Raising a community of people with Christ-like nature.",
};

export const pastor = {
  name: "Rev. Dr. Emmanuel Oyerinde Adegbola",
  shortName: "Rev. Dr. Oyerinde Adegbola",
  role: "Resident Pastor since 2011",
  photo: "/assets/church/pastors/rev-dr-oyerinde-adegbola-500.webp",
  mandate:
    "to open their eyes so that they may turn from darkness to light and from the power of Satan to God, that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.",
  mandateRef: "Acts 26:18",
  summary:
    "A trained Baptist pastor with a strong passion for discipleship and nurturing wholesome family life, and a Pastor-Teacher with a shepherd's heart.",
  bio: [
    "Rev. Dr. Emmanuel Oyerinde Adegbola is a trained Baptist pastor with a strong passion for discipleship and nurturing wholesome family life. He came to faith on November 30, 2007, and was baptized on March 8, 2008, at Ajegunle Baptist Church in Saki.",
    "He received his call to ministry in 2000, with a mandate rooted in Acts 26:18. He fulfils this mission through the transformative power of God's Word.",
    "A Pastor-Teacher with a shepherd's heart, Pastor Oyerinde is dedicated to helping people discover, develop, and deploy their God-given gifts. As a devoted worshipper, he served as the Music and Youth Minister for five years at First Baptist Church Aguda, Lagos, before joining the ministry of New Birth Baptist Church as Resident Pastor in 2011.",
    // Previous site said "Christian Ethics" on one page and "Social Ethics" on another. CONFIRM
    "He holds a Master of Arts degree from Olabisi Onabanjo University, Ago-Iwoye, and a Doctor of Philosophy in Religious Ethics from Crowther Theological Seminary, Abeokuta.",
    "Pastor Oyerinde is happily married to Victoria Adebola Adegbola, and their union is blessed with two daughters, EriOluwa and Erimipo.",
  ],
};

export const deacons = [
  {
    name: "Dns. Maria Doom Gaadi",
    role: "Deaconess · Fellowship & Education Ministry",
    photo: "/assets/church/leadership/deaconess-maria-gaadi-800.webp",
    focus: "center 30%",
    verse: null,
    bio: [
      "Dns. Maria Gaadi gave her life to Christ in 1976 as a teenager at an open-air crusade in Kaduna and was baptized by immersion in 1977 in ECWA Church, also in Kaduna. She served as the coordinator of Air Force Secondary School Ikeja Staff and Students Fellowship.",
      "She joined New Estate Baptist Church, Surulere, in 1988 and served in various capacities, including Home Fellowship Leader, Odogbolu Home Fellowship Leader, Sunday School Teacher, member of the Socials Committee, and Teens Ministry Coordinator.",
      "A pioneer member of New Birth Baptist Church, she has served as Church Secretary, Personnel Committee Chairperson, Teens Ministry Coordinator, Visitation/Follow-Up Coordinator, Discipleship Coordinator, Sunday School Teacher/Secretary, and Prayer Ministry member. She was a board member of Baptist Model High School Agbowa from 2008 to 2012 and is currently a board member of Baptist Mission Schools.",
      "Currently, she coordinates the Fellowship and Education Ministry, overseeing Teens Fellowship, Children's Church, Youth Fellowship, Couples Fellowship, Singles Fellowship, Home Fellowship, Baptismal Class, Discipleship Ministry, and the Sunday School Department.",
      "She is married to Bro. Solomon Gaadi, and together they have six children.",
    ],
  },
  {
    name: "Dn. Rotimi Adebowale Adeoye",
    role: "Deacon · Worship Ministry",
    photo: "/assets/church/leadership/deacon-rotimi-adeoye-400.webp",
    focus: "center 25%",
    bio: [
      "Dn. Rotimi Adeoye joined New Birth Baptist Church, Ikorodu, in 2014. His journey began in 1989 when he became born again, and he was baptized in 1993 at New Estate Baptist Church. He served as the pioneer treasurer of New Port Baptist Church, Apapa, before moving to Ikorodu.",
      "At New Birth, he chaired the Community Impact Committee, organized the Community Hymn Singing programme, and served as Chairman of the Annual Thanksgiving Committee in 2017 and 2018. He rose from Fellowship Leader to Director in the Home Fellowship Ministry, and served as Chairman of the Nominating Committee in 2019.",
      "Currently, as Personnel Chairman and a Deacon, he oversees the Worship Ministry: Media, Drama, Music, Ushering, Praise Team, Prayer and Deliverance, and Counselling.",
      "He is supported by his wife, Sis. Yemisi Adeoye, and their three children.",
    ],
  },
  {
    name: "Dns. Adebisi Atinuke Ifegbesan",
    role: "Deaconess · Welfare & Services Ministry",
    photo: "/assets/church/leadership/deaconess-adebisi-ifegbesan-400.webp",
    focus: "center 25%",
    verse: { text: "Being confident of this very thing, that He who has begun a good work in you will complete it until the day of Jesus Christ.", ref: "Philippians 1:6" },
    bio: [
      "Dns. Adebisi Ifegbesan gave her life to Christ in April 1988 at Adelabu Street Baptist Church (now Good News Baptist Church), Surulere. She was baptized by immersion and completed training programmes including Follow the Master, Master Life, Serve the Master, Experiencing God and In God's Presence, serving as an usher, Sunday School teacher, baptismal class teacher, and member of the Evangelism Committee and Prayer Group.",
      "In 2006 her family relocated to Ikorodu, where the Lord guided them to New Birth Baptist Church. There she has served as an usher, Sunday School teacher, member of the Protocol and Security team, Prayer Group member, Teenagers' Coordinator, and baptismal class teacher, and completed Class 101, 201 and 301.",
      "Currently she serves as a Deacon overseeing the Welfare & Service group: medical, visitation, security, empowerment, welfare, building, utility, sanctuary keeping, beautification, and community impact.",
      "She is married to Bro. Opeoluwa Ifegbesan, and their union is blessed with two children.",
    ],
  },
];

export const accounts = [
  { purpose: "Offering & Tithe", label: "General Account", bank: "Access Bank", number: "0023417883", name: "New Birth Baptist Church Ikorodu" },
  { purpose: "Church projects", label: "Project Account", bank: "Sterling Bank", number: "0504899495", name: "New Birth Baptist Church Ikorodu" },
];

// Formspree form IDs – unchanged from the previous site.
export const forms = {
  contact: "xpwzpljq",
  counselling: "xvgokqba",
  prayer: "myzyepdq",
};

export const embeds = {
  radio: "https://nbbciradio.ismyradio.com",
  facebookPosts: "https://widgets.sociablekit.com/facebook-page-posts/iframe/25481832",
  facebookAlbums: "https://widgets.sociablekit.com/facebook-photo-albums/iframe/25481799",
  youtubeChannelId: "UCWwLMgzT_zStOD5QjVo5eog",
  // "UU" + channel id suffix = the channel's uploads playlist (always newest first)
  youtubeUploads: "UUWwLMgzT_zStOD5QjVo5eog",
};
