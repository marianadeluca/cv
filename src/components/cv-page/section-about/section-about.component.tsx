import "./section-about.styles.scss";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

function SectionAbout() {
  const { t } = useTranslation();
  const greetingName = t("greetings.name");
  const greetingDeveloper = t("greetings.developer");
  return (
    <section className="about">
      <div className="about__animation">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Hello World!",
            1000,
            greetingName,
            1000,
            greetingDeveloper,
            25000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="about__animation--text"
        />
      </div>

      <div className="about__text">
        <p>
          O que me motiva profissionalmente é a resolução de problemas e a
          oportunidade de aprender e superar desafios. Foi isso que encontrei na
          área de tecnologia, em que atuo e estou em constante desenvolvimento
          desde 2018.
        </p>
        <p>
          Como desenvolvedora de software que também é designer, concilio o
          olhar crítico do design com as melhores práticas de programação para a
          criação de interfaces digitais e aplicações web.{" "}
        </p>
      </div>
    </section>
  );
}

export default SectionAbout;
