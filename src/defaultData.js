import { v4 as uuidv4 } from "uuid";

export const defaultData = [
  {
    title: "House in mountains 🏔️🏠",
    rooms: 3,
    price: 150,
    description:
      "Escape to a tranquil house in the mountains, offering breathtaking views and serene surroundings. Perfect for nature lovers and adventure seekers. This charming retreat provides an ideal getaway from the hustle and bustle of city life, with opportunities for hiking, wildlife spotting, and enjoying fresh mountain air.",
    id: uuidv4(),
  },
  {
    title: "Beach bungalow 🌊🏡",
    rooms: 5,
    price: 220,
    description:
      "Relax in a charming beach bungalow with direct access to the shore. Enjoy sun, sea, and sand in a cozy and comfortable setting. This beachfront retreat is perfect for families, couples, or solo travelers looking to unwind and soak up the coastal ambiance. With stunning ocean views, refreshing sea breezes, and proximity to local seafood restaurants, this bungalow offers a perfect blend of relaxation and adventure for a memorable seaside vacation.",
    id: uuidv4(),
  },
  {
    title: "Room in the city center 🏙️🛏️",
    rooms: 1,
    price: 100,
    description:
      "Stay in a convenient room located in the heart of the city. Ideal for travelers who want to explore urban attractions and nightlife. This modern, well-equipped room offers all the amenities you need for a comfortable stay, including Wi-Fi, a cozy bed, and a private bathroom. Step outside and find yourself surrounded by vibrant streets, cultural landmarks, and a variety of dining and shopping options. ",
    id: uuidv4(),
  },
  {
    title: "Cozy apartment in village 🌳🏘️",
    rooms: 2,
    price: 50,
    description:
      "Unwind in a cozy apartment nestled in a peaceful village. Experience the charm of rural life with all modern comforts. This delightful apartment features a fully equipped kitchen, a comfortable living area, and a tranquil bedroom, making it an ideal retreat for couples, families, or solo travelers. Enjoy the scenic views of the countryside, take leisurely walks through the village, and visit local markets to experience the community's unique culture. ",
    id: uuidv4(),
  },
];
