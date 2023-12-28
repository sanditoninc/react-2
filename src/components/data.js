import image1 from "../images/tour-1.jpeg";
import image2 from "../images/tour-2.jpeg";
import image3 from "../images/tour-3.jpeg";
import image4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
    id: 101,
  },
  {
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
    id: 102,
  },
  {
    href: "https://www.squarespace.com",
    icon: "fab fa-squarespace",
    id: 103,
  },
];

export const services = [
  {
    id: 1,
    service: "saving money",
    icon: "fas fa-wallet fa-fw",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    service: "endless hiking",
    icon: "fas fa-tree fa-fw",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    service: "amazing confort",
    icon: "fas fa-socks fa-fw",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: image1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    locaction: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: image2,
    date: "october 1th, 2020",
    title: "best of java",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    locaction: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: image3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    locaction: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: image4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    locaction: "kenya",
    duration: 20,
    cost: 3300,
  },
];
