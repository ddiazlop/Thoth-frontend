import {OverviewItem} from "@/components/expenses/overview/OverviewItem";
import {useEffect, useState} from "react";

type OverviewData = {
	total: number,
	monthly: number,
}

export function OverviewContainer() {
	const [overviewData, setOverviewData] = useState<OverviewData | null>(null)
	// Gets data from the API
	useEffect(() => {
		const fetchOverviewData = async () => {
			console.log("Fetching overview data...")
			const response = await fetch('/api/expenses/overview')
			const data = await response.json()
			console.log(data)
			setOverviewData(data)
		};

		fetchOverviewData().then();
	}, [])

	if (!overviewData) {
		return (
			<div className="container w-full mt-3 bg-gray-400 rounded-2xl p-11 bg-opacity-75 border-gray-800 border-2">
				<div className="flex justify-between items-center flex-shrink">
					<div className="flex-auto text-center">
						<h1 className="md:text-5xl sm:text-3xl text-2xl text-gray-900 font-semibold dark:text-white">Loading...</h1>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className="container w-full mt-3 bg-gray-400 rounded-2xl p-11 bg-opacity-75 border-gray-800 border-2">
			<div className="flex justify-between items-center flex-shrink">

				<OverviewItem amount={overviewData.total} type={"Total"}/>

				<OverviewItem amount={overviewData.monthly} type={"Monthly"}/>

				<OverviewItem amount={2500} type={"Predicted"}/>
			</div>
		</div>
	)
}