import Layout from "components/layout"
import { server } from "lib/config"
import { useState } from "react"

const ResumeSysAdmin = (props) => {
  const [resume, setResume] = useState(props["resumeProg"])
  const [resumeType, setResumeType] = useState("resumeProg")

  function printResume() {
    let prtContent = document.getElementById("resume")
    let WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    )
    WinPrint.document.write(prtContent.innerHTML)
    document
      .querySelectorAll("link")
      .forEach((link) =>
        WinPrint.document.head.appendChild(link.cloneNode(true))
      )
    document
      .querySelectorAll("style")
      .forEach((link) =>
        WinPrint.document.head.appendChild(link.cloneNode(true))
      )
    WinPrint.document.close()
    setTimeout(() => {
      WinPrint.focus()
      WinPrint.print()
      WinPrint.close()
    }, 1000)
  }

  return (
    <Layout title="Resume">
      <div className="resume__utils">
        <div className="resume__utils__type">
          <button
            onClick={() => {
              setResume(props["resumeSys"])
              setResumeType("resumeSys")
            }}
            className={resumeType === "resumeSys" ? "active" : ""}
          >
            System Admin
          </button>
          <button
            onClick={() => {
              setResume(props["resumeProg"])
              setResumeType("resumeProg")
            }}
            className={resumeType === "resumeProg" ? "active" : ""}
          >
            Programmer
          </button>
        </div>
        <button className="resume__utils__print" onClick={printResume}>
          Print
        </button>
      </div>

      <div id="resume">
        <main className="resume">
          <div className="head">
            <div className="portrait">
              <img src={resume.portrait} alt="zainsci" />
            </div>
            <div className="headings">
              <h1>{resume.name}</h1>
              <h3>{resume.role}</h3>
              <p>{resume.summary}</p>
            </div>
          </div>
          <div className="contacts">
            <ul>
              <li>
                <a href={`mailto:${resume.email}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  {resume.email}
                </a>
              </li>
              <li>
                <a href={`tel:${resume.tel.replace(/ /g, "")}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-smartphone"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                  {resume.tel}
                </a>
              </li>
              <li>
                <a href="https://zainsci.dev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {resume.location}
                </a>
              </li>
              <li>
                <a
                  href={"https://linkedin.com/in/" + resume.linkedin}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  linkedin.com/in/{resume.linkedin}
                </a>
              </li>
              <li>
                <a href={"https://" + resume.website} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  {resume.website}
                </a>
              </li>
              <li>
                <a
                  href={"https://twitter.com/" + resume.twitter}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                  twitter.com/{resume.twitter}
                </a>
              </li>
            </ul>
          </div>
          <div className="body">
            <section className="left">
              <div className="work">
                <h2>Work Experience</h2>
                {resume.work.map((role, i) => (
                  <div key={i}>
                    <h3>{role.title}</h3>
                    <h4>{role.company}</h4>
                    <div className="work__status">
                      <span>{role.status.location}</span>
                      <span>{role.status.time}</span>
                    </div>
                    <ul>
                      {role.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="certs">
                <h2>Certificates</h2>
                <ul>
                  {resume.certificates.map((cert, i) => (
                    <li key={i}>
                      <strong>{cert.short_name}</strong> - {cert.full_name}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="right">
              <div className="skills">
                <h2>Skills And Competencies</h2>
                <ul>
                  {resume.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="achievements">
                <h2>Projects</h2>
                <ul>
                  {resume.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              </div>
              <div className="langs">
                <h2>Languages</h2>
                <ul>
                  {resume.languages.map((lang, i) => (
                    <li key={i}>{lang}</li>
                  ))}
                </ul>
              </div>
              <div className="hobbies">
                <h2>Interests & Hobbies</h2>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-book"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    Reading
                  </li>

                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-code"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Programming
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-award"
                    >
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    Gaming
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    Writing
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default ResumeSysAdmin

export async function getServerSideProps() {
  const reqProg = await fetch(`${server}/assets/data/resume-programmer.json`)
  const reqSys = await fetch(`${server}/assets/data/resume-sysadmin.json`)
  const resumeProg = await reqProg.json()
  const resumeSys = await reqSys.json()

  return {
    props: {
      resumeProg,
      resumeSys,
    },
  }
}
