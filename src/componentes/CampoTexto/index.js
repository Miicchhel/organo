import './CampoTexto.css';

const CampoTexto = ({label, placeholder, obrigatorio, valor, aoAlterado}) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitar = (event) => {
    aoAlterado(event.target.value);
  };
  
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        required={obrigatorio} 
        placeholder={placeholderModificada}
        onChange={aoDigitar}
      />
    </div>
  );
};

export default CampoTexto;