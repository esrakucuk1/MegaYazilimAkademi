
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popüler Tesisler</h1>
      <p>Sosyal Tesisler Sizleri Daha Modern Bir Birey Yapar</p>
      <DestinationData
        className="first-des"
        heading="80 Binde Devri Alem Parkı"
        text="Her yaş grubuna hitap etme hedefiyle 2014'te kurulan park, her yıl yüz binlerce ziyaretçiyi ağırlıyor. Park, yeni tip koronavirüs (Kovid-19) tedbirleri kapsamındaki kısıtlamalar ve kontrollü sosyal hayat uygulamaları nedeniyle geçen yıl ziyaretçi sayısı düşse de geniş ve açık alanı ile dışarıda vakit geçirmek isteyenlere uygun ortam sunuyor. Meram Belediye Başkanı Mustafa Kavuş, AA muhabirine, açık alana kurulu parkın özellikleri ile Türkiye'de özel bir konumu bulunduğunu belirtti. Parkın öneminin herkesin eve kapanığı bir ortamda daha da arttığını ifade eden Kavuş, şunları kaydetti: Çocukların dışarı çıkmak için kısıtlı zamanları var. Dar bir zaman diliminde geniş ve açık alanıyla sosyal mesafeyi ihlal etmeden rahatça gezilecek bir mekana sahibiz. Daha büyük parklar Türkiye'de var ancak Türkiye'de bu özelliklere sahip başka park yok. Salgının etkilerinden biraz daha kurtulmak, eğlenerek öğrenmek ve de güzel vakit geçirmek için park son derece uygun bir yer.  Parkın en önemli ziyaretçi grubunun öğrenciler olduğuna dikkati çeken Kavuş, Buranın ortalama ziyaretçi sayısı 250 bin civarında. Geçtiğimiz yıl bu rakam yüzde 40'lara kadar düştü. Park, hem büyüklerin hem de küçüklerin sosyal mesafeye uygun olarak vakit geçirebilecekleri nadide alanlardan bir tanesi. diye konuştu."
        img1={"https://www.meram.bel.tr/upload/medya/DJI_0006-2.jpg"}
        img2={"https://www.meram.bel.tr/upload/medya/MRM1418.jpg"}
       />
       <DestinationData
        className="first-des-rev"
        heading="Meram Bağları"
        text="Dillere destan güzelliği ile Meram Bağları, Meram Belediye Başkanı Mustafa Kavuş’un girişimleriyle yeniden hayat buldu. Yeni Meram ve Meram Yaka Caddeleri’nin kesişiminde bulunan 18 bin metrekarelik bir alanda hayat bulan Meram Bağı'nın içerisinde üzüm bağı, meyve bahçesi, taş ev ve yazlık çay bahçesi bulunmaktadır.
 Evliya Çelebi’nin seyahatnamesinde ‘Peçevi şehrinin Baruthane Mesiresi, Kırım’ın Sudak Bağı, İstanbul’un yüzyetmişten fazla bahçe ve gülistanları, Tebriz’in Şahı Cihan Bağı, Konya’nın Meram mesiresinin yanında bir çimenzar bile olamazlar’ diyerek övgüyle bahsettiği Meram Bağları, yeniden hayat buldu. Meram Belediye Başkanı Mustafa Kavuş’un girişimleriyle özüne uygun şekilde yeniden projelendirilen Meram Bağı, Yeni Meram ile Yaka Caddeleri kesişiminde bulunan 18 bin  metrekarelik bir alanda oluşturuldu. Ormanları, tertemiz havası ve her tonunu içinde barındırdığı yeşil dokusuyla, şöhreti ülke sınırlarını aşmış, şiirlere, şarkılara, konu olmuş Meram Bağı'nın içerisinde bin üzüm asması, yaklaşık 200 adet meyve ağacı, kadim Konya medeniyetini temsil eden taş bina, ziyaretçilerine huzur dolu bir ortam sunan yazlık çay bahçesi bulunmaktadır."
        img1={"https://www.meram.bel.tr/upload/medya/MRM_1035.jpg"}
        img2={"https://www.meram.bel.tr/upload/medya/MRM_8488.jpg"}
       />
    </div>
  );
};

export default Destination;
