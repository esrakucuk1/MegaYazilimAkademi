import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Bizimle İletişime Geçin</h1>
      <form>
        <input placeholder="İsim"/>
        <input placeholder="E-Mail Adresiniz"/>
        <input placeholder="Konu"/>
        <textarea placeholder="Mesaj" rows={3}/>
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default ContactForm;
