"use client";
import LogoTicker from "@/components/elements/LogoTicker";
import Layout from "@/components/layout/Layout";
import Team2Slider from "@/components/slider/Team2Slider";
import Link from "next/link";
import { useState } from "react";
import VideoPopup from "@/components/elements/VideoPopup";

export default function Sga() {
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
                  📌 Sustainable & Green Schools Accreditation
                  <br />
                  (SGA)
                </h1>
                <div className="box-buttons justify-content-center">
                  <Link
                    className="btn btn-brand-4-medium mr-15 hover-up"
                    href="/sga-questions"
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
                  Schools implementing sustainability, climate education, and
                  eco-friendly initiatives to foster environmental
                  responsibility and green innovation.
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
                              {/* <p className="text-md neutral-600">(Compliant)</p> */}
                            </div>
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div>
                          </div>
                          <div className="card-lists">
                            <h4 className="heading-6">Features:</h4>
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
                                Recycling programs and waste reduction policies.
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
                                Water and energy conservation measures.
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
                                Integration of environmental awareness into the
                                curriculum.
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
                                School green space or garden project.
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
                              </li> */}
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
                              💡 Basic recycling and energy-saving initiatives.
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
                              {/* <p className="text-md neutral-600">
                                (Excellence in Innovation)
                              </p> */}
                            </div>
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div>
                          </div>
                          <div className="card-lists">
                            <h4 className="heading-6">Features:</h4>
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
                                On-campus renewable energy sources (solar
                                panels, wind turbines).
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
                                Water harvesting & waste management systems.
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
                                Green buildings & energy-efficient
                                infrastructure.
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
                                Sustainability education integrated into
                                multiple subjects.
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
                                Community & Industry Partnerships
                              </li> */}
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
                              🚀 Uses renewable energy, green infrastructure,
                              and sustainability programs.
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
                              {/* <p className="text-md neutral-600">
                                (Global Leadership in Innovation)
                              </p> */}
                            </div>
                            <div className="card-icon">
                              <img
                                src="/assets/imgs/page/homepage5/basic.png"
                                alt="Nivia"
                              />
                            </div>
                          </div>
                          <div className="card-lists">
                            <h4 className="heading-6">Features:</h4>
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
                                Carbon-neutral or net-zero school policies.
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
                                AI-powered energy monitoring & optimization.
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
                                Research-driven sustainability innovations led
                                by students.
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
                                Global collaborations on climate action &
                                sustainability.
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
                                Student-Led Social Enterprises
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
                                Recognized innovation Model
                              </li> */}
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
                              🏆 Globally recognized as a leader in
                              sustainability and environmental impact.
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
        <section className="section-box wow animate__animated animate__fadeIn box-preparing-3 p-40">
          <div className="container">
            <div className="text-center">
              <h2 className="neutral-0 mb-20">
                🔹 Sga Accreditation Pillars
                {/* <br className="d-none d-lg-block" />
                We Provide Truly Prominent IT Solutions */}
              </h2>
              {/* <p className="text-lg neutral-700">
                Nivia is an independent web design studio with a rich history.
                Founded in 1999, it
                <br className="d-none d-lg-block" />
                gathered the best web designers developers.
              </p> */}
            </div>
            <div className="row mt-90">
              <div className="col-lg-6 col-md-6">
                <div className="card-preparing-2">
                  <Link className="card-image" href="#">
                    <svg
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1486)">
                        <path
                          d="M32.3625 5.44053L27.0625 0.1374C27.019 0.0938406 26.9673 0.0592859 26.9104 0.0357102C26.8535 0.0121345 26.7925 0 26.7309 0C26.6694 0 26.6084 0.0121345 26.5515 0.0357102C26.4946 0.0592859 26.4429 0.0938406 26.3994 0.1374L25.0706 1.46302C24.8776 1.65689 24.7641 1.91599 24.7526 2.18932C24.741 2.46266 24.8322 2.73042 25.0081 2.9399L21.3675 4.3399C21.3051 4.36404 21.2485 4.40122 21.2017 4.44897C21.1548 4.49672 21.1186 4.55393 21.0956 4.61678L19.6581 8.5624H2.21875C1.76311 8.56306 1.32633 8.74436 1.00414 9.06654C0.681956 9.38873 0.500661 9.82551 0.5 10.2811L0.5 30.2812C0.500661 30.7368 0.681956 31.1736 1.00414 31.4958C1.32633 31.8179 1.76311 31.9992 2.21875 31.9999H22.2188C22.6744 31.9992 23.1112 31.8179 23.4334 31.4958C23.7555 31.1736 23.9368 30.7368 23.9375 30.2812V12.8436L27.8831 11.403C27.946 11.38 28.0032 11.3439 28.0509 11.297C28.0987 11.2501 28.1359 11.1936 28.16 11.1312L29.5625 7.4924C29.7718 7.66877 30.0396 7.7602 30.3131 7.74863C30.5866 7.73705 30.8457 7.62332 31.0394 7.4299L32.3625 6.10365C32.4061 6.06012 32.4406 6.00843 32.4642 5.95154C32.4878 5.89465 32.4999 5.83367 32.4999 5.77209C32.4999 5.71051 32.4878 5.64953 32.4642 5.59264C32.4406 5.53574 32.4061 5.48406 32.3625 5.44053ZM18.71 11.9999C18.7643 12.1314 18.8439 12.251 18.9444 12.3518L20.1488 13.5555C20.2493 13.6561 20.3687 13.7359 20.5 13.7905V28.5624H3.9375V11.9999H18.71ZM23 30.2812C22.9997 30.4882 22.9173 30.6868 22.7708 30.8332C22.6244 30.9797 22.4258 31.0621 22.2188 31.0624H2.21875C2.01165 31.0621 1.81313 30.9797 1.66669 30.8332C1.52025 30.6868 1.43783 30.4882 1.4375 30.2812V10.2811C1.43783 10.0741 1.52025 9.87553 1.66669 9.72909C1.81313 9.58265 2.01165 9.50023 2.21875 9.4999H19.3125L18.7425 11.0624H3.46875C3.34443 11.0624 3.2252 11.1118 3.13729 11.1997C3.04939 11.2876 3 11.4068 3 11.5311V29.0312C3 29.1555 3.04939 29.2747 3.13729 29.3626C3.2252 29.4505 3.34443 29.4999 3.46875 29.4999H20.9688C21.0931 29.4999 21.2123 29.4505 21.3002 29.3626C21.3881 29.2747 21.4375 29.1555 21.4375 29.0312V13.758L23 13.1874V30.2812ZM27.3612 10.5974L20.9756 12.9286C20.9476 12.939 20.9173 12.9411 20.8881 12.9347C20.859 12.9282 20.8323 12.9136 20.8113 12.8924L20.5406 12.6249L23.7906 9.3749C24.1529 9.57708 24.576 9.64143 24.9819 9.55607C25.3879 9.47072 25.7493 9.24142 25.9994 8.91048C26.2496 8.57955 26.3716 8.16931 26.343 7.75546C26.3143 7.34162 26.137 6.95209 25.8436 6.65876C25.5503 6.36543 25.1608 6.18808 24.7469 6.15945C24.3331 6.13082 23.9229 6.25282 23.5919 6.50296C23.261 6.7531 23.0317 7.11449 22.9463 7.52045C22.861 7.92641 22.9253 8.34954 23.1275 8.71177L19.8775 11.9618L19.6075 11.6874C19.5863 11.6664 19.5717 11.6397 19.5652 11.6105C19.5588 11.5814 19.5609 11.551 19.5713 11.523L21.9025 5.1374L25.7281 3.66615L28.8325 6.77052L27.3612 10.5974ZM24.0763 7.31865C24.1855 7.20941 24.3247 7.13502 24.4763 7.1049C24.6278 7.07477 24.7849 7.09025 24.9276 7.14939C25.0704 7.20853 25.1924 7.30866 25.2782 7.43713C25.364 7.5656 25.4099 7.71664 25.4099 7.87115C25.4099 8.02566 25.364 8.1767 25.2782 8.30517C25.1924 8.43364 25.0704 8.53377 24.9276 8.59291C24.7849 8.65205 24.6278 8.66753 24.4763 8.6374C24.3247 8.60728 24.1855 8.53289 24.0763 8.42365C24.0033 8.35131 23.9454 8.26525 23.9059 8.17042C23.8664 8.07559 23.8461 7.97388 23.8461 7.87115C23.8461 7.76842 23.8664 7.66671 23.9059 7.57188C23.9454 7.47705 24.0033 7.39099 24.0763 7.31865ZM30.375 6.76615C30.3605 6.78068 30.3433 6.79221 30.3244 6.80008C30.3055 6.80795 30.2852 6.812 30.2647 6.812C30.2442 6.812 30.2239 6.80795 30.205 6.80008C30.186 6.79221 30.1688 6.78068 30.1544 6.76615L25.7337 2.34677C25.7192 2.33231 25.7077 2.31512 25.6998 2.29619C25.6919 2.27726 25.6879 2.25696 25.6879 2.23646C25.6879 2.21596 25.6919 2.19566 25.6998 2.17673C25.7077 2.1578 25.7192 2.14061 25.7337 2.12615L26.7281 1.13178L31.3681 5.77177L30.375 6.76615Z"
                          fill="true"
                        />
                        <path
                          d="M8.01854 21.6569C8.04618 21.7555 8.10529 21.8424 8.18686 21.9043C8.26842 21.9662 8.36799 21.9998 8.47041 22H15.9704C16.0728 21.9998 16.1724 21.9662 16.254 21.9043C16.3355 21.8424 16.3946 21.7555 16.4223 21.6569L17.6723 17.1569C17.6961 17.0711 17.6951 16.9803 17.6692 16.8951C17.6433 16.8099 17.5937 16.7338 17.5261 16.6758C17.4586 16.6177 17.3759 16.5801 17.2878 16.5674C17.1997 16.5546 17.1098 16.5672 17.0285 16.6037L14.2742 17.8381L12.6267 15.0431C12.5852 14.9729 12.5262 14.9147 12.4554 14.8742C12.3846 14.8338 12.3045 14.8125 12.2229 14.8125C12.1414 14.8125 12.0612 14.8338 11.9904 14.8742C11.9196 14.9147 11.8606 14.9729 11.8192 15.0431L10.1692 17.8381L7.41479 16.6037C7.33356 16.5672 7.24363 16.5546 7.1555 16.5674C7.06738 16.5801 6.98471 16.6177 6.91717 16.6758C6.84963 16.7338 6.80002 16.8099 6.77414 16.8951C6.74826 16.9803 6.74718 17.0711 6.77104 17.1569L8.01854 21.6569ZM10.1654 18.865C10.2704 18.9124 10.3891 18.9194 10.499 18.8848C10.6088 18.8503 10.7021 18.7764 10.761 18.6775L12.2204 16.205L13.6798 18.6775C13.7388 18.7763 13.8321 18.8501 13.9419 18.8846C14.0517 18.9192 14.1704 18.9122 14.2754 18.865L16.5017 17.865L15.6142 21.0625H8.82666L7.93916 17.8669L10.1654 18.865Z"
                          fill="true"
                        />
                        <path
                          d="M15.9688 22.9375H8.46875C8.34443 22.9375 8.2252 22.9869 8.13729 23.0748C8.04939 23.1627 8 23.2819 8 23.4062V24.6562C8.00033 24.9462 8.11567 25.2242 8.32072 25.4293C8.52576 25.6343 8.80377 25.7497 9.09375 25.75H15.3438C15.6337 25.7497 15.9117 25.6343 16.1168 25.4293C16.3218 25.2242 16.4372 24.9462 16.4375 24.6562V23.4062C16.4375 23.2819 16.3881 23.1627 16.3002 23.0748C16.2123 22.9869 16.0931 22.9375 15.9688 22.9375ZM15.5 24.6562C15.5 24.6977 15.4835 24.7374 15.4542 24.7667C15.4249 24.796 15.3852 24.8125 15.3438 24.8125H9.09375C9.05231 24.8125 9.01257 24.796 8.98326 24.7667C8.95396 24.7374 8.9375 24.6977 8.9375 24.6562V23.875H15.5V24.6562Z"
                          fill="true"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1486">
                          <rect
                            width={32}
                            height={32}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="text-22-bold">
                        1️⃣ Leadership & Policy Commitment
                      </h5>
                    </Link>
                    <p className="text-md neutral-700">
                      • Sustainability is embedded in the school's mission &
                      policies.
                    </p>
                    <p className="text-md neutral-700">
                      • Long-term sustainability roadmap with measurable goals.
                    </p>
                    <p className="text-md neutral-700">
                      • Partnerships with environmental organizations & green
                      industries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-preparing-2">
                  <Link className="card-image" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M28.7954 12.9735C29.4131 11.7516 29.1573 10.301 28.159 9.36409L26.7553 8.0466C26.4416 7.75228 26.258 7.43422 26.1599 7.01534L25.7208 5.14097C25.4085 3.80784 24.2802 2.86109 22.9131 2.78503L20.991 2.67816C20.5615 2.65428 20.2163 2.52866 19.8719 2.27091L18.3307 1.11728C17.2345 0.296844 15.7617 0.296844 14.6655 1.11728L13.1243 2.27084C12.7799 2.52866 12.4348 2.65428 12.0053 2.67816L10.0831 2.78503C8.71602 2.86109 7.58771 3.80784 7.27546 5.14097L6.83639 7.01534C6.73827 7.43422 6.55464 7.75228 6.24102 8.0466L4.83727 9.36409C3.83889 10.3011 3.58314 11.7516 4.20083 12.9735L5.06933 14.6917C5.26339 15.0756 5.32714 15.4373 5.27614 15.8644L5.04771 17.7759C4.88521 19.1354 5.62164 20.411 6.88027 20.95L8.32777 21.57L5.36789 27.9273C5.25308 28.174 5.28458 28.4613 5.45002 28.6773C5.61552 28.8933 5.88489 28.9983 6.15289 28.9515L9.26221 28.4082L10.8481 31.1372C10.9791 31.3628 11.2178 31.4993 11.4766 31.4993C11.4878 31.4993 11.499 31.4991 11.5103 31.4986C11.7821 31.4863 12.0223 31.3254 12.1372 31.0787L14.9326 25.0743L15.9027 24.7812C16.3145 24.6568 16.6818 24.6568 17.0935 24.7812L18.0636 25.0744L20.859 31.0788C20.9738 31.3255 21.2141 31.4863 21.4857 31.4987C21.497 31.4992 21.5082 31.4994 21.5194 31.4994C21.7783 31.4994 22.017 31.3628 22.1481 31.1373L23.734 28.4083L26.8433 28.9515C27.1114 28.9984 27.3807 28.8933 27.5462 28.6773C27.7117 28.4614 27.7431 28.174 27.6283 27.9274L24.6686 21.57L26.1161 20.9502C27.3748 20.4111 28.1112 19.1355 27.9487 17.776L27.7202 15.8645C27.6692 15.4373 27.733 15.0757 27.927 14.6917L28.7954 12.9735ZM11.4507 30.1839L9.95183 27.6045C9.84664 27.4235 9.64002 27.3271 9.43346 27.3632L6.49464 27.8766L9.20508 22.0547C9.33758 22.1726 9.45502 22.3097 9.56208 22.4734L10.6158 24.0845C11.29 25.1155 12.478 25.6263 13.664 25.43L11.4507 30.1839ZM23.5628 27.3632C23.3565 27.327 23.1496 27.4234 23.0444 27.6045L21.5455 30.1839L19.3321 25.4298C19.4998 25.4576 19.6676 25.4717 19.8339 25.4717C20.8438 25.4717 21.8015 24.9697 22.3804 24.0845L23.4341 22.4733C23.5411 22.3096 23.6586 22.1725 23.7911 22.0547L26.5015 27.8765L23.5628 27.3632ZM27.0345 14.2405C26.7539 14.7956 26.6534 15.3655 26.7271 15.9831L26.9556 17.8946C27.0667 18.8238 26.5826 19.6623 25.7223 20.0308L23.9526 20.7887C23.381 21.0335 22.9376 21.4055 22.5972 21.926L21.5435 23.5372C21.0313 24.3204 20.1215 24.6516 19.2256 24.3809L17.3828 23.824C17.0851 23.734 16.7916 23.689 16.4981 23.689C16.2046 23.689 15.9111 23.734 15.6135 23.824L13.7706 24.3809C12.8749 24.6515 11.965 24.3205 11.4528 23.5372L10.3991 21.9261C10.0588 21.4056 9.61539 21.0336 9.04358 20.7887L7.27396 20.0308C6.41364 19.6623 5.92952 18.8238 6.04064 17.8945L6.26908 15.983C6.34289 15.3655 6.24239 14.7955 5.96183 14.2405L5.09333 12.5223C4.67114 11.6871 4.83927 10.7336 5.52164 10.0932L6.92539 8.77566C7.37883 8.35003 7.66821 7.84878 7.81002 7.24328L8.24908 5.36891C8.46252 4.45772 9.20427 3.83534 10.1387 3.78334L12.0608 3.67647C12.6818 3.64191 13.2256 3.44397 13.7236 3.07128L15.2648 1.91766C16.014 1.35697 16.9822 1.35691 17.7315 1.91766L19.2726 3.07134C19.7706 3.44403 20.3145 3.64197 20.9354 3.67653L22.8575 3.78341C23.792 3.83541 24.5336 4.45772 24.7471 5.36897L25.1862 7.24334C25.3281 7.84891 25.6175 8.35016 26.0709 8.77572L27.4746 10.0932C28.157 10.7337 28.3251 11.6872 27.9029 12.5224L27.0345 14.2405ZM16.4981 4.60297C11.8756 4.60297 8.11483 8.36366 8.11483 12.9862C8.11483 17.6087 11.8755 21.3694 16.4981 21.3694C21.1206 21.3694 24.8813 17.6087 24.8813 12.9862C24.8813 8.36366 21.1206 4.60297 16.4981 4.60297ZM16.4981 20.3694C12.427 20.3694 9.11483 17.0573 9.11483 12.9862C9.11483 8.91503 12.427 5.60297 16.4981 5.60297C20.5692 5.60297 23.8813 8.91509 23.8813 12.9862C23.8813 17.0573 20.5692 20.3694 16.4981 20.3694ZM18.3218 13.094C18.9398 12.5735 19.3335 11.7947 19.3335 10.9252C19.3335 9.36178 18.0616 8.08985 16.4981 8.08985C14.9347 8.08985 13.6628 9.36178 13.6628 10.9252C13.6628 11.7946 14.0565 12.5735 14.6745 13.094C12.9201 13.7598 11.6193 15.3613 11.4087 17.3293C11.3936 17.4703 11.4391 17.6112 11.534 17.7167C11.6288 17.8222 11.764 17.8825 11.9058 17.8825H21.0904C21.2323 17.8825 21.3675 17.8222 21.4623 17.7167C21.5571 17.6112 21.6026 17.4703 21.5875 17.3293C21.377 15.3614 20.0761 13.7598 18.3218 13.094ZM14.6628 10.9252C14.6628 9.91322 15.4861 9.08984 16.4981 9.08984C17.5102 9.08984 18.3335 9.91316 18.3335 10.9252C18.3335 11.9368 17.5108 12.7598 16.4994 12.7605C16.499 12.7605 16.4986 12.7605 16.4981 12.7605C16.4977 12.7605 16.4973 12.7605 16.4969 12.7605C15.4855 12.7599 14.6628 11.9368 14.6628 10.9252ZM12.5002 16.8825C12.9473 15.069 14.5772 13.7612 16.4968 13.7606C16.4973 13.7606 16.4977 13.7607 16.4981 13.7607C16.4986 13.7607 16.499 13.7606 16.4995 13.7606C18.419 13.7612 20.0489 15.069 20.496 16.8825H12.5002Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="text-22-bold">
                        2️⃣ Green Curriculum & Climate Education
                      </h5>
                    </Link>
                    <p className="text-md neutral-700">
                      • STEM & humanities integration for sustainability
                      learning.
                    </p>
                    <p className="text-md neutral-700">
                      • Hands-on environmental projects & research.
                    </p>
                    <p className="text-md neutral-700">
                      • Climate change, biodiversity, and circular economy
                      education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-preparing-2">
                  <Link className="card-image" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_66_2011)">
                        <path
                          d="M6.5 1.5C6.5 1.2235 6.2765 1 6 1C5.7235 1 5.5 1.2235 5.5 1.5C5.5 4.381 3.7005 4.496 3.5 4.5H3.497C3.4965 4.4995 3.495 4.4995 3.4935 4.5C3.493 4.5 3.4925 4.5 3.4925 4.5C3.492 4.5 3.4915 4.5 3.491 4.5C3.219 4.505 3 4.727 3 5C3 5.275 3.2215 5.498 3.496 5.5C3.704 5.504 5.5 5.622 5.5 8.5C5.5 8.7765 5.7235 9 6 9C6.2765 9 6.5 8.7765 6.5 8.5C6.5 5.622 8.296 5.504 8.504 5.5H8.5065H8.5075H8.508H8.509C8.781 5.495 9 5.273 9 5C9 4.725 8.7785 4.502 8.504 4.5C8.296 4.496 6.5 4.378 6.5 1.5ZM6 6.1375C5.719 5.6025 5.3515 5.2425 4.986 5C5.3515 4.7575 5.719 4.3975 6 3.8625C6.281 4.3975 6.6485 4.7575 7.014 5C6.6485 5.2425 6.281 5.6025 6 6.1375Z"
                          fill="true"
                        />
                        <path
                          d="M27.504 12.5C27.296 12.496 25.5 12.378 25.5 9.5C25.5 9.2235 25.2765 9 25 9C24.7235 9 24.5 9.2235 24.5 9.5C24.5 12.381 22.7005 12.496 22.5 12.5H22.497C22.497 12.5 22.4945 12.5 22.4935 12.5C22.493 12.5 22.4925 12.5 22.4925 12.5C22.492 12.5 22.4915 12.5 22.491 12.5C22.219 12.505 22 12.727 22 13C22 13.275 22.2215 13.498 22.496 13.5C22.704 13.504 24.5 13.622 24.5 16.5C24.5 16.7765 24.7235 17 25 17C25.2765 17 25.5 16.7765 25.5 16.5C25.5 13.622 27.296 13.504 27.504 13.5H27.5065H27.5075H27.509C27.781 13.495 28 13.273 28 13C28 12.725 27.7785 12.502 27.504 12.5ZM25 14.1375C24.719 13.6025 24.3515 13.2425 23.986 13C24.3515 12.7575 24.719 12.3975 25 11.8625C25.281 12.3975 25.6485 12.7575 26.014 13C25.6485 13.2425 25.281 13.6025 25 14.1375Z"
                          fill="true"
                        />
                        <path
                          d="M16.1404 10.1576C16.3989 10.1576 16.6559 10.0591 16.8489 9.86612L20.3019 6.41312C20.6919 6.02362 20.6919 5.38862 20.3019 4.99912L19.5949 4.29212C19.2054 3.90262 18.5704 3.90262 18.1809 4.29212L17.6344 4.83862C17.4389 5.03412 17.4389 5.35012 17.6344 5.54562C17.8299 5.74112 18.1459 5.74112 18.3414 5.54562L18.8879 4.99912L19.5949 5.70612L16.1419 9.15912L14.1949 7.69912L14.7949 6.89862L15.3539 7.31762C15.7479 7.61512 16.3104 7.57562 16.6609 7.22512L17.2479 6.63812C17.4434 6.44262 17.4434 6.12662 17.2479 5.93112C17.0524 5.73562 16.7364 5.73562 16.5409 5.93112L15.9539 6.51812L15.3949 6.09912C15.1809 5.93862 14.9189 5.87112 14.6534 5.90912C14.3894 5.94712 14.1554 6.08612 13.9959 6.29862L13.3964 7.09812C13.2359 7.31212 13.1679 7.57512 13.2054 7.83912C13.2429 8.10362 13.3819 8.33812 13.5954 8.49812L15.5424 9.95863C15.7194 10.0926 15.9299 10.1576 16.1404 10.1576Z"
                          fill="true"
                        />
                        <path
                          d="M32 24.5H27.5V18.5C27.5 18.2235 27.2765 18 27 18H21V12C21 11.7235 20.7765 11.5 20.5 11.5H19.8415C21.628 8.819 22.262 5.933 22.4865 4.1975C22.5445 3.748 22.416 3.3085 22.125 2.959C21.82 2.5935 21.3645 2.369 20.8755 2.3435C20.1005 2.3035 18.9355 1.968 17.788 0.5975C17.47 0.218 17.0005 0 16.5 0C15.9995 0 15.53 0.218 15.2115 0.597V0.5975C14.064 1.9675 12.899 2.303 12.124 2.343C11.6345 2.369 11.1795 2.593 10.8745 2.9585C10.5835 3.3075 10.455 3.747 10.513 4.197C10.7375 5.9325 11.372 8.8185 13.1585 11.4995H12.5C12.2235 11.4995 12 11.723 12 11.9995V17.9995H9.7195C10.108 17.059 10.887 17.0025 11.005 16.9995H11.0065C11.0065 16.9995 11.007 16.9995 11.0075 16.9995H11.008C11.2805 16.9955 11.5 16.7735 11.5 16.5C11.5 16.2255 11.279 16.0025 11.005 16C10.847 15.996 9.5 15.898 9.5 13.7C9.5 13.4235 9.2765 13.2 9 13.2C8.7235 13.2 8.5 13.4235 8.5 13.7C8.5 15.901 7.1485 15.9965 7 16H6.9985H6.997C6.997 16 6.996 16 6.995 16C6.9945 16 6.994 16 6.9935 16C6.993 16 6.993 16 6.9925 16C6.72 16.0045 6.5 16.2265 6.5 16.5C6.5 16.7745 6.721 16.9975 6.995 17C7.1125 17.003 7.892 17.0595 8.2805 18H6C5.7235 18 5.5 18.2235 5.5 18.5V24.5H1C0.7235 24.5 0.5 24.7235 0.5 25V31.5C0.5 31.7765 0.7235 32 1 32H32C32.2765 32 32.5 31.7765 32.5 31.5V25C32.5 24.7235 32.2765 24.5 32 24.5ZM11.6425 3.599C11.7695 3.4465 11.964 3.353 12.1755 3.342C13.149 3.291 14.5995 2.8855 15.9775 1.239V1.2395C16.2325 0.935 16.7665 0.9355 17.0215 1.239C18.4 2.8855 19.85 3.291 20.8235 3.342C21.0355 3.3525 21.2295 3.4465 21.3565 3.599C21.4345 3.693 21.522 3.851 21.4935 4.069C21.2125 6.246 20.2505 10.342 16.974 13.3185C16.7075 13.5605 16.29 13.5605 16.0245 13.3185C12.7475 10.342 11.7855 6.2455 11.5045 4.069C11.477 3.851 11.5645 3.6935 11.6425 3.599ZM9 15.7955C9.187 16.1015 9.4095 16.3295 9.637 16.5C9.4095 16.6705 9.187 16.8985 9 17.2045C8.813 16.8985 8.5905 16.6705 8.363 16.5C8.5905 16.3295 8.813 16.1015 9 15.7955ZM1.5 25.5H5.5V31H1.5V25.5ZM6.5 19H8.4885C8.4945 19.0965 8.5 19.1935 8.5 19.3C8.5 19.5765 8.7235 19.8 9 19.8C9.2765 19.8 9.5 19.5765 9.5 19.3C9.5 19.194 9.5055 19.097 9.5115 19H12V31H6.5V19ZM13 12.5H13.8975C14.3295 13.039 14.808 13.564 15.353 14.059C15.6745 14.351 16.0875 14.497 16.5 14.497C16.9125 14.497 17.3255 14.351 17.6475 14.059C18.1925 13.564 18.671 13.039 19.103 12.5H20V25.2335C20 25.51 20.2235 25.7335 20.5 25.7335C20.7765 25.7335 21 25.51 21 25.2335V19H26.5V31H21V27.57C21 27.2935 20.7765 27.07 20.5 27.07C20.2235 27.07 20 27.2935 20 27.57V31H13V12.5ZM31.5 31H27.5V25.5H31.5V31Z"
                          fill="true"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_66_2011">
                          <rect
                            width={32}
                            height={32}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="text-22-bold">
                        3️⃣ Sustainable Campus & Green Infrastructure
                      </h5>
                    </Link>
                    <p className="text-md neutral-700">
                      • Eco-friendly school buildings with sustainable
                      materials.
                    </p>
                    <p className="text-md neutral-700">
                      • Energy efficiency & smart environmental monitoring
                      systems.
                    </p>
                    <p className="text-md neutral-700">
                      • Water conservation & waste management programs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-preparing-2">
                  <Link className="card-image" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M21.3524 11.3973C21.2587 11.3042 21.132 11.252 20.9999 11.252C20.8678 11.252 20.7411 11.3042 20.6474 11.3973L11.6474 20.3973C11.5951 20.4422 11.5526 20.4973 11.5226 20.5594C11.4926 20.6214 11.4757 20.689 11.473 20.7578C11.4704 20.8267 11.482 20.8953 11.5071 20.9595C11.5322 21.0237 11.5704 21.0819 11.6191 21.1307C11.6678 21.1794 11.7261 21.2175 11.7903 21.2427C11.8544 21.2678 11.9231 21.2794 11.992 21.2767C12.0608 21.2741 12.1284 21.2572 12.1904 21.2272C12.2524 21.1972 12.3076 21.1547 12.3524 21.1024L21.3524 12.1023C21.4456 12.0087 21.4978 11.8819 21.4978 11.7498C21.4978 11.6178 21.4456 11.491 21.3524 11.3973Z"
                        fill="true"
                      />
                      <path
                        d="M15.75 13C15.75 12.5055 15.6034 12.0222 15.3287 11.6111C15.054 11.2 14.6635 10.8795 14.2067 10.6903C13.7499 10.5011 13.2472 10.4516 12.7623 10.548C12.2773 10.6445 11.8319 10.8826 11.4822 11.2322C11.1326 11.5819 10.8945 12.0273 10.798 12.5123C10.7016 12.9972 10.7511 13.4999 10.9403 13.9567C11.1295 14.4135 11.45 14.804 11.8611 15.0787C12.2722 15.3534 12.7555 15.5 13.25 15.5C13.913 15.5 14.5489 15.2366 15.0178 14.7678C15.4866 14.2989 15.75 13.663 15.75 13ZM11.75 13C11.75 12.7033 11.838 12.4133 12.0028 12.1666C12.1676 11.92 12.4019 11.7277 12.676 11.6142C12.9501 11.5007 13.2517 11.4709 13.5426 11.5288C13.8336 11.5867 14.1009 11.7296 14.3107 11.9393C14.5204 12.1491 14.6633 12.4164 14.7212 12.7074C14.7791 12.9983 14.7494 13.2999 14.6358 13.574C14.5223 13.8481 14.33 14.0824 14.0834 14.2472C13.8367 14.412 13.5467 14.5 13.25 14.5C12.8522 14.5 12.4706 14.342 12.1893 14.0607C11.908 13.7794 11.75 13.3978 11.75 13Z"
                        fill="true"
                      />
                      <path
                        d="M19.75 16.5C19.2555 16.5 18.7722 16.6466 18.3611 16.9213C17.95 17.196 17.6295 17.5865 17.4403 18.0433C17.2511 18.5001 17.2016 19.0028 17.298 19.4877C17.3945 19.9727 17.6326 20.4181 17.9822 20.7678C18.3319 21.1174 18.7773 21.3555 19.2623 21.452C19.7472 21.5484 20.2499 21.4989 20.7067 21.3097C21.1635 21.1205 21.554 20.8 21.8287 20.3889C22.1034 19.9778 22.25 19.4945 22.25 19C22.25 18.6717 22.1853 18.3466 22.0597 18.0433C21.9341 17.74 21.7499 17.4644 21.5178 17.2322C21.2856 17.0001 21.01 16.8159 20.7067 16.6903C20.4034 16.5647 20.0783 16.5 19.75 16.5ZM19.75 20.5C19.4533 20.5 19.1633 20.412 18.9166 20.2472C18.67 20.0824 18.4777 19.8481 18.3642 19.574C18.2507 19.2999 18.2209 18.9983 18.2788 18.7074C18.3367 18.4164 18.4796 18.1491 18.6893 17.9393C18.8991 17.7296 19.1664 17.5867 19.4574 17.5288C19.7483 17.4709 20.0499 17.5006 20.324 17.6142C20.5981 17.7277 20.8324 17.92 20.9972 18.1666C21.162 18.4133 21.25 18.7033 21.25 19C21.25 19.3978 21.092 19.7794 20.8107 20.0607C20.5294 20.342 20.1478 20.5 19.75 20.5Z"
                        fill="true"
                      />
                      <path
                        d="M28.6619 15.9999C28.659 15.627 28.7319 15.2574 28.8763 14.9136C29.0207 14.5698 29.2336 14.2589 29.5019 13.9999C29.712 13.7944 29.8637 13.5366 29.9412 13.2531C30.0188 12.9695 30.0194 12.6704 29.943 12.3866C29.8666 12.1027 29.716 11.8443 29.5067 11.638C29.2973 11.4316 29.0368 11.2847 28.7519 11.2124C28.3914 11.1226 28.0526 10.9613 27.7557 10.7381C27.4587 10.5149 27.2096 10.2343 27.023 9.91303C26.8365 9.59175 26.7164 9.23629 26.6698 8.86773C26.6232 8.49916 26.6511 8.125 26.7519 7.76741C26.8258 7.48727 26.8248 7.1926 26.749 6.91297C26.6731 6.63333 26.5251 6.37855 26.3197 6.17417C26.1143 5.9698 25.8588 5.82302 25.5788 5.74856C25.2988 5.67409 25.0041 5.67456 24.7244 5.74991C24.3668 5.85063 23.9926 5.87853 23.6241 5.83195C23.2555 5.78537 22.9 5.66526 22.5787 5.47874C22.2575 5.29222 21.9769 5.04309 21.7537 4.74612C21.5305 4.44915 21.3692 4.11038 21.2794 3.74991C21.2061 3.46696 21.0591 3.20848 20.8535 3.00074C20.6479 2.79301 20.3909 2.64344 20.1087 2.56724C19.8265 2.49104 19.5292 2.49093 19.247 2.56693C18.9647 2.64293 18.7076 2.79232 18.5019 2.99991C18.2428 3.26879 17.9321 3.48266 17.5885 3.62874C17.2448 3.77482 16.8753 3.85011 16.5019 3.85011C16.1285 3.85011 15.7589 3.77482 15.4153 3.62874C15.0716 3.48266 14.761 3.26879 14.5019 2.99991C14.2964 2.78973 14.0386 2.63808 13.755 2.56055C13.4715 2.48302 13.1724 2.48241 12.8885 2.55879C12.6047 2.63517 12.3463 2.78577 12.1399 2.99511C11.9335 3.20446 11.7867 3.46499 11.7144 3.74991C11.6245 4.11038 11.4632 4.44915 11.24 4.74612C11.0168 5.04309 10.7363 5.29222 10.415 5.47874C10.0937 5.66526 9.73825 5.78537 9.36968 5.83195C9.00112 5.87853 8.62695 5.85063 8.26937 5.74991C7.98922 5.67595 7.69456 5.67694 7.41492 5.75278C7.13528 5.82863 6.8805 5.97667 6.67613 6.18206C6.47176 6.38744 6.32498 6.64295 6.25051 6.92296C6.17605 7.20297 6.17651 7.49764 6.25187 7.77741C6.35259 8.135 6.38048 8.50916 6.3339 8.87773C6.28732 9.24629 6.16721 9.60175 5.98069 9.92303C5.79417 10.2443 5.54504 10.5249 5.24807 10.7481C4.9511 10.9713 4.61234 11.1326 4.25187 11.2224C3.96892 11.2957 3.71043 11.4427 3.5027 11.6483C3.29496 11.8539 3.14539 12.1109 3.06919 12.3931C2.99299 12.6753 2.99289 12.9726 3.06889 13.2548C3.14489 13.5371 3.29428 13.7941 3.50187 13.9999C3.77074 14.259 3.98461 14.5697 4.13069 14.9133C4.27677 15.2569 4.35206 15.6265 4.35206 15.9999C4.35206 16.3733 4.27677 16.7429 4.13069 17.0865C3.98461 17.4302 3.77074 17.7408 3.50187 17.9999C3.29169 18.2054 3.14003 18.4632 3.0625 18.7468C2.98498 19.0303 2.98437 19.3294 3.06074 19.6132C3.13712 19.8971 3.28772 20.1555 3.49706 20.3619C3.70641 20.5682 3.96694 20.7151 4.25187 20.7874C4.61234 20.8772 4.9511 21.0386 5.24807 21.2618C5.54504 21.485 5.79417 21.7655 5.98069 22.0868C6.16721 22.4081 6.28732 22.7635 6.3339 23.1321C6.38048 23.5007 6.35259 23.8748 6.25187 24.2324C6.17182 24.5153 6.16869 24.8144 6.2428 25.0989C6.3169 25.3834 6.46556 25.643 6.67344 25.8508C6.88132 26.0587 7.14089 26.2074 7.42538 26.2815C7.70988 26.3556 8.00899 26.3525 8.29187 26.2724C8.64945 26.1717 9.02362 26.1438 9.39218 26.1904C9.76075 26.237 10.1162 26.3571 10.4375 26.5436C10.7588 26.7301 11.0393 26.9792 11.2625 27.2762C11.4857 27.5732 11.647 27.9119 11.7369 28.2724C11.8142 28.5511 11.9633 28.8047 12.1692 29.0078C12.3751 29.211 12.6307 29.3566 12.9104 29.4302C13.1902 29.5038 13.4843 29.5028 13.7635 29.4273C14.0428 29.3518 14.2973 29.2045 14.5019 28.9999C14.761 28.731 15.0716 28.5172 15.4153 28.3711C15.7589 28.225 16.1285 28.1497 16.5019 28.1497C16.8753 28.1497 17.2448 28.225 17.5885 28.3711C17.9321 28.5172 18.2428 28.731 18.5019 28.9999C18.7074 29.2101 18.9652 29.3617 19.2487 29.4393C19.5323 29.5168 19.8313 29.5174 20.1152 29.441C20.3991 29.3647 20.6575 29.2141 20.8638 29.0047C21.0702 28.7954 21.2171 28.5348 21.2894 28.2499C21.3792 27.8894 21.5405 27.5507 21.7637 27.2537C21.9869 26.9567 22.2675 26.7076 22.5887 26.5211C22.91 26.3346 23.2655 26.2145 23.6341 26.1679C24.0026 26.1213 24.3768 26.1492 24.7344 26.2499C25.0172 26.33 25.3164 26.3331 25.6008 26.259C25.8853 26.1849 26.1449 26.0362 26.3528 25.8283C26.5607 25.6205 26.7093 25.3609 26.7834 25.0764C26.8575 24.7919 26.8544 24.4928 26.7744 24.2099C26.6736 23.8523 26.6457 23.4782 26.6923 23.1096C26.7389 22.741 26.859 22.3856 27.0455 22.0643C27.2321 21.743 27.4812 21.4625 27.7782 21.2393C28.0751 21.0161 28.4139 20.8547 28.7744 20.7649C29.0531 20.6875 29.3066 20.5385 29.5098 20.3326C29.7129 20.1266 29.8586 19.8711 29.9322 19.5913C30.0058 19.3116 30.0048 19.0175 29.9293 18.7382C29.8538 18.459 29.7064 18.2044 29.5019 17.9999C29.2336 17.7409 29.0207 17.4301 28.8763 17.0862C28.7319 16.7424 28.659 16.3728 28.6619 15.9999ZM28.9794 19.3424C28.9494 19.4559 28.8891 19.5592 28.805 19.6411C28.7209 19.723 28.6161 19.7805 28.5019 19.8074C28.0129 19.9322 27.5538 20.1536 27.1518 20.4587C26.7499 20.7638 26.4131 21.1464 26.1614 21.5838C25.9097 22.0212 25.7482 22.5046 25.6865 23.0054C25.6247 23.5063 25.664 24.0145 25.8019 24.4999C25.8326 24.6108 25.8333 24.7278 25.804 24.8391C25.7747 24.9503 25.7164 25.0518 25.6351 25.1331C25.5538 25.2145 25.4523 25.2728 25.341 25.3021C25.2298 25.3314 25.1127 25.3306 25.0019 25.2999C24.5164 25.162 24.0083 25.1228 23.5074 25.1845C23.0065 25.2463 22.5231 25.4078 22.0857 25.6595C21.6483 25.9111 21.2658 26.2479 20.9607 26.6499C20.6556 27.0519 20.4341 27.5109 20.3094 27.9999C20.2812 28.1128 20.2232 28.216 20.1414 28.2987C20.0595 28.3814 19.9569 28.4406 19.8444 28.4699C19.7321 28.4999 19.6139 28.4995 19.5019 28.4687C19.3899 28.438 19.2881 28.378 19.2069 28.2949C18.8553 27.9333 18.4348 27.6458 17.9701 27.4495C17.5055 27.2531 17.0063 27.152 16.5019 27.152C15.9975 27.152 15.4982 27.2531 15.0336 27.4495C14.569 27.6458 14.1484 27.9333 13.7969 28.2949C13.7156 28.3779 13.6138 28.4378 13.5018 28.4685C13.3898 28.4992 13.2716 28.4996 13.1594 28.4695C13.0472 28.4395 12.945 28.3802 12.8633 28.2977C12.7816 28.2152 12.7233 28.1124 12.6944 27.9999C12.5696 27.5109 12.3482 27.0519 12.0431 26.6499C11.738 26.2479 11.3554 25.9111 10.918 25.6595C10.4806 25.4078 9.99719 25.2463 9.49633 25.1845C8.99547 25.1228 8.48731 25.162 8.00187 25.2999C7.891 25.3306 7.77397 25.3314 7.66271 25.3021C7.55146 25.2728 7.44998 25.2145 7.36863 25.1331C7.28728 25.0518 7.22898 24.9503 7.19968 24.8391C7.17038 24.7278 7.17114 24.6108 7.20187 24.4999C7.33976 24.0145 7.379 23.5063 7.31724 23.0054C7.25549 22.5046 7.09401 22.0212 6.84232 21.5838C6.59064 21.1464 6.25387 20.7638 5.85188 20.4587C5.4499 20.1536 4.99086 19.9322 4.50187 19.8074C4.38939 19.7785 4.28662 19.7202 4.2041 19.6385C4.12157 19.5567 4.06226 19.4545 4.03224 19.3424C4.00223 19.2302 4.00258 19.112 4.03326 19C4.06394 18.888 4.12386 18.7861 4.20687 18.7049C4.56853 18.3533 4.85601 17.9328 5.05232 17.4682C5.24863 17.0036 5.34978 16.5043 5.34978 15.9999C5.34978 15.4955 5.24863 14.9963 5.05232 14.5316C4.85601 14.067 4.56853 13.6465 4.20687 13.2949C4.12386 13.2137 4.06394 13.1118 4.03326 12.9998C4.00258 12.8878 4.00223 12.7697 4.03224 12.6575C4.06226 12.5453 4.12157 12.4431 4.2041 12.3614C4.28662 12.2796 4.38939 12.2213 4.50187 12.1924C4.99086 12.0677 5.4499 11.8462 5.85188 11.5411C6.25387 11.236 6.59064 10.8535 6.84232 10.4161C7.09401 9.97865 7.25549 9.49524 7.31724 8.99438C7.379 8.49352 7.33976 7.98536 7.20187 7.49991C7.17114 7.38905 7.17038 7.27201 7.19968 7.16076C7.22898 7.04951 7.28728 6.94803 7.36863 6.86668C7.44998 6.78533 7.55146 6.72703 7.66271 6.69773C7.77397 6.66843 7.891 6.66918 8.00187 6.69991C8.48731 6.83781 8.99547 6.87704 9.49633 6.81529C9.99719 6.75354 10.4806 6.59205 10.918 6.34037C11.3554 6.08869 11.738 5.75191 12.0431 5.34993C12.3482 4.94795 12.5696 4.48891 12.6944 3.99991C12.7233 3.88743 12.7816 3.78467 12.8633 3.70214C12.945 3.61962 13.0472 3.56031 13.1594 3.53029C13.2716 3.50027 13.3898 3.50062 13.5018 3.53131C13.6138 3.56199 13.7156 3.62191 13.7969 3.70491C14.1484 4.06657 14.569 4.35406 15.0336 4.55037C15.4982 4.74668 15.9975 4.84783 16.5019 4.84783C17.0063 4.84783 17.5055 4.74668 17.9701 4.55037C18.4348 4.35406 18.8553 4.06657 19.2069 3.70491C19.2881 3.62191 19.3899 3.56199 19.5019 3.53131C19.614 3.50062 19.7321 3.50027 19.8443 3.53029C19.9565 3.56031 20.0587 3.61962 20.1404 3.70214C20.2221 3.78467 20.2804 3.88743 20.3094 3.99991C20.4341 4.48891 20.6556 4.94795 20.9607 5.34993C21.2658 5.75191 21.6483 6.08869 22.0857 6.34037C22.5231 6.59205 23.0065 6.75354 23.5074 6.81529C24.0083 6.87704 24.5164 6.83781 25.0019 6.69991C25.1127 6.66918 25.2298 6.66843 25.341 6.69773C25.4523 6.72703 25.5538 6.78533 25.6351 6.86668C25.7164 6.94803 25.7747 7.04951 25.804 7.16076C25.8333 7.27201 25.8326 7.38905 25.8019 7.49991C25.664 7.98536 25.6247 8.49352 25.6865 8.99438C25.7482 9.49524 25.9097 9.97865 26.1614 10.4161C26.4131 10.8535 26.7499 11.236 27.1518 11.5411C27.5538 11.8462 28.0129 12.0677 28.5019 12.1924C28.6143 12.2213 28.7171 12.2796 28.7996 12.3614C28.8822 12.4431 28.9415 12.5453 28.9715 12.6575C29.0015 12.7697 29.0012 12.8878 28.9705 12.9998C28.9398 13.1118 28.8799 13.2137 28.7969 13.2949C28.4352 13.6465 28.1477 14.067 27.9514 14.5316C27.7551 14.9963 27.654 15.4955 27.654 15.9999C27.654 16.5043 27.7551 17.0036 27.9514 17.4682C28.1477 17.9328 28.4352 18.3533 28.7969 18.7049C28.8817 18.785 28.9434 18.8865 28.9755 18.9986C29.0076 19.1108 29.009 19.2296 28.9794 19.3424Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="text-22-bold">
                        4️⃣ Student Engagement & Community Action
                      </h5>
                    </Link>
                    <p className="text-md neutral-700">
                      • Student-led sustainability clubs & projects.
                    </p>
                    <p className="text-md neutral-700">
                      • Local and global partnerships for green initiatives.
                    </p>
                    <p className="text-md neutral-700">
                      • Green career pathways & environmental leadership
                      training.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="card-preparing-2">
                  <Link className="card-image" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M29.75 17.065L23.25 13.315C23.174 13.2711 23.0878 13.248 23 13.248C22.9122 13.248 22.826 13.2711 22.75 13.315L16.25 17.065C16.1737 17.1091 16.1104 17.1725 16.0665 17.2489C16.0226 17.3253 15.9997 17.4119 16 17.5V25C16.0001 25.0877 16.0232 25.1738 16.0671 25.2497C16.111 25.3257 16.1741 25.3887 16.25 25.4325L22.75 29.1825C22.826 29.2264 22.9122 29.2495 23 29.2495C23.0878 29.2495 23.174 29.2264 23.25 29.1825L29.75 25.4325C29.8259 25.3887 29.889 25.3257 29.9329 25.2497C29.9768 25.1738 29.9999 25.0877 30 25V17.5C30.0004 17.4119 29.9774 17.3253 29.9335 17.2489C29.8896 17.1725 29.8263 17.1091 29.75 17.065ZM23 14.315L28.615 17.565L23 20.675L17.5 17.5L23 14.315ZM17 18.365L22.5 21.5375V27.89L17 24.715V18.365ZM23.5 27.89V21.545L29 18.5V24.7125L23.5 27.89Z"
                        fill="true"
                      />
                      <path
                        d="M14.5 25.5622L10.5 27.7672V21.6797L14.75 19.1797C14.8138 19.1509 14.8708 19.109 14.9173 19.0568C14.9639 19.0046 14.9989 18.9432 15.0203 18.8766C15.0416 18.8099 15.0487 18.7396 15.0412 18.67C15.0336 18.6005 15.0115 18.5333 14.9763 18.4728C14.9412 18.4123 14.8937 18.3599 14.837 18.3189C14.7803 18.2779 14.7156 18.2493 14.6472 18.2348C14.5787 18.2204 14.508 18.2205 14.4396 18.2351C14.3712 18.2498 14.3066 18.2786 14.25 18.3197L10 20.8197L4.3875 17.6397L10 14.4547L14.25 16.6922C14.367 16.7502 14.502 16.7602 14.6262 16.7199C14.7505 16.6797 14.854 16.5924 14.9147 16.4768C14.9755 16.3612 14.9886 16.2265 14.9513 16.1013C14.9139 15.9762 14.8291 15.8707 14.715 15.8072L10.215 13.4422C10.1414 13.402 10.0589 13.3809 9.975 13.3809C9.89112 13.3809 9.80859 13.402 9.735 13.4422L3.25 17.1322C3.1737 17.1763 3.11039 17.2397 3.06649 17.3161C3.02259 17.3925 2.99965 17.4791 3 17.5672V24.9322C2.99965 25.0203 3.02259 25.107 3.06649 25.1834C3.11039 25.2597 3.1737 25.3232 3.25 25.3672L9.75 29.0497C9.82601 29.0936 9.91224 29.1167 10 29.1167C10.0878 29.1167 10.174 29.0936 10.25 29.0497L15 26.4347C15.0619 26.4057 15.1171 26.3643 15.1623 26.3131C15.2076 26.2619 15.2418 26.202 15.263 26.1371C15.2842 26.0721 15.2918 26.0035 15.2855 25.9355C15.2791 25.8675 15.2589 25.8015 15.226 25.7416C15.1932 25.6817 15.1484 25.6292 15.0944 25.5872C15.0405 25.5453 14.9785 25.5149 14.9124 25.4979C14.8462 25.4808 14.7773 25.4775 14.7098 25.4882C14.6423 25.4988 14.5777 25.5232 14.52 25.5597L14.5 25.5622ZM4 18.5622L9.5 21.6847V27.7497L4 24.6397V18.5622Z"
                        fill="true"
                      />
                      <path
                        d="M10 12.2495C10.1326 12.2495 10.2598 12.1968 10.3536 12.103C10.4473 12.0093 10.5 11.8821 10.5 11.7495V7.11449L16 10.287V15.2495C16 15.3821 16.0527 15.5093 16.1464 15.603C16.2402 15.6968 16.3674 15.7495 16.5 15.7495C16.6326 15.7495 16.7598 15.6968 16.8536 15.603C16.9473 15.5093 17 15.3821 17 15.2495V10.287L22.5 7.11449V11.7495C22.5 11.8821 22.5527 12.0093 22.6464 12.103C22.7402 12.1968 22.8674 12.2495 23 12.2495C23.1326 12.2495 23.2598 12.1968 23.3536 12.103C23.4473 12.0093 23.5 11.8821 23.5 11.7495V6.24949C23.4999 6.16181 23.4768 6.07569 23.4329 5.99978C23.389 5.92387 23.3259 5.86083 23.25 5.81699L16.75 2.06699C16.674 2.0231 16.5878 2 16.5 2C16.4122 2 16.326 2.0231 16.25 2.06699L9.75 5.81699C9.67407 5.86083 9.611 5.92387 9.56712 5.99978C9.52324 6.07569 9.50009 6.16181 9.5 6.24949V11.7495C9.5 11.8821 9.55268 12.0093 9.64645 12.103C9.74021 12.1968 9.86739 12.2495 10 12.2495ZM16.5 3.07699L22 6.24949L16.5 9.42199L11 6.24949L16.5 3.07699Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="text-22-bold">
                        5️⃣ Assessment, Impact & Continuous Improvement
                      </h5>
                    </Link>
                    <p className="text-md neutral-700">
                      • Carbon footprint & sustainability impact tracking.
                    </p>
                    <p className="text-md neutral-700">
                      • Annual environmental audits & sustainability reports.
                    </p>
                    <p className="text-md neutral-700">
                      • AI-driven sustainability solutions & predictive
                      analytics.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 col-md-6">
                <div className="card-preparing-2">
                  <Link className="card-image" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M29.75 17.065L23.25 13.315C23.174 13.2711 23.0878 13.248 23 13.248C22.9122 13.248 22.826 13.2711 22.75 13.315L16.25 17.065C16.1737 17.1091 16.1104 17.1725 16.0665 17.2489C16.0226 17.3253 15.9997 17.4119 16 17.5V25C16.0001 25.0877 16.0232 25.1738 16.0671 25.2497C16.111 25.3257 16.1741 25.3887 16.25 25.4325L22.75 29.1825C22.826 29.2264 22.9122 29.2495 23 29.2495C23.0878 29.2495 23.174 29.2264 23.25 29.1825L29.75 25.4325C29.8259 25.3887 29.889 25.3257 29.9329 25.2497C29.9768 25.1738 29.9999 25.0877 30 25V17.5C30.0004 17.4119 29.9774 17.3253 29.9335 17.2489C29.8896 17.1725 29.8263 17.1091 29.75 17.065ZM23 14.315L28.615 17.565L23 20.675L17.5 17.5L23 14.315ZM17 18.365L22.5 21.5375V27.89L17 24.715V18.365ZM23.5 27.89V21.545L29 18.5V24.7125L23.5 27.89Z"
                        fill="true"
                      />
                      <path
                        d="M14.5 25.5622L10.5 27.7672V21.6797L14.75 19.1797C14.8138 19.1509 14.8708 19.109 14.9173 19.0568C14.9639 19.0046 14.9989 18.9432 15.0203 18.8766C15.0416 18.8099 15.0487 18.7396 15.0412 18.67C15.0336 18.6005 15.0115 18.5333 14.9763 18.4728C14.9412 18.4123 14.8937 18.3599 14.837 18.3189C14.7803 18.2779 14.7156 18.2493 14.6472 18.2348C14.5787 18.2204 14.508 18.2205 14.4396 18.2351C14.3712 18.2498 14.3066 18.2786 14.25 18.3197L10 20.8197L4.3875 17.6397L10 14.4547L14.25 16.6922C14.367 16.7502 14.502 16.7602 14.6262 16.7199C14.7505 16.6797 14.854 16.5924 14.9147 16.4768C14.9755 16.3612 14.9886 16.2265 14.9513 16.1013C14.9139 15.9762 14.8291 15.8707 14.715 15.8072L10.215 13.4422C10.1414 13.402 10.0589 13.3809 9.975 13.3809C9.89112 13.3809 9.80859 13.402 9.735 13.4422L3.25 17.1322C3.1737 17.1763 3.11039 17.2397 3.06649 17.3161C3.02259 17.3925 2.99965 17.4791 3 17.5672V24.9322C2.99965 25.0203 3.02259 25.107 3.06649 25.1834C3.11039 25.2597 3.1737 25.3232 3.25 25.3672L9.75 29.0497C9.82601 29.0936 9.91224 29.1167 10 29.1167C10.0878 29.1167 10.174 29.0936 10.25 29.0497L15 26.4347C15.0619 26.4057 15.1171 26.3643 15.1623 26.3131C15.2076 26.2619 15.2418 26.202 15.263 26.1371C15.2842 26.0721 15.2918 26.0035 15.2855 25.9355C15.2791 25.8675 15.2589 25.8015 15.226 25.7416C15.1932 25.6817 15.1484 25.6292 15.0944 25.5872C15.0405 25.5453 14.9785 25.5149 14.9124 25.4979C14.8462 25.4808 14.7773 25.4775 14.7098 25.4882C14.6423 25.4988 14.5777 25.5232 14.52 25.5597L14.5 25.5622ZM4 18.5622L9.5 21.6847V27.7497L4 24.6397V18.5622Z"
                        fill="true"
                      />
                      <path
                        d="M10 12.2495C10.1326 12.2495 10.2598 12.1968 10.3536 12.103C10.4473 12.0093 10.5 11.8821 10.5 11.7495V7.11449L16 10.287V15.2495C16 15.3821 16.0527 15.5093 16.1464 15.603C16.2402 15.6968 16.3674 15.7495 16.5 15.7495C16.6326 15.7495 16.7598 15.6968 16.8536 15.603C16.9473 15.5093 17 15.3821 17 15.2495V10.287L22.5 7.11449V11.7495C22.5 11.8821 22.5527 12.0093 22.6464 12.103C22.7402 12.1968 22.8674 12.2495 23 12.2495C23.1326 12.2495 23.2598 12.1968 23.3536 12.103C23.4473 12.0093 23.5 11.8821 23.5 11.7495V6.24949C23.4999 6.16181 23.4768 6.07569 23.4329 5.99978C23.389 5.92387 23.3259 5.86083 23.25 5.81699L16.75 2.06699C16.674 2.0231 16.5878 2 16.5 2C16.4122 2 16.326 2.0231 16.25 2.06699L9.75 5.81699C9.67407 5.86083 9.611 5.92387 9.56712 5.99978C9.52324 6.07569 9.50009 6.16181 9.5 6.24949V11.7495C9.5 11.8821 9.55268 12.0093 9.64645 12.103C9.74021 12.1968 9.86739 12.2495 10 12.2495ZM16.5 3.07699L22 6.24949L16.5 9.42199L11 6.24949L16.5 3.07699Z"
                        fill="true"
                      />
                    </svg>
                  </Link>
                  <div className="card-info">
                    <Link href="#">
                      <h5 className="text-22-bold">
                        6️⃣ Assessment, Impact & Continuous Improvement
                      </h5>
                    </Link>
                    <p className="text-md neutral-700">
                      • STEAM performance tracking through AI-driven analytics.
                    </p>
                    <p className="text-md neutral-700">
                      • School-wide innovation projects evaluated by external
                      reviewers.
                    </p>
                    <p className="text-md neutral-700">
                      • Sustainability and long-term development plans for STEAM
                      programs.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="section-box wow animate__animated animate__fadeIn box-case-study-2 pt-40 pb-40">
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
              <div className="col-lg-1"></div>
              <div className="col-lg-6">
                <div className="box-info-casestudy">
                  {/* <h3 className="mb-40">
                    Find out everything about creating
                    <br className="d-none d-lg-block" />a business model.
                  </h3> */}
                  <div className="row">
                    <div className="">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">1</span>Self-Assessment &
                            Application:
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Schools complete an SGA self-evaluation and submit
                            sustainability initiatives.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">2</span>On-Site or Virtual
                            Evaluation:
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            SGA auditors assess policies, curriculum, and
                            infrastructure.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">3</span>Accreditation
                            Decision:
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Schools receive SGA Standard, Advanced, or Best
                            Practices – Elite certification.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="card-casestudy">
                        <div className="card-title">
                          <h6>
                            <span className="number">4</span>Continuous
                            Development:
                          </h6>
                        </div>
                        <div className="card-desc">
                          <p>
                            Schools maintain accreditation through ongoing
                            sustainability projects.
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
                Why Sga Accreditation?
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
              <div className="col-lg-6 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/web.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6 className="text-center">
                      ✅ Recognizes schools as leaders in sustainability
                      education.
                    </h6>
                    {/* <p className="text-sm neutral-500">
                      Schools gain international validation for their innovation
                      programs.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/social.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6 className="text-center">
                      ✅ Enhances global reputation & eco-initiatives.
                    </h6>
                    {/* <p className="text-sm neutral-500">
                      Facilitates partnerships with leading technology firms and
                      education experts.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/engine.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6 className="text-center">
                      ✅ Prepares students for careers in sustainability,
                      environmental science, & green technology.
                    </h6>
                    {/* <p className="text-sm neutral-500">
                      Equips learners with future-proof skills in
                      problem-solving, entrepreneurship, and leadership.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="card-features-5">
                  {/* <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage2/security.svg"
                      alt="Nivia"
                    />
                  </div> */}
                  <div className="card-info">
                    <h6 className="text-center">
                      ✅ Supports partnerships with global environmental
                      organizations.
                    </h6>
                    {/* <p className="text-sm neutral-500">
                      Accredited schools gain opportunities for innovation
                      funding and research grants.
                    </p> */}
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
          <div className="box-buttons justify-content-center mt-40">
            <Link
              className="btn btn-brand-4-medium mr-15 hover-up"
              href="/sga-questions"
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
        </section>
      </Layout>
    </>
  );
}
