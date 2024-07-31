const BrandPartners = () => {
  return (
    <section
      id="brand-partners"
      className="flex justify-center min-h-[50vh] mb-36 scroll-m-36"
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center gap-6 mb-12">
          <h3 className="text-center font-bold text-3xl text-blue">Brand Partners</h3>
          <div className={`w-28 h-1 bg-red`} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 children:flex-[1_1_16rem] px-8 lg:px-0">
          <div className="bg-black h-96 w-72" />
          <div className="bg-black h-96 w-72" />
          <div className="bg-black h-96 w-72" />
          <div className="bg-black h-96 w-72" />
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
