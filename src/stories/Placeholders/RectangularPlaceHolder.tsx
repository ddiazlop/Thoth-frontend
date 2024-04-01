interface RectangularPlaceHolderProps {
  width: string;
  height: string;
  label?: string;
}

export const RectangularPlaceHolder = ({
  width,
  height,
  label = "Content Placeholder",
}: RectangularPlaceHolderProps) => {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-800 border-dashed border-2 border-sky-500 flex items-center justify-center rounded-md max-w-full max-h-full`}
      style={{ width: `${width}rem`, height: `${height}rem` }}>
      <p className="text-center text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
};
