import ExpensesContainer from "@/containers/expenses/ExpensesContainer";
import { PageWithTitle } from "@/stories/Layouts/PageWithTitle";

export default function ExpensesPage() {
  return (
    <PageWithTitle title="Expenses">
      <ExpensesContainer />
    </PageWithTitle>
  );
}
