export function OverviewContainer() {
	return (
		<div className={"block w-11/12 mt-5 pt-20 pb-20 pl-10 pr-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"}>
			<div className="flex items-center justify-between">

				<div className="flex flex-col">
					<h1 className="text-7xl text-gray-900 font-semibold dark:text-white">2500€</h1>
					<h5 className="text-sm font-medium text-gray-900 dark:text-white">Total</h5>
				</div>

				<div className="flex flex-col">
					<h1 className="text-7xl text-gray-900 font-semibold dark:text-white">2500€</h1>
					<h5 className="text-sm font-medium text-gray-900 dark:text-white">Monthly</h5>
				</div>

				<div className="flex flex-col">
					<h1 className="text-7xl text-gray-900 font-semibold dark:text-white">2500€</h1>
					<h5 className="text-sm font-medium text-gray-900 dark:text-white">Fixed</h5>
				</div>

			</div>
		</div>
	)
}