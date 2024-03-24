import { useTranslation } from "react-i18next";

import UISectionTitle from "../../../ui/section-title/section-title";
import "./section-work-experience.styles.scss";
import Months from "../../../utils/enums/months";
import Experience from "../../../types/Experience";
import UIDatePeriod from "../../../ui/date-period/date-period";

interface WorkExperience {
  experience: Experience;
}

function SectionWorkExperience({ experience }: WorkExperience) {
  const { t } = useTranslation();

  const sectionWorkExperienceTitle = t("sections.workExperience.title");

  // const workExperience: Experience[] = [];

  const workExperiences = [
    {
      companyName: "Encoda",
      startMonth: Months.JANUARY,
      startYear: 2018,
      endMonth: Months.JULY,
      endYear: 2019,
      description: "blablabla",
      location: "Americana/SP",
      homeOffice: false,
    },
    {
      companyName: "Thomson Reuters",
      startMonth: Months.AUGUST,
      startYear: 2019,
      endMonth: Months.MAY,
      endYear: 2021,
      description: "blablabla",
      location: "Campinas/SP",
      homeOffice: true || false,
    },
    {
      companyName: "Ramper",
      startMonth: Months.JUNE,
      startYear: 2021,
      endMonth: Months.SEPTEMBER,
      endYear: 2022,
      description: "blablabla",
      location: "São Paulo/SP",
      homeOffice: true,
    },
    {
      companyName: "Ben Fatto",
      startMonth: Months.OCTOBER,
      startYear: 2022,
      endMonth: Months.MARCH,
      endYear: 2024,
      description: "blablabla",
      location: "Campinas/SP",
      homeOffice: true,
    },
  ];

  return (
    <>
      <UISectionTitle titleText={sectionWorkExperienceTitle} />

      {workExperiences.map((experience, index) => (
        <div className="work-experience">
          <div className="work-experience__period">
            <UIDatePeriod
              startPeriod={
                t(`months.${experience.startMonth}`) +
                `/${experience.startYear}`
              }
              endPeriod={
                t(`months.${experience.endMonth}`) + `/${experience.endYear}`
              }
            />
          </div>

          <div className="work-experience__details">
            <h3 className="work-experience__details--companyName">
              {experience.companyName}
            </h3>
            <h4 className="work-experience__details--role">
              ({t(`workExperience.${experience.companyName}.role`)})
            </h4>
            <p className="work-experience__details--description">
              {t(`workExperience.${experience.companyName}.description`)}
              <small className="work-experience__details--location">
                {experience.location}
              </small>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default SectionWorkExperience;
