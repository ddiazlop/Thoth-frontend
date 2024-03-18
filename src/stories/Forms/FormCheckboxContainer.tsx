interface FormCheckboxContainerProps {
  children: React.ReactNode;
}

export const FormCheckboxContainer = ({
  children,
}: FormCheckboxContainerProps) => {
  return <div className={"flex flex-col justify-between p-3"}>{children}</div>;
};
