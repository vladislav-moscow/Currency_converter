import './InputCurrency.scss';

function InputCurrency (props) {
  return (
    <div className="group">
      <input type="text" value={props.amount}/>
      <select name="" id="" value={props.currency}>
        {props.currencies.map((currency) => {
           return <option value={currency}>{currency}</option>
        })}
      </select>
    </div>
  )
}

export default InputCurrency