import "./section-title.scss";

interface UISectionTitleProps {
  titleText: string;
}

function UISectionTitle({ titleText }: UISectionTitleProps) {
  return (
    <div className="ui-section-title">
      <h2 className="ui-section-title__text">{titleText}</h2>
    </div>
  );
}

export default UISectionTitle;
