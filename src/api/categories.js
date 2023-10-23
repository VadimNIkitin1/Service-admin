import axios from "axios";

axios.defaults.baseURL = "https://swarovskidmitrii.ru/api/v1/";
axios.defaults.withCredentials = true;
axios.defaults.headers["Content-Type"] = "application/json";

export const getCategories = async () => {
  try {
    const res = await axios.get(`category/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (data) => {
  try {
    const res = await axios.post(`category/`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (data) => {
  try {
    const res = await axios.put(`category/?category_id=${data.id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const res = await axios.delete(`category/?category_id=${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const toggleCheckbox = async (data) => {
  try {
    const res = await axios.put(
      `category/${data.id}/checkbox/?checkbox=${data.code}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
