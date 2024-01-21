import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

export function OverviewItem({
  amount,
  type,
}: {
  amount: number;
  type: string;
}) {
  amount = amount == null ? 0 : amount;
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
    duration: 1000,
  });

  return (
    <animated.div className="flex-auto text-center" style={springs}>
      <h1 className="md:text-5xl sm:text-3xl text-2xl text-gray-900 font-semibold dark:text-white">
        {amount.toFixed(2)}€
      </h1>
      <h5 className="text-sm font-medium text-gray-900 dark:text-white">
        {type}
      </h5>
    </animated.div>
  );
}
