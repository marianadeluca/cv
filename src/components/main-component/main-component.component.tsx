import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./main-component.styles.scss";
import UnderConstruction from "../under-construction/under-construction.component";
import CvPage from "../cv-page/cv-page.component";

function MainComponent() {
  const [enterSite, setEnterSite] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  // https://www.freecodecamp.org/news/how-to-use-settimeout-in-react-using-hooks/

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") setEnterSite(true);
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const { t } = useTranslation();

  const enterCvPage = (btnPressed: boolean) => {
    setEnterSite(true);
    return btnPressed;
  };

  if (enterSite) {
    return <CvPage />;
  }
  return (
    <>
      <div></div>
      <UnderConstruction />
      <div className="container">
        <button
          className={`btn-enter ${
            showButton ? "btn-enter__fade-in-out" : "btn-enter__hidden"
          }`}
          onClick={() => {
            enterCvPage(true);
          }}
        >
          {t("enterBtn")}
        </button>
      </div>
    </>
  );
}
export default MainComponent;
