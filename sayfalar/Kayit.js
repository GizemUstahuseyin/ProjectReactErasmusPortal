import signup from "../images/signup.jpg";

function sifreKontrol() {

    const kullanici =
        [(document.getElementById("email").value), (document.getElementById("sifre").value)];
  
    
    const sifre2 = document.getElementById("resifre").value;
  
  
  
    const yazi = document.getElementById("sonuc");
  
    if (kullanici[1] === sifre2) {
  
        yazi.innerHTML = "Hesap Oluşturuldu!";
        yazi.style.color = "green";
  
        sessionStorage.setItem("user", kullanici);

        setTimeout(function () {
            window.location.href = "Giris";
        }, 1000);  
    }
    else {
        yazi.innerHTML = "Şifreler Eşleşmiyor.";
        yazi.style.color = "red";
        setTimeout(function () {
            window.location.href = '/Kayit';
        }, 1000);
    }
  }


function Kayit_form (){
    const image=[signup];

    return (
        <>
        <center>

        <div className="bg-light text-dark rounded border border-black p-5 mb-5 mt-3" style={{marginLeft:"21%"}}>
       
        <h1 class="neonText">

            <div class="row" name="kayitol" id="kayitol">
                <div class="col-6">
                    <div class="form-signin was-validated" novalidate>
                        <h2 class=" font-weight-normal" style={{color:"black"}}>KAYIT</h2><hr></hr><br></br>

                        <input type="email" id="email" name="email" class="form-control" placeholder="E-Mail Adresiniz" style={{width:"65%",borderColor:"black"}} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/><div class="invalid-feedback" style={{fontSize:"13px",color:"red"}}>Geçerli bir e-posta adresi girilmelidir, örneğin; ornek@gmail.com</div><br></br>

                        <input type="password" id="sifre" name="sifre" class="form-control" placeholder="Şifreniz" style={{width:"65%",borderColor:"black"}} required/>
                        <div class="checkbox mb-3"></div>
                        <input type="password" id="resifre" name="resifre" class="form-control" placeholder="Şifreniz (Tekrar)" style={{width:"65%",borderColor:"black"}} required/><div class="invalid-feedback" style={{fontSize:"13px",color:"red"}}>Şifreler aynı ve en az 6 karakter olmalıdır, en az bir küçük harf, bir büyük harf, en az bir rakam ve en az bir sembol içermelidir.</div>
                        <div class="checkbox mb-3" style={{color:"black",fontSize:"15px"}}>
                            <br></br><label>
                                <input type="checkbox" value="remember-me"/> Beni Hatırla
                            </label>
                        </div>
                    </div>
                    <h5 style={{fontSize:"15px"}} id="sonuc"></h5> 
                     <button className="w-8 btn btn-lg btn-dark mt-2"style={{fontSize:"15px",height:"10%",width:"35%",fontFamily:"monospace"}} onClick={() => sifreKontrol()}>Hesap Oluştur</button>
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
export default Kayit_form;