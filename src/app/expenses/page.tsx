'use client';
import {OverviewContainer} from "@/containers/expenses/overview/OverviewContainer";

export default function ExpensesPage() {
    return (

        <div className="flex flex-col items-baseline justify-start py-2 mt-10 ml-10 mr-10  sm:ml-32 sm:mr-32">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Expenses</h1>

            <OverviewContainer/>

        </div>
    )
}