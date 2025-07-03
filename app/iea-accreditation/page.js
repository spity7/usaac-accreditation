"use client";
import LogoTicker from "@/components/elements/LogoTicker";
import Layout from "@/components/layout/Layout";
import Team2Slider from "@/components/slider/Team2Slider";
import Link from "next/link";
import { useState } from "react";
import VideoPopup from "@/components/elements/VideoPopup";

export default function Iea() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <section className="section-box">
          <div className="banner-hero hero-4">
            <div className="banner-inner pt-50">
              <div className="container">
                <Link className="btn btn-brand-5" href="#">
                  USAAC
                </Link>
                <h1 className="display-2 mb-40 mt-15 neutral-0">
                  📌 Innovation in Education
                  <br />
                  (IEA)
                </h1>
                <div className="box-buttons justify-content-center">
                  <Link
                    className="btn btn-brand-4-medium mr-15 hover-up"
                    href="/iea-questions"
                  >
                    Apply Now
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                  {/* <VideoPopup /> */}
                </div>
                <div className="text-center box-image-banner">
                  <img
                    src="/assets/imgs/page/homepage2/banner.png"
                    alt="Nivia"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box box-choose-plan pt-60">
          <div className="container">
            <div className="d-flex align-items-end justify-content-between box-head-plan mb-30">
              <h2 className="heading-2 text-center">
                🔹 Accreditation Levels
                {/* <br className="d-none d-lg-block" /> That’s For You */}
              </h2>
              <div className="box-button-plan">
                <p className="fs-5 text-center">
                  Edvisors’ IEA Accreditation is structured into three levels,
                  ensuring schools progressively enhance their innovation-driven
                  education strategies.
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
                {/* <div className="grid-plan-left">
                  <h4 className="heading-4 neutral-0">Choose your plan</h4>
                  <ul className="list-choose-plan">
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
                  </ul>
                </div> */}
                <div className="grid-plan-right">
                  <div className="block-pricing">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="card-pricing card-pricing-2">
                          <div className="card-image justify-content-between">
                            <div className="card-icon-info">
                              <h4 className="heading-3">Standard</h4>
                              <p className="text-md neutral-600">(Compliant)</p>
                            </div>
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div>
                          </div>
                          <div className="card-lists">
                            <h4 className="heading-6">Requirements:</h4>
                            <ul className="list-feature">
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
                                Project-Based Learning (PBL)
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
                                Innovation Hubs
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
                                Technology Integration
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
                                Teacher Development
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
                                Basic Leadership Programs
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
                                Collaborative Learning
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
                                Assessment
                              </li>
                            </ul>
                          </div>
                          <div className="card-price">
                            {/* {activeIndex === 1 && (
                              <div className="for-month display-month">
                                <span className="heading-2">$99</span>
                              </div>
                            )}
                            {activeIndex === 2 && (
                              <div className="for-year display-year">
                                <span className="heading-2">$1,188</span>
                              </div>
                            )} */}
                            <span className="text-sm neutral-500">
                              💡 For schools that have established fundamental
                              innovation practices.
                            </span>
                          </div>
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
                              <h4 className="heading-3">Advanced</h4>
                              <p className="text-md neutral-600">
                                (Excellence in Innovation)
                              </p>
                            </div>
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div>
                          </div>
                          <div className="card-lists">
                            <h4 className="heading-6">Requirements:</h4>
                            <ul className="list-feature">
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
                                Entrepreneurship & Startup Education
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
                                Real-World Problem Solving
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
                                AI-Driven Personalized Learning
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
                                Cross-Disciplinary Integration
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
                                Community & Industry Partnerships
                              </li>
                            </ul>
                          </div>
                          <div className="card-price">
                            {/* {activeIndex === 1 && (
                              <div className="for-month display-month">
                                <span className="heading-2">$99</span>
                              </div>
                            )}
                            {activeIndex === 2 && (
                              <div className="for-year display-year">
                                <span className="heading-2">$1,188</span>
                              </div>
                            )} */}
                            <span className="text-sm neutral-500">
                              🚀 For schools that integrate advanced
                              entrepreneurship and real-world problem-solving
                              into their curriculum.
                            </span>
                          </div>
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
                              <h4 className="heading-3">Elite</h4>
                              <p className="text-md neutral-600">
                                (Global Leadership in Innovation)
                              </p>
                            </div>
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div>
                          </div>
                          <div className="card-lists">
                            <h4 className="heading-6">Requirements:</h4>
                            <ul className="list-feature">
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
                                Global Collaboration
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
                                Innovation Showcases
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
                                Cutting-Edge AI & Emerging Tech
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
                                Industry-Aligned Curriculum
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
                                Student-Led Social Enterprises
                              </li>
                            </ul>
                          </div>
                          <div className="card-price">
                            {/* {activeIndex === 1 && (
                              <div className="for-month display-month">
                                <span className="heading-2">$99</span>
                              </div>
                            )}
                            {activeIndex === 2 && (
                              <div className="for-year display-year">
                                <span className="heading-2">$1,188</span>
                              </div>
                            )} */}
                            <span className="text-sm neutral-500">
                              🏆 For schools recognized as world leaders in
                              educational innovation and industry partnerships.
                            </span>
                          </div>
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
        <section className="section-box wow animate__animated animate__fadeIn box-case-study-2 pt-0 pb-40">
          <div className="container">
            <div className="text-center">
              <Link className="btn btn-brand-4-sm" href="#">
                Process
              </Link>
              <h2 className="mb-35 mt-15">
                Certification Process
                {/* <br className="d-none d-lg-block" />
                us stand out */}
              </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  src="/assets/imgs/page/homepage2/img-case.png"
                  alt="Nivia"
                />
              </div>
              <div className="col-lg-7">
                <div className="box-info-casestudy">
                  {/* <h3 className="mb-40">
                    Find out everything about creating
                    <br className="d-none d-lg-block" />a business model.
                  </h3> */}
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">1</span>Application
                            Submission
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Schools apply through the Edvisors portal with
                            required documentation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">2</span>Self-Assessment
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Schools complete an innovation readiness survey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">3</span>Pre-Evaluation
                            Review
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Edvisors’ accreditation team assesses alignment with
                            IEA criteria.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">4</span>Site Visit /
                            Virtual Evaluation
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Experts conduct on-site or virtual inspections and
                            interviews.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">5</span>Final Decision
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Schools receive accreditation status (, 2, or Best
                            Practices).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">6</span>Annual Review
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Schools maintain accreditation through yearly
                            assessments and innovation reports.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box wow animate__animated animate__fadeIn box-our-features-5 pt-60">
          <div className="container">
            <div className="text-center mb-70">
              <Link className="btn btn-brand-5" href="#">
                Key Benifits
              </Link>
              <h2 className="mb-25 mt-15 neutral-0">
                Key Benefits of IEA Accreditation
                {/* <br className="d-none d-lg-block" />
                your customers */}
              </h2>
              {/* <p className="text-md neutral-500 mb-55">
                In general, analyses of famous case studies help your clients,
                partners, and visitors have a better
                <br className="d-none d-lg-block" />
                understanding of what is going on in the market. Your helpful
                advice can also be beneficial for audiences,
                <br className="d-none d-lg-block" />
                which keeps them coming back for more.
              </p> */}
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/web.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6>✅ Global Recognition</h6>
                    <p className="text-sm neutral-500">
                      Schools gain international validation for their innovation
                      programs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/social.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6>✅ Industry Connections</h6>
                    <p className="text-sm neutral-500">
                      Facilitates partnerships with leading technology firms and
                      education experts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/engine.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6>✅ Student Impact</h6>
                    <p className="text-sm neutral-500">
                      Equips learners with future-proof skills in
                      problem-solving, entrepreneurship, and leadership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-sm-1"></div>
              <div className="col-lg-5 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/security.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6>✅ Funding & Grants Access</h6>
                    <p className="text-sm neutral-500">
                      Accredited schools gain opportunities for innovation
                      funding and research grants.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img src="/assets/imgs/page/homepage2/3d.svg" alt="Nivia" />
                  </div> */}
                  <div className="card-info">
                    <h6>✅ Competitive Advantage</h6>
                    <p className="text-sm neutral-500">
                      Attracts top-tier students and faculty passionate about
                      innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-center mt-20">
              <p className="text-md neutral-0">
                Challenges are just opportunities in disguise
                <Link className="brand-4" href="#">
                  Take the challenge!
                </Link>
              </p>
            </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
