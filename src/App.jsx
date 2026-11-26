import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";

// Interior pages are split so the homepage ships the least JavaScript.
const About = lazy(() => import("./pages/About"));
const Ministries = lazy(() => import("./pages/Ministries"));
const Events = lazy(() => import("./pages/Events"));
const Media = lazy(() => import("./pages/Media"));
const Visit = lazy(() => import("./pages/Visit"));
const Give = lazy(() => import("./pages/Give"));
const Prayer = lazy(() => import("./pages/Prayer"));
const Links = lazy(() => import("./pages/Links"));
const NotFound = lazy(() => import("./pages/NotFound"));

/** Scroll to top on route change, or to the #hash target when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // wait a frame for lazy pages to render
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Main() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "/home";
  return (
    // Footer sits inside Suspense so it never renders above a page that is still loading (no layout shift).
    <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
    <main id="main" tabIndex={-1} className={`flex-1 outline-none ${isHome ? "" : "pt-[72px] md:pt-20"}`}>
        <div key={isHome ? "home" : pathname} className={isHome ? undefined : "page-enter"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Navigate to="/visit#contact" replace />} />
          <Route path="/give" element={<Give />} />
          {/* Previous site served giving + prayer at /resources */}
          <Route path="/resources" element={<Navigate to="/give" replace />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/link" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
    </main>
    <SiteFooter />
    </Suspense>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <Main />
      </div>
    </BrowserRouter>
  );
}
