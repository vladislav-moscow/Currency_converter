import './style.scss';
import InputCurrency from './components/InputCurrency';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [amount1, setAmount1] = useState('1');
  const [amount2, setAmount2] = useState('1');
  const [currency1, setCurrency1] = useState('RUB');
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=d6b9f64f0978e17102a61a3b01901593')
      .then(responce=> {
        setRates(responce.data.rates)
      })
  }, []);

  return (
    <div className="App">
      <InputCurrency currencies={Object.keys(rates)} amount={amount1} currency={currency1}/>
      <InputCurrency currencies={Object.keys(rates)} amount={amount2} currency={currency2}/>
    </div>
  );
}

export default App;
