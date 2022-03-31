import React, { FC } from "react";

import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>GitHub Searcher</h1>
    </header>
  );
};
