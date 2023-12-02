import { FC } from "react";
import Button from "../buttons/button";
import styles from "./cardDish.module.scss"

type Props = {
    id: string,
    name: string,
    img: string,
    price: number,
    description: string,
    weight: string,
}

const CardDish: FC<Props> = ({ id, img, name, description, price, weight }) => {
    return (
        <div className={styles.card}>
            <div className={styles.product}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.dish}>
                <div className={styles.dish__info}>
                    <h1 className={styles.info__name}>{name}</h1>
                    <p className={styles.info__description}>{description}</p>
                </div>
                <div className={styles.price__dish}>
                    <div>
                        <p className={styles.price}>{`${price} сомов`}</p>
                        <p className={styles.weight}>{weight}</p>
                    </div>
                    <Button id={id} img={img} name={name} price={price} weight={weight}/>
                </div>
            </div>
        </div>
    );
}
 
export default CardDish;