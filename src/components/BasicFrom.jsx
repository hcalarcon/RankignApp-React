import React, { useState } from "react";
import styles from "../styles/BasicForm.module.css";

const BasicFrom = (props) => {
  const { titlePrimary, titleSecundary, otherTitle } = props;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre de usuario:", formData.username);
    console.log("Contraseña:", formData.password);
    alert(`Iniciaste sesión con el usuario: ${formData.username}`);
  };

  return (
    <form className={""} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.label}>
          Nombre de Usuario:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={""}>
        <label htmlFor="password" className={styles.label}>
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <button type="submit" className={""}>
        Iniciar Sesión
      </button>
    </form>
  );
};

export default BasicFrom;
