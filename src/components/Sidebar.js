import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Logos from "./images/Logos.png"
import {
  FaHome,
  FaLeanpub,
  FaBookReader,
  FaVideo,
  FaWpforms,
  FaBrain,
  FaLightbulb,
  FaRegBell,
  FaUser,
  FaAngleDoubleRight,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/liveclasses",
    name: "Live class",
    icon: <FaLeanpub />,
  },
  {
    path: "/Upcomingclass",
    name: "Up Coming class",
    icon: <FaBookReader />,
  },
  {
    path: "/recordedlectures",
    name: "Recorded Lectures",
    icon: <FaVideo />,
  },
  {
    path: "/assignment",
    name: "Assignment",
    icon: <FaWpforms />,
  },
  {
    path: "/testseries",
    name: "Test Series",
    icon: <FaBrain />,
  },
  {
    path: "/yourdoubt",
    name: "Your Doubt",
    icon: <FaLightbulb />,
  },
  {
    path: "/notification",
    name: "Notifications",
    icon: <FaRegBell />,
  },
  {
    path: "/account",
    name: "Accounts",
    icon: <FaUser />,
  },
  {
    path: "/lougout",
    name: "Logout",
    icon: <FaAngleDoubleRight />,
  },
];

export const Sidebar = ({ children }) => {
  const [isopen, setOpen] = useState(false);
  const toggle = () => setOpen(!isopen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isopen ? "200px" : "50px" ,transition:{
           duration: 0.5,
              type: "spring",
              damping: 10,
        }}}
        className="sidebar"
      >
        <div className="top-section">
        <AnimatePresence>
     
          {isopen && (
            <div className="logos">
           <motion.img src={Logos } style={{width:"30px"}}/>
            <motion.h1
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="logo"
            >
             MarksChamp
            </motion.h1>
            </div>
          
          )}
             </AnimatePresence>

          <div className="bars" on onClick={toggle}>
            <FaBars />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <FaSearch />
          </div>
          <AnimatePresence>
            {isopen && (
              <motion.input
                initial="hidden"
                variants={inputAnimation}
                placeholder="search.."
                animate="show"
                exit="hidden"
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <>
              <NavLink to={route.path} key={route.name} className="link">
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isopen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            </>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};
