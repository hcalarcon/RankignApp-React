import React, { useState, useEffect, useRef } from "react";
import HeaderCss from "../styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menu = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu.current && !menu.current.contains(event.target)) {
        setIsOpen(false); // Cierra el menú si se hace clic fuera
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);
    };

    // Agregar el evento de clic al documento
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { title } = props;

  return (
    <>
      <header
        className={`${HeaderCss.encabezado} ${
          isScrolled ? HeaderCss.scrolled : ""
        }`}
      >
        <img src="/logo.jpg" alt="" className={HeaderCss.logo} />
        <h1 className={HeaderCss.titulo}>Ranking App</h1>

        <div
          ref={menu}
          className={HeaderCss.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div />
          <div />
          <div />
        </div>
        <nav className={`${HeaderCss.nav} ${isOpen ? HeaderCss.open : ""}`}>
          {/* <ul className={[HeaderCss.lista, HeaderCss.login].join(" ")}>
            <li className={HeaderCss.btnPrimary}>
              <Link to={"/login"}>Login</Link>
            </li>
            <li className={HeaderCss.btn}>
              <Link>SingUp</Link>
            </li>
          </ul> */}
          <ul className={HeaderCss.lista}>
            <li>
              <Link to={"/"} className={HeaderCss.link} href="">
                Inicio
              </Link>
            </li>
            <li>
              <Link to={"ranking"} className={HeaderCss.link} href="">
                Rankings
              </Link>
            </li>
            <li>
              <Link to={"contactus"} className={HeaderCss.link} href="">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
