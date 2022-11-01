// all images imported from images directory
import product_01_image_01 from "../images/Brinjal.jpg";
import product_01_image_02 from "../images/carrot.jpg";
import product_01_image_03 from "../images/potatoes.jpg";

import product_02_image_01 from "../images/dhal.jpg";
import product_02_image_02 from "../images/rice.jpg";
import product_02_image_03 from "../images/eggs.jpg";

import product_03_image_01 from "../images/cocacola.jpg";
import product_03_image_02 from "../images/freshmilk.jpg";
import product_03_image_03 from "../images/mixfruit.jpg";

import product_04_image_01 from "../images/oil.jpg";
import product_04_image_02 from "../images/oil2.jpg";
import product_04_image_03 from "../images/oil3.jpg";

import product_05_image_01 from "../images/onion.jpg";
import product_05_image_02 from "../images/tomatoes.jpg";
import product_05_image_03 from "../images/garlic.jpg";

import product_06_image_01 from "../images/banana.jpg";
import product_06_image_02 from "../images/papaya.jpg";
import product_06_image_03 from "../images/apple.jpg";

const products = [
  {
    id: "01",
    title: "Carrot",
    price: 24.0,
    image01: product_01_image_02,
    image02: product_01_image_02,
    image03: product_01_image_02,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Dhal",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_01,
    image03: product_02_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Coca Cola",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_01,
    image03: product_03_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Cooking Oil",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_01,
    image03: product_04_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Onion",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_01,
    image03: product_05_image_01,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Brinjal",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_01,
    image03: product_01_image_01,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Rice",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_02,
    image03: product_02_image_02,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Fresh Milk",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_02,
    image03: product_03_image_02,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Cooking Oil",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_02,
    image03: product_04_image_02,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Tomatoes",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_02,
    image03: product_05_image_02,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Banana ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_01,
    image03: product_06_image_01,
    category: "Bread",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Papaya ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_02,
    image03: product_06_image_02,
    category: "Bread",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Apple",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_03,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "14",
    title: "Potatoes",
    price: 35.0,
    image01: product_01_image_03,
    image02: product_01_image_03,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "15",
    title: "eggs",
    price: 110.0,
    image01: product_02_image_03,
    image02: product_02_image_03,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "16",
    title: "Garlic",
    price: 24.0,
    image01: product_05_image_03,
    image02: product_05_image_03,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;