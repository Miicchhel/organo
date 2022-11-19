import './ListaSuspensa.css';

const ListaSuspensa = ({label, itens}) => {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select>
        { itens.map((item, index) => <option key={index}>{item}</option>) }
      </select>
    </div>
  );
};

export default ListaSuspensa;