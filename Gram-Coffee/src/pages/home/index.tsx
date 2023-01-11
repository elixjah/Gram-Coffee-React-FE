import React from 'react'
import { SelectedPage } from '../../common/utils/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from "framer-motion";
import gramLogo from "../../assets/images/logo.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        ></motion.div>
        <div className="z-10 mt-32 md:basis-3/5">
            <motion.div
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                        <img alt="home-page-text" src={gramLogo} />
                    </div>
                </div>

            <h1 className="mt-8 text-sm">
              This is HOME
            </h1>
            </motion.div>
        </div>
    </section>
  )
}

export default Home