import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <img src="./logo.jpg" alt="" />
        <p>Ranking App</p>
      </section>
      <section className={styles.section}>
        <h4>Contacto</h4>
        <p>Email: info@patagoniandevs.com.ar</p>
        <p>Teléfono: +54 364 427 7105</p>
        <address>San Martín de los Andes</address>
        <address>Patagonia - Argentina</address>
      </section>
      <section className={styles.section}>
        <article>
          <p>&copy; 2024 Hernaldo Cristian Alarcón</p>
          <p>Todos los derechos reservados</p>
        </article>

        <article>
          <h4>Seguinos</h4>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
