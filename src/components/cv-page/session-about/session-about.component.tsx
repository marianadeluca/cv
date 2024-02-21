import "./session-about.styles.scss";
import { TypeAnimation } from "react-type-animation";

function SessionAbout() {
  return (
    <div className="about">
      <div className="container">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "We produce food for Mice",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "We produce food for Hamsters",
            1000,
            "We produce food for Guinea Pigs",
            1000,
            "We produce food for Chinchillas",
            10000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="about__animation"
        />

        <div className="about__text">
          <p>
            O que me motiva profissionalmente é a resolução de problemas e a
            oportunidade de aprender e superar desafios. Foi isso que encontrei
            na área de tecnologia, em que atuo e estou em constante
            desenvolvimento desde 2018. Como desenvolvedora de software que
            também é designer, concilio o olhar crítico do design com as
            melhores práticas de programação para a criação de interfaces
            digitais e aplicações web.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SessionAbout;
