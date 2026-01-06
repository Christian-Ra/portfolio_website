import "./Works.scss";
// import logo from "../../assets/mobile-dev.png";
// import norsman from "../../assets/norsman.png";
import arrow from "../../assets/right-arrow.png";
import projects from "../../data.jsx";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : projects.length - 1,
        )
      : setCurrentSlide(
          currentSlide < projects.length - 1 ? currentSlide + 1 : 0,
        );
  };
  return (
    <div className="works" id="works">
      <h1>What I've Worked On</h1>
      <div
        className="slider"
        style={{ transform: `translateX(${currentSlide * -100}vw)` }}
      >
        {projects.map((project) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={project.icon} />
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                  <div className="links">
                    <span>{project.linkTag}</span>
                    <span>Project Repo</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={project.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      ></img>
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      ></img>
    </div>
  );
}
