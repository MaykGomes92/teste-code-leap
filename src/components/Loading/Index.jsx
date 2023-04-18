import React from "react";
import { LoadingDiv } from "./styled";
import { motion } from "framer-motion";

function Index() {
 return (
  <LoadingDiv>
   <motion.div
    className="circle"
    animate={{
     scale: [1, 2, 2, 1, 1],
     rotate: [0, 0, 270, 270, 0],
     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
   ></motion.div>
  </LoadingDiv>
 );
}

export default Index;
