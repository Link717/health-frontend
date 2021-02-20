import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(urlCategory) {
  const [data, setData] = useState([]);
  async function fetchUrl() {
    const { data } = await axios.get(`/data/${urlCategory}.json`);
    const response = await data[urlCategory];
    setData(response);
  }
  useEffect(() => {
    fetchUrl();
  }, []);

  return data;
}
export { useFetch };
