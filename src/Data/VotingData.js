// ── Category images
import Best_Male_Logo from "../assets/Images/Best_Male_Logo.png";
import Best_Female_Logo from "../assets/Images/Best_Female_Logo.png";
import Best_New_Act_Logo from "../assets/Images/Best_New_Act.png";
import Best_Album_Logo from "../assets/Images/Best_Album.png";

// ── Nominee images
import BurnaBoy from "../assets/Images/BurnaBoy.png";
import Davido from "../assets/Images/Background.png";
import Wizkid from "../assets/Images/Wizkid.png";
import Asake from "../assets/Images/Asake.png";
import Tems from "../assets/Images/Tems.png";
import Rema from "../assets/Images/Rema.png";

export const topCategories = [
  { id: "best-male-artist",   label: "Best Male Artist",   img: Best_Male_Logo },
  { id: "best-female-artist", label: "Best Female Artist", img: Best_Female_Logo },
  { id: "best-new-act",       label: "Best New Act",       img: Best_New_Act_Logo },
  { id: "best-album",         label: "Best Album",         img: Best_Album_Logo },
  { id: "song-of-the-year",    label: "Song of the Year",   img: Best_New_Act_Logo },
];

export const trendingNominees = [
  {
    id: "burna-boy",
    rank: 1,
    name: "Burna Boy",
    category: "Best Male Artist",
    img: BurnaBoy,
    votes: 12400,
    about: "Award-winning Afro-fusion artist known for global tours and chart-topping releases.",
    stats: { streams: "2.1B", awards: "25+", albums: 7 },
    achievements: [
      "Grammy winner",
      "Multiple sold-out international tours",
      "Top chart positions globally",
    ],
  },
  {
    id: "davido",
    rank: 2,
    name: "Davido",
    category: "Best Album",
    img: Davido,
    votes: 9800,
    about: "Afrobeats star with major international collaborations and high-impact albums.",
    stats: { streams: "1.7B", awards: "30+", albums: 5 },
    achievements: [
      "Multi-platinum certifications",
      "Major global collaborations",
      "Headlined international festivals",
    ],
  },
  {
    id: "wizkid",
    rank: 3,
    name: "Wizkid",
    category: "Song of the Year",
    img: Wizkid,
    votes: 8800,
    about: "Global Afrobeats icon with multiple award wins and international recognition.",
    stats: { streams: "2.4B", awards: "40+", albums: 6 },
    achievements: [
      "International award recognition",
      "Multiple charting hits",
      "Global tours",
    ],
  },
];

export const nominees = [
  ...trendingNominees,
  {
    id: "asake",
    rank: 4,
    name: "Asake",
    category: "Best Album",
    img: Asake,
    votes: 7600,
    about: "High-energy performer with a strong album run and packed shows.",
    stats: { streams: "800M", awards: "10+", albums: 2 },
    achievements: ["Album buzz", "Sold-out shows", "Hit singles"],
  },
  {
    id: "tems",
    rank: 5,
    name: "Tems",
    category: "Best Female Artist",
    img: Tems,
    votes: 6900,
    about: "Singer/songwriter with standout vocals and global features.",
    stats: { streams: "1.2B", awards: "15+", albums: 2 },
    achievements: ["Global features", "Award wins", "International tours"],
  },
  {
    id: "rema",
    rank: 6,
    name: "Rema",
    category: "Best New Act",
    img: Rema,
    votes: 6400,
    about: "Genre-bending artist with viral hits and fast-growing fanbase.",
    stats: { streams: "900M", awards: "8+", albums: 1 },
    achievements: ["Viral hit", "Festival appearances", "Breakout year"],
  },
];

export const getNomineeById = (id) => nominees.find((n) => n.id === id);

export const getNomineesByCategory = (categoryLabel) =>
  nominees.filter((n) => n.category === categoryLabel);

export const getLeader = () => nominees.reduce((a, b) => (a.votes > b.votes ? a : b));