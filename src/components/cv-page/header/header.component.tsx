import "./header.styles.scss";
import dev from "../../../_assets/images/dev.svg";

import {
  PiEnvelopeLight,
  PiGithubLogoLight,
  PiReadCvLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__code" alt="code" src={dev} />
        <div>
          <h1 className="header__title">
            <span className="header__title--highlight">Mariana</span> De Luca
          </h1>
          <small className="header__description">
            {"<!"}-- developer --{">"}
          </small>
        </div>

        <div className="div header__links">
          <PiEnvelopeLight />
          <PiWhatsappLogoLight />
          <PiGithubLogoLight />
          <PiReadCvLogoLight />
        </div>
      </div>
    </>
  );
}

export default Header;
