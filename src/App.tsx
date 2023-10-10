import React from "react";
import "./App.scss";
import Stepper from "./components/stepper";
import { ListOfStepsInterface } from "./interface/stepper";

function App() {
  const [activeStep] = React.useState<string[]>([
    "Your basket",
    "Your details",
  ]);
  const listOfSteps: ListOfStepsInterface[] = [
    {
      count: "01",
      header: "STEP ONE",
      step: "Your basket",
    },
    {
      count: "02",
      header: "STEP TWO",
      step: "Your details",
    },
    {
      count: "03",
      header: "STEP THREE",
      step: "Payment",
    },
    {
      count: "04",
      header: "STEP FOUR",
      step: "Order complete",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="card-container">
          <Stepper listOfSteps={listOfSteps} activeStep={activeStep} />
        </div>
      </div>
    </>
  );
}

export default App;
