import { ChangeEvent, FC, useState } from "react";
import scss from "./RegisterPage.module.scss";
import { useAppDispatch } from "../../../../hooks/hook";
import { Link, useHistory } from "react-router-dom";

const RegisterPage: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [approvePass, setApprovePass] = useState<string>("");
  const [approve, setApprove] = useState<boolean>(false);
  const [err, setError] = useState<boolean>(false);

  const history = useHistory();

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    setApprove(false);
    setError(false);
    if (pass.length > 4) {
      setApprove(true);
    }
  };

  const onSubmit = () => {
    if (login !== "" && pass === approvePass) {
      const isConfirmed = window.confirm(
        "Вы уверены, что хотите зарегистрироваться?"
      );
      if (isConfirmed) {
        const data = {
          login: login,
          password: pass,
        };
        localStorage.setItem("user", JSON.stringify(data));
        history.push("/auth");
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className={scss.RegisterPage}>
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
              type="password"
              placeholder="Придумайте пароль"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            {approve ? (
              <input
                className={scss.input}
                type="password"
                placeholder="Подтвердите пароль"
                onChange={(e) => setApprovePass(e.target.value)}
              />
            ) : null}
          </div>
          <div>
            <p>{err ? "Неправильный ввод" : null}</p>
          </div>
          <div>
            <button className={scss.btn} onClick={onSubmit}>
              Зарегистрироваться
            </button>
          </div>
          {err ? "Неправильно введены данные" : null}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
