import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength, tone muscles, and increase endurance with our expert-guided weight training sessions. Perfect for all fitness levels!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility, reduce stress, and enhance mindfulness with our relaxing and energizing yoga sessions.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core with targeted exercises designed to improve stability, posture, and overall athletic performance.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Take your fitness outdoors! Join our adventure classes for exciting challenges that push your limits and keep workouts fun.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "From cardio to strength training, our fitness classes offer a full-body workout experience tailored to your goals.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Boost your performance with specialized training programs, combining strength, agility, and endurance techniques.",
    image: image6,
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
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Push your limits with our expert-led fitness classes! Whether
              you're into high-intensity workouts, strength training, or
              mind-body sessions like yoga, we’ve got the perfect class for you.
              Stay motivated, train smart, and achieve your goals!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
