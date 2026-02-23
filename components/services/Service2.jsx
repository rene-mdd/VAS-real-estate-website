const services = [
  {
    id: 1,
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH }/images/icon/camera.png`,
    title: "Fotografías",
    list: "Capturamos tu propiedad desde su mejor ángulo mediante sesiones fotográficas profesionales. Actualizamos las imágenes en la plataforma de Airbnb para reflejar la realidad del espacio y mantener un perfil atractivo y competitivo.",
  },
  {
    id: 2,
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH }/images/icon/loudspeaker.png`,
    title: "Promociones",
    list: "Promocionamos tu propiedad en las principales plataformas digitales. Destacamos tu propiedad conectando con una comunidad de viajeros activos que buscan experiencias únicas y alojamientos de calidad, aumentando el alcance y la demanda de reservas.",
  },
  {
    id: 3,
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH }/images/icon/social-media.png`,
    title: "Redes sociales",
    list: "Destacamos tu propiedad en nuestras cuentas oficiales @Li.HostRD, conectando con una comunidad de viajeros activos que buscan experiencias únicas y alojamientos de calidad.",
  },
  {
    id: 4,
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH }/images/icon/refresh.png`,
    title: "Análisis constantes",
    list: "Realizamos un monitoreo constante del mercado para optimizar el precio de tu propiedad según la temporada, la demanda y la competencia, garantizando siempre la mayor rentabilidad posible.",
  },
];

const Service2 = () => {
  return (
    <>
      {services.map((service) => (
        <div className="col-lg-3 col-sm-6" key={service.id} data-aos="fade-up">
          <div className="card-style-twentyThree mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={service.icon} alt="icon" className="lazy-img tran3s" />
            </div>
            <h4 className="title tx-dark">{service.title}</h4>
            <span className="style-none">{service.list}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service2;
