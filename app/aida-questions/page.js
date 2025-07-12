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

export default function IeaQuestions() {
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
          <div className="box-faqs-2-inner">
            <div className="container">
              <div className="text-center">
                <Link className="btn btn-brand-5" href="#">
                  USAAC
                </Link>
                <h2 className="mb-25 mt-15 neutral-0">
                  AIDA AI & Digital Learning Accreditation (AIDA)
                </h2>
                <p className="text-md neutral-500">
                  📌 <strong>Purpose: </strong> Help your school evaluate
                  readiness for Edvisors' AI & Digital Learning Accreditation
                  (AIDA). Use this to identify current strengths and areas
                  needing development.
                  {/* <br className="d-none d-lg-block" />
                  providing clarity and support for your crypto journey */}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="container"
          style={{ maxWidth: 900, margin: "40px auto" }}
        >
          <hr style={{ margin: "24px 0" }} />
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {survey.map((section, sIdx) => (
              <section key={section.section} style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 20, margin: "24px 0 12px" }}>
                  📍 {section.section}
                </h2>
                <ol start={sIdx * 10 + 1} style={{ paddingLeft: 24 }}>
                  {section.questions.map((q, qIdx) => {
                    const idx = questionIndex++;
                    // Check if question starts with Does, Is, Do, Are (case-insensitive)
                    const showRadio = /^(Does|Is|Do|Are)\b/i.test(q.trim());
                    return (
                      <li key={q} style={{ marginBottom: 24 }}>
                        <div style={{ fontWeight: 500, marginBottom: 8 }}>
                          {q}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 16,
                            alignItems: "center",
                          }}
                        >
                          {showRadio ? (
                            <div>
                              <label>
                                <input
                                  type="radio"
                                  name={`answer-${idx}`}
                                  value="yes"
                                  required
                                  checked={form[idx].answer === "yes"}
                                  onChange={() =>
                                    handleChange(idx, "answer", "yes")
                                  }
                                />{" "}
                                Yes
                              </label>
                              <label style={{ marginLeft: 12 }}>
                                <input
                                  type="radio"
                                  name={`answer-${idx}`}
                                  value="no"
                                  required
                                  checked={form[idx].answer === "no"}
                                  onChange={() =>
                                    handleChange(idx, "answer", "no")
                                  }
                                />{" "}
                                No
                              </label>
                            </div>
                          ) : (
                            <>
                              <div style={{ flex: 1, minWidth: 180 }}>
                                <textarea
                                  placeholder="Add a note (required)"
                                  value={form[idx].note}
                                  required
                                  onChange={(e) =>
                                    handleChange(idx, "note", e.target.value)
                                  }
                                  style={{
                                    width: "100%",
                                    minHeight: 32,
                                    resize: "vertical",
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
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
            <div className="box-buttons justify-content-center">
              <Link
                className="btn btn-brand-4-medium mr-15 hover-up"
                href="/iea-questions"
              >
                Submit Form
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
          </form>
        </div>
        <hr style={{ margin: "24px 0 0 0" }} />
      </Layout>
    </>
  );
}
