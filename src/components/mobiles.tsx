import Image from "next/image";
import Gradient from "./gradient";
import Star from "./star";
import { motion } from "framer-motion";

const Mobiles = () => {
  const demoVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.09 * index,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };
  return (
    <motion.div
      variants={demoVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={2}
      className="relative hidden  md:flex"
    >
      <Image
        src={"/images/iphones.png"}
        alt="mobiles"
        width={700}
        height={700}
        className="  object-cover lg:min-w-[600px] lg:min-h-[600px] md:min-w-[400px] md:min-h-[400px] w-full h-full "
      />
      <Gradient className=" lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] object-cover z-[-10] absolute lg:top-48 lg:left-24 top-36 left-12 rotate-180" />
      <Star
        className="absolute lg:bottom-36 lg:left-24  bottom-36 left-6"
        type="light"
      />
      <Image
        src={"/images/circles.png"}
        alt="circles"
        width={450}
        height={450}
        className=" dark:invert lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] object-cover z-[-10] absolute lg:top-16 lg:left-24 top-10 left-12 "
      />
    </motion.div>
  );
};

export default Mobiles;
