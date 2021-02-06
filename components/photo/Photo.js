import React from "react";
import styles from "./photo.module.css";

export default function Photo(props) {
  return (
    <div className={styles.photo}>
      <h1>photo</h1>
      <img src={"./img/king-street-(1902).jpg"} alt={"King Street"} />
    </div>
  );
}
