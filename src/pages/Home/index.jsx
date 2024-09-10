import { useEffect, useState } from "react";
import VisorFrist from "../../components/VisorFirst";
import style from "./Home.module.css";
import getPerson from "../../apis/getPerson";

const Home = () => {
  const [firstPerson, setFirstPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getFirst = async () => {
      try {
        const persons = await getPerson();
        const data = await persons.slice(0, 3);
        // const data = [
        //   { nombre: "juan" },
        //   { nombre: "juan" },
        //   { nombre: "juan" },
        // ];
        setFirstPersons(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getFirst();
  }, [isLoading]);
  return (
    <section className={style.Home}>
      <p className={style.desc}>
        Bienvenido a la página de ranking de estudiantes para las materias de
        Construcción de Software y Sistemas Operativos II. Aquí podrás seguir el
        progreso de los alumnos en sus trabajos prácticos, evaluando su
        desempeño a lo largo del curso. Actualmente, solo está disponible el
        ranking para la materia de Construcción de Software, donde se refleja el
        avance y esfuerzo de cada estudiante en sus proyectos prácticos. Esta
        herramienta permite una visualización clara y comparativa del
        rendimiento, ayudando a los alumnos a medir su progreso y motivarse a
        alcanzar sus objetivos académicos.
      </p>
      <section>
        <h2>Consulta los ultimos rankings: </h2>
        <VisorFrist primeros={firstPerson} isLoading={isLoading} />
      </section>
    </section>
  );
};

export default Home;
