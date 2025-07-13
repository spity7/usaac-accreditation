"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const survey = [
  {
    section: "Section 1: General Readiness for Accreditation",
    questions: [
      "Does your school have a clear digital transformation plan aligned with your educational vision?",
      "How are stakeholders (staff, students, families) involved in shaping and understanding this vision?",
      "What formal plans exist for technology integration, infrastructure, and sustainability?",
      "Do all students and teachers have reliable access to devices and high-speed internet?",
      "What types of training do teachers receive in digital tools and AI-enhanced learning?",
      "Are there policies in place to protect student data, ensure cybersecurity, and guide responsible AI use?",
      "How does your school use data and learning analytics to measure digital learning impact?",
      "Is there a team or committee responsible for monitoring digital initiatives and evaluating progress?",
      "What opportunities exist for piloting innovative tools, platforms, or AI-based solutions?",
      "Does the school have digital continuity or disaster recovery protocols for online learning platforms?",
    ],
  },
  {
    section: "Section 2: Leadership & School Culture",
    questions: [
      "Do school leaders actively promote ethical and responsible AI use in education?",
      "Is the budget specifically allocated to support AI and digital learning goals?",
      "How does your school ensure equity and inclusion in all digital learning initiatives?",
      "What structures are in place to govern and oversee AI and EdTech implementation?",
      "Are teachers encouraged and supported to take leadership roles in EdTech or AI projects?",
      "Does the school publicly share its stance or policies on AI use with students and families?",
      "How are innovation and digital achievements recognized or celebrated within your school?",
      "What systems are in place to ensure transparent and ethical use of student performance data?",
      "Are your policies aligned with international standards on AI ethics, such as those by UNESCO or OECD?",
      "Does your school conduct internal reviews or benchmarking against national/international EdTech standards?",
    ],
  },
  {
    section: "Section 3: Student-Centered Learning",
    questions: [
      "Are adaptive or AI-powered tools used to personalize student learning? If yes, which tools?",
      "How is AI or computational thinking integrated into your curriculum (e.g., robotics, coding)?",
      "Do students have opportunities to build, create, or collaborate using AI tools or platforms?",
      "What support is in place to provide personalized learning for students with different learning needs?",
      "Is digital citizenship and AI ethics part of the student learning experience?",
      "Are assistive technologies using AI (e.g., text-to-speech, translation tools) provided for students with disabilities?",
      "How do teachers use real-time data or analytics to adapt instruction or interventions?",
      "Do students participate in decision-making related to EdTech tools and classroom technology use?",
      "Are students involved in exhibitions, competitions, or innovation hubs focused on AI or EdTech?",
      "What processes are in place to evaluate and improve AI-powered teaching and learning practices?",
    ],
  },
];

export default function AidaQuestions() {
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
                  AI & Digital Learning Accreditation (AIDA)
                </h2>
                <p className="text-md neutral-500">
                  📌 <strong>Purpose: </strong> Help your school evaluate
                  readiness for Edvisors' AI & Digital Learning Accreditation
                  (AIDA). Use this to identify current strengths and areas
                  needing development.
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
