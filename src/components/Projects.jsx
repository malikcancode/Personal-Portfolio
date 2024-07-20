import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDownLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.to(".icon", {
      scrollTrigger: {
        trigger: ".projects",
        start: "center 35%",
        end: "bottom 50%",
        scrub: true,
      },
      rotate: 360,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "38% 50%",
        end: "bottom 50%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      "#card-one",
      {
        top: "35%",
      },
      "a"
    )
      .to(
        "#card-two",
        {
          top: "130%",
        },
        "a"
      )
      .to(
        "#card-two",
        {
          top: "42%",
        },
        "b"
      )
      .to(
        "#card-one",
        {
          width: "100%",
          height: "70vh",
          backgroundColor: "#2a9d8f",
        },
        "b"
      )
      .to(
        "#card-three",
        {
          top: "130%",
        },
        "b"
      )
      .to(
        "#card-three",
        {
          top: "50%",
        },
        "c"
      )
      .to(
        "#card-two",
        {
          width: "100%",
          height: "70vh",
          backgroundColor: "#1a9d8f",
        },
        "b"
      )
      .to(
        "#card-four",
        {
          top: "150%",
        },
        "d"
      )
      .to(
        "#card-four",
        {
          top: "53%",
        },
        "d"
      )
      .to(
        "#card-three",
        {
          width: "100%",
          height: "70vh",
          backgroundColor: "#2a9d8f",
        },
        "d"
      )
      .to(
        "#card-five",
        {
          top: "180%",
        },
        "e"
      )
      .to(
        "#card-five",
        {
          top: "57%",
        },
        "e"
      )
      .to(
        "#card-four",
        {
          width: "100%",
          height: "70vh",
          backgroundColor: "#2a9d8f",
        },
        "e"
      )
      .to(
        "#card-six",
        {
          top: "205%",
        },
        "f"
      )
      .to(
        "#card-six",
        {
          top: "60%",
        },
        "f"
      )
      .to(
        "#card-five",
        {
          width: "100%",
          height: "70vh",
          backgroundColor: "#2a9d8f",
        },
        "f"
      )
      .to(
        "#card-seven",
        {
          top: "230%",
        },
        "g"
      )
      .to(
        "#card-seven",
        {
          top: "64%",
        },
        "g"
      )
      .to(
        "#card-six",
        {
          width: "100%",
          height: "70vh",
          backgroundColor: "#1a9d8f",
        },
        "g"
      )
      .to(
        "#card-seven",
        {
          width: "100%",
          height: "70vh",
          backgroundColor: "#1a9d8f",
        },
        "h"
      );
  });

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projects">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="text-center sm:text-left">
          <h1 className="text text-6xl sm:text-[14vw] tracking-wider">
            PROJECTS
          </h1>
        </div>
        <span className="icon sm:text-[1.5vw] text-[6vw] mt-36 bg-white rounded-md text-black p-3">
          <FaArrowDownLong />
        </span>
      </div>

      <div className="main">
        <div className="cards" id="card-one">
          <div className="text flex flex-col gap-10 items-center justify-center w-full h-full">
            <h2 className="text-3xl sm:text-5xl text-start w-full px-8">01</h2>
            <h2 className="text-5xl sm:text-9xl text-center">GOLF WEBSITE</h2>
            <button
              onClick={() =>
                handleCardClick(
                  "https://golf-website-landing-page.netlify.app/"
                )
              }
              className="px-10"
            >
              Explore
            </button>
          </div>
        </div>
        <div className="cards" id="card-two">
          <div className="text flex flex-col gap-10 items-center justify-center w-full h-full">
            <h2 className="text-3xl sm:text-5xl text-start w-full px-8">02</h2>
            <h2 className="text-5xl sm:text-9xl text-center">OCHI WEBSITE</h2>
            <button
              onClick={() =>
                handleCardClick("https://ochiwebsite-clone.netlify.app/")
              }
            >
              Explore
            </button>
          </div>
        </div>
        <div className="cards" id="card-three">
          <div className="text flex flex-col gap-10 items-center justify-center w-full h-full">
            <h2 className="text-3xl sm:text-5xl text-start w-full px-8">03</h2>
            <h2 className="text-5xl sm:text-9xl text-center">BRAND BRUST</h2>
            <button
              onClick={() => handleCardClick("https://brandbrust.netlify.app/")}
            >
              Explore
            </button>
          </div>
        </div>
        <div className="cards" id="card-four">
          <div className="text flex flex-col gap-10 items-center justify-center w-full h-full">
            <h2 className="text-3xl sm:text-5xl text-start w-full px-8">04</h2>
            <h2 className="text-4xl sm:text-8xl text-center">
              FITSOLE SNEAKERS
            </h2>
            <button
              onClick={() =>
                handleCardClick("https://sneakerswebpages.netlify.app/")
              }
            >
              Explore
            </button>
          </div>
        </div>
        <div className="cards" id="card-five">
          <div className="text flex flex-col gap-10 items-center justify-center w-full h-full">
            <h2 className="text-3xl sm:text-5xl text-start w-full px-8">05</h2>
            <h2 className="text-4xl sm:text-8xl text-center">MAGMA WEBSITE</h2>
            <button
              onClick={() =>
                handleCardClick("https://magma-animated-website.netlify.app/")
              }
            >
              Explore
            </button>
          </div>
        </div>
        <div className="cards" id="card-six">
          <div className="text flex flex-col gap-10 items-center justify-center w-full h-full">
            <h2 className="text-3xl sm:text-5xl text-start w-full px-8">06</h2>

            <h2 className="text-5xl sm:text-9xl text-center">TOUR WEBSITE</h2>
            <button
              onClick={() =>
                handleCardClick(
                  "https://tour-website-landing-page.netlify.app/"
                )
              }
            >
              Explore
            </button>
          </div>
        </div>

        <div className="cards" id="card-seven">
          <div className="text flex flex-col gap-10 items-center justify-center w-full h-full">
            <h2 className="text-3xl sm:text-5xl text-start w-full px-8">07</h2>
            <h2 className="text-5xl sm:text-9xl text-center">FAR AWAY</h2>
            <button
              onClick={() =>
                handleCardClick("https://faraway-travellistapp.netlify.app/")
              }
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
