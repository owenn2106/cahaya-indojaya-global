import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="bg-blue flex justify-center px-8 scroll-m-36">
      <div className="max-w-6xl w-full my-12">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white text-center font-bold">
            Frequently Asked Questions
          </h3>
          <div className={`w-48 h-1 bg-red mt-4`} />
        </div>
        <div className="children:text-white children:text-center children:leading-8 mt-6 mb-12">
          <p>
            Below you&apos;ll find answers to some common questions around
            export and business flows.
          </p>
          <p>
            Every order is little different though, so don&apos;t hesitate to
            reach out with anything else you might be wondering about.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full text-white border-t border-t-white"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start">
              What types of products do you offer?
            </AccordionTrigger>
            <AccordionContent>
              We offer a wide range of Indonesian products, including
              traditional chips and crackers, snacks, bottled and sachet
              beverages, seasonings, beauty products, and daily necessities. We
              can adapt flexibly to meet customer requests.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start">
              What is the minimum order quantity?
            </AccordionTrigger>
            <AccordionContent>
              We specialize in bulk orders for 20 or 40-foot containers.
              However, smaller orders are negotiable based on specific
              requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start">
              How do you ensure the quality of your products?
            </AccordionTrigger>
            <AccordionContent>
              Quality is our top priority. We work closely with trusted
              suppliers and conduct thorough inspections to ensure that all
              products meet our high standards of quality and freshness.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-start">
              Do you provide shipping and logistics services?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we have extensive relationships with shipping and logistics
              service providers, ensuring timely and efficient delivery to your
              specified destination.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-start">
              How can I place an order?
            </AccordionTrigger>
            <AccordionContent>
              You can place an order by contacting our team through email or
              phone. We will guide you through the process and provide all
              necessary information to facilitate your purchase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-start">
              Can you help me source new brands or products?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. If you need assistance in approaching new brands or
              products to meet your market demands, we are here to help. Our
              team can connect you with the right suppliers and ensure you get
              the products that fit your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
