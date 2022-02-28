import { request, gql } from "graphql-request";
import { useState } from "react";
import axios from "axios";

const graphAPI = process.env.GRAPHCMS_ENDPOINT;

export const krijoLiber = (bookObj) => {
  // const [info, setInfo] = useState()
  axios
    .post("http://localhost:4000/createLiber", {
      bookInfo: bookObj,
    })
    .then((result) => true)
    .catch((err) => false);
};

export const GetLibrat = () => {
  return axios
    .get("http://localhost:4000/getLibrat")
    .then((res) => {
      return res.data;
    })
    .catch((err) => false);
};

export const getCupons = () => {
  return axios
    .get("http://localhost:4000/listCupon")
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => false);
};

export const deleteLiber = (bookId) => {
  axios.delete(`http://localhost:4000/deleteLiber/${bookId}`);
};

export const deleteCupon = (isbn) => {
  axios.delete(`http://localhost:4000/deleteCupon/${isbn}`);
};

export const krijoKupon = (cuponObj) => {
  // const [info, setInfo] = useState()
  axios
    .post("http://localhost:4000/createCupon", {
      cuponInfo: cuponObj,
    })
    .then((result) => true)
    .catch((err) => false);
};

export const decreaseStock = (bookId, newStock) => {
  axios.post("http://localhost:4000/decreaseStock", {
    isbn: bookId,
    newStock: newStock,
  });
};

export const increaseStock = (bookId, newStock) => {
  axios.post("http://localhost:4000/increaseStock", {
    isbn: bookId,
    newStock: newStock,
  });
};

export const updateBook = (obj) => {
  console.log(obj);
  axios.post("http://localhost:4000/updateBook", {
    book: obj,
  });
};
