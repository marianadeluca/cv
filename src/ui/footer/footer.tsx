import "./footer.scss";

function UIFooter() {
  return (
    <small className="footer">
      @ {new Date().getFullYear()} Mariana De Luca Reis
    </small>
  );
}

export default UIFooter;
