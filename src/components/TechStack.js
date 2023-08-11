import "./TechStack.css";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiBootstrap,
  DiPostgresql,
  DiPhp,
  DiGithubBadge,
} from "react-icons/di";

const TechStack = () => {
  return (
    <div className="tech-stack" id="tech-stack">
      <h3>Tech-Stack</h3>
      <div className="stack">
        <div className="sloupec-ikon">
          <DiHtml5 className="icon html5" />
          <span className="text">HTML5</span>
        </div>
        <div className="sloupec-ikon">
          <DiBootstrap className="icon bootstrap" />
          <span className="text">Bootstrap</span>
        </div>
      </div>
      <div className="stack">
        <div className="sloupec-ikon">
          <DiCss3 className="icon css3" />
          <span className="text">CSS3</span>
        </div>
        <div className="sloupec-ikon">
          <DiJavascript className="icon javascript" />
          <span className="text">JavaScript</span>
        </div>
      </div>
      <div className="stack">
        <div className="sloupec-ikon">
          <DiReact className="icon react" />
          <span className="text">React</span>
        </div>
        <div className="sloupec-ikon">
          <DiPostgresql className="icon pgsql" />
          <span className="text">PgSQL</span>
        </div>
      </div>
      <div className="stack">
        <div className="sloupec-ikon">
          <DiPhp className="icon php" />
          <span className="text">PHP</span>
        </div>
        <div className="sloupec-ikon">
          <DiGithubBadge className="icon git" />
          <span className="text">GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
