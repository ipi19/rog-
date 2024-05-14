import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "36a7b7359cd944e5bdf9da555962e28d",
  },
});
