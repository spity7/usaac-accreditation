import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer className="footer footer-style-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 footer-1">
              <Link href="/">
                <img
                  alt="Nivia"
                  src="/assets/imgs/template/USAAC certificate-03-03.png"
                />
              </Link>
              {/* <div className="mt-20 mb-20">
                <p className="text-md neutral-700">
                  <span className="neutral-1000">Phone:</span> (000) 123 456 789
                </p>
                <p className="text-md neutral-700">
                  <span className="neutral-1000">Email:</span>{" "}
                  youremail@gmail.com
                </p>
                <p className="text-md neutral-700">
                  <span className="neutral-1000">Address:</span> 102 Seddon
                  Park, Hamilton New Zealnd
                </p>
              </div> */}
              {/* <h6>Newsletter</h6>
              <div className="form-newsletter">
                <form>
                  <input
                    className="form-control border-gradient border-gradient-green"
                    type="text"
                    placeholder="email address"
                  />
                  <button className="btn btn-green-linear">
                    Subscribe
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
                  </button>
                </form>
              </div> */}
            </div>
            <div className="col-md-2 col-xs-6 footer-2">
              <h6>Innovation & Digital Learning:</h6>
              <ul className="menu-footer">
                <li>
                  <a href="/iea-accreditation">Innovation in Education (IEA)</a>
                </li>
                <li>
                  <a href="">AI & Digital Learning (AIDA)</a>
                </li>
                <li>
                  <a href="">STEAM & Robotics (SRA)</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-xs-6 footer-3">
              <h6>Future-Ready Education:</h6>
              <ul className="menu-footer">
                <li>
                  <a href="">Future Skills & Career Readiness (FSCA)</a>
                </li>
                <li>
                  <a href="">Leadership & Character Development (LCA)</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-xs-6 footer-4">
              <h6>Inclusive & Global Education:</h6>
              <ul className="menu-footer">
                <li>
                  <a href="">Multilingual Education (MEA)</a>
                </li>
                <li>
                  <a href="">Inclusive & Adaptive Learning (ILA)</a>
                </li>
                <li>
                  <a href="">Global Academic Excellence (GAE)</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-6 footer-5">
              <h6>Safety & Sustainability:</h6>
              <ul className="menu-footer">
                <li>
                  <a href="">Cybersecurity & Digital Ethics (CDA)</a>
                </li>
                <li>
                  <a href="">Sustainable & Green Schools (SGA)</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-50">
            <div className="row">
              <div className="col-md-6">
                <p className="text-sm neutral-600">
                  Copyright © 2025 Appsido. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end text-start">
                <ul className="menu-bottom-footer">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
