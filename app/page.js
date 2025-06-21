import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home5/Section1";
import Link from "next/link";
import Section7 from "@/components/sections/home4/Section7";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <Section1 />
        <section className="section-box box-prepared-section pb-0">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 mb-30">
                <h2 className="heading-2">
                  Leading Quality Education Worldwide
                </h2>
              </div>
              <div className="col-lg-6 mb-30">
                <h6 className="neutral-500">
                  Since 2010, USAAC has partnered with educational leaders
                  worldwide to foster innovation, inclusion, and quality in
                  learning environments.
                </h6>
              </div>
            </div>
            <div className="row mt-45">
              {/* <div className="col-lg-4">
                  <div className="card-feature-2 card-feature-list">
                    <div className="card-image">
                      <img src="/assets/imgs/page/homepage3/marketing.svg" />
                    </div>
                    <div className="card-info">
                      <Link href="#">
                        <h3 className="text-22-bold">Our philosophy</h3>
                        <p className="text-lg neutral-500">
                          We also know that with all our wellness initiatives,
                          customer value and service, our doors to the
                          community.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div> */}
              <div className="col-lg-6">
                <div className="card-feature-2 card-feature-list">
                  <div className="card-image">
                    <img src="/assets/imgs/page/homepage3/digital.svg" />
                  </div>
                  <div className="card-info">
                    <div>
                      <h3 className="text-22-bold">Our Mission</h3>
                      <p className="text-lg neutral-500">
                        To elevate educational excellence globally by providing
                        innovative, future-ready, and ethically grounded
                        accreditation services that empower institutions to meet
                        the evolving demands of 21st-century learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-feature-2 card-feature-list">
                  <div className="card-image">
                    <img src="/assets/imgs/page/homepage3/product.svg" />
                  </div>
                  <div className="card-info">
                    <div>
                      <h3 className="text-22-bold">Our Vision</h3>
                      <p className="text-lg neutral-500">
                        To become the world’s most trusted authority in
                        transforming education through holistic accreditation
                        standards that nurture innovation, inclusion, and
                        international competitiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box box-enjoy">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-7 mb-40">
                <h2 className="heading-1 text-linear-3 text-center">
                  Our Accreditations
                </h2>
              </div>
              <div className="col-lg-5 mb-40">
                <div className="box-info-num">
                  <span className="text-linear-3 text-88-semibold">10+</span>
                  <p className="text-md neutral-0">
                    Specialized accreditation programs spanning innovation,
                    future-ready learning, global education, and sustainability
                    — designed to meet the evolving needs of modern
                    institutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-35">
              <div className="col-lg-4 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="/iea-accreditation">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="/iea-accreditation">
                      <h5 className="heading-5">
                        Innovation in Education (IEA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      Recognizing schools that foster creativity, leadership,
                      and innovative learning through cutting-edge educational
                      practices.
                    </p>
                    <Link
                      className="btn btn-learmore"
                      href="/iea-accreditation"
                    >
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        AI & Digital Learning (AIDA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The AIDA framework provides a structured accreditation
                      system for schools transitioning toward AI-powered and
                      digitally enhanced learning environments.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">STEAM & Robotics (SRA)</h5>
                    </Link>
                    <p className="text-lg">
                      The SRA framework ensures that schools provide
                      high-quality STEAM education, preparing students for
                      future careers in technology, engineering, and innovation.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        Future Skills & Career Readiness (FSCA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The FSCA framework ensures that schools equip students
                      with future-ready skills, career preparedness, and
                      entrepreneurial mindsets essential for success in an
                      evolving global workforce.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        Leadership & Character Development (LCA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The LCA framework ensures that schools foster leadership
                      skills, ethical decision-making, community engagement, and
                      personal growth to prepare students for success in life
                      and careers.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        Multilingual Education (MEA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The MEA framework ensures that schools provide
                      high-quality multilingual education that enhances
                      cognitive development, cross-cultural understanding, and
                      global readiness.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        Inclusive & Adaptive Learning (ILA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The ILA framework ensures that schools provide
                      personalized learning experiences, accessibility
                      accommodations, and specialized support to create
                      equitable educational opportunities for all students.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        Global Academic Excellence (GAE)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The GAE framework ensures that schools meet high academic
                      standards, foster continuous improvement, and implement
                      global best practices in education.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        Cybersecurity & Digital Ethics (CDA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The CDA framework ensures that schools develop strong
                      cybersecurity policies, digital safety education, and
                      ethical technology use practices to create a secure and
                      responsible digital learning environment.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div
                  className="card-enjoy"
                  style={{
                    border: "1px solid rgb(179, 255, 0)",
                  }}
                >
                  <div className="card-image">
                    <Link href="#">
                      <img
                        src="/assets/imgs/page/homepage5/ideas.png"
                        alt="Nivia"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="heading-5">
                        Sustainable & Green Schools (SGA)
                      </h5>
                    </Link>
                    <p className="text-lg">
                      The SGA framework ensures that schools develop
                      eco-friendly practices, sustainability education, and
                      climate resilience programs, preparing students for a
                      sustainable future.
                    </p>
                    <Link className="btn btn-learmore" href="#">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={38}
                          height={38}
                          rx={19}
                          fill="url(#paint0_linear_15_1041)"
                        />
                        <g clipPath="url(#clip0_15_1041)">
                          <path
                            d="M23.6557 16.8139L14.72 25.7497L13.252 24.2817L22.1866 15.3459H14.3119V13.2695H25.7321V24.6897H23.6557V16.8139Z"
                            fill="true"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_15_1041"
                            x1="39.3571"
                            y1="5.62961"
                            x2="-3.06271"
                            y2="8.58385"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#22D1EE" />
                            <stop offset={1} stopColor="#C5FF41" />
                          </linearGradient>
                          <clipPath id="clip0_15_1041">
                            <rect
                              width={13}
                              height={13}
                              fill="white"
                              transform="translate(13 13)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box box-choose-plan pt-60">
          <div className="container">
            <div className="d-flex align-items-end justify-content-between box-head-plan mb-65">
              <h2 className="heading-2 text-center">
                🔹 Accreditation Levels
                {/* <br className="d-none d-lg-block" /> That’s For You */}
              </h2>
              <div className="box-button-plan">
                <p className="fs-6">
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
                  <h4 className="heading-4 neutral-0">
                    USAAC recognizes schools and programs based on performance
                    and impact across three levels:
                  </h4>
                  {/* <ul className="list-choose-plan">
                      <li
                        className={activeIndex === 1 ? "active" : ""}
                        onClick={() => handleOnClick(1)}
                      >
                        <label className="radio-container">
                          <input
                            className="cb-plan"
                            type="radio"
                            name="chooseplan"
                            defaultChecked="checked"
                          />
                          <span className="checkmark" />
                          Yearly billing
                        </label>
                        <span className="text-sm neutral-200">
                          Save 25% - 30 days money back
                        </span>
                      </li>
                      <li
                        className={activeIndex === 2 ? "active" : ""}
                        onClick={() => handleOnClick(2)}
                      >
                        <label className="radio-container">
                          <input
                            className="cb-plan"
                            type="radio"
                            name="chooseplan"
                          />
                          <span className="checkmark" />
                          Monthly billing
                        </label>
                        <span className="text-sm neutral-200">
                          Save 35% - 30 days money back
                        </span>
                      </li>
                    </ul> */}
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
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div>
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
                          <div className="card-button">
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
                          </div>
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
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/professional.png"
                                alt="Nivia"
                              />
                            </div>
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
                          <div className="card-button">
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
                          </div>
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
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/enterprise.png"
                                alt="Nivia"
                              />
                            </div>
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
                          <div className="card-button">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Section7 />
        <section className="section-box box-partners box-partners-small">
          <div className="container-partner">
            <div
              className="carouselTicker6 carouselTicker_vertical"
              id="slide-partners"
            >
              <Marquee
                // style={{ width: "auto" }}
                pauseOnHover={true}
                direction="left"
                className="carouselTicker__list list-partners"
              >
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Innovation in Education (IEA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>AI & Digital Learning (AIDA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>STEAM & Robotics (SRA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Future Skills & Career Readiness (FSCA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Leadership & Character Development (LCA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Multilingual Education (MEA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Inclusive & Adaptive Learning (ILA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Global Academic Excellence (GAE)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Cybersecurity & Digital Ethics (CDA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link href="#">
                    <span>Sustainable & Green Schools (SGA)</span>
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
                        fill="true"
                      />
                      <path
                        d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                </li>
              </Marquee>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
