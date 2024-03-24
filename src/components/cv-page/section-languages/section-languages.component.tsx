import "./section-languages.styles.scss";

import { useTranslation } from "react-i18next";

import UISectionTitle from "../../../ui/section-title/section-title";

function SectionLanguages() {
  const { t } = useTranslation();
  const sectionLanguagesTitle = t("sections.languages");
  return (
    <div className="languages">
      <div className="container">
        <UISectionTitle titleText={sectionLanguagesTitle} />
      </div>
      <h3>Inglês</h3>
      <h3>Espanhol</h3>
    </div>
  );
}

export default SectionLanguages;
