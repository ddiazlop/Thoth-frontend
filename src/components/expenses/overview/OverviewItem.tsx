export function OverviewItem({amount, type}: {amount: number, type: string}) {
	return (
		<div className="flex-auto text-center">
			<h1 className="md:text-5xl sm:text-3xl text-2xl text-gray-900 font-semibold dark:text-white">{amount}€</h1>
			<h5 className="text-sm font-medium text-gray-900 dark:text-white">{type}</h5>
		</div>
	)
}