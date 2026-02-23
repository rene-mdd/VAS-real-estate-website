const FooterMenu = () => {
  const footerData = [
    {
      title: "Menu",
      links: [
        { title: "Inicio", href: "/home/real-estate" },
        { title: "Servicios", href: "/pages-menu/service-v2" },
        { title: "Contacto", href: "/contact/contact-v1" },
        // { title: "Features", href: "/service-v1" },
        // { title: "Blog", href: "/blog-v1" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
    {
      title: "",
      links: [
        // { title: "Propiedad 1", href: "/service-details" },
        // { title: "propiedad 2", href: "/service-details" },
        // { title: "propiedad 3", href: "/service-details" },
        // { title: "Propiedad 4", href: "/service-details" },
        // { title: "Propiedad 5", href: "/service-details" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
  ];

  return (
    <>
      {footerData.map((section, index) => (
        <div className={section.colClass} key={index}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenu;
