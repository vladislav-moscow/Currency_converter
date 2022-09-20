import './style.scss';
import CurrencyInput from './components/InputCurrency';
import {useState, useEffect} from 'react'
import axios from 'axios';
import React from 'react';

function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('RUB');
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState([]);

  const format = (number) => number.toFixed(2);

  const handleAmount1Change = (amount1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1)
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1)
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2)
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2)
  };

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=d6b9f64f0978e17102a61a3b01901593')
      .then(responce=> {
        setRates(responce.data.rates);
      })
  }, []);

  useEffect(() => {
    if(!!rates) handleAmount1Change(1)
  }, [rates])

  return (
    <div className="App">
      <CurrencyInput onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} currencies={Object.keys(rates)} amount={amount1} currency={currency1}/>
      <CurrencyInput onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} currencies={Object.keys(rates)} amount={amount2} currency={currency2}/>
    </div>
  );
}

export default App;
