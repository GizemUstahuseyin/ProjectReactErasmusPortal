import password from "../images/password.jpg";

export const sifreGuncelle = () => {

    var kullanici = sessionStorage.getItem("user");

    kullanici = kullanici?.split(",");

    var mevcutSifre = document.getElementById("password").value;
    var yeniSifre = document.getElementById("newpassword").value;
    var yeniSifreTekrar = document.getElementById("newpasswordd").value;

    var yazi = document.getElementById("sonuc");

    if (mevcutSifre == kullanici[1]) {

        if (yeniSifre == yeniSifreTekrar) {

            kullanici[1] = yeniSifre;

            yazi.innerHTML = "Şifre başarıyla güncellendi!";
            yazi.style.color = "green";

            sessionStorage.setItem("user", kullanici);
            setTimeout(function () {
                window.location.href = "/Anasayfa";
                }, 1000);

        } else {
            yazi.innerHTML = "Yeni şifreler eşleşmiyor.";
            yazi.style.color = "red";
            setTimeout(function () {
                window.location.href = "/SifreGuncelle";
                }, 1000);
        }

    } else {
        yazi.innerHTML = "Mevcut şifre hatalı.";
        yazi.style.color = "red";
        setTimeout(function () {
            window.location.href = "/SifreGuncelle";
            }, 1000);
    }

};

function SifreGuncelle(){
        const image=[password];

    return(
        <>
       <center>

        <div className="bg-light text-dark rounded border border-black p-5 mb-5 mt-3" style={{marginLeft:"21%"}}>
       
        <h1 class="neonText">

            <div class="row" name="kayitol" id="kayitol">
                <div class="col-6">
                    <div class="form-signin was-validated" novalidate>
                        <h2 class=" font-weight-normal p-2 mt-2" style={{color:"black"}}>ŞİFRE GÜNCELLE</h2><hr></hr><br></br>
                        <input type="password" id="password" name="password" class="form-control" placeholder="Mevcut Şifreniz" style={{width:"65%",borderColor:"black",margin:"7%"}} required/> 
                        <input type="password" id="newpassword" name="password" class="form-control" placeholder="Yeni Şifreniz" style={{width:"65%",borderColor:"black"}} required/>
                        <input type="password" id="newpasswordd" name="password" class="form-control" placeholder="Yeni Şifreniz (Tekrar)" style={{width:"65%",borderColor:"black",margin:"2%"}} required/>                 
                        <div class="checkbox mb-3" style={{color:"black",fontSize:"15px"}}>
                        </div>
                    </div>

                    <h5 style={{fontSize:"15px"}} id="sonuc"></h5> 
                    <button className="w-8 btn btn-lg btn-dark mt-2" style={{fontSize:"15px",height:"10%",width:"30%",fontFamily:"monospace"}} onClick={() => sifreGuncelle()}>Güncelle</button>
                </div>
                <div class="col-6 p-5"><img src={image} id="password" style={{ width:"100%"}} />
            </div>
            </div>
            
        </h1>
        </div>
    </center>
           
            
            </>
    );
}
export default SifreGuncelle;
