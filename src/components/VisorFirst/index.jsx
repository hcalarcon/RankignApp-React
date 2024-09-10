import { CircularProgress } from "@mui/material";
import style from "./VisorFirst.module.css";

const VisorFrist = ({ primeros, isLoading, title = "6° 5°" }) => {
  console.log(primeros);

  const orden = [2, 1, 3];
  const reorderedPrimeros = [
    primeros[1] || {}, // Second article
    primeros[0] || {}, // First article
    primeros[2] || {}, // Third article
  ];
  return (
    <section className={style.visor}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <p className={style.rankingTitle}>6to 5ta</p>
          {reorderedPrimeros.map((nombre, index) => (
            <article key={index}>
              <p>{orden[index]}</p>
              <p>{nombre.nombre}</p>
            </article>
          ))}
        </>
      )}
    </section>
  );
};

export default VisorFrist;
