import React, { FC, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MuiDrawer from "../MuiDrawer/MuiDrawer";
import BasicPopover from "../../common/ui/popoverBaskets/popoverBaskets";
import { useAppDispatch, useAppSelector } from "../../../hooks/hook";
import styles from "./header.module.scss";
import { authSliceAction } from "../../../store/authSlice";

const Header: FC = () => {
  const categoriesListObj = useAppSelector(
    (state) => state.categoriesObj.entities
  );
  const { isAuth }: any = useAppSelector((state) => state.auth);
  const { isAdmin }: any = useAppSelector((state) => state.admin);

  const dispatch = useAppDispatch();

  const onLogout = () => {
    if (isAuth !== null) {
      dispatch(authSliceAction.deleteAuth());
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__item}>
        <div className={styles.logo}>
          <Link to="/">Кафе</Link>
        </div>
        <div className={styles.header__contact}>
          <p className={styles.schedule}>График работы: c 8:00 до 22:00</p>
          <p className={styles.phone}>+996 703167704</p>
        </div>
        <nav className={styles.header__nav}>
          {categoriesListObj.map((item) => (
            <div className={styles.nav__item} key={item.id}>
              <NavLink to={item.url} activeClassName={styles.active}>
                {item.name}
              </NavLink>
            </div>
          ))}
          {isAdmin ? (
            <div className={styles.nav__item}>
              <NavLink to="/dashboard" activeClassName={styles.active}>
                Управление
              </NavLink>
            </div>
          ) : null}
          {isAuth ? (
            <div className={styles.nav__item}>
              <span onClick={onLogout}>Выйти</span>
            </div>
          ) : (
            <div className={styles.nav__item}>
              <Link to="/auth">Войти</Link>
            </div>
          )}

          <div className={styles.nav__item + " " + styles.badge}>
            <BasicPopover />
          </div>
          <MuiDrawer list={categoriesListObj} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
