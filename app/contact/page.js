import LogoTicker from "@/components/elements/LogoTicker";
import Layout from "@/components/layout/Layout";
import Team2Slider from "@/components/slider/Team2Slider";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <div>
          <section className="section-box box-content-contact">
            <div className="container">
              <div className="text-center contact-head">
                <span className="icon-1 shape-1" />
                <span className="icon-2 shape-2" />
                <span className="btn btn-brand-4-sm">Contact Us</span>
                <h2 className="heading-2 mb-20 mt-15">
                  Get in Touch with USAAC
                </h2>
                <div className="text-center">
                  <nav className="container-breadcrumb">
                    <p>
                      Whether you're exploring accreditation for the first time
                      or you're a candidate institution needing guidance,
                      <br /> our team is here to help. Connect with us through
                      any of the options below.
                    </p>
                    {/* <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="#">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ul> */}
                  </nav>
                </div>
              </div>
              <div className="box-border-rounded">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <Link className="btn btn-brand-4-sm" href="#">
                      Contact Us
                    </Link>
                    <h3 className="mb-20 mt-20">🔹 Support</h3>
                    <p className="text-md neutral-700">
                      Contact us below and we will get back to you shortly.
                    </p>
                    <div className="row mt-50">
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/marketing.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">
                              1. Technical Support
                            </h3>
                            <p className="text-md neutral-700">
                              Help with the Candidate Portal, document upload,
                              or accreditation dashboard
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/digital.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">
                              2. Accreditation Support
                            </h3>
                            <p className="text-md neutral-700">
                              Assistance with the self-study, peer review
                              process, or documentation
                            </p>
                            {/* <div className="text-md neutral-700">
                              <div className="row">
                                <div className="col-sm-6">
                                  <Link href="/tel:+1(800)9684021">
                                    +1 (800) 968-40-21
                                  </Link>
                                  <br />
                                  <Link href="/tel:+(406)5550120">
                                    +(406) 555-0120
                                  </Link>
                                </div>
                                <div className="col-sm-6">
                                  <Link href="/tel:+1(800)9684021">
                                    (+68)1221 09876
                                  </Link>
                                  <br />
                                  <Link href="/tel:+(406)5550120">
                                    (+47)1221 09878
                                  </Link>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/digital.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">
                              3. Billing & Payments
                            </h3>
                            <p className="text-md neutral-700">
                              Questions about fees, invoices, and receipts
                            </p>
                            {/* <div className="text-md neutral-700">
                              <div className="row">
                                <div className="col-sm-6">
                                  <Link
                                    className="neutral-700"
                                    href="/mailto:sale@nivia.com"
                                  >
                                    sale@nivia.com
                                  </Link>
                                </div>
                                <div className="col-sm-6">
                                  <Link
                                    className="neutral-700"
                                    href="/mailto:contact@nivia.com"
                                  >
                                    contact@nivia.com
                                  </Link>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/digital.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">
                              4. Account Management
                            </h3>
                            <p className="text-md neutral-700">
                              Update institutional details or change points of
                              contact
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/digital.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">
                              3. Billing & Payments
                            </h3>
                            <div className="text-md neutral-700">
                              <div className="row">
                                <div className="col-sm-12">
                                  <Link
                                    className="neutral-700"
                                    href="/mailto:sale@nivia.com"
                                  >
                                    support@usaac.org
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 text-center">
                    <img src="/assets/imgs/page/contact/img-contact.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-get-touch-section box-contact-form">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <div className="block-map">
                    <div className="box-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11453964.633746002!2d-90.3207068!3d44.1822051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0125c1e421%3A0x35f48943b67a8126!2sMichigan%2C%20USA!5e0!3m2!1sen!2sus!4v1717171717171!5m2!1sen!2sus"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    {/* <p className="text-md neutral-600 text-center">
                      Hours: 8:00 - 17:00, Mon - Sat{" "}
                    </p> */}
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <Link className="btn btn-brand-4-sm" href="#">
                    Contact Us
                  </Link>
                  <h2 className="mb-20 mt-20">🔹 Inquiry Form</h2>
                  <p className="text-md neutral-700">
                    Let us know who you are and what you're looking for. This
                    form is the first step in starting your journey with USAAC.
                  </p>
                  <div className="block-form-contact mt-45">
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="fullname">Institution Name *</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Institution Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fullname">Country & City *</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Country & City"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Contact Person (Name & Position) *</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="John Doe, Student"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address *</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="email@website.com"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Phone Number *</label>
                        <input
                          className="form-control"
                          type="tel"
                          placeholder="+1 234 567 8901"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Type of Accreditation Interested In *</label>
                        <select className="form-control" required>
                          <option value="">Select one</option>
                          <option>K–12 Accreditation</option>
                          <option>Higher Education Accreditation</option>
                          <option>Vocational Training Accreditation</option>
                          <option>Online Learning Programs</option>
                          <option>International School Accreditation</option>
                          <option>STEM Programs</option>
                          <option>Bilingual/Multilingual Programs</option>
                          <option>Special Education Programs</option>
                          <option>Faith-Based Institutions</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Institution Level *</label>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="level"
                              value="K–12"
                              style={{ height: "auto", width: "auto" }}
                            />{" "}
                            K–12
                          </label>
                          <br />
                          <label>
                            <input
                              type="checkbox"
                              name="level"
                              value="Higher Ed"
                              style={{ height: "auto", width: "auto" }}
                            />{" "}
                            Higher Ed
                          </label>
                          <br />
                          <label>
                            <input
                              type="checkbox"
                              name="level"
                              value="Vocational"
                              style={{ height: "auto", width: "auto" }}
                            />{" "}
                            Vocational
                          </label>
                          <br />
                          <label>
                            <input
                              type="checkbox"
                              name="level"
                              value="Other"
                              style={{ height: "auto", width: "auto" }}
                            />{" "}
                            Other
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Accreditation Readiness *</label>
                        <div>
                          <label>
                            <input
                              type="radio"
                              name="readiness"
                              value="Exploring"
                              style={{ height: "auto", width: "auto" }}
                            />{" "}
                            Just exploring
                          </label>
                          <br />
                          <label>
                            <input
                              type="radio"
                              name="readiness"
                              value="Ready to apply"
                              style={{ height: "auto", width: "auto" }}
                            />{" "}
                            Ready to apply
                          </label>
                          <br />
                          <label>
                            <input
                              type="radio"
                              name="readiness"
                              value="Seeking expansion"
                              style={{ height: "auto", width: "auto" }}
                            />{" "}
                            Already accredited, seeking expansion
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Message *</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>

                      <p className="text-sm mt-10 mb-20">
                        📩 Submissions are reviewed within 2–3 business days.
                        You’ll receive a follow-up email with next steps.
                      </p>

                      <div className="form-group">
                        <button
                          className="btn btn-black btn-rounded"
                          type="submit"
                        >
                          Send Message
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
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="section-box wow animate__animated animate__fadeIn box-our-team-2">
            <div className="box-our-team-2-inner">
              <div className="container">
                <div className="text-center">
                  <Link className="btn btn-brand-4-sm" href="#">
                    Our people
                  </Link>
                  <h2 className="mb-20 mt-20">Meet Our Team</h2>
                  <p className="text-md neutral-500">
                    This is our team, a lot of smiling happy people who work
                    hard to
                    <br className="d-none d-lg-block" />
                    empower your teams.
                  </p>
                </div>
                <div className="box-swiper mt-60">
                  <Team2Slider />
                </div>
              </div>
            </div>
          </section> */}
          <section className="section-box wow animate__animated animate__fadeIn box-logos-4">
            <div className="container">
              <div
                className="carouselTickerLogos2 carouselTicker_vertical"
                id="slide-logos"
              >
                <LogoTicker />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
