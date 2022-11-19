import './ListaSuspensa.css';

const ListaSuspensa = ({label, itens, obrigatorio, valor, aoAlterado}) => {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(event) => aoAlterado(event.target.value)}
      >
        { itens.map((item, index) => <option key={index}>{item}</option>) }
      </select>
    </div>
  );
};

export default ListaSuspensa;