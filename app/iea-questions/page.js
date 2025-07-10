"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const survey = [
  {
    section: "Section 1: General Innovation Readiness",
    questions: [
      "Does your school have a dedicated innovation strategy or policy in place?",
      "How does your school define innovation in education?",
      "Is innovation integrated into your school’s mission and vision?",
      "Do teachers and staff receive regular training on innovative teaching methodologies?",
      "What percentage of your curriculum incorporates project-based or experiential learning?",
      "Do you provide innovation spaces (e.g., STEM labs, makerspaces, AI labs)?",
      "Does the school encourage cross-disciplinary learning (e.g., integrating STEM with arts or humanities)?",
      "What funding or resources are allocated for innovation initiatives annually?",
      "Are students encouraged to design their own projects and explore independent research?",
      "Is there a structured evaluation and feedback mechanism to measure innovation effectiveness?",
    ],
  },
  {
    section: "Section 2: Leadership & School Culture",
    questions: [
      "Does the leadership team actively promote a culture of creativity and innovation?",
      "How often does the school conduct brainstorming or ideation sessions for staff and students?",
      "Are students involved in decision-making processes related to school innovation initiatives?",
      "Does the school organize innovation competitions, hackathons, or entrepreneurial challenges?",
      "Are there mentorship programs that connect students with industry experts or professionals?",
      "How does your school encourage teacher collaboration and innovation-sharing?",
      "Does your school’s leadership invest in new technologies to improve learning outcomes?",
      "How are failures and experimentation perceived in the school culture? (e.g., are students encouraged to take risks and learn from mistakes?)",
      "Does your school have a dedicated innovation coordinator or department?",
      "How do you measure the impact of innovative initiatives on student learning and development?",
    ],
  },
  {
    section: "Section 3: Student-Centered Innovation & Problem-Solving",
    questions: [
      "How does your school incorporate real-world problem-solving into the curriculum?",
      "Are students given opportunities to develop solutions for local/global challenges?",
      "Does your school offer entrepreneurship and startup education?",
      "What percentage of students participate in extracurricular innovation-related activities?",
      "Are students actively involved in coding, robotics, AI, or emerging technologies?",
      "Does your school collaborate with non-profits, businesses, or research institutions to foster innovation?",
      "Are students allowed to create and showcase their innovative ideas (e.g., at science fairs, innovation expos, or school exhibitions)?",
      "Does the school provide seed funding or grants to support student innovation projects?",
      "How does your school integrate design thinking and problem-solving frameworks in learning?",
      "What impact have student-led innovations had within the school or broader community?",
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
                  Innovation in Education Accreditation (IEA)
                </h2>
                <p className="text-md neutral-500">
                  📌 <strong>Purpose: </strong> This self-assessment survey
                  helps schools evaluate their innovation readiness before
                  applying for Edvisors’ IEA Accreditation. Schools should
                  answer these questions to determine their eligibility and
                  identify areas for improvement.
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
