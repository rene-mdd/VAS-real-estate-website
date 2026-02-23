import Header5 from "@/components/header/Header5";
import Footer from "@/components/home-page/home-5/footer";
import Service2 from "@/components/services/Service2";
import Link from "next/link";
export const metadata = {
  title: "Li.Host Servicios",
};
const ServiceV2 = () => {
  return (
    <>
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header5 />

      {/* 
        =============================================
        Feature Section Forty Six
        ============================================== 
        */}
      {/* <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="title-style-eleven md-mb-20">
                  <h2 className="main-title tx-dark">
                    Service we provide with care.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 ms-auto" data-aos="fade-left">
                <p className="text-lg m0">
                  Inciddnt ut labore et dolor magna aliu. enim ad mim venam,
                  quis nostru labore elit lorem dus amet lorem.
                </p>
              </div>
            </div>

            <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">
              <Property />
            </div>
          </div>
        </div>
      </div> */}

      {/* 
        =============================================
        Feature Section Fifty Three
        ============================================== 
        */}
      {/* <div className="fancy-feature-fiftyThree position-relative pt-150 pb-200 lg-pt-80 lg-pb-110">
        <div className="container">
          <div
            className="title-style-eleven text-center pb-50 lg-pb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title tx-dark">Quality Services</h2>
          </div>
          <div className="row">
            <Service2 />
          </div>
        </div>
        <img
          src="/images/shape/shape_174.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-md-inline-block"
        />
        <div className="shapes shape-two" />
        <div className="shapes shape-three" />
      </div> */}
      {/* /.fancy-feature-fiftyThree */}

      {/*
			=====================================================
			Feedback Section Fourteen
			=====================================================
			*/}
      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80 md-mt-150">
            <div className="row">
              <h2 className="main-title fw-500 tx-dark service-title align-center-class">
                Nuestros servicios
              </h2>
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h3 className="fw-500 tx-dark align-center-class">
                    ADMINISTRACIÓN
                  </h3>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5 administracion-text-container">
                  <div className="feedback_slider_eleven administracion-text-wrapper">
                    <p className="text-lg tx-dark">
                      Nos encargamos de todos los detalles de tu propiedad,
                      desde la recepción de reservas hasta la salida de los
                      huéspedes, incluyendo comunicación, limpieza,
                      mantenimiento y optimización de la visibilidad en línea,
                      para que tú disfrutes de ingresos sin preocupaciones.
                    </p>
                  </div>
                </div>
                <div className="right-widget ms-auto d-flex align-items-center order-lg-3 servicios-btn">
                  <Link
                    href="/contact/contact-v1"
                    className="btn-twentyOne fw-500 d-lg-block"
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25 img-wrapper"
                  data-aos="fade-left"
                >
                  <img
                    src={`/images/gallery/administracion.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto servicios-img"
                  />
                  <img
                    src="/images/gallery/administracion-sub.jpg"
                    alt="shape"
                    className="lazy-img ms-auto administracion-sub-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pb-180 lg-pb-80">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25 img-wrapper"
                  data-aos="fade-left"
                >
                  <img
                    src={`/images/gallery/huesped.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto servicios-img"
                  />
                  <img
                    src={`/images/gallery/huesped-sub.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto huesped-sub-img"
                  />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h3 className="fw-500 tx-dark align-center-class">HUESPED</h3>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5 huesped-text-container">
                  <div className="feedback_slider_eleven huesped-text-wrapper">
                    <p className="text-lg tx-dark">
                      Acompañamiento completo al huésped desde el momento de su
                      reserva hasta su salida (Check- Out).
                    </p>
                    <p className="text-lg tx-dark">
                      Comunicación disponible 24/7 a través de la plataforma de
                      Airbnb.
                    </p>
                    <p className="text-lg tx-dark">
                      Envío de toda la información relevante para garantizar una
                      llegada fluida y sin contratiempos.
                    </p>
                    <p className="text-lg tx-dark">
                      Atención y gestión de cualquier solicitud o requerimiento
                      adicional durante su estancia.
                    </p>
                    <p className="text-lg tx-dark">
                      Revisión detallada de la propiedad durante el Check-In y
                      el Check-Out.
                    </p>
                    <p className="text-lg tx-dark">
                      Presencia personal en el apartamento en caso de emergencia
                      o situaciones que lo ameriten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pb-180 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h3 className="fw-500 tx-dark align-center-class">
                    PROPIEDAD
                  </h3>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5 administracion-text-container">
                  <div className="feedback_slider_eleven">
                    <p className="text-lg tx-dark">
                      Asegurar que el apartamento se encuentre limpio y en
                      condiciones óptimas antes de cada llegada de huéspedes.
                    </p>
                    <p className="text-lg tx-dark">
                      Mantener un inventario detallado y actualizado de todos
                      los objetos y equipos disponibles para uso de los
                      huéspedes.
                    </p>
                    <p className="text-lg tx-dark">
                      Supervisar el pago oportuno de los servicios básicos,
                      tales como electricidad, agua y mantenimiento del
                      condominio.
                    </p>
                    <p className="text-lg tx-dark">
                      Informar a la propietaria sobre cualquier irregularidad,
                      daño o situación relevante ocurrida en la propiedad.
                    </p>
                    <p className="text-lg tx-dark">
                      Verificar la cantidad y correcta identificación de los
                      huéspedes registrados en cada reserva.
                    </p>
                  </div>
                </div>
                      <div className="right-widget ms-auto d-flex align-items-center order-lg-3 servicios-btn">
                  <Link
                    href="/contact/contact-v1"
                    className="btn-twentyOne fw-500 d-lg-block"
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <img
                    src={`/images/gallery/propiedad.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pb-180 lg-pb-80">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <img
                    src={`/images/gallery/limpieza.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto"
                  />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h3 className="fw-500 tx-dark align-center-class">
                    LIMPIEZA
                  </h3>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5 huesped-text-container">
                  <div className="feedback_slider_eleven">
                    <p className="text-lg tx-dark">
                      Limpieza completa del apartamento antes de cada estadía.
                    </p>
                    <p className="text-lg tx-dark">
                      Insumos de limpieza incluidos, tales como detergentes,
                      desinfectantes y materiales necesarios para el
                      mantenimiento del espacio.
                    </p>
                    <p className="text-lg tx-dark">
                      Lavado y cambio de ropa de cama y toallas previo a cada
                      llegada.
                    </p>
                    <p className="text-lg tx-dark">
                      Reposición de artículos de cortesía, como papel higiénico,
                      shampoo, jabón y otros productos esenciales.
                    </p>
                    <p className="text-lg tx-dark">
                      Opción de limpieza adicional durante la estancia,
                      disponible bajo solicitud del huésped.
                    </p>
                    <p className="text-lg tx-dark">
                      Responsabilidad total por cualquier daño ocasionado por el
                      personal de limpieza.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing servivicios */}

      <div className="fancy-feature-fiftyThree position-relative pt-150 pb-200 lg-pt-80 lg-pb-110 servicios-marketing-wrapper">
        <div className="container">
          <div
            className="title-style-eleven text-center pb-50 lg-pb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title tx-dark">Servicios Marketing</h2>
          </div>
          <div className="row">
            <Service2 />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="valor-servicio">
          <div className="fancy-short-banner-sixteen" data-aos="fade-up">
            <div className="container">
              <div className="bg-wrapper mt-150 pb-65 pt-65 mb-65 lg-pt-40 lg-pb-40">
                <div className="row">
                  <div className="col-xl-10 col-md-11 m-auto">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className="text-wrapper text-center text-lg-start md-pb-30 oferta-wrapper">
                          <p className="w-500 m0 oferta-valor">
                            Valor de nuestros servicios
                          </p>
                          <p className="w-500 text-white m0 oferta-porcentaje">
                            25% DE CADA INGRESO POR RESERVA
                          </p>
                          <p className="w-500 text-white m0 oferta-servicios">
                            {" "}
                            ESTO INCLUYE TODOS LOS SERVICIOS
                          </p>
                        </div>
                      </div>

                      {/* <div className="col-lg-5 ms-auto text-center text-lg-end">
               <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-150 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h3 className="fw-500 tx-dark align-center-class">
                    AMUEBLADO
                  </h3>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5 administracion-text-container">
                  <div className="feedback_slider_eleven administracion-text-wrapper">
                    <p className="text-lg tx-dark">
                      Transformamos acogedor y tu propiedad atractivo
                      seleccionando para enun loshuéspedes, cuidadosamente
                      espacio mobiliario, decoración y equipamiento funcional.
                    </p>
                    <p className="text-lg tx-dark">
                      Nuestro objetivo es crear ambientes cómodos y modernos que
                      destaquen en la plataforma, mejoren la experiencia del
                      huésped y maximicen el valor y las reservas de tu
                      propiedad.
                    </p>
                  </div>
                </div>
                      <div className="right-widget ms-auto d-flex align-items-center order-lg-3 servicios-btn">
                  <Link
                    href="/contact/contact-v1"
                    className="btn-twentyOne fw-500 d-lg-block"
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25 img-wrapper"
                  data-aos="fade-left"
                >
                  <img
                    src={`/images/gallery/amueblado.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto servicios-img"
                  />
                  {/* <img
                    src="/images/gallery/administracion-sub.jpg"
                    alt="shape"
                    className="lazy-img ms-auto administracion-sub-img"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pb-180 lg-pb-80">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25 img-wrapper diseno-img-wrapper"
                  data-aos="fade-left"
                >
                  <img
                    src={`/images/gallery/diseno-top.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto diseno-top-img"
                  />
                  <img
                    src={`/images/gallery/diseno-bottom.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto diseno-bottom-img"
                  />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h3 className="fw-500 tx-dark align-center-class">DISEÑO</h3>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5 huesped-text-container">
                  <div className="feedback_slider_eleven huesped-text-wrapper">
                    <p className="text-lg tx-dark">
                      Reunion con el cliente para saber lo que quiere para su
                      propiedad.
                    </p>
                    <p className="text-lg tx-dark">
                      Asesoramos en la selección de materiales, acabados y
                      distribución, garantizando funcionalidad y estética.
                    </p>
                    <p className="text-lg tx-dark">
                      Realizamos una propuesta arquitectónica de como se verá la
                      propiedad con lo que el cliente necesita y/o quiere.
                    </p>
                    <p className="text-lg tx-dark">
                      Realizamos un levantamiento en el mercado para buscar
                      todos los mobiliarios y que guarden relación con el
                      diseño.
                    </p>
                    <p className="text-lg tx-dark">
                      Nos adaptamos al presupuesto del cliente y tratamos de dar
                      lo mejor para que el resultado sea el mejor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pb-180 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h3 className="fw-500 tx-dark align-center-class">
                    INSTALACIONES
                  </h3>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5 administracion-text-container">
                  <div className="feedback_slider_eleven">
                    <p className="text-lg tx-dark">
                      Ejecutamos cualquier trabajo arquitectónico adicional que
                      el cliente desee, adaptándonos a sus necesidades y estilo.
                    </p>
                    <p className="text-lg tx-dark">
                      Coordinamos con proveedores y contratistas para asegurar
                      que los trabajos se realicen a tiempo y con altos
                      estándares de calidad.
                    </p>
                    <p className="text-lg tx-dark">
                      Supervisamos cada etapa del proyecto, desde el diseño
                      hasta la entrega final, asegurando que todo cumpla con las
                      expectativas del cliente.
                    </p>
                    <p className="text-lg tx-dark">
                      Mantenemos al propietario informado sobre avances, cambios
                      y recomendaciones durante todo el proceso.
                    </p>
                  </div>
                </div>
                      <div className="right-widget ms-auto d-flex align-items-center order-lg-3 servicios-btn">
                  <Link
                    href="/contact/contact-v1"
                    className="btn-twentyOne fw-500 d-lg-block"
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <img
                    src={`/images/gallery/instalaciones.jpg`}
                    alt="shape"
                    className="lazy-img ms-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="valor-servicio">
            <div className="fancy-short-banner-sixteen" data-aos="fade-up">
              <div className="container">
                <div className="bg-wrapper mt-150 pb-65 pt-65 mb-65 lg-pt-40 lg-pb-40">
                  <div className="row">
                    <div className="col-xl-10 col-md-11 m-auto">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="text-wrapper text-center text-lg-start md-pb-30 oferta-wrapper">
                            <p className="w-500 m0 oferta-valor">
                              Valor de nuestros servicios
                            </p>
                            <p className="w-500 text-white m0 oferta-porcentaje">
                              20% DEL MONTO TOTAL PRESUPUESTO DEL CLIENTE
                            </p>
                            <p className="w-500 text-white m0 oferta-servicios">
                              {" "}
                              ESTO INCLUYE SERVICIOS DE INSTALACIÓN
                            </p>
                          </div>
                        </div>

                        {/* <div className="col-lg-5 ms-auto text-center text-lg-end">
               <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        =====================================================
        Fancy Short Banner Seventeen
        =====================================================
        */}
      {/* <div className="fancy-short-banner-seventeen position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 text-center pt-75 pb-225 lg-pb-120">
            <div className="row">
              <div className="col-xl-9 m-auto">
                <div
                  className="title-style-eleven"
                  data-aos-delay="100"
                  data-aos="fade-up"
                >
                  <h2 className="main-title tx-dark">
                    Have Any Project? <br /> Let’s Talk &amp; Grow your Business
                  </h2>
                </div>
                <p
                  className="text-lg mt-40 mb-55 lg-mt-30 lg-mb-40 "
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  We’r ready to help you. Our expert is here, just send a
                  message.
                </p>
                <Link
                  href="/contact"
                  className="btn-twenty fw-500 tran3s"
                  data-aos="fade-up"
                  data-aos-delay="0.3"
                >
                  Send Message
                </Link>
              </div>
            </div>
            <div className="shapes shape-two" />
            <div className="shapes shape-three" />
            <div className="shapes shape-four" />
          </div>
        </div>
        <img
          src="/images/shape/shape_162.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-md-inline-block"
        />
      </div> */}
      {/* /.fancy-short-banner-seventeen */}

      {/*
        =====================================================
        Fancy Short Banner Fifteen
        =====================================================
        */}

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <Footer />
    </>
  );
};

export default ServiceV2;
