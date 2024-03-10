import "./section-languages.styles.scss";

import { useTranslation } from "react-i18next";

import UISectionTitle from "../../../ui/section-title/section-title";

function SectionLanguages() {
  const { t } = useTranslation();
  const sectionLanguagesTitle = t("sections.languages");
  return (
    <div className="work-experience">
      <div className="container">
        <UISectionTitle titleText={sectionLanguagesTitle} />
      </div>
    </div>
  );
}

export default SectionLanguages;
