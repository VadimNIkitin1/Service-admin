import axios from "axios";

axios.defaults.baseURL = "https://swarovskidmitrii.ru/api/v1/";
axios.defaults.withCredentials = true;
axios.defaults.headers["Content-Type"] = "application/json";

export const getProducts = async () => {
  try {
    const res = await axios.get(`product/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (data) => {
  try {
    const res = await axios.post(`product/`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`product/?product_id=${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (data) => {
  try {
    const res = await axios.put(`product/?product_id=${data.id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const toggleCheckbox = async (data) => {
  try {
    const res = await axios.put(
      `product/${data.id}/checkbox/?checkbox=${data.code}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUnits = async () => {
  try {
    const res = await axios.get(`product/unit/all/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
