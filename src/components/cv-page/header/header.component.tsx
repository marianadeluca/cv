import "./header.styles.scss";
import dev from "../../../_assets/images/dev.svg";

function Header() {
  return (
    <>
      <div>
        <h3>Hello</h3>
      </div>
      <img className="header__code" alt="code" src={dev} />
      <div>
        <h1>Mariana De Luca</h1>
        <small>Developer</small>
      </div>
    </>
  );
}

export default Header;
