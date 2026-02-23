import Image from "next/image";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: `${process.env.NEXT_PUBLIC_BASE_PATH }/images/icon/icon_147.svg`,
      title: "Nuestra dirección ",
      content: "Punta Cana, República Dominicana",
      delay: "100",
    },
    {
      icon: `${process.env.NEXT_PUBLIC_BASE_PATH }/images/icon/icon_148.svg`,
      title: "Contacto",
      content: "Teléfono",
      link: "tel:829-383-0866",
      delay: "200",
    },
    {
      icon: `${process.env.NEXT_PUBLIC_BASE_PATH }/images/icon/icon_149.svg`,
      title: "Correo electrónico",
      content: "Escríbenos",
      link: "mailto:li.hostrd@gmail.com",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto contact-icons-color">
              <Image width={30} height={30} src={block.icon} alt="icon" />  
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.includes("tel:") ? block.link.replace("tel:", "") : block.link.replace("mailto:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
