//       _           _    _                     _
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "loading.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "coldnight.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
	"13.jpg",
	"14.jpg",
	"15.jpg",
	"16.jpg",
	"17.jpg",
	"18.jpg",
	"19.jpg",
	"20.jpg",
	"21.jpg",
	"22.jpg",
	"23.jpg",
	"24.jpg",
	"25.jpg",
	"26.jpg",
	"27.jpg",
	"28.jpg",
	"29.jpg",
	"30.jpg"
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
//{youtube: "https://www.youtube.com/watch?v=VaDN_19rPyw", name: "Voile, the Magic Library"},
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "dreaming.ogg", name: "Dreaming! (Off Vocal)"},
	{ogg: "kagayaki.ogg", name: "輝きの向こう側へ"},
	{ogg: "ready.ogg", name: "READY!!（BGM Version)"},
	{ogg: "thankyou.ogg", name: "Thank You! (Off Vocal)"},
	{ogg: "tsubomi.ogg", name: "つぼみ (Off Vocal)"},
	{ogg: "union.ogg", name: "UNION!! (Off Vocal)"},
	{ogg: "dtprincess.ogg", name: "だってあなたはプリンセス (In Game/Off Vocal)"},
	{ogg: "angelic.ogg", name: "Angelic Parade (In Game/Off Vocal)"},
	{ogg: "brave.ogg", name: "brave HARMONY (In Game/Off Vocal)"},
	{ogg: "growing.ogg", name: "Growing Storm (In Game/Off Vocal)"},
	{ogg: "melty.ogg", name: "Melty Fantasia (In Game/Off Vocal)"},
	{ogg: "pretty.ogg", name: "PRETTY DREAMER (In Game/Off Vocal)"},
	{ogg: "shooting.ogg", name: "Shooting Stars (In Game/Off Vocal)"},
	{ogg: "starry.ogg", name: "Starry Melody (In Game/Off Vocal)"},
	{ogg: "haruonna.ogg", name: "ハルマチ女子 (In Game/Off Vocal)"},
	{ogg: "nijiletters.ogg", name: "虹色letters (In Game/Off Vocal)"}
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 30;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"서버 애드온 모음집을 설치해주세요.",
	"환영합니다!",
	"운행시 관제사의 지시에 따라주세요.",
	"처음 오시는 분은 MOTD의 강좌영상을 확인해주세요.",
	"열차 소환은 Train spawner를 사용합니다.",
	"서버 디스코드에 꼭 가입해주세요."
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
