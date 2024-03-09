interface FlexContainerProps {
  children: React.ReactNode;
  rowMode?: boolean;
}

export const FlexContainer = ({
  children,
  rowMode = false,
}: FlexContainerProps) => {
  return (
    <div className={`container w-full flex flex-${rowMode ? "row" : "col"}`}>
      {children}
    </div>
  );
};
