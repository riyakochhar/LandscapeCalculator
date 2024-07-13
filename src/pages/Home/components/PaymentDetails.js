import React from "react";
import styles from "../css/payment.module.css";
import { ReactComponent as DownPayment } from "../../../assets/down-payment.svg";
import { ReactComponent as MoveInPayment } from "../../../assets/move-in-payment.svg";
import { ReactComponent as Installments } from "../../../assets/installments.svg";

function PaymentDetails({ tenure, isUSD, handleNewCalc }) {
  return (
    <div className={styles.payment_wrapper}>
      <div className={styles.payment_header}>
        <h3 className={styles.payment_heading}>Choose your right plan!</h3>
        <div className={styles.payment_div}>
          <p className={styles.payment_text}>
            Select from best plans, ensuring a perfect match. Need more or less?
          </p>
          <p className={styles.payment_text}>
            Customize your subscription for a seamless fit!
          </p>
        </div>
      </div>
      <div className={styles.payment_container}>
        {tenure?.map((item) => (
          <div key={item?.plan} className={styles.details}>
            <div className={styles.row_1}>
              <h4 className={styles.plan}>{item?.plan}</h4>
              <p className={styles.light_text}>{item?.title}</p>
            </div>

            <div className={styles.total_amount_div}>
              {isUSD && <p>$</p>}
              <p>{item?.totalCost}</p>
              {!isUSD && <p>AED</p>}
            </div>

            <div className={styles.row_2}>
              <div>
                <div className={styles.sub_row_1}>
                  <DownPayment className={styles.icon} />
                  <div className={styles.sub_div}>
                    <p className={styles.heading}>Down Payment</p>
                    <div className={styles.text}>
                      {isUSD && <p>$</p>}
                      <p>{item?.downpayment}</p>
                      {!isUSD && <p>AED</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.sub_row_1}>
                  <MoveInPayment className={styles.icon} />
                  <div className={styles.sub_div}>
                    <p className={styles.heading}>Move-in Payment</p>{" "}
                    <div className={styles.text}>
                      {isUSD && <p>$</p>}
                      <p>{item?.moveInPayment}</p>
                      {!isUSD && <p>AED</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.sub_row_1}>
                  <Installments className={styles.icon} />
                  <div className={styles.sub_div}>
                    <p className={styles.heading}>Installments</p>{" "}
                    <div className={styles.text}>
                      {isUSD && <p>$</p>}
                      <p>{item?.instalments}</p>
                      {!isUSD && <p>AED</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className={styles.btn}>Get Started</button>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footer_text} onClick={handleNewCalc}>
          Want to start a new calculation?
        </p>
      </div>
    </div>
  );
}

export default PaymentDetails;
