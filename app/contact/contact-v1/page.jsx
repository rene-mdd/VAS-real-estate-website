import BlockContact from "@/components/contact/BlockContact";
import Map from "@/components/contact/Map";
import Footer from "@/components/home-page/home-5/footer";
import Header5 from "@/components/header/Header5";
export const metadata = {
  title: "Contacto Li.Host",
};
const ContactV1 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
    <Header5 />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five mb-65 lg-mb-40">
                <h2 className="main-title fw-500 tx-dark">Contacto</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH }/images/shape/shape_172.svg`}
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}
        <Map />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <Footer />
    </>
  );
};

export default ContactV1;
