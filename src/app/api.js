import axios from "axios";

axios.defaults.baseURL = "https://swarovskidmitrii.ru/api/v1/";
axios.defaults.withCredentials = true;

export const getCategories = async () => {
  try {
    const res = await axios.get(`category`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (data) => {
  try {
    const res = await axios.post(`category`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
