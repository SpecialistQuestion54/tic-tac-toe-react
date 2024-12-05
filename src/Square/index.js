import "./index.css"
export default function Square({value, onSqaureClick}){
  return (
    <button className="square" onClick={onSqaureClick}>
      {value}
    </button>
    );
}