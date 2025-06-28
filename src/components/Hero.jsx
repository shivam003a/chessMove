import { NavLink } from "react-router-dom";
import chessImage from "../assets/chess.png";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const mouseRef = useRef(null)

  useEffect(() => {
    function getMousePos(e) {
      setMousePos({
        x: e?.clientX,
        y: e?.clientY
      })
      console.log(e?.clientX, e?.clientY)
    }

    window.addEventListener('mousemove', getMousePos)

    return () => {
      window.removeEventListener('mousemove', getMousePos)
    }
  }, [])

  useEffect(() => {
    mouseRef.current.style.top = (mousePos?.y - 8) + "px";
    mouseRef.current.style.left = (mousePos?.x - 8) + "px"
  }, [mousePos.x, mousePos.y])
  return (
    <>
      <div className="from-primary to-secondary bg-gradient-to-bl">
        <div className="relative mx-auto flex flex-col md:flex-row min-h-screen max-w-[1200px] items-center justify-between gap-4 p-3">
          <div className="flex-9/20">
            <img src={chessImage} alt="chess" className="w-full md:w-[90%]" />
          </div>
          <div className="flex flex-11/20 flex-col gap-2 mb-8">
            <h1 className="text-p-text font-poppins text-6xl leading-18 font-bold">
              Play Smarter. Think Deeper. Win More.
            </h1>
            <h3 className="text-s-text font-poppins mt-2 text-lg font-light">
              Play against AI bots of various ELOs or analyze your games in
              depth. No signup needed.
            </h3>
            <div className="mt-12 flex flex-col justify-center gap-3">
              <NavLink
                to={"/play-bots"}
                className="border-s-text font-poppins text-s-text w-full md:w-1/2 rounded-lg border-1 px-8 py-3 text-lg"
              >
                Play with Bots
              </NavLink>
              <NavLink
                to={"/analysis"}
                className="bg-s-text font-poppins w-full md:w-1/2 rounded-lg px-8 py-3 text-lg"
              >
                Launch Analysis Board
              </NavLink>
            </div>
          </div>

          {/* scroll More */}
          {/* <div className="absolute right-6 bottom-8 flex flex-col items-center justify-center gap-2">
            <div className="border-s-text flex h-9 w-6 justify-center rounded-xl border-1">
              <div className="bg-s-text animate-scroll mt-[10px] h-1.5 w-1 rounded-full"></div>
            </div>
            <h3 className="text-s-text font-poppins text-xs">
              Scroll For More
            </h3>
          </div> */}

        </div>
        {/* mouse movement */}
        <div className="h-4 w-4 absolute border border-amber-500 rounded-full" ref={mouseRef}></div>
      </div>
    </>
  );
}

export default Hero;
