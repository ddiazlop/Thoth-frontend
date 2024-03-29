interface FormInputProps {
  label: string;
  name: string;
  value?: string | number;
  type?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  error?: string;
  step?: string;
}

export const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  step,
}: FormInputProps) => {
  return (
    <div className={"w-full relative"}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        step={step}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required></input>
      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
};
