"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const survey = [
  {
    section: "Section 1: Strategic Readiness & Leadership Vision",
    questions: [
      "Does your school have a written strategic plan that prioritises future-ready skills and career preparation?",
      "How do leaders integrate insights from labour-market reports (e.g., WEF “Future of Jobs”) into that plan?",
      "What partnerships exist with businesses, universities, or workforce-development organisations?",
      "Is funding specifically allocated for career-readiness initiatives, entrepreneur programmes, and STEM resources?",
      "Do governance structures assign clear responsibility for tracking FSCA goals and outcomes?",
      "How are parents, alumni, and industry mentors involved in steering future-skills projects?",
      "Does the school foster an entrepreneurial culture through policies that encourage student-led ventures?",
      "Are metrics in place to measure student employability, university admissions, or startup success after graduation?",
      "What processes ensure that equity and accessibility guide all future-skills and career programmes?",
      "How often is the strategic vision reviewed to keep pace with emerging technologies and job-market changes?",
    ],
  },
  {
    section: "Section 2: Curriculum, Pedagogy & Innovation",
    questions: [
      "Is STEM (science, technology, engineering, maths) and digital-literacy content embedded across grade levels?",
      "What coding, computational-thinking, or robotics experiences are offered to students?",
      "Do project-based learning units incorporate real industry case-studies or community challenges?",
      "How is entrepreneurship and financial-literacy instruction integrated into the curriculum?",
      "Are teachers trained to use AI-driven or adaptive platforms that personalise learning pathways?",
      "Does your school assess 21st-century skills—creativity, critical thinking, communication, collaboration—through competency-based rubrics?",
      "What AR/VR, simulation, or makerspace technologies support experiential learning?",
      "Do students have structured opportunities to prototype, pitch, and refine their own products or services?",
      "How is digital-citizenship and ethical technology use addressed within future-skills courses?",
      "Are curriculum reviews benchmarked against international future-skills frameworks such as OECD “Career Ready?” indicators?",
    ],
  },
  {
    section: "Section 3: Career Readiness, Mentorship & Student Experience",
    questions: [
      "Do students participate in internships, apprenticeships, or job-shadowing aligned to their interests?",
      "How are mentors from diverse industries matched with students for guidance and networking?",
      "Is an AI-powered career-guidance tool used to personalize study plans and recommend growth areas?",
      "What processes capture student voice when designing career-readiness or work-based-learning opportunities?",
      "Are student-run businesses or innovation hubs provided with seed funding, workspace, and faculty coaching?",
      "Does the school host or join entrepreneurship competitions, hackathons, or global challenge programmes?",
      "How is cybersecurity and responsible AI practice included in career-oriented tech activities?",
      "Are career outcomes (employment, tertiary acceptance, startup formation) tracked for at least three years after graduation?",
      "What channels allow employers and alumni to give feedback on graduates’ preparedness and emerging skill gaps?",
      "Is a continuous-improvement cycle in place to refine mentorship, industry partnerships, and upskilling opportunities each year?",
    ],
  },
];

export default function SraQuestions() {
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
                  Future Skills & Carear Readiness Accreditation (FSCA)
                </h2>
                <p className="text-md neutral-500">
                  📌 <strong>Purpose: </strong> The prompts align with research
                  and standards from the World Economic Forum, OECD, and ISTE
                  that describe the competencies young people need for the
                  future workforce.
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
