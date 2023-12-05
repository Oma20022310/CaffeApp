import { FC, useState } from "react";
import styles from "./FormReview.module.scss";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../../../hooks/hook";
import { reviewSliceAction } from "../../../../store/reviewSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const FormReview: FC<PropsType> = ({ open, setOpen, id }) => {
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = parseInt(e.target.value, 10);
    setRating(newRating);
  };

  const onSubmit = () => {
    const data = {
      rating: rating,
      comment: comment,
      isReview: true,
      id: id
    };
    dispatch(reviewSliceAction.setData(data));
    setOpen(false);
  };

  return (
    <div className={styles.FormReview}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <label style={{ paddingRight: 30 }}>Рейтинг:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={handleRatingChange}
            />
          </div>
          <div style={{ marginTop: 30 }}>
            <input
              type="text"
              value={comment}
              placeholder="Введите отзыв *необязательное поле"
              className={styles.inputReview}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div>
            <button className={styles.btn} onClick={onSubmit}>Оставить отзыв</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FormReview;
