import { useState } from "react";
import "./header.scss";
import { Link } from "react-router";

const Header = () => {
  const [isMenu, setMenu] = useState(false);
  const handeOpenMenu = () => {
    setMenu(!isMenu);
  };

  return (
    <>
      <header className="h-25 mt-10 sticky flex flex-col z-9999 overflow-x-clip">
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
          className={`menu w-60 flex h-65 absolute top-20 right-10 items-center justify-start bg-white rounded-[55px] -z-1 p-10 ${
            isMenu ? `opened` : `closed`
          }`}
        >
          <nav className="flex justify-evenly flex-col gap-6">
            <Link
              to="/about-us"
              onClick={() => setMenu(false)}
              className="about-us"
            >
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.956 0.712983L9.5 0.884951L9.044 0.712983C7.67475 0.190808 6.20499 -0.0493152 4.73137 0.00840335C3.25775 0.0661219 1.81364 0.420374 0.494 1.04787L0 1.30129V16L1.3775 15.3483C2.45311 14.8397 3.6291 14.5527 4.82889 14.5059C6.02868 14.4591 7.22536 14.6537 8.341 15.0768L9.5 15.5203L10.659 15.0768C11.7746 14.6537 12.9713 14.4591 14.1711 14.5059C15.3709 14.5527 16.5469 14.8397 17.6225 15.3483L19 16V1.30129L18.4775 1.04787C17.1617 0.42431 15.7226 0.0721833 14.2542 0.0144785C12.7859 -0.0432262 11.3213 0.194789 9.956 0.712983ZM5.206 12.6783C4.08257 12.6769 2.96624 12.848 1.9 13.1852V2.44171C3.95872 1.62725 6.2699 1.61101 8.341 2.39646L8.55 2.47791V13.2214C7.46477 12.8651 6.32534 12.6816 5.1775 12.6783H5.206ZM17.1 13.1852C14.9425 12.4953 12.6075 12.4953 10.45 13.1852V2.47791L10.659 2.39646C12.7301 1.61101 15.0413 1.62725 17.1 2.44171V13.1852Z"
                  fill="currentColor"
                />
              </svg>
              Про нас
            </Link>
            <Link
              to="/subjects"
              onClick={() => setMenu(false)}
              className="subjects"
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_34_16)">
                  <path
                    d="M10.8665 3.18738L0.905518 8.62063L4.52769 10.5947V16.028L10.8665 19.4871L17.2053 16.028V10.5947L19.0164 9.60768V15.865H20.8274V8.62063L10.8665 3.18738ZM17.0423 8.62063L10.8665 11.9893L4.69068 8.62063L10.8665 5.25202L17.0423 8.62063ZM15.3942 14.9504L10.8665 17.4225L6.33877 14.9504V11.5818L10.8665 14.0539L15.3942 11.5818V14.9504Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_16">
                    <rect
                      width="21.733"
                      height="21.733"
                      fill="white"
                      transform="translate(0 0.470703)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Предмети
            </Link>
            <Link
              to="/links"
              onClick={() => setMenu(false)}
              className="useful-links"
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2041 4.81764L7.24438 12.7864V16.7799H11.2378L19.1975 8.82014C19.7245 8.28921 20.0203 7.57148 20.0203 6.82341C20.0203 6.07535 19.7245 5.35762 19.1975 4.82669C18.6601 4.31332 17.9459 4.02611 17.2026 4.02442C16.4594 4.02274 15.7439 4.30671 15.2041 4.81764ZM17.9207 7.53427L10.4953 14.9688H9.05547V13.529L16.49 6.09445C16.6838 5.90903 16.9417 5.80554 17.2099 5.80554C17.4781 5.80554 17.736 5.90903 17.9298 6.09445C18.0242 6.18933 18.0989 6.30195 18.1496 6.42583C18.2003 6.54971 18.2259 6.6824 18.2251 6.81624C18.2242 6.95009 18.1969 7.08244 18.1447 7.20568C18.0924 7.32891 18.0163 7.44059 17.9207 7.53427Z"
                  fill="currentColor"
                />
                <path
                  d="M16.2997 14.9689H14.4886V18.591H3.62212V7.19025L6.71002 4.10235H15.3942V2.29126H5.96748L1.81104 6.4477V20.4021H16.2997V14.9689Z"
                  fill="currentColor"
                />
              </svg>
              Посилання
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
