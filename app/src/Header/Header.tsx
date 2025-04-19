import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [isMenu, setMenu] = useState(false);
  const handeOpenMenu = () => {
    setMenu(!isMenu);
  };

  return (
    <header className="h-20 mt-10 sticky flex flex-col">
      <div className="container flex justify-between items-center">
        <div className="header_part flex">
          <div className="logo h-12 w-12"></div>
          <span className="title text-5xl ml-5 h-12 mt-2">nmt assistant</span>
        </div>
        <div className="header_part flex">
          <button
            className={`burger w-12 h-12 ${!isMenu ? `open` : `close`}`}
            onClick={handeOpenMenu}
          ></button>
        </div>
      </div>
      <div className={`container menu ${isMenu ? `opened` : `closed`}`}>
        <nav>
          <a href="#">about us</a>
          <a href="#">subjects</a>
          <a href="#">links</a>
          <a href="#">...</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
