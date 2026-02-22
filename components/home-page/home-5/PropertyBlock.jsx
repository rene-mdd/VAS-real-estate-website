import Image from "next/image";

const properties = [
  {
    imgSrc: "/images/gallery/punta-palmera/DSC_8387.jpg",
    name: "Punta Palmera",
    address: "Luxury Retreat in Cap Cana Marina – Private Beach & Jacuzzi",
  },
  {
    imgSrc: "/images/gallery/the-towers-f307/7.jpg",
    name: "No data",
    address: "Enjoy a modern and cozy fully equipped apartment, perfect for couples, small families, or groups of up to 4 people.",
  },
  {
    imgSrc: "/images/gallery/the-towers-g103/img_3794.jpg",
    name: "Vista Cana Cozy Suite",
    address: "Modern and cozy apartment in Punta Cana - Vista Cana, perfect for couples, small families, or up to 4 guests.",
  },
    {
    imgSrc: "/images/gallery/the-towers-g401/img_3248.jpg",
    name: "Vista Cana - A World of Moments!",
    address: "A modern, cozy & fully equipped apartment – ideal for couples, small families, or groups up to 4 guests.",
  },
  {
    imgSrc: "/images/gallery/the-towers-g102/img_8426.jpg",
    name: "Azure Palm Escape",
    address: "Enjoy a modern and cozy fully equipped apartment, perfect for couples, small families, or groups of up to 4 people.",
  },

];

const Property = () => {
  return (
    <>
      {properties.map((property, index) => (
        <div key={index} className="col-lg-4 col-sm-6">
          <div className="card-style-twentyTwo mt-35 home-property-container">
            <Image
              width={424}
              height={361}
              src={property.imgSrc}
              alt="media"
              className="lazy-img w-100"
            />
            <div className="text-meta">
              <h4>
                <a href="#" className="property-name">
                  {property.name}
                </a>
              </h4>
              <p className="fs-18">{property.address}</p>
              <div className="d-flex align-items-center justify-content-between arrow-property-wrapper">
                <a href="#" className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default Property;
