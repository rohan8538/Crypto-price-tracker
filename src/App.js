import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import './App.css';
import Coin from './Coin';
import { Container } from '@mui/material';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setInterval(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data);
     // console.log(res.data);
    }).catch(error => alert("Link provided for API is either incorrect or not working"));
  }, 2000);
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
    <div className='App'>
      <div className='search'>
        <h1 className='text'>Search for Crypto</h1>
        <form>
          <input type='text' placeHolder='search'
          className='input' onChange={handleChange} />
        </form> 
      </div>
      
      {filteredCoins.map(coin => {
        if(Object.keys(coin).length !== 0)
        {
      return(
        <Coin
          key={coin.id}
          Name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
        />
      );
        }else{
          console.log("invalid coin name");
        return(
          <p className='Invalid'>Invalid Name entered</p> 
        );
        }
     })}
     
    </div>
    </Container>
  );
}

export default App;
