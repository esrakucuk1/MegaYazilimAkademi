import React from 'react';
import './style.css';

export default function App() {
 const userName="Küçük"
 const users=[ " Necmettin Erbakan Üniversitesi Yönetim Bilişim Ssistemleri Öğrencisi" ,"Huawei Student Konya Yönetim Ekip üyesi" , "Genç Yöneticiler ve Bilişim Topluluğu üyesi"]
 const isActive= true
  return (
    <div>
     <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>Havva Gül {userName}</h1>
  <h5>React İle Hazırladığım Blog Siteme Hoş Geldiniz</h5> 
</div>
  
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"blue":"orange"}`}}>Hakkımda</h3>
      <p>Ben Necmettin Erbakan Üniversitesi Yönetim Bilişim Sistemleri öğrencisiyim. Yeni şeyler öğrenmeye ve kendimi geliştirmeye çalışıyorum. Bu yüzden Üretken Akademi ve Meram Belediyesi ortaklığında gerceklesen eğitimine başvurdum ve eğitimi almaya hak kazandım. Suanda HTML, CSS, JavaScript ve React eğitimlerini alıyorum.  </p>
      <img src="https://picsum.photos/id/20/3670/2462" alt="" with="200px" height="200px" style={{padding:"4px", margin:0, borderRadius:"8px", border:"1px solid #bdc3c7"}}/>
    </div>
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"blue":"orange"}`}} >Hobilerim</h3>
      <p>Gitar çalmaktan, şarkı söylemekten, yüzmekten, yoga yapmaktan ve kitap okumaktan hoslanıyorum.</p>
      <img src="https://picsum.photos/id/24/4855/1803" alt="" with="200px" height="100px" style={{padding:"4px", margin:0, borderRadius:"8px", border:"1px solid #bdc3c7"}}/>   
    </div>
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"blue":"orange"}`}} >Ben Kimim ?</h3>        
      <ul>
        {users.map((user,index)=><li key={index}>{user}</li>)}
      </ul>
      <img src="https://picsum.photos/id/27/3264/1836" alt="" with="200px" height="100px" style={{padding:"4px", margin:0, borderRadius:"8px", border:"1px solid #bdc3c7"}}/>
    </div>
  </div>
</div>
    </div>
  );
}