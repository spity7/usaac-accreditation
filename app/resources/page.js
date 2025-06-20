"use client";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useState } from "react";

export default function Resources() {
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
      <Layout
        headerStyle={1}
        footerStyle={2}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <div>
          <section className="section-box box-faqs-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="box-faq-left">
                    <Link className="btn btn-brand-4-sm" href="#">
                      Frequently Asked Questions
                    </Link>
                    <h2 className="heading-2 mb-20 mt-20">
                      Resources – Support for Your Accreditation Journey
                    </h2>
                    <p className="text-lg neutral-700">
                      Whether you're just getting started or preparing for a
                      peer review, this section offers tools and guidance to
                      help your institution achieve and maintain high-quality
                      accreditation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
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
                          What types of institutions does USAAC accredit?
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
                            USAAC provides accreditation for a wide range of
                            institutions including K–12 schools, international
                            schools, bilingual and multilingual programs, online
                            learning providers, technical/vocational training
                            centers, and specialized education programs (e.g.,
                            robotics, AI, leadership). Each accreditation is
                            tailored to the institution’s focus and mission.
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
                          What makes USAAC different from other accreditation
                          bodies?
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
                          USAAC stands out by offering innovative,
                          future-focused accreditation types such as:
                          <br />• AI & Digital Learning
                          <br />• Cybersecurity & Digital Ethics
                          <br />• STEAM & Robotics
                          <br />
                          We also offer 3-tiered recognition (Standard,
                          Advanced, Elite), continuous development resources,
                          and a strong emphasis on inclusion, sustainability,
                          and global relevance.
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
                          Is USAAC recognized internationally?
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
                          Yes. USAAC’s standards are benchmarked against
                          globally recognized frameworks including OECD Future
                          of Education, UNESCO Education 2030, ISTE, and
                          international education quality indicators.
                          USAAC-accredited schools are part of a growing global
                          network of institutions recognized for innovation and
                          excellence.
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
                          Can schools outside the U.S. apply for accreditation?
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
                          Absolutely. USAAC is a global accrediting body.
                          Schools in Africa, the Middle East, Asia, Europe, and
                          Latin America are welcome to apply. We offer virtual
                          site visits, multilingual support, and regional
                          liaisons to facilitate the process.
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
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Can we apply for more than one accreditation at the
                          same time?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 5
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          Yes. Many institutions pursue multiple accreditations
                          (e.g., Innovation + Sustainability + AI). USAAC offers
                          bundled assessments and can coordinate a single peer
                          review for multiple areas.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-headingFour"
                        onClick={() => handleClick(6)}
                      >
                        <button
                          className={
                            isActive.key == 6
                              ? "accordion-button "
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          How long does it take to get accredited?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 6
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          On average, the full process takes 3 to 6 months,
                          depending on how quickly your institution completes
                          the self-study and documentation. Fast-track reviews
                          are available for schools with existing accreditation.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-headingFour"
                        onClick={() => handleClick(7)}
                      >
                        <button
                          className={
                            isActive.key == 7
                              ? "accordion-button "
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What happens during the peer review visit?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 7
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          A trained USAAC review team will:
                          <br />• Validate your self-study
                          <br />• Visit (in person or virtually) your
                          classrooms, labs, and learning spaces
                          <br />• Conduct interviews with students, teachers,
                          and administrators
                          <br />• Review your policies, student work, and
                          assessments
                          <br />A summary report with commendations and
                          recommendations is issued after the visit.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-headingFour"
                        onClick={() => handleClick(8)}
                      >
                        <button
                          className={
                            isActive.key == 8
                              ? "accordion-button "
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What happens if we don’t meet the full criteria?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 8
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          USAAC offers developmental support. You may receive:
                          <br />• Provisional Accreditation (valid for 1 year)
                          <br />• A corrective action plan with mentorship
                          <br />• The opportunity to reapply within 12 months
                          after addressing the concerns
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-headingFour"
                        onClick={() => handleClick(9)}
                      >
                        <button
                          className={
                            isActive.key == 9
                              ? "accordion-button "
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What support does USAAC offer during the accreditation
                          process?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 9
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          All candidate institutions receive:
                          <br />• Access to the Candidate Portal
                          <br />• A dedicated USAAC advisor
                          <br />• Training sessions and webinars
                          <br />• Sample self-studies and templates
                          <br />• Help desk and technical support
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-headingFour"
                        onClick={() => handleClick(10)}
                      >
                        <button
                          className={
                            isActive.key == 10
                              ? "accordion-button "
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Is there a renewal process after accreditation is
                          granted?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 10
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          Yes. Accreditation is valid for 5 years. At the
                          2.5-year mark, institutions submit an interim progress
                          report. A full reaccreditation review occurs in year
                          5, which includes updated documentation and a new peer
                          review.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-headingFour"
                        onClick={() => handleClick(11)}
                      >
                        <button
                          className={
                            isActive.key == 11
                              ? "accordion-button "
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What are the costs associated with USAAC
                          accreditation?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 11
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          Fees vary depending on:
                          <br />• Type(s) of accreditation
                          <br />• Size of the institution
                          <br />• Whether the visit is virtual or on-site
                          <br />A complete fee schedule is available upon
                          request via our [Inquiry Form].
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-headingFour"
                        onClick={() => handleClick(12)}
                      >
                        <button
                          className={
                            isActive.key == 12
                              ? "accordion-button "
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Can we use the USAAC logo and badge after
                          accreditation?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 12
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        id="flush-collapseFour"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFAQS"
                      >
                        <div className="accordion-body">
                          Yes. Accredited institutions receive:
                          <br />• A digital certificate and logo
                          <br />• A website badge
                          <br />• Social media and PR templates
                          <br />
                          Usage guidelines are provided to ensure consistent
                          representation of your achievement.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
