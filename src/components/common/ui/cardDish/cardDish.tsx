import { FC, useState } from "react";
import Button from "../buttons/button";
import styles from "./cardDish.module.scss";
import { useAppSelector } from "../../../../hooks/hook";
import FormReview from "../formReview/FormReview";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  id: string;
  name: string;
  img: string;
  price: number;
  description: string;
  weight: string;
};

const CardDish: FC<Props> = ({ id, img, name, description, price, weight }) => {
  const { isAuth }: any = useAppSelector((state) => state.auth);
  const { rating }: any = useAppSelector((state) => state.review);
  const idReview: any = useAppSelector((state) => state.review.id);
  const [open, setOpen] = useState<boolean>(false);

  const handleReview = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.card}>
      <div className={styles.product}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.dish}>
        <div className={styles.dish__info}>
          <h1 className={styles.info__name}>{name}</h1>
          {idReview === id ? (
            rating === 1 ? (
              <StarIcon />
            ) : rating === 2 ? (
              <div>
                <StarIcon />
                <StarIcon />
              </div>
            ) : rating === 3 ? (
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            ) : rating === 4 ? (
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            ) : rating === 5 ? (
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            ) : null
          ) : null}
          <p className={styles.info__description}>{description}</p>
        </div>
        <div className={styles.price__dish}>
          <div>
            <p className={styles.price}>{`${price} сомов`}</p>
            <p className={styles.weight}>{weight}</p>
          </div>
          {isAuth ? (
            <button onClick={handleReview} className={styles.btnReview}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnoTCTIhBvv-vf6GC88ifojQEbbaZkNGNegnUoZCsGCWUgPcWMLllei2r02dGW7wl03k&usqp=CAU"
                alt="review"
              />
            </button>
          ) : null}
          {open ? <FormReview open={open} setOpen={setOpen} id={id} /> : null}
          <Button id={id} img={img} name={name} price={price} weight={weight} />
        </div>
      </div>
    </div>
  );
};

export default CardDish;
