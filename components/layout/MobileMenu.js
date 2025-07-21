"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const accreditationGroups = [
    {
      title: "Innovation & Digital Learning",
      items: [
        { label: "Innovation in Education (IEA)", href: "/iea-accreditation" },
        { label: "AI & Digital Learning (AIDA)", href: "/aida-accreditation" },
        { label: "STEAM & Robotics (SRA)", href: "sra-accreditation" },
      ],
    },
    {
      title: "Future-Ready Education:",
      items: [
        {
          label: "Future Skills & Career Readiness (FSCA)",
          href: "fsca-accreditation",
        },
        {
          label: "Leadership & Character Development (LCA)",
          href: "lca-accreditation",
        },
      ],
    },
    {
      title: "Inclusive & Global Education:",
      items: [
        { label: "Multilingual Education (MEA)", href: "mea-accreditation" },
        {
          label: "Inclusive & Adaptive Learning (ILA)",
          href: "ila-accreditation",
        },
        {
          label: "Global Academic Excellence (GAE)",
          href: "gae-accreditation",
        },
      ],
    },
    {
      title: "Safety & Sustainability:",
      items: [
        {
          label: "Cybersecurity & Digital Ethics (CDA)",
          href: "cda-accreditation",
        },
        {
          label: "Sustainable & Green Schools (SGA)",
          href: "sga-accreditation",
        },
      ],
    },
  ];

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div
            className={`burger-icon burger-icon-white ${
              isMobileMenu ? "burger-close" : ""
            }`}
            onClick={handleMobileMenu}
          >
            <span className="burger-icon-top" />
            <span className="burger-icon-mid" />
            <span className="burger-icon-bottom" />
          </div>
          <div className="mobile-header-top">
            <div className="user-account">
              <img
                src="/assets/imgs/template/USAAC certificate-03-03.png"
                alt="Nivia"
              />
              <div className="content">
                <h6 className="user-name">USAAC</h6>
                <p className="font-xs text-muted">
                  USA - Accreditation Council
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div
                className="mobile-menu-wrap mobile-header-border"
                style={{ borderBottom: "1px solid #e5e5e5" }}
              >
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleToggle(2)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span>

                      <Link href="/accreditations">Accreditations</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isActive.key == 2 ? "block" : "none"}`,
                        }}
                      >
                        {accreditationGroups.map((group, idx) => (
                          <li key={group.title}>
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              {group.title}
                            </span>
                            <ul>
                              {group.items.map((item, j) => (
                                <li key={item.label}>
                                  <Link href={item.href}>{item.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link href="/certification">Certification</Link>
                    </li>
                    <li>
                      <Link href="/process">Process</Link>
                    </li>
                    <li>
                      <Link href="/recognition">Q&A</Link>
                    </li>
                    <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-social-icon mb-50 mt-30">
                <h6 className="mb-25">Follow Us</h6>
                <Link className="icon-socials icon-facebook" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/fb.svg" />
                </Link>
                <Link className="icon-socials icon-instagram" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/in.svg" />
                </Link>
                <Link className="icon-socials icon-twitter" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/tw.svg" />
                </Link>
                {/* <Link className="icon-socials icon-be" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/be.svg" />
                </Link> */}
              </div>
              <div className="site-copyright">
                Copyright 2025 © Appsido.
                <br />
                Designed by Appsido.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
