# Image sources and permissions

All production images are stored locally under `public/assets/`. No component hotlinks an external image.

Originals came from the previous site's `src/assets/` folder; previously used images were 22 MB in total. They were converted to WebP (cwebp, quality 78–85, metadata stripped) at the widths listed, about 2 MB in total. Third-party *embeds* (YouTube player, Google Maps, NBBCI Radio, SociableKit Facebook widgets) are iframes, not images, and were already used by the previous site.

## Status key
- **Church-owned (assumed):** supplied in the church's own repository and previously published on the church website. Please confirm the church holds rights to publish these and that pictured members are comfortable being shown.
- **Church channel:** thumbnail from the church's own YouTube channel (@nbbcil).

| Local file(s) | Original | Category | Used on | Status |
|---|---|---|---|---|
| `church/congregation/sunday-worship-drone-view-{768,1280,2048}.webp` | previous repo `src/assets/drone_view.jpg` | Congregation | Home hero, About banner; OG image | Church-owned (assumed) |
| `og/nbbc-og-1200x630.jpg` | crop of `drone_view.jpg` | Social share | `<meta og:image>` | Church-owned (assumed) |
| `church/congregation/member-in-red-at-service-{640,1152}.webp` | `nbbci_images/796968341_…_n.jpg` (Facebook export, 1152×2048) | Congregation | Home "Who we are" (arch) | **Church Facebook, supplied by the church.** Confirm the member is happy to be featured prominently. |
| `church/congregation/special-programme-group-photo-{768,1280,2048}.webp` | `nbbci_images/806984559_…_n.jpg` (2048×1152) | Congregation / missions | Ministries (Missions), Media gallery | Church Facebook, supplied by the church. **Captioned neutrally.** It looks like G.A. Week (green-and-white uniforms, 2026 theme banner); confirm before naming it. |
| `church/services/minister-preaching-at-pulpit-{640,1152}.webp` | `nbbci_images/568348075_…_n.jpg` (1152×2048) | Services | Visit (service times) | Church Facebook, supplied by the church. Minister not named, because there is no confirmed identity. |
| `church/worship/worshipper-hand-raised-a-414.webp` | `nbbci_images/749652303_…_n.jpg` | Worship | Home "Who we are" (inset) | Church Facebook, supplied by the church |
| `church/worship/worshipper-hand-raised-b-414.webp` | `nbbci_images/750035860_…_n.jpg` | Worship | Ministries (Worship), faces strip | Church Facebook, supplied by the church |
| `church/worship/young-minister-with-microphone-414.webp` | `nbbci_images/749652041_…_n.jpg` | Worship | Media gallery, faces strip | Church Facebook, supplied by the church |
| `church/services/minister-teaching-at-pulpit-414.webp` | `nbbci_images/751703479_…_n.jpg` | Services | Media gallery | Church Facebook, supplied by the church |
| `church/congregation/members-embrace-414.webp` | `nbbci_images/762372467_…_n.jpg` | Fellowship | Ministries (Fellowship), faces strip | Church Facebook, supplied by the church |
| `church/ministries/children-church-gathering-414.webp` | `nbbci_images/762689118_…_n.jpg` | Children | Ministries (Education) | Church Facebook, supplied by the church. **Minors pictured: confirm parental consent policy.** |
| `church/ministries/child-sharing-a-meal-414.webp` | `nbbci_images/758830733_…_n.jpg` | Children / welfare | Ministries (Welfare) | as above, minor pictured |
| `church/ministries/children-in-prayer-414.webp` | `nbbci_images/756347813_…_n.jpg` | Children | Media gallery, faces strip | as above, minors pictured |
| `church/ministries/child-hands-clasped-414.webp` | `nbbci_images/762812906_…_n.jpg` | Children | Faces strip | as above, minor pictured |
| `church/ministries/uniformed-youth-award-b-414.webp` | `nbbci_images/768727721_…_n.jpg` | Youth | Media gallery | as above, minor pictured |
| `church/services/thanksgiving-dance-celebration-{640,1200}.webp` | previous repo `src/assets/slider/PIC 2.png` | Services | Media gallery | Church-owned (assumed) |
| `church/congregation/member-portrait-01…13.webp` | previous repo, 13 small Facebook-export PNGs | Members | Home faces strip | Church-owned (assumed). Source is only 220×250, so they are shown small. |
| `church/pastors/rev-dr-oyerinde-adegbola-500.webp` | previous repo `src/assets/_DSC0758.png` | Pastor | Home, About | Church-owned (assumed) |
| `church/leadership/deaconess-maria-gaadi-800.webp` | previous repo `src/assets/gaadi.jpg` | Leadership | About | Church-owned (assumed) |
| `church/leadership/deaconess-adebisi-ifegbesan-400.webp` | previous repo `456603820_…_n.png` | Leadership | About | Church-owned (assumed) |
| `church/leadership/deacon-rotimi-adeoye-400.webp` | previous repo `456607803_…_n (1).png` | Leadership | About | Church-owned (assumed) |
| `church/brand/nbbc-logo-320.webp`, `/logo.png`, `/apple-touch-icon.png`, `/favicon-64.png` | previous repo `src/assets/logo.png` | Brand | Header, Links page, favicon | Church-owned |
| `church/media/yt-{videoId}-640.webp` (14 files) | `https://i.ytimg.com/vi/{videoId}/maxresdefault.jpg` | Service thumbnails | Home "Watch", Media archive | Church channel (youtube.com/@nbbcil), downloaded 26 Nov 2026 |

**Supplied by the church** means the files were provided by the site owner on 26 Nov 2026 in `nbbci_images/`, exported from facebook.com/nbbcil/photos. The originals are kept in that folder, which is git-ignored. Twelve of the 15 are 414×414, so they are only used at small and medium sizes. Higher-resolution originals from the church's photographer would let them be used larger.

## Retired images (not used in the redesign)
- `slider/PIC 1, 3, 4` (praise team, uniformed-youth handshake, robed choir), `old.png` and `417508389_…png` (congregation): replaced by the newer, cleaner Facebook photos. The slider shots were taken in front of the dated 2024 "Blameless Walk" banner.
- From `nbbci_images/`: `759809867_…` (auditorium, too small to use large) and `767101600_…` (a near-duplicate of another award photo) are not used.
- `Giving-back-1920x640.png`, `894278709f902ac1761011fef8317f93.png`, `giving-coins-and-young-shoot.png` (1×1), `BG.png`: generic stock imagery of unknown licence.
- `slider/PIC 5.png` (speaker at pulpit): retired; the frame was dominated by the dated 2024 theme banner, and the speaker was not identified.
- `Frame 50.png` (stock hand icon), `Frame 22.png` / `Frame 221.png` (pastor collage graphics), `banner.jpg` and `417410835_…png` (2026 and 2024 theme flyers), `bulletin/img1–6.jpeg` (programme flyers), `457098549_…png` (unconfirmed identity), and two 1×1 placeholders.

The 2026 theme ("Our Year of Exponential Growth", Psalm 115:14–15) from the flyer is now set as live text instead of an image.

## Facebook gallery
The church supplied 15 photos from facebook.com/nbbcil/photos (see above). They could not be fetched directly, because Facebook requires sign-in and no login wall was bypassed. The SociableKit album and posts widgets returned no content on 26 Nov 2026 (a sync has been requested), so on the Media page they load on click, behind a direct link to the Facebook page.

**Still worth getting:** a wide, high-resolution exterior photo of the church building, and 2000px+ originals of worship and children's ministry.
