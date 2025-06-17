import { useState } from "react";

export interface AssetsTableItemProps {
  tokenInfo: TokenInfo[];
}

export interface TokenInfo {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
}

const AssetsTableItem = ({ tokenInfo }: AssetsTableItemProps) => {
  const [sortedData, setSortedData] = useState<TokenInfo[]>([...tokenInfo]);
  const [sortBy, setSortBy] = useState<"name" | "price" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState<number>(1);

  const toggleSortOrder = (key: "name" | "price") => {
    const order = sortBy === key && sortOrder === "asc" ? "desc" : "asc";
    console.log("key", key);
    console.log("order", order);
    console.log("sorted data", sortedData);
    const sorted = [...sortedData].sort((a, b) => {
      if (key === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (key === "price") {
        return order === "asc"
          ? a.current_price - b.current_price
          : b.current_price - a.current_price;
      }

      console.log("after sort", sortedData);
      return 0;
    });

    setSortedData(sorted);
    setSortOrder(order);
    setSortBy(key);
  };

  const handleNameSorting = () => toggleSortOrder("name");

  const handlePriceSorting = () => toggleSortOrder("price");

  return (
    <div className="max-h-[650px] w-11/12 overflow-auto rounded-l-2xl rounded-r-2xl border-[1px] border-gray-200">
      <table className="w-full text-left">
        <thead className="text-lg bg-gray-200 sticky top-0 z-20">
          <tr>
            <th className="px-4 py-4 w-36 ">SYMBOL</th>
            <th
              className="px-4 py-4 w-36 cursor-pointer"
              onClick={handleNameSorting}
            >
              NAME &#8645;
            </th>
            <th
              className="px-4 py-4 w-36 cursor-pointer"
              onClick={handlePriceSorting}
            >
              PRICE (USD) &#8645;
            </th>
            <th className="px-4 py-4 w-36  ">SELL / BUY</th>
          </tr>
        </thead>
        <tbody className="mt-9">
          {sortedData.map(({ id, name, symbol, image, current_price }) => (
            <tr
              key={id}
              className="text-lg border-b-[1px] border-b-gray-200 last:border-b-0"
            >
              <td className="px-4 py-4 w-20">
                <img src={image} alt="coin image" className="w-9 h-9" />
              </td>
              <td className="px-4 py-4 w-36 ">{`${name} (${symbol})`}</td>
              <td className="px-4 py-4 w-36" onClick={handlePriceSorting}>
                ${current_price}
              </td>
              <td className="px-4 py-4 w-36">
                <div className="relative inline-block w-25">
                  <select
                    className="w-25 px-2 py-1 bg-gray-200 rounded-xl focus:outline-hidden appearance-none focus:bg-gray-400 hover:bg-medium-gray"
                    defaultValue={"sell"}
                  >
                    <option value="buy">BUY</option>
                    <option value="sell">SELL</option>
                  </select>
                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-black text-xl">
                    &#9662;
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTableItem;
