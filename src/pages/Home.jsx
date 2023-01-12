import Navbar from "../Components/Navbar";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Home = () => {
  const welcome = useRef(null);
  const shark = useRef(null);
  const paragraph = useRef(null);

  useEffect(() => {
    gsap.to(welcome.current, {
      x: 0,
      color: "white",
      opacity: 1,
      duration: 1,
    });

    gsap.to(shark.current, {
      x: 0,
      opacity: 1,
      delay: 0.2,
      duration: 1,
    });

    gsap.to(paragraph.current, {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1,
    });
  }, []);

  return (
    <main className="w-full flex items-center justify-center min-h-screen text-white relative overflow-hidden">
      <div className="wave-effect absolute w-full h-full bg-no-repeat bg-main bg-cover -z-10"></div>
      <Navbar />
      <section className="w-[80vw] h-full md:w-[90vw]">
        <div className="flex flex-col items-center justify-between">
          <div className="text-center drop-shadow-lg">
            <h3
              className="text-5xl font-semibold opacity-0 -translate-x-20 lg:text-5xl sm:text-2xl"
              ref={welcome}
            >
              Welcome to
            </h3>
            <h1
              className="bg-gradient-to-b from-[#FFF] to-[#FF0000] bg-clip-text text-8xl font-bold text-transparent -translate-x-20 opacity-0 sm:text-6xl md:8xl md:bg-red-400"
              ref={shark}
            >
              Epic Fencing
            </h1>
          </div>
          <p
            className="text-md text-red-200/50 font-light text-center w-1/2 opacity-0 -translate-x-20 sm:w-3/4 md:w-3/4 lg:w-3/4 "
            ref={paragraph}
          >
            We welcome you to the fun and amazing world of fencing. Here you can
            learn about different types of fencing and also take a mini quiz!.
          </p>
          <a
            href="https://www.epicfencing.ca"
            className="bg-[#9F0000]/20 text-white/80 font-normal tracking-wide px-24 py-2 rounded-md border-[1px] border-[#ff0000] mt-8 hover:bg-[#160000] duration-300 shake-on-hover"
          >
            Start your Journey Here!
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
