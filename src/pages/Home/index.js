import React, { useEffect, useState } from "react";
import styles from "./css/style.module.css";
import { costs, areaPercentages, featuresList } from "./components/constants";
import BasicDetails from "./components/BasicDetails";
import PaymentDetails from "./components/PaymentDetails";

const BudgetCalculator = () => {
  const [area, setArea] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState({});
  const [isUSD, setIsUSD] = useState(false); // Currency state
  const [step, setStep] = useState(1); // Step state
  const [tenure, setTenure] = useState([
    // {
    //   plan: "3 Months",
    //   totalCost: "59535.00",
    //   downpayment: "17860.50",
    //   moveInPayment: "5953.50",
    //   instalments: "11907.00",
    //   title:
    //     "Ideal if you want to build or scale your website fast, with the strategy calls included",
    // },
    // {
    //   plan: "6 Months",
    //   totalCost: "62370.00",
    //   downpayment: "15592.50",
    //   moveInPayment: "6237.00",
    //   instalments: "6756.75",
    //   title:
    //     "Ideal if you want to build or scale your website fast, with the strategy calls included",
    // },
    // {
    //   plan: "12 Months",
    //   totalCost: "65205.00",
    //   downpayment: "6520.50",
    //   moveInPayment: "6520.50",
    //   instalments: "4347.00",
    //   title:
    //     "Ideal if you want to build or scale your website fast, with the strategy calls included",
    // },
  ]);

  useEffect(() => {
    console.log("tenur", tenure);
  }, [tenure]);

  const handleFeatureChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFeatures({
      ...selectedFeatures,
      [name]: checked,
    });
  };

  const formatCurrency = (amount) => {
    const conversionRate = 0.27229; // Conversion rate from AED to USD
    return isUSD ? (amount * conversionRate).toFixed(2) : amount.toFixed(2);
  };

  const handleNewCalc = () => {
    setArea("");
    setSelectedBudget(null);
    setSelectedFeatures({});
    setIsUSD(false);
    setTenure([]);
    setStep(1);
  };

  const calculatePlans = (totalCost) => {
    const plans = {
      "3 Months": { markup: 5, downpayment: 30, moveIn: 10 },
      "6 Months": { markup: 10, downpayment: 25, moveIn: 10 },
      "12 Months": { markup: 15, downpayment: 10, moveIn: 10 },
    };

    const tenureDetails = [];

    for (const plan in plans) {
      const { markup, downpayment, moveIn } = plans[plan];
      const totalCostWithMarkup = totalCost + totalCost * (markup / 100);
      const downpaymentAmount = totalCostWithMarkup * (downpayment / 100);
      const moveInPayment = totalCostWithMarkup * (moveIn / 100);
      const instalments =
        (totalCostWithMarkup - downpaymentAmount - moveInPayment) /
        (parseInt(plan) || 1);

      tenureDetails.push({
        plan,
        title:
          "Ideal if you want to build or scale your website fast, with the strategy calls included",
        totalCost: formatCurrency(totalCostWithMarkup),
        downpayment: formatCurrency(downpaymentAmount),
        moveInPayment: formatCurrency(moveInPayment),
        instalments: formatCurrency(instalments),
      });
    }

    setTenure(tenureDetails);
  };

  const calculateTotalCost = () => {
    if (!selectedBudget) {
      console.log("Please select a budget type.");
      return;
    }

    const budgetType = selectedBudget.value;
    let totalCost = 0;
    let sumPortions = 0;

    for (const feature in selectedFeatures) {
      if (
        selectedFeatures[feature] &&
        ["tiles", "pool", "builtInSeating", "bar"].includes(feature)
      ) {
        sumPortions += areaPercentages[feature];
      }
    }

    const artificialGrassPortion = 1 - sumPortions < 0 ? 0.1 : 1 - sumPortions;

    for (const feature in selectedFeatures) {
      if (selectedFeatures[feature]) {
        const portion =
          feature === "artificialGrass"
            ? artificialGrassPortion
            : areaPercentages[feature];
        let areaCalc = ["pizzaOven", "builtInGrill", "fridge"].includes(feature)
          ? portion
          : area * portion;
        const costPerUnit =
          costs[budgetType][`${feature}PerUnitCost`] ||
          costs[budgetType][`${feature}Cost`];
        totalCost += areaCalc * costPerUnit;
      }
    }

    console.log("Area:", area);
    console.log("Selected Budget Type:", budgetType);
    console.log("Total Cost:", formatCurrency(totalCost));
    calculatePlans(totalCost);
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <BasicDetails
            area={area}
            setArea={setArea}
            selectedBudget={selectedBudget}
            setSelectedBudget={setSelectedBudget}
            setStep={setStep}
            isUSD={isUSD}
            setIsUSD={setIsUSD}
          />
        );
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        const currentFeature = featuresList[step - 2];
        return (
          <div className={styles.checkbox_form}>
            <p className={styles.title}>{currentFeature?.label}</p>
            <div
              className={
                currentFeature?.value === "indoorAmenities"
                  ? styles.checkbox_row_wrapper
                  : styles.checkbox_col_wrapper
              }
            >
              {currentFeature?.items?.map((item) => (
                <label
                  key={item?.value}
                  className={styles.checkbox_label}
                  style={{
                    flex:
                      currentFeature?.value === "indoorAmenities" && "1 0 33%",
                  }}
                >
                  <input
                    type="checkbox"
                    name={item?.value}
                    checked={selectedFeatures[item?.value] || false}
                    onChange={handleFeatureChange}
                    className={styles.checkbox_input}
                  />
                  <div className={styles.label}>
                    <p className={styles.small_icon}>{item?.icon}</p>
                    <p>{item?.label}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {tenure?.length > 0 ? (
        <PaymentDetails
          tenure={tenure}
          isUSD={isUSD}
          handleNewCalc={handleNewCalc}
        />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Landscape Cost Calculator</h2>
            <p className={styles.steps}>Step {step} of 7</p>
          </div>
          {renderSteps()}
          {step !== 1 && (
            <center className={styles.center}>
              <button
                onClick={() =>
                  step < 7 ? setStep(step + 1) : calculateTotalCost()
                }
                className={styles.next_btn}
              >
                {step < 7 ? "Next" : "Calculate"}
              </button>
            </center>
          )}
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;
