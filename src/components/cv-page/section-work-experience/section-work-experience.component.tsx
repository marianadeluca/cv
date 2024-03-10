import { useTranslation } from "react-i18next";

import UISectionTitle from "../../../ui/section-title/section-title";
import "./section-work-experience.styles.scss";

function SectionWorkExperience() {
  const { t } = useTranslation();
  const sectionWorkExperienceTitle = t("sections.workExperience");
  return (
    <div className="work-experience">
      <UISectionTitle titleText={sectionWorkExperienceTitle} />

      <div className="work-experience__information">
        <div className="work-experience__information--period">
          out/2022 - atualmente
        </div>
        <div className="work-experience__information--description"></div>
        <div className="work-experience__information--skill-tags"></div>
      </div>
    </div>
  );
}

export default SectionWorkExperience;
