import axios from "axios";
const baseUrl = "https://aarnif.github.io/db.json";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data.art;
};

export default { getAll };
