const MissionValues = () => {
  return (
    <section className="flex justify-center mb-36 px-8">
      <div className="max-w-3xl w-full">
        {/* MISSION */}
        <div className="flex flex-col md:flex-row mb-24">
          <div className="children:text-blue children:text-3xl children:font-bold flex-[1-1-30%] min-w-[15ch]">
            <h3>Our</h3>
            <h3>Mission</h3>
            <div className={`w-24 h-1 bg-red mt-2`} />
          </div>
          <div>
            <p className="text-blue leading-10 pt-4 md:pt-0">
              Our mission is to connect Indonesian producers with global
              distributors by delivering high-value, quality products on time,
              focusing on value for money and safety, and committing to ethical
              business practices. We strive to support the global appreciation
              of Indonesia&apos;s diverse offerings and contribute to the
              success of our partners.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="flex flex-col md:flex-row">
          <div className="children:text-blue children:text-3xl children:font-bold flex-[1-1-30%] min-w-[15ch]">
            <h3>Our</h3>
            <h3>Values</h3>
            <div className={`w-24 h-1 bg-red mt-2`} />
          </div>
          <div>
            <ul className="children:leading-10 children:text-blue pt-4 md:pt-0">
              <li>
                <span className="font-bold text-red">1. Quantity</span>: We are
                dedicated to delivering the highest quality products, ensuring
                that every item meets rigorous standards of taste and safety.
              </li>
              <li>
                <span className="font-bold text-red">2. Integrity</span>: Our
                business practices are grounded in honesty, fostering trust and
                long-term relationships with our partners.
              </li>
              <li>
                <span className="font-bold text-red">3. Flexibility</span>: We
                understand the unique demands of our clients and strive to meet
                them with tailored solutions. Our flexibility allows us to adapt
                to your specific needs, including sourcing new products and
                negotiating order sizes.
              </li>
              <li>
                <span className="font-bold text-red">
                  4. Customer Satisfaction
                </span>
                : Our clients&apos; needs are our top priority, and we aim to
                exceed their expectations with exceptional service and reliable
                delivery.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
