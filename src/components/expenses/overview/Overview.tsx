import { OverviewItem } from "@/components/expenses/overview/item/OverviewItem";
import { useEffect, useState } from "react";

type OverviewData = {
  total: number;
  monthly: number;
  prediction: number;
};

interface OverviewProps {
  seed: number;
}

const Overview = ({ seed }: OverviewProps) => {
  const [overviewData, setOverviewData] = useState<OverviewData | null>(null);
  // Gets data from the API
  useEffect(() => {
    const fetchOverviewData = async () => {
      const response = await fetch("/api/expenses/overview");
      const data = await response.json();
      setOverviewData(data);
    };

    fetchOverviewData().then();
  }, [seed]);

  if (!overviewData) {
    return (
      <div className="container mt-3 bg-gray-400 rounded-2xl p-11 bg-opacity-75 border-gray-800 border-2 text-center">
        <h1 className="md:text-5xl sm:text-3xl text-2xl text-gray-900 font-semibold dark:text-white">
          Loading...
        </h1>
      </div>
    );
  }
  return (
    <div className="container flex flex-row w-full mt-3 bg-gray-400 rounded-2xl p-11 bg-opacity-75 border-gray-800 border-2">
      <OverviewItem amount={overviewData.total} type={"Total"} />

      <OverviewItem amount={overviewData.monthly} type={"Monthly"} />

      <OverviewItem amount={overviewData.prediction} type={"Predicted"} />
    </div>
  );
};

export default Overview;
