export const topCategories = [
  {
    id: "best-male-artist",
    label: "Best Male Artist",
    img: "https://cdn-icons-png.flaticon.com/128/3112/3112946.png",
  },
  {
    id: "best-female-artist",
    label: "Best Female Artist",
    img: "https://cdn-icons-png.flaticon.com/128/3112/3112870.png",
  },
  {
    id: "best-new-act",
    label: "Best New Act",
    img: "https://cdn-icons-png.flaticon.com/128/2583/2583434.png",
  },
  {
    id: "best-album",
    label: "Best Album",
    img: "https://cdn-icons-png.flaticon.com/128/2910/2910768.png",
  },
];

export const trendingNominees = [
  {
    id: "burna-boy",
    rank: 1,
    name: "Burna Boy",
    category: "Best Male Artist",
    img: "/images/burna-boy.jpg", // put in public/images/
    votes: 12400,
    about:
      "Award-winning Afro-fusion artist known for global tours and chart-topping releases.",
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
    img: "/images/davido.jpg",
    votes: 9800,
    about:
      "Afrobeats star with major international collaborations and high-impact albums.",
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
    img: "/images/wizkid.jpg",
    votes: 8800,
    about:
      "Global Afrobeats icon with multiple award wins and international recognition.",
    stats: { streams: "2.4B", awards: "40+", albums: 6 },
    achievements: ["International award recognition", "Multiple charting hits", "Global tours"],
  },
];

// Main list used by “All Nominees” + Category pages + detail pages
export const nominees = [
  ...trendingNominees,

  // add more so category pages aren’t empty
  {
    id: "asake",
    rank: 4,
    name: "Asake",
    category: "Best Album",
    img: "/images/asake.jpg",
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
    img: "/images/tems.jpg",
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
    img: "/images/rema.jpg",
    votes: 6400,
    about: "Genre-bending artist with viral hits and fast-growing fanbase.",
    stats: { streams: "900M", awards: "8+", albums: 1 },
    achievements: ["Viral hit", "Festival appearances", "Breakout year"],
  },
];

// Helpers your pages use
export const getNomineeById = (id) => nominees.find((n) => n.id === id);

export const getNomineesByCategory = (categoryLabel) =>
  nominees.filter((n) => n.category === categoryLabel);