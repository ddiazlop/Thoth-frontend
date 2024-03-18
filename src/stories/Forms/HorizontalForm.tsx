import { Plus } from "@phosphor-icons/react";
import { FormEvent, FormEventHandler } from "react";

interface HorizontalFormProps {
  children: React.ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  id?: string;
}

export const HorizontalForm = ({
  children,
  onSubmit,
  id,
}: HorizontalFormProps) => {
  return (
    <form
      className={"container overflow-x-auto flex-auto"}
      onSubmit={onSubmit}
      id={id}>
      <div
        className={
          "flex flex-row mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-8"
        }>
        {children}

        <div className="inline-block h-30 min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>

        <button
          type={"submit"}
          className={"flex h-20 items-center p-4 cursor-pointer"}>
          <Plus size={50} weight="bold" />
        </button>
      </div>
    </form>
  );
};
