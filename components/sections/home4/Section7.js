"use client";
import Link from "next/link";
import { useState } from "react";

export default function Section7() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
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
      <section className="section-box box-faqs-4">
        <div className="container">
          <div className="box-faqs-inner">
            <div className="text-center">
              {" "}
              <Link className="btn btn-brand-4-sm" href="#">
                Frequently Asked Questions
              </Link>
              <h2 className="heading-2 mb-20 mt-20">🔹 Why USAAC?</h2>
            </div>
            <div className="box-faqs-inner-4">
              <div
                className="accordion accordion-flush accordion-style-2"
                id="accordionFAQS"
              >
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingOne"
                    onClick={() => handleClick(1)}
                  >
                    <button
                      className={
                        isActive.key == 1
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      ✔️ Comprehensive & Specialized Accreditations
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 1
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseOne"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      <p>
                        From AI and Robotics to Multilingual Education and
                        Cybersecurity, USAAC offers tailored accreditations that
                        reflect emerging educational needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingTwo"
                    onClick={() => handleClick(2)}
                  >
                    <button
                      className={
                        isActive.key == 2
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      ✔️ Three-Level Recognition System
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 2
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseTwo"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      Institutions are recognized at Standard, Advanced, or Best
                      Practices – Elite level, encouraging continuous growth and
                      innovation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingThree"
                    onClick={() => handleClick(3)}
                  >
                    <button
                      className={
                        isActive.key == 3
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      ✔️ Global Recognition
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 3
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseThree"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      USAAC’s framework is aligned with international
                      benchmarks, making your institution’s excellence visible
                      across borders.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingFour"
                    onClick={() => handleClick(4)}
                  >
                    <button
                      className={
                        isActive.key == 4
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      ✔️ Supportive Process
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 4
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseFour"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      We guide institutions every step of the way with
                      mentoring, training resources, and hands-on support during
                      the self-study and peer review phases.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingFour"
                    onClick={() => handleClick(5)}
                  >
                    <button
                      className={
                        isActive.key == 5
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      ✔️ Innovation-Driven Standards
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 5
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseFour"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      Our focus on future skills, sustainability, and digital
                      learning sets us apart from traditional accreditation
                      agencies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
