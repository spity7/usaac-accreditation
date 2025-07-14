"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const survey = [
  {
    section: "Section 1: Leadership & Policy Commitment",
    questions: [
      "Is sustainability explicitly stated in your school’s mission, strategic plan, or policies?",
      "What long-term sustainability goals and targets are outlined in your school roadmap?",
      "Does your school have a sustainability or eco-committee with staff and student representatives?",
      "How often does leadership review and update environmental goals and initiatives?",
      "Are partnerships established with environmental organizations, universities, or green tech companies?",
      "What funding or budget allocations are dedicated to environmental and sustainability initiatives?",
      "Does your school report annually on environmental progress or publish a sustainability report?",
      "Are students involved in shaping green policy and environmental strategy at your school?",
      "What internal policies guide ethical procurement, waste reduction, and resource management?",
      "Is your school working toward any national or international green certification (e.g., LEED, Eco-Schools)?",
    ],
  },
  {
    section: "Section 2: Green Curriculum & Climate Education",
    questions: [
      "Is sustainability education integrated across subjects such as science, geography, civics, and economics?",
      "How are climate change, biodiversity, and circular economy topics addressed in lessons?",
      "Do students engage in hands-on environmental research, gardening, or citizen science projects?",
      "Are sustainability themes included in arts, literature, or humanities classes?",
      "Does your curriculum include units on environmental ethics and climate justice?",
      "What training or support do teachers receive to deliver sustainability-focused content?",
      "How is interdisciplinary collaboration fostered for sustainability-themed projects?",
      "Do students conduct or present sustainability capstones, portfolios, or exhibitions?",
      "Are learning outcomes for environmental literacy and eco-consciousness clearly defined and assessed?",
      "What tools (e.g., simulations, models, AI platforms) support climate education in your classrooms?",
    ],
  },
  {
    section: "Section 3: Campus Sustainability, Student Engagement & Impact",
    questions: [
      "Does your school use renewable energy (e.g., solar, wind, geothermal) on campus?",
      "What water-saving, composting, or recycling systems are in place across school facilities?",
      "Is your school building certified or designed with green architecture or energy-efficient systems?",
      "How do students contribute to maintaining school gardens, greenhouses, or eco-spaces?",
      "Are there active student-led environmental clubs, councils, or sustainability competitions?",
      "What community-based or global climate projects has your school participated in recently?",
      "Do students engage in local clean-up campaigns, tree planting, or conservation efforts?",
      "How is your school’s carbon footprint tracked, and what targets exist for reduction?",
      "Are AI-powered or smart monitoring systems used to track water, energy, or waste usage?",
      "What real-world sustainability solutions (e.g., patents, student-led startups) have emerged from your school?",
    ],
  },
];

export default function SgaQuestions() {
  // State for form values
  const [form, setForm] = useState(
    survey.flatMap((section, sIdx) =>
      section.questions.map((q, qIdx) => ({
        answer: "",
        note: "",
        file: null,
      }))
    )
  );

  const handleChange = (idx, field, value) => {
    setForm((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
      return updated;
    });
  };

  const handleFileChange = (idx, file) => {
    setForm((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], file };
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    alert("Form submitted! (Implement your logic)");
  };

  let questionIndex = 0;

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <section className="section-box wow animate__animated animate__fadeIn box-faqs-2">
          <div className="box-faqs-2-inner pt-50 pb-50">
            <div className="container">
              <div className="text-center">
                <Link className="btn btn-brand-5" href="#">
                  USAAC
                </Link>
                <h2 className="mb-25 mt-15 neutral-0">
                  Sustainable & Green Schools Accreditation (CDA)
                </h2>
                <p className="text-md neutral-500">
                  📌 <strong>Purpose: </strong> To help schools assess their
                  commitment to environmental sustainability, green
                  infrastructure, and climate education as outlined in the SGA
                  Accreditation Framework.
                  {/* <br className="d-none d-lg-block" />
                  providing clarity and support for your crypto journey */}
                </p>
                <div
                  style={{
                    margin: "24px auto 0 auto",
                    maxWidth: 600,
                    background:
                      "linear-gradient(90deg,#e0e7ff 0%,#f0fdfa 100%)",
                    borderRadius: 12,
                    padding: "18px 24px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <span style={{ fontWeight: 500, color: "#3b82f6" }}>
                    💡 Tip: Be honest and thorough. Attach supporting documents
                    for a stronger application!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="container"
          style={{
            maxWidth: 900,
            margin: "30px auto 40px",
            background: "#e0e7ff",
            borderRadius: 18,
            boxShadow: "0 4px 32px rgba(59,130,246,0.08)",
            padding: "5px 24px 32px",
          }}
        >
          <hr style={{ margin: "24px 0" }} />
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {survey.map((section, sIdx) => (
              <section key={section.section} style={{ marginBottom: 32 }}>
                <h2
                  style={{
                    fontSize: 22,
                    margin: "24px 0 12px",
                    color: "#2563eb",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    background:
                      "linear-gradient(90deg,#f0fdfa 0%,#e0e7ff 100%)",
                    borderRadius: 8,
                    padding: "8px 16px",
                  }}
                >
                  📍 {section.section}
                </h2>
                <ol start={sIdx * 10 + 1} style={{ paddingLeft: 24 }}>
                  {section.questions.map((q, qIdx) => {
                    const idx = questionIndex++;
                    // Check if question starts with Does, Is, Do, Are (case-insensitive)
                    const showRadio = /^(Does|Is|Do|Are)\b/i.test(q.trim());
                    return (
                      <li
                        key={q}
                        style={{
                          marginBottom: 32,
                          background: "#fff",
                          borderRadius: 10,
                          boxShadow: "0 2px 12px rgba(59,130,246,0.06)",
                          padding: "18px 18px 12px 18px",
                          borderLeft: "5px solid #3b82f6",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 600,
                            marginBottom: 10,
                            fontSize: 17,
                            color: "#0f172a",
                          }}
                        >
                          <span style={{ marginRight: 8, color: "#2563eb" }}>
                            {idx + 1}.
                          </span>
                          {q}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 18,
                            alignItems: "center",
                          }}
                        >
                          {showRadio ? (
                            <>
                              <div>
                                <label
                                  style={{
                                    marginRight: 18,
                                    fontWeight: 500,
                                    color: "#2563eb",
                                  }}
                                >
                                  <input
                                    type="radio"
                                    name={`answer-${idx}`}
                                    value="yes"
                                    required
                                    checked={form[idx].answer === "yes"}
                                    onChange={() =>
                                      handleChange(idx, "answer", "yes")
                                    }
                                    style={{ accentColor: "#3b82f6" }}
                                  />{" "}
                                  Yes
                                </label>
                                <label
                                  style={{ fontWeight: 500, color: "#ef4444" }}
                                >
                                  <input
                                    type="radio"
                                    name={`answer-${idx}`}
                                    value="no"
                                    required
                                    checked={form[idx].answer === "no"}
                                    onChange={() =>
                                      handleChange(idx, "answer", "no")
                                    }
                                    style={{ accentColor: "#ef4444" }}
                                  />{" "}
                                  No
                                </label>
                              </div>
                              <div style={{ flex: 1, minWidth: 180 }}>
                                <textarea
                                  placeholder="Add a note (optional)"
                                  value={form[idx].note}
                                  required
                                  onChange={(e) =>
                                    handleChange(idx, "note", e.target.value)
                                  }
                                  style={{
                                    width: "100%",
                                    minHeight: 38,
                                    resize: "vertical",
                                    borderRadius: 8,
                                    border: "1px solid #dbeafe",
                                    padding: "8px",
                                    fontSize: 15,
                                    background: "#f0fdfa",
                                  }}
                                />
                              </div>
                              <div>
                                <input
                                  type="file"
                                  onChange={(e) =>
                                    handleFileChange(idx, e.target.files[0])
                                  }
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <div style={{ flex: 1, minWidth: 180 }}>
                                <textarea
                                  placeholder="Add a note (optional)"
                                  value={form[idx].note}
                                  required
                                  onChange={(e) =>
                                    handleChange(idx, "note", e.target.value)
                                  }
                                  style={{
                                    width: "100%",
                                    minHeight: 38,
                                    resize: "vertical",
                                    borderRadius: 8,
                                    border: "1px solid #dbeafe",
                                    padding: "8px",
                                    fontSize: 15,
                                    background: "#f0fdfa",
                                  }}
                                />
                              </div>
                              <div>
                                <input
                                  type="file"
                                  onChange={(e) =>
                                    handleFileChange(idx, e.target.files[0])
                                  }
                                  style={{
                                    border: "1px solid #dbeafe",
                                    borderRadius: 8,
                                    padding: "6px",
                                    background: "#f8fafc",
                                  }}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
            <div
              className="box-buttons justify-content-center"
              style={{ marginTop: 32 }}
            >
              <button
                type="submit"
                className="btn btn-brand-4-medium mr-15 hover-up"
                style={{
                  fontSize: 18,
                  padding: "12px 32px",
                  borderRadius: 24,
                  background: "linear-gradient(90deg,#3b82f6 0%,#06b6d4 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  boxShadow: "0 2px 12px rgba(59,130,246,0.12)",
                  border: "none",
                  transition: "background 0.2s",
                }}
              >
                <span style={{ verticalAlign: "middle" }}>Submit Form</span>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: 8, verticalAlign: "middle" }}
                >
                  <path
                    d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <hr style={{ margin: "24px 0 0 0" }} />
      </Layout>
    </>
  );
}
