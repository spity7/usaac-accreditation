"use client";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-testimonials",
    prevEl: ".swiper-button-prev-testimonials",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
  },
};

export default function Process() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <div>
          <section className="section-box box-content-feature pt-40 pb-60">
            <div className="container">
              <div className="text-center">
                {" "}
                <span className="btn btn-bg-brand-4 mb-25">
                  <span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.0532 15.1551L12.3032 1.65509C12.2684 1.60707 12.2228 1.56797 12.17 1.54102C12.1172 1.51406 12.0587 1.5 11.9994 1.5C11.9402 1.5 11.8817 1.51406 11.8289 1.54102C11.7761 1.56797 11.7305 1.60707 11.6957 1.65509L1.9457 15.1551C1.91663 15.1955 1.89588 15.2412 1.88466 15.2897C1.87344 15.3381 1.87198 15.3883 1.88035 15.4374C1.88873 15.4864 1.90678 15.5333 1.93345 15.5753C1.96012 15.6173 1.99487 15.6535 2.0357 15.682L11.7857 22.432C11.8485 22.4755 11.923 22.4988 11.9994 22.4988C12.0758 22.4988 12.1504 22.4755 12.2132 22.432L21.9632 15.682C22.004 15.6535 22.0388 15.6173 22.0654 15.5753C22.0921 15.5333 22.1102 15.4864 22.1185 15.4374C22.1269 15.3883 22.1254 15.3381 22.1142 15.2897C22.103 15.2412 22.0823 15.1955 22.0532 15.1551ZM11.9994 15.6445L8.6882 12.9951L11.9994 3.05946L15.3107 12.997L11.9994 15.6445ZM7.94945 12.832L3.22257 14.6676L10.8744 4.08134L7.94945 12.832ZM8.18382 13.5463L11.6244 16.312V21.4157L3.11195 15.5151L8.18382 13.5463ZM12.3744 16.312L15.8169 13.5501L20.9469 15.4738L12.3744 21.4082V16.312ZM16.0494 12.8432L13.1244 4.08134L20.7126 14.5813L16.0494 12.8432Z"
                        fill="true"
                      />
                    </svg>
                  </span>
                  Our Process
                </span>
                <h2 className="mt-15 mb-15">
                  How Accreditation Works at USAAC
                </h2>
                <p className="text-lg neutral-500 mb-25">
                  At USAAC, our accreditation journey is designed to support
                  growth, innovation, and excellence.
                  <br className="d-none d-lg-block" />
                  Institutions go through a structured and transparent
                  five-phase process:
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-question card-question-2"
                    style={{ borderColor: "#0055ff" }}
                  >
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>1. Inquiry & Eligibility Review:</h6>
                      <p className="text-md neutral-600">
                        Schools or programs submit an initial application. USAAC
                        assesses eligibility based on core criteria such as
                        institutional readiness, infrastructure, and commitment
                        to quality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-question card-question-2"
                    style={{ borderColor: "#0055ff" }}
                  >
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature2.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>2. Candidacy & Self-Study:</h6>
                      <p className="text-md neutral-600">
                        Eligible institutions become official Candidates for
                        Accreditation. They begin a guided self-assessment
                        aligned with USAAC standards, with access to training
                        materials and mentorship.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-question card-question-2"
                    style={{ borderColor: "#0055ff" }}
                  >
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature3.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>3. Peer Review Evaluation:</h6>
                      <p className="text-md neutral-600">
                        A certified review team (on-site or virtual) assesses
                        the institution's self-study report, conducts
                        interviews, and observes key practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="card-question card-question-2"
                    style={{ borderColor: "#0055ff" }}
                  >
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature4.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>4. Accreditation Decision:</h6>
                      <p className="text-md neutral-600">
                        The USAAC Board reviews all documentation and
                        recommendations before granting accreditation at one of
                        three levels.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="card-question card-question-2"
                    style={{ borderColor: "#0055ff" }}
                  >
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature5.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>5. Ongoing Improvement & Renewal:</h6>
                      <p className="text-md neutral-600">
                        Institutions are supported through interim reviews,
                        continuous improvement plans, and professional learning
                        opportunities. Accreditation is valid for One year.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6">
                  <div className="card-question card-question-2">
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature6.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>Fully-Managed Team</h6>
                      <p className="text-md neutral-600">
                        In general, analyses of famous case studies help your
                        clients, partners, and visitors have a better
                        understanding of what is going on in the market. Your
                        helpful advice can also be beneficial for audiences,
                        which keeps them coming back for more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card-question card-question-2">
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature7.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>Scalable Workforce</h6>
                      <p className="text-md neutral-600">
                        In general, analyses of famous case studies help your
                        clients, partners, and visitors have a better
                        understanding of what is going on in the market. Your
                        helpful advice can also be beneficial for audiences,
                        which keeps them coming back for more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card-question card-question-2">
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature8.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>Trained for Efficiency</h6>
                      <p className="text-md neutral-600">
                        In general, analyses of famous case studies help your
                        clients, partners, and visitors have a better
                        understanding of what is going on in the market. Your
                        helpful advice can also be beneficial for audiences,
                        which keeps them coming back for more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card-question card-question-2">
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/page/features/feature9.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="card-info">
                      <h6>Predictable Pricing</h6>
                      <p className="text-md neutral-600">
                        In general, analyses of famous case studies help your
                        clients, partners, and visitors have a better
                        understanding of what is going on in the market. Your
                        helpful advice can also be beneficial for audiences,
                        which keeps them coming back for more.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <section className="section-box box-choose-plan pb-0">
            <div className="container">
              <div className="d-flex align-items-end justify-content-between box-head-plan mb-30">
                <h2 className="heading-2 text-center">
                  🔹 Accreditation Levels
                  {/* <br className="d-none d-lg-block" /> That’s For You */}
                </h2>
                <div className="box-button-plan">
                  <p className="fs-5 text-center">
                    Each level includes a digital badge and certificate, plus
                    eligibility for public recognition and international
                    partnership programs.
                  </p>
                  <div className="box-buttons-feature-4">
                    {/* <Link className="btn btn-black" href="#">
                      Get a Quote
                      <svg
                        width={22}
                        height={8}
                        viewBox="0 0 22 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z"
                          fill="true"
                        />
                      </svg>
                    </Link>
                    <Link className="btn btn-learmore-2" href="#">
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_24_999)">
                            <path
                              d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z"
                              fill="#191919"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_24_999">
                              <rect width={13} height={13} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>{" "}
                      Learn More
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="box-choose-plan-inner">
                <div className="box-grid-plan">
                  <div className="grid-plan-left">
                    <h4 className="heading-4 neutral-0 fs-4">
                      USAAC recognizes schools and programs based on performance
                      and impact across three levels:
                    </h4>
                    <ul className="list-choose-plan mt-20">
                      <div className="card-button">
                        <Link
                          className="btn btn-get-started"
                          href="/accreditations"
                        >
                          Get started
                          <svg
                            width={23}
                            height={8}
                            viewBox="0 0 23 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z"
                              fill="true"
                            />
                          </svg>
                        </Link>
                      </div>
                    </ul>
                  </div>
                  <div className="grid-plan-right">
                    <div className="block-pricing">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="card-pricing card-pricing-2">
                            <div className="card-image justify-content-between">
                              <div className="card-icon-info">
                                <h4 className="heading-4">🟢 Standard</h4>
                                <p className="text-md neutral-600">Compliant</p>
                              </div>
                              {/* <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div> */}
                            </div>
                            <div className="card-lists">
                              <ul className="list-feature">
                                <li>
                                  {/* <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg> */}
                                  Meets baseline quality standards in education,
                                  safety, and governance.
                                </li>
                                {/* <li>
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  50+ Languages
                                </li>
                                <li>
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  Advance Editor Tool
                                </li> */}
                              </ul>
                            </div>
                            {/* <div className="card-price">
                              <div className="for-year display-year">
                                <span className="heading-2">$1,188</span>
                              </div>
                              <span className="text-sm neutral-500">
                                Upgrade anytime
                              </span>
                            </div> */}
                            {/* <div className="card-button">
                            <Link className="btn btn-get-started" href="#">
                              Get started
                              <svg
                                width={23}
                                height={8}
                                viewBox="0 0 23 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z"
                                  fill="true"
                                />
                              </svg>
                            </Link>
                          </div> */}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="card-pricing card-pricing-2">
                            <div className="card-image justify-content-between">
                              <div className="card-icon-info">
                                <h4 className="heading-4">🔵 Advanced</h4>
                                <p className="text-md neutral-600">
                                  Excellent Implementation
                                </p>
                              </div>
                              {/* <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/professional.png"
                                alt="Nivia"
                              />
                            </div> */}
                            </div>
                            <div className="card-lists">
                              <ul className="list-feature">
                                <li>
                                  {/* <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg> */}
                                  Demonstrates strong practices, measurable
                                  outcomes, and innovation.
                                </li>
                                {/* <li>
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  50+ Languages
                                </li>
                                <li>
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  Advance Editor Tool
                                </li> */}
                              </ul>
                            </div>
                            {/* <div className="card-price">
                              <div className="for-month display-month">
                                <span className="heading-2">$199</span>
                              </div>
                              <div className="for-month display-month">
                                <span className="text-sm neutral-500">
                                  Per person, billed monthly
                                </span>
                              </div>
                            </div> */}
                            {/* <div className="card-button">
                            <Link className="btn btn-get-started" href="#">
                              Get started
                              <svg
                                width={23}
                                height={8}
                                viewBox="0 0 23 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z"
                                  fill="true"
                                />
                              </svg>
                            </Link>
                          </div> */}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="card-pricing card-pricing-2">
                            <div className="card-image justify-content-between">
                              <div className="card-icon-info">
                                <h4 className="heading-4">🟣 Elite</h4>
                                <p className="text-md neutral-600">
                                  Global Leader
                                </p>
                              </div>
                              {/* <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/enterprise.png"
                                alt="Nivia"
                              />
                            </div> */}
                            </div>
                            <div className="card-lists">
                              <ul className="list-feature">
                                <li>
                                  {/* <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg> */}
                                  Recognized as a leader in innovation, impact,
                                  and global education benchmarks.
                                </li>
                                {/* <li>
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  50+ Languages
                                </li>
                                <li>
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_15_115)">
                                      <path
                                        d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                        fill="url(#paint0_linear_15_115)"
                                      />
                                      <path
                                        d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                        stroke="#191919"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_15_115"
                                        x1="26.9286"
                                        y1="3.85184"
                                        x2="-2.09554"
                                        y2="5.87316"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#22D1EE" />
                                        <stop offset={1} stopColor="#C5FF41" />
                                      </linearGradient>
                                      <clipPath id="clip0_15_115">
                                        <rect
                                          width={26}
                                          height={26}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  Advance Editor Tool
                                </li> */}
                              </ul>
                            </div>
                            {/* <div className="card-price">
                              <div className="for-month display-month">
                                <span className="heading-2">$399</span>
                              </div>
                              <div className="for-month display-month">
                                <span className="text-sm neutral-500">
                                  Per person, billed monthly
                                </span>
                              </div>
                            </div> */}
                            {/* <div className="card-button">
                            <Link className="btn btn-get-started" href="#">
                              Get started
                              <svg
                                width={23}
                                height={8}
                                viewBox="0 0 23 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z"
                                  fill="true"
                                />
                              </svg>
                            </Link>
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-content-detail">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 order-lg-last">
                  <div className="head-detail">
                    {/* <p className="text-md neutral-500 mb-12">
                      24 October 2023, by
                      <Link className="text-md-bold neutral-1000" href="#">
                        Admin
                      </Link>
                    </p> */}
                    <h3 className="mb-12">🔹 Peer Review Process</h3>
                    {/* <div className="box-button-tags">
                      <Link className="btn btn-tag-2" href="#">
                        Temporary
                      </Link>
                      <Link className="btn btn-tag-2" href="#">
                        Full Time
                      </Link>
                      <Link className="btn btn-tag-2" href="#">
                        Remote
                      </Link>
                    </div> */}
                  </div>
                  <div className="main-detail">
                    <div className="title-with-number">
                      <span>1</span>Overview
                    </div>
                    <p>
                      USAAC's Peer Review process ensures fair and professional
                      evaluation by experts with deep educational and leadership
                      experience.
                    </p>
                    <div className="title-with-number">
                      <span>2</span>Key Features
                    </div>
                    <p>
                      • Reviewers are matched based on school type and focus
                      (e.g., STEM, multilingual, inclusion).
                    </p>
                    {/* <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit,
                    </p> */}
                    <div className="title-with-number">
                      <span>3</span>Evaluation includes:
                    </div>
                    <ul>
                      <li>Self-study validation</li>
                      <li>Interviews with leadership, faculty, students</li>
                      <li>Observation of teaching and operations</li>
                      {/* <li>
                        Maintain quality of the design process and ensure that
                        when designs are translated into code they accurately
                        reflect the design specifications.
                      </li>
                      <li>
                        Sketch, wireframe, build IA, motion design, and run
                        usability tests
                      </li>
                      <li>
                        Design pixel perfect responsive UI’s and understand that
                        adopting common interface pattern is better for UX than
                        reinventing the wheel
                      </li>
                      <li>
                        Ensure content strategy and design are perfectly in-sync
                      </li>
                      <li>
                        Give and receive design critique to help constantly
                        refine and push our work
                      </li> */}
                    </ul>
                    <div className="title-with-number">
                      <span>4</span>Final Report
                    </div>
                    <p>
                      • Final report includes strengths, growth areas, and a
                      recommended level of accreditation.
                    </p>
                    {/* <div className="title-with-number">
                      <span>3</span>Required Skills
                    </div>
                    <ul>
                      <li>
                        You’ve been designing digital products for 2+ years.
                      </li>
                      <li>
                        A portfolio that exemplifies strong visual design and a
                        focus on defining the user experience.
                      </li>
                      <li>
                        You’ve proudly shipped and launched several products.
                      </li>
                      <li>
                        You have some past experience working in an agile
                        environment – Think two-week sprints.
                      </li>
                      <li>
                        Experience effectively presenting and communicating your
                        design decisions to clients and team members
                      </li>
                      <li>
                        Up-to-date knowledge of design software like Figma,
                        Sketch etc.
                      </li>
                    </ul>
                    <div className="title-with-number">
                      <span>4</span>Benefits
                    </div>
                    <ul>
                      <li>We are a remote-first company.</li>
                      <li>
                        100% company-paid health insurance premiums for you your
                        dependents
                      </li>
                      <li>Vacation stipend</li>
                      <li>Unlimited paid vacation and paid company holidays</li>
                      <li>Monthly wellness/gym stipend</li>
                    </ul> */}
                    {/* <div className="box-button-sidebar mt-30">
                      <div className="w-25">
                        <Link className="btn btn-black btn-rounded" href="#">
                          Apply For Job
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={8}
                            viewBox="0 0 22 8"
                            fill="none"
                          >
                            <path
                              d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z"
                              fill="true"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-3 order-lg-first">
                  <div className="sidebar">
                    {/* <div className="box-sidebar-rounded">
                      <div className="sidebar-head">
                        <h6>Job Overview</h6>
                      </div>
                      <div className="sidebar-content">
                        <div className="item-line">
                          <div className="text-date-post text-16-bold">
                            Date Posted:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            Posted 1 hours ago
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-date-expire text-16-bold">
                            Expiration date:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            April 06, 2021
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-location text-16-bold">
                            Location:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            London, UK
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-salary text-16-bold">Salary</div>
                          <p className="text-date-post-value text-md neutral-500">
                            $35k - $45k
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-date-post text-16-bold">
                            Date Posted:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            Posted 1 hours ago
                          </p>
                        </div>
                        <div className="box-button-sidebar">
                          {" "}
                          <Link className="btn btn-black btn-rounded" href="#">
                            Apply For Job
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={22}
                              height={8}
                              viewBox="0 0 22 8"
                              fill="none"
                            >
                              <path
                                d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z"
                                fill="true"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    <div className="box-sidebar-normal">
                      <Link href="#">
                        <img
                          src="/assets/imgs/page/job/peer-review-performance-evaluation-feedback-loop-system-stylized-flat-illustration-process-features-simplified-figures-389228880-removebg-preview - Edited.png"
                          alt="Nivia"
                          style={{
                            borderRadius: "20px",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-section-5 pt-40 pb-40">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 mb-40">
                  <div className="box-sec5-img-top">
                    {/* <img
                      className="shape-1"
                      alt="Nivia"
                      src="/assets/imgs/page/homepage6/appointment-booking-design.png"
                    /> */}
                    <img
                      className="shape-3"
                      alt="Nivia"
                      src="/assets/imgs/page/homepage6/appointment-booking-design.png"
                    />
                  </div>
                  <div className="box-sec5-img-bottom">
                    {/* <img
                      className="shape-3"
                      alt="Nivia"
                      src="/assets/imgs/page/homepage6/chart3.png"
                    /> */}
                    {/* <img
                      className="shape-1"
                      alt="Nivia"
                      src="/assets/imgs/page/homepage6/chart4.png"
                    /> */}
                  </div>
                </div>
                <div className="col-lg-7 mb-40">
                  <div className="box-info-section5">
                    <span className="text-logo">
                      USA -
                      <span className="neutral-500">
                        {" "}
                        Accreditation Council
                      </span>
                    </span>
                    <h2 className="display-2 text-linear-3 mb-65">
                      🔹 Application Timeline
                    </h2>
                    <div className="box-list-steps box-mw-steps">
                      <div className="item-step">
                        <div className="step-number">
                          <span>1</span>
                        </div>
                        <div className="step-info">
                          <h3>Step 1: Inquiry Submission</h3>
                          <p className="text-lg">
                            <b className="fw-bold">Estimated Duration:</b> 1
                            week
                          </p>
                        </div>
                      </div>
                      <div className="item-step">
                        <div className="step-number">
                          <span>2</span>
                        </div>
                        <div className="step-info">
                          <h3>Step 2: Eligibility Review</h3>
                          <p className="text-lg">
                            <b className="fw-bold">Estimated Duration:</b> 2
                            weeks
                          </p>
                        </div>
                      </div>
                      <div className="item-step">
                        <div className="step-number">
                          <span>3</span>
                        </div>
                        <div className="step-info">
                          <h3>Step 3: Self-Study & Candidacy</h3>
                          <p className="text-lg">
                            <b className="fw-bold">Estimated Duration:</b> 2–3
                            months (based on school readiness)
                          </p>
                        </div>
                      </div>
                      <div className="item-step">
                        <div className="step-number">
                          <span>4</span>
                        </div>
                        <div className="step-info">
                          <h3>Step 4: Peer Review</h3>
                          <p className="text-lg">
                            <b className="fw-bold">Estimated Duration:</b> 1
                            week
                          </p>
                        </div>
                      </div>
                      <div className="item-step">
                        <div className="step-number">
                          <span>5</span>
                        </div>
                        <div className="step-info">
                          <h3>Step 5: Accreditation Decision</h3>
                          <p className="text-lg">
                            <b className="fw-bold">Estimated Duration:</b> 2–3
                            weeks
                          </p>
                        </div>
                      </div>
                      <div className="item-step">
                        <div className="step-number">
                          <span>🔁</span>
                        </div>
                        <div className="step-info">
                          <h3 className="fs-2">
                            Annual Update & Mid-Cycle Review
                          </h3>
                          <p className="text-lg">Ongoing after accreditation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="display-2 text-linear-3 mb-65">
                  🔹 Fast-track options available for institutions already
                  accredited by recognized agencies.
                </h2>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
