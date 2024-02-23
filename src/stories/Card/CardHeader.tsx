interface CardHeaderProps {
  title: string;
}

export const CardHeader = ({
  title = "Placeholder Title",
}: CardHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <hr className="border-2 border-slate-700 w-full my-4" />
    </div>
  );
};
