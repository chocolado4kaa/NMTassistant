import "./footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer w-full h-125 flex ">
      <div className="container footer-container flex h-8/10 w-8/10 flex-col m-auto justify-between">
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
    title: "Про нас",
    rows: [
      {
        text: "Про платформу",
        href: "#",
      },
      {
        text: "Наша команда",
        href: "#",
      },
      {
        text: "Новини",
        href: "#",
      },
      {
        text: "Контакти",
        href: "#",
      },
    ],
  },
  {
    title: "Рішення",
    rows: [
      {
        text: "Для учнів",
        href: "#",
      },
      {
        text: "Для батьків",
        href: "#",
      },
      {
        text: "Для викладачів",
        href: "#",
      },
    ],
  },
  {
    title: "Ресурси",
    rows: [
      {
        text: "Блог",
        href: "#",
      },
      {
        text: "Бібліотека матеріалів",
        href: "#",
      },
      {
        text: "Підтримка",
        href: "#",
      },
    ],
  },
  {
    title: "Правила та умови",
    rows: [
      {
        text: "Умови користування",
        href: "#",
      },
      {
        text: "Політика конфіденційності",
        href: "#",
      },
      {
        text: "Політика для дітей",
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

