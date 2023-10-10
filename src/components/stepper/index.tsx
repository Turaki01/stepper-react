import React from "react";
import Tick from "../svg/tick";
import { StepperInterface } from "../../interface/stepper";

const Stepper: React.FC<StepperInterface> = ({ listOfSteps, activeStep }) => {
  return (
    <div>
      <ol className="relative text-gray-500 ">
        {listOfSteps &&
          listOfSteps.map((step, index) => (
            <li
              key={step.header + step.count + index}
              className={
                activeStep.includes(step.step)
                  ? "border-l-2 border-[#F3344A] min-h-[90px]"
                  : ""
              }
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-[1.5px] ring-[#F3344A] ${
                  activeStep.includes(step.step) && "bg-[#F3344A]"
                }`}
              >
                {activeStep.includes(step.step) && <Tick />}
              </span>

              <div className="mb-10 ml-10">
                <div className="relative">
                  <p className="counter">{step.count}</p>
                  <h3 className="font-medium leading-tight">{step.header} </h3>
                </div>

                <p className="step-details">{step.step}</p>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Stepper;
