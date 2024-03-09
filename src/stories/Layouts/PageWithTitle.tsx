interface DefaultLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const PageWithTitle = ({ children, title }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col items-baseline justify-center py-2 mt-10 ml-10 mr-10  sm:ml-32 sm:mr-32">
      <h1 className="container mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>

      {children}
    </div>
  );
};
