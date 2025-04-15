import "./header.scss";

const Header = () => {
  return (
    <header className="h-20 mt-10 sticky flex">
      <div className="container flex justify-between items-center">
        <div className="header_part flex">
          <div className="logo h-12 w-12"></div>
          <span className="title text-5xl ml-5 h-12 mt-2">nmt assistant</span>
        </div>
        <div className="header_part flex">
          <button className="burger w-12 h-12"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
