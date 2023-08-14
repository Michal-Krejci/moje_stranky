import "./Ukazky.css";

const Ukazky = () => {
  return (
    <div id="ukazky">
      <h3>Ukázky</h3>
      <h4>1. cvičení - bootstrap</h4>
      <p>
        Zadání - vytvořte stránku pro <br />
        <a
          href="https://cvicenihotel.netlify.app/"
          className="odkazy_ukazky"
          target="_blank"
        >
          hotel
        </a>
      </p>
      <h4>2. cvičení - JavaScript</h4>
      <p>
        Zadání - vytvořte kalkulačku cen pro <br />
        <a
          href="https://cvikojs.netlify.app/"
          className="odkazy_ukazky"
          target="_blank"
        >
          cyklopujčovnu
        </a>
      </p>
      <h4>3. cvičení - React</h4>
      <p>
        Zadání - vytvořte své portofolio stránky <br />
        To jsou tyto stránky :)
      </p>
    </div>
  );
};

export default Ukazky;
