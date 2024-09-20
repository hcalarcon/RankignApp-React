import { useEffect, useState } from "react";
import styles from "./Ranking.module.css";
import ProgressBar from "../../components/Progressbar.jsx";
import ProgressBarColors from "../../constants/color";
import getPerson from "../../apis/getPerson";
import formatTime from "../../utils/formatTime.js";

const Ranking = () => {
  const [commitData, setCommitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    const getRate = async () => {
      try {
        const data = await getPerson();
        setLastUpdate(formatTime(data[0].last_update));
        setCommitData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRate();
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles.ranking}>
      <h5>Ultima actualizacion: {lastUpdate} </h5>
      {ProgressBarColors.map((color, index) => (
        <ProgressBar
          key={index}
          rate={commitData[index].rankg}
          nombre={commitData[index].nombre}
          color={color}
          proyecto={commitData[index].repo}
          username={commitData[index].username}
        />
      ))}
    </section>
  );
};

export default Ranking;
