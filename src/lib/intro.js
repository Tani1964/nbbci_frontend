// The cinematic homepage intro plays once per browser session.
// Later visits to the homepage get the quiet version.
const KEY = "nbbc-intro-seen";
let available = true;
try {
  available = !sessionStorage.getItem(KEY);
} catch {
  /* storage blocked: still play once */
}

/** Returns true exactly once per session, the first time it is called. */
export function takeIntro() {
  if (!available) return false;
  available = false;
  try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }
  return true;
}

let headerPlayed = null;
/** The header animates in only alongside the first hero intro. */
export function headerShouldAnimate() {
  if (headerPlayed === null) headerPlayed = available && ["/", "/home"].includes(window.location.pathname);
  return headerPlayed;
}
