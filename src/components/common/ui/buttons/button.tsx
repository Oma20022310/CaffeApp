import { Alert, useMediaQuery } from "@mui/material";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { FC, useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { AddCountBasket } from "../../../../store/countBasket";
import { addItemsBasket, basketUpdate } from "../../../../store/basket";
import styles from "./button.module.scss";

type Props = {
    id: string,
    img: string,
    name: string,
    price: number,
    weight: string
}

export interface State extends SnackbarOrigin {
    open: boolean;
}


const Button: FC<Props> = ({ id, img, name, price, weight }) => {
    const dispatch = useAppDispatch();
    // const isAuth = getIsAuth();
    const { isAuth }: any = useAppSelector(state => state.auth);

    const basket = useAppSelector(state => state.basket.entities);
    const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });

    const { vertical, horizontal, open } = state;
    const matches = useMediaQuery('(max-width:600px)');
    const handleClick = (id: string, price: number, newState: SnackbarOrigin) => {
        const findBasket = basket.find((element) => {
            return element.id === id
        });
        setState({ open: true, ...newState });
        dispatch(AddCountBasket(price));
        if (!findBasket) {
            dispatch(addItemsBasket(
                {
                    id: id,
                    img: img,
                    name: name,
                    weight: weight,
                    price: price,
                    count: 1
                }
            ))
        } else {
            dispatch(basketUpdate(
                { ...findBasket, count: findBasket.count + 1 }
        ))}
    };

    const handleClose = () => {
        setState({ ...state, open: false });
      };

    return (
        <>
        {isAuth ? (
            <div className={styles.button} onClick={() => handleClick(id, price, { vertical: matches ? 'bottom' : "top", horizontal: "center" })}>
                <p>В корзину</p>
            </div>
            ) : null}
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert icon={<CheckIcon fontSize="inherit" />} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {`${name} успешно добавлен в корзину`}
                </Alert>
            </Snackbar>
        </>
    );
}
 
export default Button;