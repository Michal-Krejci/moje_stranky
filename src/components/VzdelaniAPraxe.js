import "./VzdelaniAPraxe.css";

const VzdelaniAPraxe = () => {
  return (
    <div className="about" id="about">
      <h3>Vzdělání a Praxe</h3>
      <h4>Vzdělání</h4>
      <div className="instituce">
        <p className="rok">2009 - 2013</p>
        <p className="skola">
          SOŠ A SOU Obchodu a Služeb Chrudim <br />
          obor Informatika a Ekonomie
        </p>
      </div>
      <div className="instituce">
        <p className="rok">2013 - 2014</p>
        <p className="skola">
          Univerzita Hradec Králové <br />
          obor Aplikovaná Informatika - nedokončené
        </p>
      </div>
      <div className="instituce">
        <p className="rok">2022</p>
        <p className="skola">SQL kurz online akademie UDEMY</p>
      </div>
      <div className="instituce">
        <p className="rok">2023</p>
        <p className="skola">
          Vysoká škola Báňská v Ostravě <br />
          Rekvalifikační kurz Programování a tvorba webových aplikací
        </p>
      </div>
      <h4>Praxe</h4>
      <div className="instituce">
        <p className="rok">Srpen 2014 - Leden 2016 </p>
        <p className="skola">
          <span className="firma">
            Ministerstvo zemědělství <br />
          </span>
          <span className="italic">
            Helpdesk <br />
          </span>
          - pomoc zaměstnancům při řešení jejich problémů s interním SW <br />-
          kategorizace, upřesnění detailů a předání bug tasku patřičnému týmu
        </p>
      </div>
      <div className="instituce">
        <p className="rok">Únor 2016 - Březen 2023</p>
        <p className="skola">
          <span className="firma">
            Betsys s.r.o. <br />
          </span>
          <span className="italic">
            Testování FE <br />
          </span>
          - Testování plné funkčnosti webu, správných přesměrování, <br />
          vzhledu, zobrazování správných dat <br />
          <span className="italic">
            Testování mobilních aplikací <br />
          </span>
          - Manuální testování mobilních aplikací, jejich funkčnost, <br />
          vzhled, zobrazování správných dat, notifikace, <br />
          input z klávesnice/hlasového ovládání, vklady a výběry peněz,
          <br />
          konzistentnost uživatelských dat, práce na real device i Browserstack
          <br />
          <span className="italic">
            Testování SQL DB <br />
          </span>
          - Testování na úrovni jednoduchých Selectů
        </p>
      </div>
    </div>
  );
};

export default VzdelaniAPraxe;
