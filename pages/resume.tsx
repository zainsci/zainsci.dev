import Layout from "components/layout"
import Contacts from "components/resume/contacts"
import Skills from "components/resume/skills"
import ResumeList from "components/resume/list"
import Hobbies from "components/resume/hobbies"

import { server } from "lib/config"
import printResume from "lib/print"
import Header from "components/resume/header"
import Education from "components/resume/education"
import Work from "components/resume/work"

const ResumeSysAdmin = ({ resume }) => {
  const { portrait, name, role, summary } = resume

  return (
    <Layout title="Resume">
      <div className="resume__utils">
        <button className="print__resume" onClick={printResume}>
          Print
        </button>
      </div>

      <div id="resume">
        <main className="resume">
          <Header
            head={{
              portrait,
              name,
              role,
              summary,
            }}
          />
          <Contacts contacts={resume.contacts} />
          <div className="body">
            <section className="left">
              <Work workList={resume.work} />
              <Education education={resume.education} />
            </section>
            <section className="right">
              <Skills skills={resume.skills} />
              <ResumeList name="Projects" list={resume.projects} />
              <ResumeList name="Certificates" list={resume.certificates} />
              <ResumeList name="Languages" list={resume.languages} />
              <Hobbies />
            </section>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default ResumeSysAdmin

export async function getServerSideProps() {
  const req = await fetch(`${server}/assets/data/resume.json`)
  const resume = await req.json()

  return {
    props: {
      resume,
    },
  }
}
