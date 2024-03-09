import { OverviewDisplay } from "@/stories/Displays/OverviewDisplay";
import { OverviewItem } from "@/stories/Displays/OverviewItem";
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
      <OverviewDisplay>
        <h1 className="md:text-5xl sm:text-3xl text-2xl text-gray-900 font-semibold dark:text-white">
          Loading...
        </h1>
      </OverviewDisplay>
    );
  }
  return (
    <OverviewDisplay>
      <OverviewItem amount={overviewData.total} type={"Total"} />
      <OverviewItem amount={overviewData.monthly} type="Monthly" />
      <OverviewItem amount={overviewData.prediction} type="Predicted" />
    </OverviewDisplay>
  );
};

export default Overview;
