import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Kontakt.css";

const Kontakt = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w7qqxd8",
        "template_0tcnpsj",
        form.current,
        "qqSnR7UrOSXH2UJMa"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="kontakt">
      <h3>Kontakt</h3>
      <p className="cislo">728 863 351</p>
      <p className="mail">Pošlete mi email</p>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Vaše jméno a příjmení"
          required
        />
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Váš email"
          required
        />{" "}
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Váš telefon"
          required
        />{" "}
        <br />
        <textarea name="message" placeholder="Vaše zpráva" required /> <br />
        <button>Odeslat</button>
      </form>
    </div>
  );
};

export default Kontakt;
