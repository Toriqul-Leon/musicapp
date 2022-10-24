import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
const Feature = (props) => {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
      <div className=" flex flex-col items-center justify-center relative mx-[12rem] text-center">
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../img/${props.icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
        </motion.div>
        <span className="mt-5">{props.title}</span>
        <span className="text-[#707070] mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        </span>
        <span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">
          Learn More
        </span>
      </div>
    </VisibilitySensor>
  );
};

export default Feature;
