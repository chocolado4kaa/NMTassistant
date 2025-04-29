import { useState } from "react";
import "./header.scss";
import { Link } from "react-router";

const Header = () => {
  const [isMenu, setMenu] = useState(false);
  const handeOpenMenu = () => {
    setMenu(!isMenu);
  };

  return (
    <header className="h-25 mt-10 sticky flex flex-col">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="header_part flex"
          onClick={() => setMenu(false)}
        >
          <div className="logo h-12 w-12"></div>
          <span className="title text-5xl ml-5 h-12 mt-2">nmt assistant</span>
        </Link>
        <div className="header_part flex">
          <button
            className={`burger w-12 h-12 ${!isMenu ? `open` : `close`}`}
            onClick={handeOpenMenu}
          ></button>
        </div>
      </div>
      <div
        className={`container menu w-full flex mt-3 ${
          isMenu ? `opened` : `closed`
        }`}
      >
        <nav className="flex container w-full justify-evenly">
          <Link to="/about-us" onClick={() => setMenu(false)}>
            Про нас
          </Link>
          <Link to="/subjects" onClick={() => setMenu(false)}>
            Предмети
          </Link>
          <Link to="/links" onClick={() => setMenu(false)}>
            Посилання
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
