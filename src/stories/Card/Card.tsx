interface CardProps {
  children: React.ReactNode;
  width?: number;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  width = "100",
  className,
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border-2 border-slate-700 rounded-lg shadow-md p-10 max-h-min ${className}`}>
      {children}

      <style jsx>{`
        div {
          width: ${width}%;
        }
      `}</style>
    </div>
  );
};
