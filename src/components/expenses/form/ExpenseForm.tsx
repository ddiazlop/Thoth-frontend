import { FormCheckbox } from "@/stories/Forms/FormCheckbox";
import { FormCheckboxContainer } from "@/stories/Forms/FormCheckboxContainer";
import { FormInput } from "@/stories/Forms/FormInput";
import { HorizontalForm } from "@/stories/Forms/HorizontalForm";
import { Plus } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

interface ExpensesFormContainerProps {
  setSeed: (value: ((prevState: number) => number) | number) => void;
}

const ExpenseForm = ({ setSeed }: ExpensesFormContainerProps) => {
  const [errors, setErrors] = useState<{ [field: string]: string }>({});

  const [concept, setConcept] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [income, setIncome] = useState<boolean>(false);
  const [monthly, setMonthly] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/expenses", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const data = await response.json();
      const errorData = data.errors;
      // Shape of errorData: {1: {field: "concept", defaultMessage: "Concept is required"}, 2: {field: "amount", defaultMessage: "Amount is required"}}
      const errorMessages: { [field: string]: string } = {};
      errorData.forEach((error: { field: string; defaultMessage: string }) => {
        errorMessages[error.field] = error.defaultMessage;
      });
      setErrors(errorMessages);
      console.log(errorMessages);
    } else {
      setErrors({});
      setSeed((prevSeed) => prevSeed + 1);
      setConcept("");
      setAmount(0);
      setIncome(false);
      setMonthly(false);
    }
  }

  return (
    <HorizontalForm onSubmit={handleSubmit} id={"add-expense-form"}>
      <FormInput
        label="Concept"
        name="concept"
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
        placeholder="Bottle of Water"
        error={errors["concept"]}
      />

      <FormInput
        label="Amount"
        name="amount"
        step="0.01"
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="1.80"
        error={errors["amount"]}
      />

      <FormCheckboxContainer>
        <FormCheckbox
          label="Income"
          name="income"
          checked={income}
          onChange={(e) => setIncome(e.target.checked)}></FormCheckbox>

        <FormCheckbox
          label="Monthly"
          name="monthly"
          checked={monthly}
          onChange={(e) => setMonthly(e.target.checked)}></FormCheckbox>
      </FormCheckboxContainer>
    </HorizontalForm>
  );
};

export default ExpenseForm;
