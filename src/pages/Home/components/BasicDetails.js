import React from "react";
import styles from "../css/style.module.css";
import Select from "react-select";
import { budgetOptions } from "./constants";
import { FiMap } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";
import { selectCustomStyles } from "../../../utils/customStyles";
import Toggle from "./Toggle";

function BasicDetails({
  area,
  setArea,
  selectedBudget,
  setSelectedBudget,
  setStep,
  isUSD,
  setIsUSD,
}) {
  const handleAreaChange = (e) => {
    setArea(e.target.value);
    const regex = /^\d*$/;
    if (regex.test(e.target.value)) {
      setArea(e.target.value);
    }
  };

  const handleBudgetChange = (selectedOption) => {
    setSelectedBudget(selectedOption);
  };

  const toggleCurrency = () => {
    setIsUSD(!isUSD);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input_details}>
        <label className={styles.label}>Area (in m2)</label>
        <div className={styles.info}>
          <FiMap className={styles.icon} />
          <input
            type="number"
            value={area}
            onChange={handleAreaChange}
            className={styles.input}
            placeholder="Enter area in m2"
            required
          />
        </div>
      </div>
      <div className={styles.input_details}>
        <label className={styles.label}>Budget Type</label>
        <div className={styles.info}>
          <FaSackDollar className={styles.icon} />
          <div className={styles.select}>
            <Select
              value={selectedBudget}
              onChange={handleBudgetChange}
              options={budgetOptions}
              placeholder="Select Budget Type"
              styles={selectCustomStyles}
              required
            />
          </div>
        </div>
      </div>
      <div className={styles.input_details}>
        <label className={styles.label}>Currency</label>
        <div className={styles.dollar_div}>
          <p className={styles.dollar_text}>AED</p>
          <Toggle isUSD={isUSD} toggleCurrency={toggleCurrency} />
          <p className={styles.dollar_text}>USD</p>
        </div>
      </div>
      <center className={styles.main_center}>
        <button type="submit" className={styles.next_btn}>
          Next
        </button>
      </center>
    </form>
  );
}

export default BasicDetails;
