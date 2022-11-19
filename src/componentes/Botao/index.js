import './Botao.css';

const Botao = ({children}) => {
  return (
    <button
      // type="button"
      className="botao"
    >
      {children}
    </button>
  );
};

export default Botao;