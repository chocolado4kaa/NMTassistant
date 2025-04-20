import "./footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer w-full h-125 flex ">
      <div className="container footer-container flex h-80/100 w-8/10 flex-col m-auto justify-between">
        <div className="container flex justify-between">
          <div className="footer-wrap flex w-full justify-between">
            <div className="left-part">
              <div className="logo-container">
                <div className="logo h-12 w-12"></div>
                <span className="title text-5xl ml-5 h-12 mt-2">
                  nmt assistant
                </span>
              </div>
              <div className="follow flex flex-col">
                <p>Follow us:</p>
                <div className="media-links flex w-full">
                  {media.map((link, index) => (
                    <a
                      href={link.href}
                      key={index}
                      className={`media ${link.className} mr-5`}
                    ></a>
                  ))}
                </div>
              </div>
            </div>
            {cols.map((col, index) => (
              <div className="column flex flex-col" key={index}>
                <h5>{col.title}</h5>
                <ul className="rows flex flex-col mt-10">
                  {col.rows.map((row, index) => (
                    <li>
                      <a href={row.href} key={index}>
                        {row.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <p>Copyright @ 2025, NMTassistant All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const cols = [
  {
    title: "About",
    rows: [
      {
        text: "Company",
        href: "#",
      },
      {
        text: "Leadership",
        href: "#",
      },
      {
        text: "Press",
        href: "#",
      },
      {
        text: "Investors",
        href: "#",
      },
    ],
  },
  {
    title: "Solutions",
    rows: [
      {
        text: "At School",
        href: "#",
      },
      {
        text: "At Work",
        href: "#",
      },
      {
        text: "At Home",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    rows: [
      {
        text: "Blog",
        href: "#",
      },
      {
        text: "Library",
        href: "#",
      },
      {
        text: "Help Center",
        href: "#",
      },
    ],
  },
  {
    title: "Terms and conditions",
    rows: [
      {
        text: "Terms and Conditions",
        href: "#",
      },
      {
        text: "Privacy Policy",
        href: "#",
      },
      {
        text: "Children’s Privacy Policy",
        href: "#",
      },
    ],
  },
];

const media = [
  {
    className: "facebook",
    href: "#",
  },
  {
    className: "twitter",
    href: "#",
  },
  {
    className: "linked",
    href: "#",
  },
  {
    className: "tiktok",
    href: "#",
  },
];
