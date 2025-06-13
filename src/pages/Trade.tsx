import { useState } from "react";
import TradeBox from "../components/TradeBox";
import useTokens from "../hooks/useTokens";
import useUsdConversion from "../hooks/useUsdConversion";

const Trade = () => {
  const tokens = useTokens();
  const [sellInput, setSellInput] = useState<number>(0);
  const [buyInput, setBuyInput] = useState<number>(0);
  const [sellToken, setSellToken] = useState<string>("");
  const [buyToken, setBuyToken] = useState<string>("");
  const [activeBox, setActiveBox] = useState<"sell" | "buy" | null>("sell");

  const sellUsd = useUsdConversion(sellToken, sellInput);
  const buyUsd = useUsdConversion(buyToken, buyInput);

  const handleToggle = () => {
    if (sellInput) {
      setBuyInput(sellInput);
      setSellInput(0);
      setActiveBox("buy");
    } else if (buyInput) {
      setSellInput(buyInput);
      setBuyInput(0);
      setActiveBox("sell");
    }
  };

  return (
    <div className="h-[400px] w-[500px] absolute top-[30%] left-[35%] rounded-2xl flex flex-col justify-between">
      <TradeBox
        type="Sell"
        inputValue={sellInput}
        onInputChange={setSellInput}
        selectedToken={sellToken}
        onTokenChange={setSellToken}
        usdValue={sellUsd}
        tokenList={tokens}
        disabled={activeBox === "buy"}
      />
      <button
        onClick={handleToggle}
        className="h-[55px] w-[55px] text-3xl bg-blue-200 absolute mt-[35%] ml-[43%] z-30 rounded-2xl border-4 border-medium-gray"
      >
        &darr;
      </button>
      <TradeBox
        type="Buy"
        inputValue={buyInput}
        onInputChange={setBuyInput}
        selectedToken={buyToken}
        onTokenChange={setBuyToken}
        usdValue={buyUsd}
        tokenList={tokens}
        disabled={activeBox === "sell"}
      />
    </div>
  );
};

export default Trade;
