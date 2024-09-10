import BasicFrom from "../../components/BasicFrom";
import li from "./Login.module.css";

const Login = () => {
  return (
    <section className={li.container}>
      <article className={li.formContainer}>
        <h2 className={li.title}>Bienvenido</h2>
        <BasicFrom />
      </article>
    </section>
  );
};

export default Login;
