import axios from "axios";

export default axios.create({
  baseURL: "https://amazon-price1.p.rapidapi.com/",
  params: { marketplace: "ES", page: "8" },
  headers: {
    "x-rapidapi-key": "933fe44bd0msh294432dd5c9ee7cp110d37jsn36863d64fac1",
    "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
  },
});

/**
 * export default axios.create({
  baseURL: "https://wyre-data.p.rapidapi.com/restaurants/town/",
  headers: {
    "x-rapidapi-key": "ee9fbaec9dmshdb4e1f04ddbbd7bp1c4659jsn48d05ba5fa76",
    "x-rapidapi-host": "wyre-data.p.rapidapi.com",
  },
});

 */
