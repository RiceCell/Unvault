import FisbokUI from "./ui/FisbokUI";
import SpottifyUI from "./ui/SpottifyUI";
import YooToobUI from "./ui/YooToobUI";
import MockPlatformPage from "../game/MockPlatformPage";

// ─── Add new platform UIs here as you build them ──────────────────
//
//  import InstaGrahamUI from "./ui/InstaGrahamUI";
//  import TweetrUI      from "./ui/TweetrUI";
//  import SnapCatUI     from "./ui/SnapCatUI";
//  import TikTackUI     from "./ui/TikTackUI";
//  import LinkedOutUI   from "./ui/LinkedOutUI";
//  import PinItUI       from "./ui/PinItUI";
//  import RedTalkUI     from "./ui/RedTalkUI";
//  import WazzAppUI     from "./ui/WazzAppUI";
//  import DiscorkUI     from "./ui/DiscorkUI";
//
// ──────────────────────────────────────────────────────────────────

export const PLATFORM_UI = {
    fisbok: FisbokUI,
    spottify: SpottifyUI,
    yootoob: YooToobUI,

    // swap MockPlatformPage for a real UI as you build each one:
    instagraham: MockPlatformPage,
    tweetr: MockPlatformPage,
    snapcat: MockPlatformPage,
    tiktack: MockPlatformPage,
    linkedout: MockPlatformPage,
    pinit: MockPlatformPage,
    redtalk: MockPlatformPage,
    wazzapp: MockPlatformPage,
    discork: MockPlatformPage,
};