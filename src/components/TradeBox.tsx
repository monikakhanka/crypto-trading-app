export interface Token {
  toUpperCase(): import("react").ReactNode;
  id: string;
  symbol: string;
  name: string;
}

export interface TradeBoxProps {
  type: "Sell" | "Buy";
  inputValue: number;
  onInputChange: (val: number) => void;
  selectedToken: string;
  onTokenChange: (val: string) => void;
  usdValue: number;
  tokenList: Token[];
  disabled: boolean;
}

const TradeBox: React.FC<TradeBoxProps> = ({
  type,
  inputValue,
  onInputChange,
  selectedToken,
  onTokenChange,
  usdValue,
  tokenList,
  disabled,
}) => {
  return (
    <div
      className={`h-[49%] w-[100%] p-4 ${
        type === "Sell" ? "bg-light-blue" : "bg-light-gray"
      } rounded-2xl border-[1px] border-blue-200 flex flex-col justify-center items-start text-text-gray`}
    >
      <span className="content-start text-xl py-3 font-bold">{type}</span>
      <div className="flex justify-between h-12 w-[100%]">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            onInputChange(Number(e.target.value));
          }}
          disabled={disabled}
          className={`w-8/12  ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          } focus:outline-none font-extrabold text-3xl`}
        />
        <div className="relative">
          <select
            value={selectedToken}
            onChange={(e) => onTokenChange(e.target.value)}
            className="w-full h-10 appearance-none rounded-xl bg-medium-gray pl-3 pr-10 focus:border-medium-gray font-bold text-xl text-black focus:outline-hidden"
          >
            {tokenList.map((token) => (
              <option key={token.id} value={token.id}>
                {token.toUpperCase()}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute inset-y-0 right-3
           flex items-center text-xl text-black"
          >
            &#9662;
          </span>
        </div>
      </div>
      <div className="text-xl py-2">${usdValue}</div>
    </div>
  );
};

export default TradeBox;
