import burna from "../assets/Images/BurnaBoy.png"
import arya from "../assets/Images/Arya.png"
import rema from "../assets/Images/Rema.png"
import tems from "../assets/Images/Tems.png"
import wizkid from "../assets/Images/Wizkid.png"
import tiwa from "../assets/Images/Tiwa.png"
import asa from "../assets/Images/Asa.png"
import omawumi from "../assets/Images/Omawumi.png"
import asake from "../assets/Images/Asake.png"
import davido from "../assets/Images/Davido.png"
import fireboy from "../assets/Images/Fireboy.png"
import fave from "../assets/Images/Fave.png"



export const categories = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "male-artist",
    label: "Best Male Artist",
  },
  {
    id: "female-artist",
    label: "Best Female Artist",
  },
  {
    id: "new-act",
    label: "Best New Act",
  },
  {
    id: "best-album",
    label: "Best Album",
  },
  {
    id: "best-song",
    label: "Song of thr Year",
  },
];

export const contestants = [
  {
    id: 1,
    category: "male-artist",
    rank: 1,
    name: "Burna Boy",
    title: "Best Male Artist",
    votes: "12.4k",
    change: "+1.2k trending",
    image: burna,
    progress: 90,
  },

  {
    id: 2,
    category: "female-artist",
    rank: 1,
    name: "Arya Starr",
    title: "Best Female Artist",
    votes: "10.1k",
    change: "+800",
    image: arya,
    progress: 80,
  },

  {
    id: 3,
    category: "male-artist",
    rank: 2,
    name: "Rema",
    title: "Best Male Artist",
    votes: "9.8k",
    change: "-200",
    image: rema,
    progress: 80,
  },

  {
    id: 4,
    category: "female-artist",
    rank: 2,
    name: "Tems",
    title: "Best Female Artist",
    votes: "9.5k",
    change: "+500",
    image: tems,
    progress: 65,
  },

  {
    id: 5,
    category: "male-artist",
    rank: 3,
    name: "Davido",
    title: "Best Male Artist",
    votes: "9.2k",
    change: "-150",
    image: davido,
    progress: 70,
  },

  {
    id: 6,
    category: "female-artist",
    rank: 3,
    name: "Tiwa Savage",
    title: "Best Female Artist",
    votes: "8.7k",
    change: "-250",
    image: tiwa,
    progress: 60,
  },

  {
    id: 7,
    category: "male-artist",
    rank: 4,
    name: "wizkid",
    title: "Best Male Artist",
    votes: "9.0k",
    change: "-100",
    image: wizkid,
    progress: 65,
  },

  {
    id: 8,
    category: "female-artist",
    rank: 4,
    name: "Omawunmi",
    title: "Best Female Artist",
    votes: "8.0k",
    change: "-100",
    image: omawumi,
    progress: 55,
  },

  {
    id: 9,
    category: "male-artist",
    rank: 5,
    name: "Asake",
    title: "Best Male Artist",
    votes: "8.5k",
    change: "+450",
    image: asake,
    progress: 60,
  },

  {
    id: 10,
    category: "female-artist",
    rank: 5,
    name: "Fave",
    title: "Best Female Artist",
    votes: "7.8k",
    change: "+250",
    image: fave,
    progress: 55,
  },

  {
    id: 11,
    category: "male-artist",
    rank: 6,
    name: "Fireboy DML",
    title: "Best Male Artist",
    votes: "7.2k",
    change: "-+1.1k",
    image: fireboy,
    progress: 55,
  },

  {
    id: 12,
    category: "female-artist",
    rank: 6,
    name: "Asa",
    title: "Best Female Artist",
    votes: "7.2k",
    change: "+1k",
    image: asa,
    progress: 50,
  },
];
