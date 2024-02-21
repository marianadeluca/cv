import "./under-construction.styles.scss";
import { useTranslation } from "react-i18next";

function UnderConstruction() {
  const { t, i18n } = useTranslation();
  const userLocale = navigator?.languages?.length
    ? navigator.languages[0]
    : navigator.language;

  console.log(userLocale); // 👉️ "pr-BR", essa opção vai retornar o idioma preferencial

  // set language here?

  return (
    <div className="page-under-construction">
      <span className="page-under-construction__text">
        {t("underConstruction")}
      </span>

      <small className="page-under-construction__footer">
        @ {new Date().getFullYear()} Mariana De Luca Reis
      </small>
    </div>
  );
}

export default UnderConstruction;
