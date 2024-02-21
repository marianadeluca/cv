import "./cv-page.styles.scss";
import Header from "./header/header.component";
import SessionAbout from "./session-about/session-about.component";
import SessionWorkExperience from "./session-work-experience/session-work-expeirence.component";

// https://brittanychiang.com/#about

function CvPage() {
  return (
    <div className="cvpage">
      <Header></Header>
      <SessionAbout></SessionAbout>
      <SessionWorkExperience></SessionWorkExperience>
    </div>
  );
}

export default CvPage;
