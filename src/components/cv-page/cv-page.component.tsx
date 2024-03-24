import Experience from "../../types/Experience";
import UIFooter from "../../ui/footer/footer";
import "./cv-page.styles.scss";
import Header from "./header/header.component";
import SectionAbout from "./section-about/section-about.component";
import SectionEducation from "./section-education/section-education.component";
import SectionLanguages from "./section-languages/section-languages.component";
import SectionWorkExperience from "./section-work-experience/section-work-experience.component";
import Period from "./../../types/Period";

// https://brittanychiang.com/#about
// https://www.taniarascia.com/
// https://davidmiller.io/

const workExperience: Experience = {
  companyName: "Netwire",
  periodStart: {
    startPeriod: "JUN",
  },
  periodEnd: {
    startPeriod: "JUN",
  },
  description: "abc",
  skills: {
    name: "FrontEnd",
  },
};

function CvPage() {
  return (
    <>
      <div className="cvpage">
        <div className="cvpage__header">
          <Header></Header>
        </div>
        <div className="cvpage__sections">
          <SectionAbout />
          <SectionWorkExperience experience={workExperience} />
          <SectionEducation />
          <SectionLanguages />
        </div>
        <div className="cvpage__footer">
          <UIFooter />
        </div>
      </div>
    </>
  );
}

export default CvPage;
