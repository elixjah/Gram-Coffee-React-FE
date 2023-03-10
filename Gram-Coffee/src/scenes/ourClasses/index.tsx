import { SelectedPage, ClassType } from "../../shared/types";
import image1 from "../../assets/imageAA.png";
import image2 from "../../assets/imageAB.png";
import image3 from "../../assets/imageAC.png";
import image4 from "../../assets/imageAF.png";
import image5 from "../../assets/imageAE.png";
import image6 from "../../assets/imageAD.png";
import image7 from "../../assets/imageAG.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    id: 1,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
    price: 115.00,
  },
  {
    id: 2,
    name: "Mocha",
    image: image2,
    price: 115.00,
  },
  {
    id: 3,
    name: "Seasalt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
    price: 115.00,
  },
  {
    id: 4,
    name: "Gram Signature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
    price: 105.00,
  },
  {
    id: 5,
    name: "Caramel Machiatto",
    image: image5,
    price: 125.00,
  },
  {
    id: 6,
    name: "Spanish Latte",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
    price: 115.00,
  },
  {
    id: 7,
    name: "Mocha Frappe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image7,
    price: 120.00,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Products</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                id={item.id}
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
 
export default OurClasses;
