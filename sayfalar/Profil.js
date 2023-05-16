import user from "../images/iconuser.png";
import "../style.css";
import { useState} from "react"
import {withAuth} from '../Functions';


  function Profil (props){

    
    var loadFile = function (event) {
        var image = document.getElementById("output");
        image.src = URL.createObjectURL(event.target.files[0]);
    };
   
    const image=[user];

     const profilGoster = () => {

        setTimeout(function () {
        window.location.href = "/ProfilBilgileri";
        }, 1000);
      
    };
    const [input, setInput] = useState("");
    const degistiginde = (event) => {

        const input_name = event.target.name; 
        const input_value = event.target.value; 

        setInput(values => ({...values, [input_name]: input_value }))
    }

    const submitFonk = function(event) {
        event.preventDefault();
        console.log(input);
    }

   const profilBilgigonder = () => {

    var Isim = document.getElementById("isim").value;
    var Soyisim = document.getElementById("soyisim").value;
    var Cinsiyet = document.getElementById("cins").value;
    var Tarih = document.getElementById("tarih").value;
    var Il = document.getElementById("il").value;
    var Ilce = document.getElementById("ilce").value;
    var Telefon = document.getElementById("telefon").value;
    var Email = document.getElementById("email").value;

    var person_info = [Isim,Soyisim,Cinsiyet,Tarih,Il,Ilce,Telefon,Email];


    sessionStorage.setItem("person_info", person_info);

    alert("Bilgileriniz kaydedilmiştir.");

  }

    return(
        <>
        <center>
            <div className="row" style={{marginLeft:"22%"}}>
                <div className="col-12">
        <div class="container" style={{backgroundColor:"white",color:"black",borderRadius: "30px 30px 30px 30px"}}>
            <div class="row justify-content-center">
                <div class="col-12 m-5 form-group">

                    <h1 class="text-center mt-5 mb-2">PROFİL</h1><br />


                    <div class="profile-pic">
                        <label class="-label" for="file">
                            <span class="glyphicon glyphicon-camera"></span>
                            <span>Fotoğrafı Değiştir</span>
                        </label>
                        <input id="file" type="file" onChange={(e)=>loadFile()}/>
                        <img src={image} id="output" width="200" />
                    </div>

                    <form name="form" id="form1" action=""class="was-validated p-5 mt-5 mb-5" novalidate >

                        <div class="form-group">
                            <div class="col-12 text-center">
                                <h4><label class="form-label form-label-left form-label-auto" id="kisiselBilgiler" name="kisiselBilgiler" for="kisiselBilgiler"><b>Kişisel Bilgiler</b></label></h4><hr />
                            </div>
                            <div class="row">

                                <div class="col-3">
                                    <label for="isim" aria-hidden="false">Adınız</label>
                                </div>

                                <div class="col-3">
                                    <input type="text" class="form-control" id="isim" name="isim" required />
                                    <div class="invalid-feedback">Lütfen geçerli bir ad giriniz!</div>
                                </div>

                                <div class="col-3">
                                    <label for="soyisim"  aria-hidden="false">Soyadınız</label>
                                </div>

                                <div class="col-3">
                                    <input type="text" class="form-control" id="soyisim" name="soyisim" required />
                                    <div class="invalid-feedback">
                                        Lütfen geçerli bir soyad giriniz!
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="row">

                            <div className="col-3">
                                    <label className="form-sub-label" for="cins" style={{ minHeight: "13px", ariaHidden: "false" }}>
                                    Cinsiyetiniz
                                    </label>
                                </div>
                                    
                                <div className="col-3">
                                <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                        <select id="cins" name="cins" className="form-select" required
                                            value={input.cins || ""}
                                            onChange={degistiginde}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="Kadin">Kadın</option>
                                                <option value="Erkek">Erkek</option>
                                                <option value="Diger">Diğer</option>
                                            </select>
                                            <div className="invalid-feedback">
                                        Lütfen geçerli bir cinsiyet seçiniz!
                                    </div>
                                        </span>
                                    </span>
                                </div>

                                <div class="col-3">
                                    <label for="tarih" aria-hidden="false">Doğum Tarihiniz</label>
                                </div>


                                <div class="col-3">
                                    <input type="date" class="form-control" id="tarih" name="tarih" required />
                                    <div class="invalid-feedback">
                                        Lütfen geçerli bir tarih giriniz!
                                    </div>
                                </div>
                                <br /><br />
                                <br /><br />
                                <div class="col-12 text-center">
                                    <h4><label class="form-label form-label-left form-label-auto" id="adres" name="adres" for="adres"><b>Adres Bilgileri</b></label></h4><hr />
                                </div>

                                <br />
                                <div class="row">
                                <div className="col-3">
                                    <label className="form-sub-label" for="il" style={{minHeight:"13px", ariaHidden:"false"}}>Yaşadığınız İl</label>
                                </div>
                                <div className="col-3">
                                <input type="text" className="form-control" id="il" name="il" required
                                value={input.il || ""}
                                onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen yaşadığınız ili seçiniz!
                                    </div>
                            </div>
                            
                            
                            
                            <div className="col-3">
                                    <label className="form-sub-label" for="ilce" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız ilçe</label>
                                </div>
                                <div className="col-3">
                                <input type="text" className="form-control" id="ilce" name="ilce" required
                                value={input.ilce || ""}
                                onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen yaşadığınız ilçeyi seçiniz!
                                    </div></div></div>
                                <br />
                                <br /><br />
                                <div class="col-12 text-center">
                                    <h4><label class="form-label form-label-left form-label-auto" id="iletisim"><b>İletişim Bilgileri</b></label></h4>
                                    <hr />
                                </div>

                                <div class="row">

                                    <div class="col-3">
                                        <label class="form-sub-label" for="telefon"  aria-hidden="false">Telefon Numarası</label>
                                    </div>
                                    <div class="col-3">
                                        <input type="number" class="form-control" id="telefon" name="telefon" required />
                                        <div class="invalid-feedback">
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <label class="form-sub-label" for="email" aria-hidden="false">E-Posta Adresi</label>
                                    </div>

                                    <div class="col-3">
                                        <input type="email" class="form-control" id="email" name="email" required />
                                        <div class="invalid-feedback">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="row justify-content-center mt-5">
                                        <div style={{marginTop:"-10%"}}>
                                            <center>
                                        <a href=""><button class="btn btn-dark" style={{fontSize:"15px",height:"20%",width:"20%",fontFamily:"monospace"}} type="submit" onClick={() => profilBilgigonder()}>Kaydet</button></a> 
                                            
                                            <button class="btn btn-light" style={{fontSize:"15px",height:"20%",width:"20%",fontFamily:"monospace",margin:"3%"}} type="reset"> Temizle </button>
                                        
                                        <a href="ProfilBilgileri"> 
                                        <button class="btn btn-secondary" style={{fontSize:"15px",height:"20%",width:"20%",fontFamily:"monospace"}} type="submit" onClick={() => profilGoster()}> Profil Görüntüle </button> 
                                        </a>

                                        </center>
                                    </div>
                                    </div>
            </div>
        </div>
        </div>
            </div>
        </center>
        </>
    );
}
export default withAuth(Profil)