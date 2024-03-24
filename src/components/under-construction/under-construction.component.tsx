import "./under-construction.styles.scss";
import { useTranslation } from "react-i18next";

function UnderConstruction() {
  const { t } = useTranslation();
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
    </div>
  );
}

export default UnderConstruction;
