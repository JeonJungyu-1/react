import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const onChange = (event) => {
      setMoney(event.target.value);
    }
    useEffect(() => {
      fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []);
    return (
      <div>
        <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
        <div>My Money</div>
        <input type='number' onChange={onChange} value={money} placeholder="money" ></input> USD
        <hr />
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}) : { money / coin.quotes.USD.price } {coin.symbol}
              </option>
            ))}
          </select>
        )}
      </div>
    );
}

export default App;