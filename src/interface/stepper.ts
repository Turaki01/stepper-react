export interface StepperInterface {
  listOfSteps: ListOfStepsInterface[];
  activeStep: string[];
}

export interface ListOfStepsInterface {
  count: string;
  header: string;
  step: string;
}
