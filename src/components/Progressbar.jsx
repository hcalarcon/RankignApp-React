import Pb from "../styles/ProgressBar.module.css";

const ProgressBar = (props) => {
  const { nombre, color, username, proyecto, rate } = props;

  const barraAncho = Math.min((rate / 10) * 100, 100); //

  return (
    <section className={Pb.contentProgressBar}>
      {nombre}
      <ol className={Pb.list}>
        <li>Username: {username}</li>
        <li>Proyecto: {proyecto}</li>
      </ol>
      <article
        className={Pb.barra}
        style={{ width: `${barraAncho}% `, background: `${color}` }}
      >
        <p>{rate}0%</p>
      </article>
    </section>
  );
};

export default ProgressBar;
