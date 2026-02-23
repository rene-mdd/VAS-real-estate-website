const Social = () => {
  const socialIcons = [
    { id: 1, link: "http://facebok.com/", icon: "fab fa-facebook-f" },
    { id: 2, link: "https://www.instagram.com/li.host/", icon: "fab fa-instagram" },
    { id: 3, link: "http://linkedin.com/", icon: "fab fa-linkedin-in" },
  ];

  return (
    <ul className="d-flex social-icon style-none">
      {socialIcons.map((socialIcon) => (
        <li key={socialIcon.id}>
          <a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
            <i className={socialIcon.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
