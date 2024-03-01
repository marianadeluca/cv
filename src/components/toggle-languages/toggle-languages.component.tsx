import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./toggle-languages.styles.scss";
import bra from "../../_assets/images/bra.svg";
import eng from "../../_assets/images/eng.svg";

function ToggleLanguages() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  console.log("selectedLanguage: ", selectedLanguage);

  const toggleLanguage = (language: string) => {
    console.log("language ", language);
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <>
      <div className="toggle-languages">
        <div className="container">
          <button
            onClick={() => {
              toggleLanguage("pt");
            }}
            className="toggle-languages__btn"
          >
            {/* <img
            alt="português"
            src={bra}
            height={20}
            className={selectedLanguage === "pt" ? "normal" : "gray"}
          /> */}
            <span
              className={`${
                selectedLanguage === "pt" ? "normal" : "gray"
              } toggle-languages__btn--pt`}
            >
              PT
            </span>
          </button>

          <button
            onClick={() => {
              toggleLanguage("en");
            }}
            className="toggle-languages__btn"
          >
            {/* <img
            alt="english"
            src={eng}
            height={20}
            className={selectedLanguage === "en" ? "normal" : "gray"}
          /> */}
            <span
              className={`${
                selectedLanguage === "en" ? "normal" : "gray"
              } toggle-languages__btn--en`}
            >
              EN
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ToggleLanguages;
