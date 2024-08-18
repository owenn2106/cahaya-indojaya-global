const Products = () => {
  return (
    <section
      id="products"
      className="flex justify-center min-h-[50vh] mb-36 scroll-m-36"
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center gap-6 mb-12">
          <h3 className="text-center font-bold text-3xl text-blue">Products</h3>
          <div className={`w-28 h-1 bg-red`} />
          <div className="children:text-center children:text-blue px-8 md:px-0">
            <p>
              Explore the diverse selection of products offered by Cahaya
              Indojaya Global, tailored to meet the unique preferences of our
              clients.
            </p>
            <p>
              Our meticulously curated selection showcases the best of
              Indonesia.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 children:flex-[1_1_16rem] px-8 lg:px-0">
          <div className="bg-food bg-contain bg-no-repeat bg-center h-96 w-96" />
          <div className="bg-beverage bg-contain bg-no-repeat bg-center h-96 w-96" />
          <div className="bg-cooking bg-contain bg-no-repeat bg-center h-96 w-96" />
          <div className="bg-daily bg-contain bg-no-repeat bg-center h-96 w-96" />
        </div>
      </div>
    </section>
  );
};

export default Products;
