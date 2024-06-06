import React from "react";
import AboutSection from "../components/AboutSection"
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimaton } from "../Animation";


const AboutUs = () => {
    return <motion.div variants={pageAnimaton} initial="hidden" animate="show">
        <AboutSection />
        <BenefitsSection />
        <FaqSection />
    </motion.div>
}
export default AboutUs;