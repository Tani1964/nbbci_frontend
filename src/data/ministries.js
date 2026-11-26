// Ministry structure and descriptions carried over from the previous site.
// Coordinators are taken from the deacons' published biographies.

export const ministries = [
  {
    slug: "worship",
    title: "Worship Ministry",
    image: { src: "/assets/church/worship/worshipper-hand-raised-b", widths: [414], aspect: "aspect-square", alt: "A member worshipping joyfully with her hand raised", focus: "50% 30%" },
    coordinator: "Dn. Rotimi Adeoye",
    description:
      "At the heart of our church's spiritual life, leading the congregation into meaningful worship. Through music, media, and drama, this ministry enriches our services, uplifting hearts and minds toward God.",
    units: [
      { title: "Media", text: "Manages audio-visual elements: sound, projection of lyrics and scriptures, and livestreams that let worship reach those who cannot attend in person." },
      { title: "Drama", text: "Brings the gospel to life through plays, skits and reenactments that make biblical lessons engaging for all ages." },
      { title: "Music", text: "Leads worship songs, creating an atmosphere that helps people connect with God through reverent praise." },
      { title: "Ushering & Protocol", text: "Greets and assists worshippers, helps them find seats, and keeps services flowing without distraction." },
      { title: "Praise Team", text: "Works alongside the Music team to lead vibrant, joyful expressions of worship." },
      { title: "Prayer & Deliverance", text: "Prays with and for the congregation, addressing specific needs and offering prayers for healing and freedom." },
      { title: "Counselling & Follow-up", text: "Provides emotional and spiritual guidance, reaching out to new members and following up so everyone feels connected." },
    ],
  },
  {
    slug: "missions",
    title: "Missions & Outreaches",
    image: { src: "/assets/church/congregation/special-programme-group-photo", widths: [768, 1280], aspect: "aspect-[4/3]", alt: "Members in green-and-white uniforms gathered with church leaders at a 2026 programme", focus: "50% 45%" },
    description:
      "Our commitment to spreading the gospel beyond the church walls. Through local and international outreach, this ministry brings hope and support to communities in need.",
    units: [
      { title: "Men's Missionary Union", text: "Men engaged in community outreach, providing hands-on help and sharing the gospel with a focus on local needs." },
      { title: "Women's Missionary Union", text: "Compassionate outreach through programmes for women and children, offering support, guidance and faith-based resources." },
      { title: "Preaching Stations", text: "Small stations in local areas that bring consistent spiritual support to neighbourhoods with limited access to churches." },
      { title: "Evangelism Team", text: "Shares the gospel through organised street evangelism, door-to-door outreach and community events." },
    ],
  },
  {
    slug: "fellowship",
    title: "Fellowship Ministry",
    image: { src: "/assets/church/congregation/members-embrace", widths: [414], aspect: "aspect-square", alt: "Two members embracing warmly in the auditorium", focus: "50% 35%" },
    coordinator: "Dns. Maria Gaadi",
    description:
      "Fostering relationships and spiritual growth among members. Through age- and life-stage groups, this ministry builds a supportive, faith-filled community.",
    units: [
      { title: "Children Church", text: "A safe, engaging environment where young children learn Bible stories and moral values in ways they understand." },
      { title: "Teens Fellowship", text: "A community for teenagers to explore their faith, ask questions, and find guidance through Bible study and mentorship." },
      { title: "Youth Fellowship", text: "For young adults: friendships, personal growth and a deeper understanding of faith through discussion, events and service." },
      { title: "Singles Fellowship", text: "Support and community for single adults to grow spiritually and find encouragement." },
      { title: "Couples Fellowship", text: "Resources for relationship building, family guidance and faith-centred activities that strengthen marriages." },
      { title: "Home Fellowship", text: "Small groups meeting in homes, where members share meals, discuss faith and support one another." },
    ],
  },
  {
    slug: "education",
    title: "Education Ministry",
    image: { src: "/assets/church/ministries/children-church-gathering", widths: [414], aspect: "aspect-square", alt: "Children gathered together during Children Church", focus: "50% 50%" },
    coordinator: "Dns. Maria Gaadi",
    description:
      "Structured spiritual education and training that deepens knowledge of the Bible and strengthens faith.",
    units: [
      { title: "Sunday School", text: "Weekly classes for all ages, teaching foundational biblical truths and how to apply scripture to daily life." },
      { title: "Baptismal Class", text: "Prepares new believers for baptism through teaching on faith, commitment and the meaning of baptism." },
      { title: "Discipleship", text: "A structured programme that nurtures and mentors new believers into active, mature members." },
    ],
  },
  {
    slug: "welfare",
    title: "Welfare & Services",
    image: { src: "/assets/church/ministries/child-sharing-a-meal", widths: [414], aspect: "aspect-square", alt: "A young member enjoying a meal at church", focus: "50% 40%" },
    coordinator: "Dns. Adebisi Ifegbesan",
    description:
      "Caring for the practical needs of members and the wider community, providing support in health, security and general welfare.",
    units: [
      { title: "Medical", text: "Medical assistance and health support, including health clinics and care for members and the community." },
      { title: "Visitation", text: "Makes sure members who are sick, elderly or homebound receive visits, support and encouragement." },
      { title: "Security", text: "Maintains a safe and secure environment during services and events." },
      { title: "Care & Welfare", text: "Food, clothing and financial assistance for members and neighbours facing hardship." },
      { title: "Maintenance", text: "Keeps church facilities clean, functional and welcoming." },
    ],
  },
  {
    slug: "administration",
    title: "Secretariat & Administration",
    description:
      "The organisational and operational work of the church, ensuring efficient and transparent stewardship of resources, people and policies.",
    units: [
      { title: "Finance", text: "Donations, expenses and budget planning, with financial transparency and accountability." },
      { title: "Audit", text: "Regular audits to ensure proper use of church funds and adherence to financial policy." },
      { title: "Membership", text: "Accurate membership records and engagement initiatives that foster belonging." },
      { title: "Secretariat", text: "Church communications, record-keeping and support for meetings and events." },
      { title: "Asset Management", text: "Oversees church property, equipment and resources." },
      { title: "Empowerment", text: "Programmes that equip members with skills, resources and support." },
      { title: "Legal", text: "Advises the church on legal matters and compliance." },
      { title: "History & Literature", text: "Preserves the church's history and manages its literature and records." },
      { title: "Personnel", text: "Recruits, trains and supports church staff and volunteers." },
    ],
  },
];
