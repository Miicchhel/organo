import './ListaSuspensa.css';

const ListaSuspensa = ({label, itens, obrigatorio}) => {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select required={obrigatorio}>
        { itens.map((item, index) => <option key={index}>{item}</option>) }
      </select>
    </div>
  );
};

export default ListaSuspensa;