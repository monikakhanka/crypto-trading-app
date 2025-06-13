import axios from "axios";
import { useEffect, useState } from "react";

const API_URL_TOKENS = import.meta.env.VITE_API_URL_TOKENS;
const API_KEY = import.meta.env.VITE_API_KEY;
const useTokens = () => {
  const [tokenList, setTokenList] = useState([]);

  const fetchTokens = async () => {
    try {
      const res = await axios.get(API_URL_TOKENS, {
        headers: {
          "x-cg-demo-api-key": API_KEY,
        },
      });
      const filtered = res.data.slice(0, 50);
      setTokenList(filtered);
    } catch (e) {
      console.error("Token fetch error: ", e);
    }
  };
  useEffect(() => {
    fetchTokens();
  }, []);
  return tokenList;
};

export default useTokens;
