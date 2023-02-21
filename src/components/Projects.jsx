import React, { useState } from "react";

import miniBank from "../assets/bankist-1.jpg";
import miniBank2 from "../assets/bankist-2.png";
import Trillo from "../assets/trillo-2.jpg";
import Trillo2 from "../assets/trillo.png";
import Greenshop from "../assets/gshhomepic.png";
import FlowerShop from "../assets/flower-shop.jpg";
import Memory from "../assets/game-1.jpg";
import Memory2 from "../assets/game-2.png";
import DreamHome from "../assets/Dream-Home.jpg";
import DreamHome2 from "../assets/building.png";

import { FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import Img3 from "../assets/cosmos-3.jpg";
import FastFood from "../assets/fastFood.png";
import FastFood2 from "../assets/FastFood.jpg";

import "../style/projects.css";
function Projects() {
  const projectList = [
    {
      name: "Memory Game",
      tools: "JavaScript",
      mainPic: Memory,
      webPic: Memory2,
      type: "Web-Game",
      info: "Game in which you have to find matching numbers/icons ",
      link: "https://memory-game-three-alpha.vercel.app/",
      gitLink: "https://github.com/itsjk0307/Memory-game",
    },
    {
      name: "Mini Bank",
      tools: "JavaScript",
      mainPic: miniBank,
      webPic: miniBank2,
      type: "Simple online banking app",
      info: "This application allows users to login, transfer funds to other accounts, borrow funds or close the account",
      link: "https://banking-app-zeta.vercel.app/",
      gitLink: "https://github.com/itsjk0307/Banking-app",
    },
    {
      name: "Green Shop",
      tools: "React JS",
      mainPic: FlowerShop,
      webPic: Greenshop,
      type: "This site is for selling flowers and selecting them with some prefernces.",
      info: "This is fully developed web-site with database on itself.",
      link: "https://greenfl.netlify.app/",
      gitLink: "https://github.com/aad05/GreenShop",
    },
    {
      name: "Trillo",
      tools: "CSS, SASS, Flexbox",
      mainPic: Trillo,
      webPic: Trillo2,
      type: "All-in-one-one booking App",
      info: "Sample website for a touring company that demonstrates modern responsive design ",
      link: "https://trillo-omega.vercel.app/",
      gitLink: "https://github.com/itsjk0307/Trillo",
    },
    {
      name: "Dream Building",
      tools: "CSS",
      mainPic: DreamHome,
      webPic: DreamHome2,
      type: "Simeple website for finding houses",
      info: "This website was built using CSS in React JS ",
      link: "https://dreambuilding.netlify.app/",
      gitLink: "#",
    },
    {
      name: "Fast Food",
      tools: "React.js",
      mainPic: FastFood2,
      webPic: FastFood,
      type: "Simple website that was built with react.",
      info: "This website was built to learn react router dom",
      link: "https://ffmeal.netlify.app/",
      gitLink: "https://github.com/aad05/FF-meal",
    },
  ];

  const [click, setClick] = useState({ show: false, id: "" });

  const clickHandler = (n) => setClick({ show: true, id: n });
  const clickExit = () => setClick({ show: false, id: "" });

  return (
    <Parallax
      // blur={10}
      bgImage={Img3}
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="projects" id="projects">
        <h1 className="projects__header">Projects</h1>
        <div className="projects__grid">
          {projectList.map((val, index) => {
            // console.log(projectList);
            return (
              <div className="projects__project1 projects__project">
                <img
                  src={val.mainPic}
                  alt="projects picture"
                  className="projects__img"
                />
                <div className="projects__top">
                  <h1>{val.name}</h1>
                  <h2>{val.tools}</h2>
                </div>
                <div className="projects__bottom">
                  <button
                    className="projects__btn--1 projects__btn"
                    onClick={() => clickHandler(index)}
                  >
                    Learn More
                  </button>
                </div>
                )
                {click.show && (
                  <div className={"projects__overlay"}>
                    <div className={"projects__learn-more-box"}>
                      <img
                        src={projectList[click.id].webPic}
                        alt="web picture"
                        className="projects__webpics"
                      />

                      <div className="projects__content">
                        <h1>{projectList[click.id].name}</h1>
                        <h2>{projectList[click.id].type}</h2>
                        <p>{projectList[click.id].info}</p>
                        <div className="projects__visit-site-box">
                          <div className="row">
                            <button className="projects__btn--2 projects__btn">
                              <a
                                href={projectList[click.id].link}
                                target="_blank"
                                className="projects__link"
                              >
                                Visit Site
                              </a>
                            </button>
                            <button className="projects__btn--2 projects__btn">
                              <a
                                href={projectList[click.id].gitLink}
                                target="_blank"
                                className="projects__link"
                              >
                                See Code
                              </a>
                            </button>
                          </div>

                          <FaTimes
                            className="projects__exit"
                            onClick={clickExit}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Parallax>
  );
}
export default Projects;
