import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="text">
                <h1>Meram Belediyesi Sosyal Tesisler</h1>
                <p>Meram'ın Kalbinde Huzuru Keşfedin</p>
            </div>
            <div>
              <a href="https://www.facebook.com/merambelediyesi"> <i className="fa-brands fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/merambelediyesi"> <i className="fa-brands fa-instagram-square"></i></a>
              <a href="https://twitter.com/merambelediyesi"> <i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://github.com/merambelediyesi"> <i className="fa-brands fa-github-square"></i></a>
            </div>
        </div>

        <div className="bottom">
            <div>
              <h4>Hizmetler</h4>
              <a href="/">Parklar ve Bahçeler</a>
              <a href="/">Spor Tesisleri</a>
              <a href="/">Kültür Merkezleri</a>
              <a href="/">Sosyal Tesisler</a>
            </div>
            <div>
              <h4>Topluluk</h4>
              <a href="https://github.com/merambelediyesi">Github</a>
              <a href="/">Etkinlikler</a>
              <a href="/">Duyurular</a>
              <a href="/">Projeler</a>
            </div>
            <div>
              <h4>Yardım</h4>
              <a href="/">Sıkça Sorulan Sorular
</a>
              <a href="/">Destek</a>
              <a href="/">İletişim</a>
            </div>
            <div>
              <h4>Diğer</h4>
              <a href="/">Kullanım Koşulları</a>
              <a href="/">Gizlilik Politikası</a>
              <a href="/">Lisanslar</a>
            </div>
        </div>
    </div>
  );
};
export default Footer;