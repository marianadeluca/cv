import "./section-education.styles.scss";

import { useTranslation } from "react-i18next";

import UISectionTitle from "../../../ui/section-title/section-title";
import UIDatePeriod from "./../../../ui/date-period/date-period";

import Months from "../../../utils/enums/months";

function SectionEducation() {
  const { t } = useTranslation();
  const courseDesign = t("education.courseDesign");
  const courseGames = t("education.courseGames");

  const sectionEducationTitle = t("sections.education");

  const education = [
    {
      university: "UNESP/Bauru - Universidade Estadual Júlio de Mesquita Filho",
      startMonth: Months.FEBRUARY,
      startYear: 2008,
      endMonth: Months.NOVEMBER,
      endYear: 2014,
      course: courseDesign,
    },
    {
      university: "FATEC/Americana - Faculdade de Tecnologia de Americana",
      startMonth: Months.AUGUST,
      startYear: 2017,
      endMonth: Months.JUNE,
      endYear: 2021,
      course: courseGames,
    },
  ];

  return (
    <div className="education">
      <UISectionTitle titleText={sectionEducationTitle} />
      {education.map((course, index) => (
        <div key={index} className="education__course">
          <div className="education__course--period">
            <UIDatePeriod
              startPeriod={
                t(`months.${course.startMonth}`) + `/${course.startYear}`
              }
              endPeriod={t(`months.${course.endMonth}`) + `/${course.endYear}`}
            />
          </div>

          <div className="education__course--title">
            <h3>{course.course}</h3>
            <h4>{course.university}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionEducation;
