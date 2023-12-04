import { FC, useState } from "react";
import scss from "./AuthPage.module.scss";
import { authSliceAction, getRegisterStorage } from "../../../../store/authSlice";
import { useAppDispatch } from "../../../../hooks/hook";
import { Link, useHistory } from "react-router-dom";

const AuthPage: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [message, setMessage] = useState<string>();
  const [err, setError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const onSubmit = async () => {
    setMessage("");
    setError(false);
    const auth = await getRegisterStorage();
    if (auth !== null) {
      if (auth.login === login && auth.password === pass) {
        dispatch(authSliceAction.setAuth({ isAuth: true }));
        alert("Вы успешно вошли!");
        history.push("/");
      } else {
        setError(true);
      }
    } else if (login === "admin" && pass === "admin") {
      // logic
    } else {
      setMessage("Пользователь не найден. Пройдите регистрацию!");
    }
  };

  return (
    <div className={scss.AuthPage}>
      <div className={scss.left}></div>
      <div className={scss.right}>
        <div className={scss.wrapper}>
          <div>
            <input
              className={scss.input}
              type="text"
              placeholder="Введите логин"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div>
            <input
              className={scss.input}
              type="text"
              placeholder="Введите пароль"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div>
            <p>{message}</p>
            <p>{err ? "Неправильный ввод" : null}</p>
          </div>
          <div>
            <button className={scss.btn} onClick={onSubmit}>
              Войти
            </button>
          </div>
          <div style={{ textAlign: "center", paddingTop: 5 }}>
            <span>Нет аккаунт? </span> <br />{" "}
            <Link to="/register">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
