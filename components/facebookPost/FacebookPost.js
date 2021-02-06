import React from "react";
import styles from "./facebookPost.module.css";
import { FacebookProvider, EmbeddedPost, Comments } from "react-facebook";

export default function FacebookPost(props) {
  return (
    <div className={styles.facebookPost}>
      <h1>facebookPost</h1>
      <FacebookProvider appId="241775877615234">
        <EmbeddedPost
          href="https://www.facebook.com/OLDUlverston/photos/a.1077360469021164/3371270106296844"
          width="500"
          showText={true}
        />
      </FacebookProvider>
    </div>
  );
}
