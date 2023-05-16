import ReactDOM from 'react-dom/client';
import signin from "../images/signin.jpg";
import { sifreGuncelle } from './SifreGuncelle';

export const login = () => {
    var kullanici = sessionStorage.getItem("user");

    if (kullanici == null) {
        sessionStorage.setItem("user", "");
    }

    var isLogin = false;

    kullanici = sessionStorage.getItem("user");
    const kullanici_ayrik = kullanici.split(","); 

    var mail = document.getElementById("email").value;
    var sifre = document.getElementById("password").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici_ayrik[0] && sifre == kullanici_ayrik[1]) {
        yazi.innerHTML = "Giriş yapıldı!";
        yazi.style.color = "green";

        isLogin = true;
        sessionStorage.setItem("isLogin", isLogin);

        setTimeout(function () {
            window.location.href = '/Anasayfa';
        }, 1000);
    }
    else {
        yazi.innerHTML = "Email veya şifrenizi kontrol edin!";
        yazi.style.color = "red";
        setTimeout(function () {
            window.location.href = '/Giris';
        }, 1000);
    }
}


function Giris_form(){
        const image=[signin];

    return(
        <>
       <center>

        <div className="bg-light text-dark rounded border border-black p-5 mb-5 mt-3" style={{marginLeft:"21%"}}>
       
        <h1 class="neonText">

            <div class="row" name="kayitol" id="kayitol">
                <div class="col-6">
                    <div class="form-signin was-validated" novalidate>
                        <h2 class=" font-weight-normal" style={{color:"black"}}>GİRİŞ</h2><hr></hr><br></br>

                        <input type="email" id="email" name="email" class="form-control" placeholder="E-Mail Adresiniz" style={{width:"65%",borderColor:"black"}} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/><div class="invalid-feedback" style={{fontSize:"13px",color:"black"}}>Geçerli bir e-posta adresi girilmelidir, örneğin; ornek@gmail.com</div><br></br>

                        <input type="password" id="password" name="password" class="form-control" placeholder="Şifreniz" style={{width:"65%",borderColor:"black"}} required/>                        
                        <div class="checkbox mb-3" style={{color:"black",fontSize:"15px"}}>
                            <br></br><label>
                                <input type="checkbox" value="remember-me"/> Beni Hatırla
                            </label>
                        </div>
                    </div>

            <h5 style={{fontSize:"15px"}} id="sonuc"></h5>
                <button className=" btn btn-dark" style={{fontSize:"15px",height:"10%",width:"35%",fontFamily:"monospace"}} onClick={() => login()}>Giriş Yap</button><br></br>
                <a href="SifreGuncelle"><button className=" btn btn-secondary mt-2" style={{fontSize:"15px",height:"10%",width:"35%",fontFamily:"monospace"}} onClick={() => sifreGuncelle()}>Şifre Güncelle</button></a>
                </div>
                <div class="col-6 p-5"><img src={image} id="signin" style={{ width:"100%"}} />
            </div>
            </div>
            
        </h1>
        </div>
    </center>
           
            
            </>
    );
}
export default Giris_form;
