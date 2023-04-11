import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
 const { data } = await axios.get((url), {
  headers: {
   'X-RapidAPI-Key': '022111aa49mshb3ca0ce5bb3c604p15cdc3jsnd41ea281305b',
   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
 });

 return data;
}