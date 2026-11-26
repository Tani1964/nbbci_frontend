// Service recordings from the church YouTube channel (@nbbcil), read from the
// channel's public RSS feed on 26 Nov 2026. Thumbnails are stored locally.
// The featured player also offers the live uploads playlist, so the newest
// service is always reachable even before this list is updated.

const raw = [
  ["-qcNZRZwdAs", "2026-08-02", "Sunday Worship Service", "sunday"],
  ["15Gb6EOmGMU", "2026-08-02", "Let My Gate Be Opened · August edition, Day 1", "prayer"],
  ["fFmM7UEFMSE", "2026-07-29", "Midweek Service", "midweek"],
  ["hVv1A2BGjMs", "2026-07-26", "Fifteen Years Pastor's Appreciation Service", "special"],
  ["mQNMmIjzzk0", "2026-07-26", "Fifteen Years Pastor's Appreciation Service · Recording 2", "special"],
  ["TyiRxiHsngY", "2026-07-19", "Health Sunday Service", "sunday"],
  ["UomvhW1W6g0", "2026-07-19", "Health Sunday Service · Recording 2", "sunday"],
  ["z6r484kLG3A", "2026-07-19", "Health Sunday Service · Recording 3", "sunday"],
  ["zBFxO5Ib3xk", "2026-07-17", "Intercessory Prayer · God of New Things", "prayer"],
  ["TB8iGXsAYsE", "2026-07-15", "Evening of Sacrificial Worship", "special"],
  ["NqMbV13oh3E", "2026-07-15", "Evening of Sacrificial Worship · Recording 2", "special"],
  ["yxy-dy2rhUc", "2026-07-12", "Sunday Worship Service", "sunday"],
  ["aRxk48N2280", "2026-07-08", "Midweek Service", "midweek"],
  ["V5wRjJWMDcE", "2026-07-05", "Sunday Worship Service", "sunday"],
];

export const recordings = raw.map(([id, date, title, kind]) => ({
  id,
  date,
  title,
  kind,
  thumb: `/assets/church/media/yt-${id}-640.webp`,
}));

export const recordingKinds = [
  { id: "all", label: "All" },
  { id: "sunday", label: "Sunday" },
  { id: "midweek", label: "Midweek" },
  { id: "prayer", label: "Prayer" },
  { id: "special", label: "Special services" },
];

// 4-column grid; spans are chosen so the 6 images tile a 4x4 block exactly.
export const gallery = [
  { src: "/assets/church/congregation/special-programme-group-photo", widths: [768, 1280], alt: "Members in green-and-white uniforms gathered with church leaders at a 2026 programme", span: "col-span-2 row-span-2" },
  { src: "/assets/church/services/minister-teaching-at-pulpit", widths: [414], alt: "A minister teaching from the pulpit", span: "row-span-2" },
  { src: "/assets/church/worship/young-minister-with-microphone", widths: [414], alt: "A young minister speaking during service", span: "row-span-2" },
  { src: "/assets/church/services/thanksgiving-dance-celebration", widths: [640, 1200], alt: "Members dancing joyfully to the front during thanksgiving", span: "col-span-2 row-span-2" },
  { src: "/assets/church/ministries/uniformed-youth-award-b", widths: [414], alt: "A uniformed young member receiving a certificate", span: "row-span-2" },
  { src: "/assets/church/ministries/children-in-prayer", widths: [414], alt: "Children praying with eyes closed", span: "row-span-2" },
];
