"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const survey = [
  {
    section: "Section 1: Leadership & Institutional Commitment",
    questions: [
      "Is multilingual education explicitly embedded in the school’s mission, vision or strategic plan?",
      "What policy frameworks guide sustainable bilingual / multilingual growth (e.g., national language policy, CEFR alignment)?",
      "Does leadership allocate a dedicated budget for language programmes, faculty development and cultural exchanges?",
      "How are partnerships with universities, cultural institutes or international schools leveraged to enhance language offerings?",
      "Are targets for student proficiency (CEFR A1-C2 or equivalent) set and reviewed annually?",
      "What mechanisms ensure equitable access to bilingual tracks for learners of all backgrounds?",
      "Does the school conduct regular audits of physical, digital and human resources supporting multilingual goals?",
      "How are parents and the wider community engaged in supporting language learning and cultural events?",
      "Is progress toward MEA goals reported transparently to stakeholders each year?",
      "What contingency plans protect language programmes during disruptions (staff turnover, remote learning, funding cuts)?",
    ],
  },
  {
    section: "Section 2: Curriculum, Pedagogy & Faculty Development",
    questions: [
      "Do core subjects use dual-language instruction or CLIL to integrate content and language?",
      "How are student language-development plans tailored to individual proficiency levels?",
      "Are certified bilingual / multilingual teachers provided with ongoing training in immersion and second-language acquisition?",
      "What AI-driven or AR/VR tools support adaptive language practice and assessment?",
      "Does the curriculum include explicit cross-cultural competence and intercultural-communication outcomes?",
      "Are formal, standardised assessments (e.g., DELF, DELE, HSK, TOEFL) used to benchmark progress alongside CEFR levels?",
      "How is authentic literature and media from target-language cultures embedded across subjects?",
      "Do faculty participate in exchange programmes or observe best-practice schools abroad?",
      "Are digital portfolios or badges used to document students’ multilingual achievements?",
      "What systems exist for teachers of different languages to collaborate on transdisciplinary projects?",
    ],
  },
  {
    section: "Section 3: Student Experience, Global Competence & Evaluation",
    questions: [
      "Are immersive experiences (language clubs, cultural festivals, study-abroad or virtual exchanges) available to all learners?",
      "How do students apply multilingual skills in real-world contexts such as Model UN, debates, or community outreach?",
      "Is technology (chatbots, speech-recognition apps) used to provide instant feedback and personalised learning paths?",
      "Do students participate in international certification or dual-diploma programmes (e.g., IB Bilingual Diploma)?",
      "How are multicultural celebrations used to reinforce linguistic identity and mutual respect?",
      "Are AI analytics employed to track growth and adjust instruction for each language learner?",
      "What opportunities exist for peer tutoring or language-buddy systems across grade levels?",
      "Is student voice collected on the effectiveness and inclusivity of language programmes?",
      "How are alumni outcomes (university language credits, international careers) tracked to gauge long-term impact?",
      "Does the school engage in research or publish case studies on innovative multilingual practices?",
    ],
  },
];

export default function MeaQuestions() {
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
                  Multilingual Education Accreditation (MEA)
                </h2>
                <p className="text-md neutral-500">
                  📌 <strong>Purpose: </strong> align with research-based
                  guidance from UNESCO on mother-tongue and multilingual
                  education, the CEFR proficiency framework, and evidence on
                  CLIL and other immersion models.
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
