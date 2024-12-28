const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1400px] mx-2 min-[1550px]:mx-auto xxs:mx-8 md:mx-20 py-2 xxs:py-4">
      {children}
    </div>
  );
};

export default Container;
