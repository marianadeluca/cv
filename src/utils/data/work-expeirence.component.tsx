import { useTranslation } from "react-i18next";
import WorkExperience from "../../types/Experience";
function WorkExperience() {
  const { t } = useTranslation();
  const experience = t("workExperience.experience");

  //   const workExperience = {
  //     name: experience.companyName,
  //     description:
  //   }
}

export default WorkExperience;
