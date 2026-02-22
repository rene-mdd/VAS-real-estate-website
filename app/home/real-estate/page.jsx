import Header5 from "@/components/header/Header5";
import FilterProperty from "@/components/home-page/home-5/ProperyFilter";
import Property from "@/components/home-page/home-5/Property";
import Quote from "@/components/home-page/home-5/Quote";
import Hero from "@/components/home-page/home-5/hero";
import About from "@/components/home-page/home-5/about";
import FancySection from "@/components/home-page/home-5/FancySection";
import Testimonial from "@/components/home-page/home-5/Testimonial";
import Blog from "@/components/home-page/home-5/Blog";
import Faq from "@/components/home-page/home-5/Faq";
import CallToActions from "@/components/home-page/home-5/CallToActions";
import Footer from "@/components/home-page/home-5/footer";
import Link from "next/link";

export const metadata = {
  title: "Real Estate || Jano - Creative Multipurpose React NextJS Template",
};

const RealEstate = () => {
  return (
    <>
      {/* HEADER */}
      <Header5 />

      {/* HERO */}
      <Hero />

      {/* =============================================
          Feature Section 46 — LIHOST header section
      ============================================== */}
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="home-main-container">
              {/* LEFT SIDE */}
              <div data-aos="fade-right">
                <div className="title-style-five home-main-left-wrapper">
                  <img
                    src="/images/logo/lihost-logo-big-negro.png"
                    width={300}
                  />
                  <h2 className="main-title fw-500 tx-dark">LI.HOST</h2>

                  <p className="text-lg tx-dark">
                    “Gestionamos tu propiedad a corta estancia como si fuera
                    nuestra”
                  </p>

                  <p className="text-lg tx-dark amueblado-text">
                    AMUEBLADO & ADMINISTRACIÓN
                  </p>

                  <div className="amueblado-contact-wrapper">
                    <a href="mailto:li.hostrd@gmail.com">@Li.hostrd</a>
                    <a href="mailto:li.hostrd@gmail.com">
                      li.hostrd@gmail.com
                    </a>
                    <a href="tel:+1829-383-0866">829-383-0866</a>
                  </div>
                </div>

                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">{/* <Testimonial /> */}</div>
                </div>
              </div>

              {/* RIGHT SIDE IMAGE */}
              <div>
                <div className="img-holder position-relative mt-25" data-aos="fade-left">
                  <img
                    src="/images/gallery/homepage-right-image.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* =============================================
          PROPERTY FILTER
      ============================================== */}
      <div className="fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-100 lg-pb-100">
        <div className="container">
          <FilterProperty />
        </div>

        <img
          src="/images/shape/shape_163.svg"
          alt="media"
          className="lazy-img shapes shape-one"
        />
      </div>

      {/* =============================================
          SOBRE NOSOTROS
      ============================================== */}
      <div className="container pt-150">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-right">
            <div className="title-style-five mb-65 md-mb-40">
              <div className="sc-title-two fst-italic position-relative sobre-nosotros-container">
                Sobre nosotros.
              </div>
              <h2 className="main-title fw-500 tx-dark">
                Nuestro <br /> OBJETIVO
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 col-lg-9 ms-auto">
            <div className="ps-xxl-5" data-aos="fade-left">
              <p className="text-lg tx-dark">
                Ofrecer un servicio integral que transforme cada propiedad en un
                espacio acogedor, funcional y atractivo, desde el diseño y
                amueblado hasta la decoración y equipamiento completo. Nos
                enfocamos en maximizar el potencial de cada propiedad,
                asegurando que cumpla con los estándares más altos.
              </p>

              <p className="text-lg tx-dark">
                Generar experiencias memorables para los huéspedes y la mayor
                rentabilidad posible para los propietarios, cuidando cada
                detalle con profesionalismo y dedicación.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================
          ABOUT SECTION
      ============================================== */}
      <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
        </div>
      </div>

      {/* =============================================
          FANCY SECTION
      ============================================== */}
      <FancySection />

      {/* =============================================
          BLOG
      ============================================== */}
      <div className="blog-section-six position-relative zn2 pt-150 pb-200 lg-pt-90 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="title-style-five text-center text-sm-start mb-30 lg-mb-10">
              <h2 className="main-title fw-500 tx-dark">Our Blog</h2>
            </div>

            <div className="row gx-xxl-5">
              <Blog />
            </div>

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark">
                <Link href="/blog/blog-v1" className="fw-500 tran3s">
                  Check our all news <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>

      {/* =============================================
          FAQ
      ============================================== */}
      <div className="fancy-feature-fifty position-relative mt-200 lg-mt-100">
        <div className="container">
          <div className="row">
            {/* LEFT */}
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-five">
                <h2 className="main-title fw-500 tx-dark">
                  Question &amp; Answers.
                </h2>
              </div>
              <p className="text-lg mt-40 mb-45 lg-mt-20 lg-mb-30">
                Don’t find your answer here? Just send us a message.
              </p>
              <Link href="/faq" className="btn-one fw-500">
                See More
              </Link>
            </div>

            {/* RIGHT */}
            <div className="col-xl-7 col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default RealEstate;
