import axios from "axios";
import { useEffect, useState } from "react";

const API_URL_USD_CALC = import.meta.env.VITE_API_URL_USD_CALC;
const API_KEY = import.meta.env.VITE_API_KEY;

const useUsdConversion = (tokenId: string, amount: number) => {
  const [usdValue, setUsdValue] = useState(0);

  const fetchUsd = async () => {
    if (!tokenId || !amount) return setUsdValue(0);

    try {
      const res = await axios.get(
        API_URL_USD_CALC + `${tokenId.toLowerCase()}&vs_currencies=usd`,
        {
          headers: {
            "x-cg-demo-api-key": API_KEY,
          },
        }
      );
      const usd = res.data[tokenId.toLowerCase()]?.usd || 0;
      setUsdValue(usd * amount);
    } catch (e) {
      console.error("Error fetching USD value", e);
    }
  };

  useEffect(() => {
    fetchUsd();
  }, [tokenId, amount]);

  return usdValue;
};

export default useUsdConversion;
