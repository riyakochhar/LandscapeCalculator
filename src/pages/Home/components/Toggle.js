import React from "react";
import styles from "../css/toggle.module.css";

function Toggle({ isUSD, toggleCurrency }) {
  return (
    <div className={`${styles.incentive_info} ${styles.toggle}`}>
      <input
        className={styles.toggle}
        checked={isUSD}
        onChange={toggleCurrency}
        id="cb1"
        type="checkbox"
      />
      <label className={styles.toggle_button} htmlFor="cb1"></label>
    </div>
  );
}

export default Toggle;
