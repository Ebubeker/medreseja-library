import { request, gql } from "graphql-request";
import { useState } from "react";
import axios from "axios";

const graphAPI = process.env.GRAPHCMS_ENDPOINT;
const proxy = "https://backend-libraria.herokuapp.com";

export const krijoLiber = (bookObj) => {
  // const [info, setInfo] = useState()
  axios
    .post(`${proxy}/createLiber`, {
      bookInfo: bookObj,
    })
    .then((result) => true)
    .catch((err) => false);
};

export const GetLibrat = () => {
  return axios
    .get(`${proxy}/getLibrat`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => false);
};

export const getCupons = () => {
  return axios
    .get(`${proxy}/listCupon`)
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => false);
};

export const deleteLiber = (bookId) => {
  axios.delete(`${proxy}/deleteLiber/${bookId}`);
};

export const deleteCupon = (isbn) => {
  axios.delete(`${proxy}/deleteCupon/${isbn}`);
};

export const krijoKupon = (cuponObj) => {
  // const [info, setInfo] = useState()
  axios
    .post(`${proxy}/createCupon`, {
      cuponInfo: cuponObj,
    })
    .then((result) => true)
    .catch((err) => false);
};

export const decreaseStock = (bookId, newStock) => {
  axios.post(`${proxy}/decreaseStock`, {
    isbn: bookId,
    newStock: newStock,
  });
};

export const increaseStock = (bookId, newStock) => {
  axios.post(`${proxy}/increaseStock`, {
    isbn: bookId,
    newStock: newStock,
  });
};

export const updateBook = (obj) => {
  console.log(obj);
  axios.post(`${proxy}/updateBook`, {
    book: obj,
  });
};
