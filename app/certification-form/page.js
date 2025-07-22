"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function CertificationForm() {
  const [form, setForm] = useState({
    org_name: "",
    primary_name: "",
    position: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    website: "",
    accreditationType: "",
    institutionLevel: [],
    readiness: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => {
        let levels = prev.institutionLevel;
        if (checked) {
          levels = [...levels, value];
        } else {
          levels = levels.filter((v) => v !== value);
        }
        return { ...prev, institutionLevel: levels };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    // Compose message for backend
    const message = `
Primary Contact Person: ${form.primary_name}
position: ${form.position}
Phone: ${form.phone}
Country: ${form.country}
Type of Accreditation Interested In: ${form.accreditationType}
Institution Level: ${form.institutionLevel.join(", ")}
Accreditation Readiness: ${form.readiness}

Message:
${form.message}
    `.trim();

    const payload = {
      name: form.org_name,
      email: form.email,
      message,
    };

    try {
      const res = await axios.post("/api/contact", payload, {
        headers: { "Content-Type": "application/json" },
      });
      const data = res.data;
      setResult({ type: "success", msg: data.success });
      setForm({
        org_name: "",
        primary_name: "",
        position: "",
        country: "",
        email: "",
        phone: "",
        website: "",
        accreditationType: "",
        institutionLevel: [],
        readiness: "",
        message: "",
      });
    } catch (err) {
      setResult({
        type: "error",
        msg: err.response?.data?.error || "Submission failed.",
      });
    }
    setSubmitting(false);
  }

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <div>
          <section className="section-box box-get-touch-section box-contact-form">
            <div className="container">
              <div className="row">
                <div className="mb-30">
                  <div className="text-center">
                    <Link className="btn btn-brand-4-sm" href="#">
                      USA Accreditation Council
                    </Link>
                    <h2 className="mb-20 mt-20">
                      🔹 CERTIFICATION APPLICATION FORM
                    </h2>
                    <p className="text-md neutral-700">
                      Provide us with your organization’s details and
                      certification goals. This form is the first step toward
                      having your program evaluated and certified by the USA
                      Accreditation Council (USAAC).
                    </p>
                  </div>
                  <div className="block-form-contact mt-45">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="fullname">
                            Organization/Provider Name:
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="org_name"
                            placeholder="Organization/Provider Name"
                            required
                            value={form.org_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="fullname">
                            Primary Contact Person:
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="primary_name"
                            placeholder="Primary Contact Person"
                            required
                            value={form.primary_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="fullname">Position/Title:</label>
                          <input
                            className="form-control"
                            type="text"
                            name="position"
                            placeholder="Position/Title"
                            required
                            value={form.position}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Email Address:</label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="email@website.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>Phone Number *</label>
                          <input
                            className="form-control"
                            type="tel"
                            name="phone"
                            placeholder="+1 234 567 8901"
                            required
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="fullname">Country & City *</label>
                          <input
                            className="form-control"
                            type="text"
                            name="country"
                            placeholder="Country"
                            required
                            value={form.country}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>Website (if Applicable):</label>
                          <input
                            className="form-control"
                            type="text"
                            name="website"
                            placeholder="Website"
                            required
                            value={form.website}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Certification Level:</label>
                          <select
                            className="form-control"
                            name="cert_level"
                            required
                            value={form.cert_level}
                            onChange={handleChange}
                          >
                            <option value="">Select one</option>
                            <option>• Certified Workshop (4–15 hours)</option>
                            <option>• Certified Course (16–60 hours)</option>
                            <option>
                              • Certified Professional Program (60+ hours)
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>Title of Program:</label>
                          <input
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Title"
                            required
                            value={form.title}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Total Duration (in hours):</label>
                          <input
                            className="form-control"
                            type="number"
                            name="duration"
                            placeholder="hours"
                            required
                            value={form.duration}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>Delivery Mode:</label>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="readiness"
                                value="In-person"
                                checked={form.readiness === "In-person"}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              In-person
                            </label>
                            <br />
                            <label>
                              <input
                                type="radio"
                                name="readiness"
                                value="Online"
                                checked={form.readiness === "Online"}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Online
                            </label>
                            <br />
                            <label>
                              <input
                                type="radio"
                                name="readiness"
                                value="Hybrid"
                                checked={form.readiness === "Hybrid"}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Hybrid
                            </label>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Target Audience:</label>
                          <input
                            className="form-control"
                            type="text"
                            name="audience"
                            placeholder="audience"
                            required
                            value={form.audience}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>
                            Estimated number of participants annually:
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="nb_participants"
                            placeholder="Participants"
                            required
                            value={form.nb_participants}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>
                            Certification Domain(s) (select all that apply):
                          </label>
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Education & Pedagogy"
                                checked={form.institutionLevel.includes(
                                  "Education & Pedagogy"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Education & Pedagogy
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Business & Entrepreneurship"
                                checked={form.institutionLevel.includes(
                                  "Business & Entrepreneurship"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Business & Entrepreneurship
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Technology & Digital Literacy"
                                checked={form.institutionLevel.includes(
                                  "Technology & Digital Literacy"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Technology & Digital Literacy
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="AI & Robotics"
                                checked={form.institutionLevel.includes(
                                  "AI & Robotics"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              AI & Robotics
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Sustainability & Environmental Studies"
                                checked={form.institutionLevel.includes(
                                  "Sustainability & Environmental Studies"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Sustainability & Environmental Studies
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Global Competencies & Leadership"
                                checked={form.institutionLevel.includes(
                                  "Global Competencies & Leadership"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Global Competencies & Leadership
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Social-Emotional & Ethical Skills"
                                checked={form.institutionLevel.includes(
                                  "Social-Emotional & Ethical Skills"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Social-Emotional & Ethical Skills
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Legal, Compliance, and Governance"
                                checked={form.institutionLevel.includes(
                                  "Legal, Compliance, and Governance"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Legal, Compliance, and Governance
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="level"
                                value="Other"
                                checked={form.institutionLevel.includes(
                                  "Other"
                                )}
                                onChange={handleChange}
                                style={{ height: "auto", width: "auto" }}
                              />{" "}
                              Other
                            </label>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm mt-10 mb-20 text-center">
                        📩 I affirm that all information and documentation
                        submitted in this application are accurate, complete,
                        and represent the genuine work of the submitting
                        provider. I further confirm that we own, control, or
                        have secured all necessary permissions, licenses, or
                        usage rights for the instructional content, assessments,
                        media, logos, and any other materials provided—and that
                        all copyrights, trademarks, and other intellectual
                        property rights are fully respected. I understand that
                        submission does not guarantee certification and that
                        additional documentation, clarification, or revisions
                        may be required by the USA Accreditation Council
                        (USAAC).
                      </p>

                      {result && (
                        <div
                          className={`alert ${
                            result.type === "success"
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                          style={{ marginBottom: 20 }}
                        >
                          {result.msg}
                        </div>
                      )}

                      <div className="form-group text-center">
                        <button
                          className="btn btn-black btn-rounded"
                          type="submit"
                          disabled={submitting}
                        >
                          {submitting ? "Sending..." : "Send Form"}
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
        </div>
      </Layout>
    </>
  );
}
