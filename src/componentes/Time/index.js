import './Time.css';

const Time = ({nome, corPrimaria, corSecundaria}) => {
  return (
    <section
      className="time"
      style={{ backgroundColor: corPrimaria }}
    >
      <h3 style={{ borderColor: corSecundaria }}>{nome}</h3>
    </section>
  );
};

export default Time;