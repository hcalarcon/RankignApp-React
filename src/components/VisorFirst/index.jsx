import { CircularProgress } from "@mui/material";
import style from "./VisorFirst.module.css";

const VisorFrist = ({ primeros, isLoading, title = "6° 5°" }) => {
  console.log(primeros);

  const orden = [2, 1, 3];
  return (
    <section className={style.visor}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <p className={style.rankingTitle}>6to</p>
          {primeros.map((nombre, index) => (
            <article key={index}>
              <p>{orden[index]}</p>
              <p>{primeros[index].nombre}</p>
            </article>
          ))}
        </>
      )}
    </section>
  );
};

export default VisorFrist;
