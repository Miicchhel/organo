import './CampoTexto.css';

const CampoTexto = ({label, placeholder}) => {
  const placeholderModificada = `${placeholder}...`
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input placeholder={placeholderModificada}/>
    </div>
  );
};

export default CampoTexto;