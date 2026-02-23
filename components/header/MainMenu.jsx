"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => pathname === link;

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      {/* Mobile toggle */}
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-lg-center">

          {/* Logo on mobile */}
          <li className="d-block d-lg-none mb-3">
            <Link href="/home/real-estate" className="d-block">
              <Image
                src="/images/logo/logo_01.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </li>

          {/* MAIN MENU ITEMS */}

          <li className="nav-item">
            <Link
              href="/home/real-estate"
              className={`nav-link ${isActive("/") ? "active-menu" : ""}`}
            >
              Inicio
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link
              href="/properties"
              className={`nav-link ${
                isActive("/properties") ? "active-menu" : ""
              }`}
            >
              Properties
            </Link>
          </li> */}

          <li className="nav-item">
            <Link
              href="/pages-menu/service-v2"
              className={`nav-link ${
                isActive("/services") ? "active-menu" : ""
              }`}
            >
              Servicios
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href="/contact/contact-v1"
              className={`nav-link ${
                isActive("/contact") ? "active-menu" : ""
              }`}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* MOBILE CTA */}
        <div className="mobile-content d-block d-lg-none mt-40 text-center">
          <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
