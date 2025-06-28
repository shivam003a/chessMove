import { NavLink } from "react-router-dom";
import chessMove from "../assets/chessmove.png";

function Navbar() {
  return (
    <>
      <div className="bg-primary">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 p-3">
          <div>
            <NavLink to={"/"}>
              <img src={chessMove} alt="chessmove" className="h-12" />
            </NavLink>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
