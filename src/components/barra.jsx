import Pb from "../styles/progressbar.module.css";

const Barra = ({ rate, color }) => {
  const barraAncho = Math.min((rate / 10) * 100, 100); // 100% máximo para 10 commits

  return (
    <article
      className={Pb.barra}
      style={{ width: `${barraAncho}%`, background: `${color}` }}
    >
      <p>{rate}0%</p>
    </article>
  );
};

export default Barra;
