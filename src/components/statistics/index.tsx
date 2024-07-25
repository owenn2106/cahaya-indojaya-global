import { FileBadge2, PackageCheck, Ship } from "lucide-react";

const Statistics = () => {
  return (
    <div className="min-h-60 flex justify-center">
      <div className="flex flex-col justify-center bg-white rounded-3xl w-full max-w-6xl min-h-80 drop-shadow-xl -translate-y-24 py-12">
        <h4 className="text-blue font-bold text-center text-3xl mb-12">
          We have over...
        </h4>
        <div className="flex lg:flex-row flex-col gap-12 items-center justify-around">
          <div className="flex flex-col items-center">
            <div className="flex gap-4 items-center mb-8">
              <FileBadge2 className="w-20 h-20 text-red" />
              <span className="text-6xl font-bold text-red">15+</span>
            </div>
            <p className="text-lg font-bold text-blue">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-4 items-center mb-8">
              <Ship className="w-20 h-20 text-red" />
              <span className="text-6xl font-bold text-red">600+</span>
            </div>
            <p className="text-lg font-bold text-blue">Containers Shipped</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-4 items-center mb-8">
              <PackageCheck className="w-20 h-20 text-red" />
              <span className="text-6xl font-bold text-red">600+</span>
            </div>
            <p className="text-lg font-bold text-blue">High Quality Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
