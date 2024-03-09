import { OverviewItem } from "./OverviewItem";

interface OverviewDisplayProps {
  children?: React.ReactNode;
}

export const OverviewDisplay = ({ children }: OverviewDisplayProps) => {
  return (
    <div className="container flex flex-row w-full mt-3 bg-gray-400 rounded-2xl p-11 bg-opacity-75 border-gray-800 border-2 gap-10">
      {children}
    </div>
  );
};
