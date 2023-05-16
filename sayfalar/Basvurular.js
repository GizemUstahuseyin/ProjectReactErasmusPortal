import React from "react";
import { useState} from "react"
import { ImAirplane } from "react-icons/im";
import {withAuth} from '../Functions';

function Basvurular(props) {
    const toggleInput = () => {
        const selectElement = document.getElementById("disability");
        const labelElement = document.getElementById("disabilitywhy");
        const inputElement = document.getElementById("why");
      
        if (selectElement.value === "") {
          labelElement.style.display = "none";
          inputElement.style.display = "none";
        } else if (selectElement.value === "Evet") {
          labelElement.style.display = "block";
          inputElement.style.display = "block";
        } else {
          labelElement.style.display = "none";
          inputElement.style.display = "none";
        }
    };
    const [input, setInput] = useState("");
    
    const degistiginde = (event) => 
    {
        const input_name = event.target.name; 
        const input_value = event.target.value; 

        setInput(values => ({...values, [input_name]: input_value }))
    }

    const submitFonk = function(event) {
        event.preventDefault();

        console.log(input);

    }
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setInput((prevState) => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    // };

    const isBedenselEngelSelected = input.bedensel_engel === "Evet";

    const gonder = () => {

    var Isim = document.getElementById("isim").value;
    var Soyisim = document.getElementById("soyisim").value;
    var Cinsiyet = document.getElementById("cins").value;
    var Tarih = document.getElementById("tarih").value;
    var Milliyet = document.getElementById("milliyet").value;
    var Ikincimilliyet = document.getElementById("ikincimilliyet").value;
    var TcNo = document.getElementById("tcNo").value;
    var Bedensel_engel = document.getElementById("disability").value;
    var Bedensel_engel_var = document.getElementById("why").value;
    var Ulke = document.getElementById("ulke").value;
    var Il = document.getElementById("il").value;
    var Ilce = document.getElementById("ilce").value;
    var Mahalle = document.getElementById("mahalle").value;
    var Sokak = document.getElementById("sokak").value;
    var Apartno = document.getElementById("apartno").value;
    var Zip = document.getElementById("zip").value;
    var Universite = document.getElementById("universite").value;
    var Fakulte = document.getElementById("fakulte").value;
    var Bolum = document.getElementById("bolum").value;
    var Mezuniyet = document.getElementById("mezuniyet").value;
    var mezuniyetTarih = document.getElementById("MezuniyetTarih").value;
    var Not = document.getElementById("not").value;
    var Cv = document.getElementById("cv").value;
    var Niyet = document.getElementById("niyet").value;
    var Diploma = document.getElementById("diploma").value;
    var IngYetkin = document.getElementById("ingYetkin").value;
    var Ikametgah = document.getElementById("ikametgah").value;
    var Pasaport = document.getElementById("pasaport").value;
    var UlkeKod = document.getElementById("ulkeKod").value;
    var AlanKod = document.getElementById("alanKod").value;
    var Telefon = document.getElementById("telefon").value;
    var Email = document.getElementById("email").value;


    var user_info = [Isim,Soyisim,Cinsiyet,Tarih,Milliyet,Ikincimilliyet,TcNo,Bedensel_engel,Bedensel_engel_var,Ulke,Il,Ilce,Mahalle,Sokak,Apartno,Zip,Universite,Fakulte,Bolum,Mezuniyet,mezuniyetTarih,Not,Cv,Niyet,Diploma,IngYetkin,Ikametgah,Pasaport,UlkeKod,AlanKod,Telefon,Email];
   
    

    sessionStorage.setItem("user_info", user_info);

    alert("Bilgileriniz gönderilmiştir.");
   }   

   const basvuruGoster = () => {

    setTimeout(function () {
    window.location.href = "/BasvuruBilgileri";
    }, 1000);
  
};

  
  return (
    <>
    <div className="" style={{marginLeft:"25%"}}>
            <center>
                <div className="col-10 align-items-center" style={{color:"black"}}>
                    <div className="modal-content rounded-4 shadow" style={{backgroundColor:"white"}}>
                    <div style={{paddingTop:"5%",fontSize:"40px"}}><ImAirplane/></div>
                        <form name="Basvuru" id="Basvuru" action="" className="was-validated p-5"onSubmit={submitFonk} novalidate>
                        <div className="col-12 text-center" name="erasmus" id="erasmus" style={{ display: "flex", justifyContent: 'center'}}>
                <h4><label className="form-label form-label-left form-label-auto"><b>ERASMUS PROGRAMI BAŞVURU FORMU</b></label></h4>
            </div>                            
                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="kisiselBilgiler" name="kisiselBilgiler" for="kisiselBilgiler"><b>Kişisel Bilgiler</b></label></h4><hr></hr>
                            </div>
                            <div className="row p-2">
                                <div className="col-3">
                                    <label for="isim" style={{minHeight:"13px" ,ariaHidden:"false"}}>Adınız</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="isim" required 
                                    name="isim"
                                    value={input.isim || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">Lütfen geçerli bir ad giriniz!</div>
                                </div>
    
                                <div className="col-3">
                                    <label for="soyisim" style={{minHeight:"13px" ,ariaHidden:"false"}}>Soyadınız</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="soyisim" name="soyisim" required 
                                    value={input.soyisim || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir soyad giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row p-2">
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
                                            </select><div className="invalid-feedback">
                                        Lütfen geçerli bir cinsiyet seçiniz!
                                    </div>
                                        </span>
                                    </span>
                                    
                                </div>
                                <div className="col-3">
                                    <label for="tarih" style={{minHeight:"13px" ,ariaHidden:"false"}}>Doğum Tarihiniz</label>
                                </div>
    
    
                                <div className="col-3">
                                    <input type="date" className="form-control" id="tarih" name="tarih" required 
                                    value={input.tarih || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir tarih giriniz!
                                    </div>
                                </div>                            
                                </div>    

                                <div className="row p-2">
                                <div className="col-3">
                                    <label className="form-sub-label" for="milliyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>Milliyetiniz</label>
                                </div>
    
    
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select id="milliyet" name="milliyet" className="form-select" required
                                            value={input.milliyet || ""}
                                            onChange={degistiginde}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="afghan">Afghan</option>
                                                <option value="albanian">Albanian</option>
                                                <option value="algerian">Algerian</option>
                                                <option value="american">American</option>
                                                <option value="andorran">Andorran</option>
                                                <option value="angolan">Angolan</option>
                                                <option value="antiguans">Antiguans</option>
                                                <option value="argentinean">Argentinean</option>
                                                <option value="armenian">Armenian</option>
                                                <option value="australian">Australian</option>
                                                <option value="austrian">Austrian</option>
                                                <option value="azerbaijani">Azerbaijani</option>
                                                <option value="bahamian">Bahamian</option>
                                                <option value="bahraini">Bahraini</option>
                                                <option value="bangladeshi">Bangladeshi</option>
                                                <option value="barbadian">Barbadian</option>
                                                <option value="barbudans">Barbudans</option>
                                                <option value="batswana">Batswana</option>
                                                <option value="belarusian">Belarusian</option>
                                                <option value="belgian">Belgian</option>
                                                <option value="belizean">Belizean</option>
                                                <option value="beninese">Beninese</option>
                                                <option value="bhutanese">Bhutanese</option>
                                                <option value="bolivian">Bolivian</option>
                                                <option value="bosnian">Bosnian</option>
                                                <option value="brazilian">Brazilian</option>
                                                <option value="british">British</option>
                                                <option value="bruneian">Bruneian</option>
                                                <option value="bulgarian">Bulgarian</option>
                                                <option value="burkinabe">Burkinabe</option>
                                                <option value="burmese">Burmese</option>
                                                <option value="burundian">Burundian</option>
                                                <option value="cambodian">Cambodian</option>
                                                <option value="cameroonian">Cameroonian</option>
                                                <option value="canadian">Canadian</option>
                                                <option value="cape verdean">Cape Verdean</option>
                                                <option value="central african">Central African</option>
                                                <option value="chadian">Chadian</option>
                                                <option value="chilean">Chilean</option>
                                                <option value="chinese">Chinese</option>
                                                <option value="colombian">Colombian</option>
                                                <option value="comoran">Comoran</option>
                                                <option value="congolese">Congolese</option>
                                                <option value="costa rican">Costa Rican</option>
                                                <option value="croatian">Croatian</option>
                                                <option value="cuban">Cuban</option>
                                                <option value="cypriot">Cypriot</option>
                                                <option value="czech">Czech</option>
                                                <option value="danish">Danish</option>
                                                <option value="djibouti">Djibouti</option>
                                                <option value="dominican">Dominican</option>
                                                <option value="dutch">Dutch</option>
                                                <option value="east timorese">East Timorese</option>
                                                <option value="ecuadorean">Ecuadorean</option>
                                                <option value="egyptian">Egyptian</option>
                                                <option value="emirian">Emirian</option>
                                                <option value="equatorial guinean">Equatorial Guinean</option>
                                                <option value="eritrean">Eritrean</option>
                                                <option value="estonian">Estonian</option>
                                                <option value="ethiopian">Ethiopian</option>
                                                <option value="fijian">Fijian</option>
                                                <option value="filipino">Filipino</option>
                                                <option value="finnish">Finnish</option>
                                                <option value="french">French</option>
                                                <option value="gabonese">Gabonese</option>
                                                <option value="gambian">Gambian</option>
                                                <option value="georgian">Georgian</option>
                                                <option value="german">German</option>
                                                <option value="ghanaian">Ghanaian</option>
                                                <option value="greek">Greek</option>
                                                <option value="grenadian">Grenadian</option>
                                                <option value="guatemalan">Guatemalan</option>
                                                <option value="guinea-bissauan">Guinea-Bissauan</option>
                                                <option value="guinean">Guinean</option>
                                                <option value="guyanese">Guyanese</option>
                                                <option value="haitian">Haitian</option>
                                                <option value="herzegovinian">Herzegovinian</option>
                                                <option value="honduran">Honduran</option>
                                                <option value="hungarian">Hungarian</option>
                                                <option value="icelander">Icelander</option>
                                                <option value="indian">Indian</option>
                                                <option value="indonesian">Indonesian</option>
                                                <option value="iranian">Iranian</option>
                                                <option value="iraqi">Iraqi</option>
                                                <option value="irish">Irish</option>
                                                <option value="israeli">Israeli</option>
                                                <option value="italian">Italian</option>
                                                <option value="ivorian">Ivorian</option>
                                                <option value="jamaican">Jamaican</option>
                                                <option value="japanese">Japanese</option>
                                                <option value="jordanian">Jordanian</option>
                                                <option value="kazakhstani">Kazakhstani</option>
                                                <option value="kenyan">Kenyan</option>
                                                <option value="kittian and nevisian">Kittian and Nevisian</option>
                                                <option value="kuwaiti">Kuwaiti</option>
                                                <option value="kyrgyz">Kyrgyz</option>
                                                <option value="laotian">Laotian</option>
                                                <option value="latvian">Latvian</option>
                                                <option value="lebanese">Lebanese</option>
                                                <option value="liberian">Liberian</option>
                                                <option value="libyan">Libyan</option>
                                                <option value="liechtensteiner">Liechtensteiner</option>
                                                <option value="lithuanian">Lithuanian</option>
                                                <option value="luxembourger">Luxembourger</option>
                                                <option value="macedonian">Macedonian</option>
                                                <option value="malagasy">Malagasy</option>
                                                <option value="malawian">Malawian</option>
                                                <option value="malaysian">Malaysian</option>
                                                <option value="maldivan">Maldivan</option>
                                                <option value="malian">Malian</option>
                                                <option value="maltese">Maltese</option>
                                                <option value="marshallese">Marshallese</option>
                                                <option value="mauritanian">Mauritanian</option>
                                                <option value="mauritian">Mauritian</option>
                                                <option value="mexican">Mexican</option>
                                                <option value="micronesian">Micronesian</option>
                                                <option value="moldovan">Moldovan</option>
                                                <option value="monacan">Monacan</option>
                                                <option value="mongolian">Mongolian</option>
                                                <option value="moroccan">Moroccan</option>
                                                <option value="mosotho">Mosotho</option>
                                                <option value="motswana">Motswana</option>
                                                <option value="mozambican">Mozambican</option>
                                                <option value="namibian">Namibian</option>
                                                <option value="nauruan">Nauruan</option>
                                                <option value="nepalese">Nepalese</option>
                                                <option value="new zealander">New Zealander</option>
                                                <option value="ni-vanuatu">Ni-Vanuatu</option>
                                                <option value="nicaraguan">Nicaraguan</option>
                                                <option value="nigerien">Nigerien</option>
                                                <option value="north korean">North Korean</option>
                                                <option value="northern irish">Northern Irish</option>
                                                <option value="norwegian">Norwegian</option>
                                                <option value="omani">Omani</option>
                                                <option value="pakistani">Pakistani</option>
                                                <option value="palauan">Palauan</option>
                                                <option value="panamanian">Panamanian</option>
                                                <option value="papua new guinean">Papua New Guinean</option>
                                                <option value="paraguayan">Paraguayan</option>
                                                <option value="peruvian">Peruvian</option>
                                                <option value="polish">Polish</option>
                                                <option value="portuguese">Portuguese</option>
                                                <option value="qatari">Qatari</option>
                                                <option value="romanian">Romanian</option>
                                                <option value="russian">Russian</option>
                                                <option value="rwandan">Rwandan</option>
                                                <option value="saint lucian">Saint Lucian</option>
                                                <option value="salvadoran">Salvadoran</option>
                                                <option value="samoan">Samoan</option>
                                                <option value="san marinese">San Marinese</option>
                                                <option value="sao tomean">Sao Tomean</option>
                                                <option value="saudi">Saudi</option>
                                                <option value="scottish">Scottish</option>
                                                <option value="senegalese">Senegalese</option>
                                                <option value="serbian">Serbian</option>
                                                <option value="seychellois">Seychellois</option>
                                                <option value="sierra leonean">Sierra Leonean</option>
                                                <option value="singaporean">Singaporean</option>
                                                <option value="slovakian">Slovakian</option>
                                                <option value="slovenian">Slovenian</option>
                                                <option value="solomon islander">Solomon Islander</option>
                                                <option value="somali">Somali</option>
                                                <option value="south african">South African</option>
                                                <option value="south korean">South Korean</option>
                                                <option value="spanish">Spanish</option>
                                                <option value="sri lankan">Sri Lankan</option>
                                                <option value="sudanese">Sudanese</option>
                                                <option value="surinamer">Surinamer</option>
                                                <option value="swazi">Swazi</option>
                                                <option value="swedish">Swedish</option>
                                                <option value="swiss">Swiss</option>
                                                <option value="syrian">Syrian</option>
                                                <option value="taiwanese">Taiwanese</option>
                                                <option value="tajik">Tajik</option>
                                                <option value="tanzanian">Tanzanian</option>
                                                <option value="thai">Thai</option>
                                                <option value="togolese">Togolese</option>
                                                <option value="tongan">Tongan</option>
                                                <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                                <option value="tunisian">Tunisian</option>
                                                <option value="turkish">Turkish</option>
                                                <option value="tuvaluan">Tuvaluan</option>
                                                <option value="ugandan">Ugandan</option>
                                                <option value="ukrainian">Ukrainian</option>
                                                <option value="uruguayan">Uruguayan</option>
                                                <option value="uzbekistani">Uzbekistani</option>
                                                <option value="venezuelan">Venezuelan</option>
                                                <option value="vietnamese">Vietnamese</option>
                                                <option value="welsh">Welsh</option>
                                                <option value="yemenite">Yemenite</option>
                                                <option value="zambian">Zambian</option>
                                                <option value="zimbabwean">Zimbabwean</option>
                                                <option value="other">Diğer</option>
                                            </select><div className="invalid-feedback">
                                        Lütfen milliyetinizi seçiniz!
                                    </div>
    
                                        </span>
                                    </span>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="ikincimilliyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>İkinci Milliyetiniz</label>
                                </div>
    
    
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select id="ikincimilliyet" name="ikincimilliyet" className="form-select"
                                            value={input.ikincimilliyet || ""}
                                            onChange={degistiginde}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="">Yok</option>
                                                <option value="afghan">Afghan</option>
                                                <option value="albanian">Albanian</option>
                                                <option value="algerian">Algerian</option>
                                                <option value="american">American</option>
                                                <option value="andorran">Andorran</option>
                                                <option value="angolan">Angolan</option>
                                                <option value="antiguans">Antiguans</option>
                                                <option value="argentinean">Argentinean</option>
                                                <option value="armenian">Armenian</option>
                                                <option value="australian">Australian</option>
                                                <option value="austrian">Austrian</option>
                                                <option value="azerbaijani">Azerbaijani</option>
                                                <option value="bahamian">Bahamian</option>
                                                <option value="bahraini">Bahraini</option>
                                                <option value="bangladeshi">Bangladeshi</option>
                                                <option value="barbadian">Barbadian</option>
                                                <option value="barbudans">Barbudans</option>
                                                <option value="batswana">Batswana</option>
                                                <option value="belarusian">Belarusian</option>
                                                <option value="belgian">Belgian</option>
                                                <option value="belizean">Belizean</option>
                                                <option value="beninese">Beninese</option>
                                                <option value="bhutanese">Bhutanese</option>
                                                <option value="bolivian">Bolivian</option>
                                                <option value="bosnian">Bosnian</option>
                                                <option value="brazilian">Brazilian</option>
                                                <option value="british">British</option>
                                                <option value="bruneian">Bruneian</option>
                                                <option value="bulgarian">Bulgarian</option>
                                                <option value="burkinabe">Burkinabe</option>
                                                <option value="burmese">Burmese</option>
                                                <option value="burundian">Burundian</option>
                                                <option value="cambodian">Cambodian</option>
                                                <option value="cameroonian">Cameroonian</option>
                                                <option value="canadian">Canadian</option>
                                                <option value="cape verdean">Cape Verdean</option>
                                                <option value="central african">Central African</option>
                                                <option value="chadian">Chadian</option>
                                                <option value="chilean">Chilean</option>
                                                <option value="chinese">Chinese</option>
                                                <option value="colombian">Colombian</option>
                                                <option value="comoran">Comoran</option>
                                                <option value="congolese">Congolese</option>
                                                <option value="costa rican">Costa Rican</option>
                                                <option value="croatian">Croatian</option>
                                                <option value="cuban">Cuban</option>
                                                <option value="cypriot">Cypriot</option>
                                                <option value="czech">Czech</option>
                                                <option value="danish">Danish</option>
                                                <option value="djibouti">Djibouti</option>
                                                <option value="dominican">Dominican</option>
                                                <option value="dutch">Dutch</option>
                                                <option value="east timorese">East Timorese</option>
                                                <option value="ecuadorean">Ecuadorean</option>
                                                <option value="egyptian">Egyptian</option>
                                                <option value="emirian">Emirian</option>
                                                <option value="equatorial guinean">Equatorial Guinean</option>
                                                <option value="eritrean">Eritrean</option>
                                                <option value="estonian">Estonian</option>
                                                <option value="ethiopian">Ethiopian</option>
                                                <option value="fijian">Fijian</option>
                                                <option value="filipino">Filipino</option>
                                                <option value="finnish">Finnish</option>
                                                <option value="french">French</option>
                                                <option value="gabonese">Gabonese</option>
                                                <option value="gambian">Gambian</option>
                                                <option value="georgian">Georgian</option>
                                                <option value="german">German</option>
                                                <option value="ghanaian">Ghanaian</option>
                                                <option value="greek">Greek</option>
                                                <option value="grenadian">Grenadian</option>
                                                <option value="guatemalan">Guatemalan</option>
                                                <option value="guinea-bissauan">Guinea-Bissauan</option>
                                                <option value="guinean">Guinean</option>
                                                <option value="guyanese">Guyanese</option>
                                                <option value="haitian">Haitian</option>
                                                <option value="herzegovinian">Herzegovinian</option>
                                                <option value="honduran">Honduran</option>
                                                <option value="hungarian">Hungarian</option>
                                                <option value="icelander">Icelander</option>
                                                <option value="indian">Indian</option>
                                                <option value="indonesian">Indonesian</option>
                                                <option value="iranian">Iranian</option>
                                                <option value="iraqi">Iraqi</option>
                                                <option value="irish">Irish</option>
                                                <option value="israeli">Israeli</option>
                                                <option value="italian">Italian</option>
                                                <option value="ivorian">Ivorian</option>
                                                <option value="jamaican">Jamaican</option>
                                                <option value="japanese">Japanese</option>
                                                <option value="jordanian">Jordanian</option>
                                                <option value="kazakhstani">Kazakhstani</option>
                                                <option value="kenyan">Kenyan</option>
                                                <option value="kittian and nevisian">Kittian and Nevisian</option>
                                                <option value="kuwaiti">Kuwaiti</option>
                                                <option value="kyrgyz">Kyrgyz</option>
                                                <option value="laotian">Laotian</option>
                                                <option value="latvian">Latvian</option>
                                                <option value="lebanese">Lebanese</option>
                                                <option value="liberian">Liberian</option>
                                                <option value="libyan">Libyan</option>
                                                <option value="liechtensteiner">Liechtensteiner</option>
                                                <option value="lithuanian">Lithuanian</option>
                                                <option value="luxembourger">Luxembourger</option>
                                                <option value="macedonian">Macedonian</option>
                                                <option value="malagasy">Malagasy</option>
                                                <option value="malawian">Malawian</option>
                                                <option value="malaysian">Malaysian</option>
                                                <option value="maldivan">Maldivan</option>
                                                <option value="malian">Malian</option>
                                                <option value="maltese">Maltese</option>
                                                <option value="marshallese">Marshallese</option>
                                                <option value="mauritanian">Mauritanian</option>
                                                <option value="mauritian">Mauritian</option>
                                                <option value="mexican">Mexican</option>
                                                <option value="micronesian">Micronesian</option>
                                                <option value="moldovan">Moldovan</option>
                                                <option value="monacan">Monacan</option>
                                                <option value="mongolian">Mongolian</option>
                                                <option value="moroccan">Moroccan</option>
                                                <option value="mosotho">Mosotho</option>
                                                <option value="motswana">Motswana</option>
                                                <option value="mozambican">Mozambican</option>
                                                <option value="namibian">Namibian</option>
                                                <option value="nauruan">Nauruan</option>
                                                <option value="nepalese">Nepalese</option>
                                                <option value="new zealander">New Zealander</option>
                                                <option value="ni-vanuatu">Ni-Vanuatu</option>
                                                <option value="nicaraguan">Nicaraguan</option>
                                                <option value="nigerien">Nigerien</option>
                                                <option value="north korean">North Korean</option>
                                                <option value="northern irish">Northern Irish</option>
                                                <option value="norwegian">Norwegian</option>
                                                <option value="omani">Omani</option>
                                                <option value="pakistani">Pakistani</option>
                                                <option value="palauan">Palauan</option>
                                                <option value="panamanian">Panamanian</option>
                                                <option value="papua new guinean">Papua New Guinean</option>
                                                <option value="paraguayan">Paraguayan</option>
                                                <option value="peruvian">Peruvian</option>
                                                <option value="polish">Polish</option>
                                                <option value="portuguese">Portuguese</option>
                                                <option value="qatari">Qatari</option>
                                                <option value="romanian">Romanian</option>
                                                <option value="russian">Russian</option>
                                                <option value="rwandan">Rwandan</option>
                                                <option value="saint lucian">Saint Lucian</option>
                                                <option value="salvadoran">Salvadoran</option>
                                                <option value="samoan">Samoan</option>
                                                <option value="san marinese">San Marinese</option>
                                                <option value="sao tomean">Sao Tomean</option>
                                                <option value="saudi">Saudi</option>
                                                <option value="scottish">Scottish</option>
                                                <option value="senegalese">Senegalese</option>
                                                <option value="serbian">Serbian</option>
                                                <option value="seychellois">Seychellois</option>
                                                <option value="sierra leonean">Sierra Leonean</option>
                                                <option value="singaporean">Singaporean</option>
                                                <option value="slovakian">Slovakian</option>
                                                <option value="slovenian">Slovenian</option>
                                                <option value="solomon islander">Solomon Islander</option>
                                                <option value="somali">Somali</option>
                                                <option value="south african">South African</option>
                                                <option value="south korean">South Korean</option>
                                                <option value="spanish">Spanish</option>
                                                <option value="sri lankan">Sri Lankan</option>
                                                <option value="sudanese">Sudanese</option>
                                                <option value="surinamer">Surinamer</option>
                                                <option value="swazi">Swazi</option>
                                                <option value="swedish">Swedish</option>
                                                <option value="swiss">Swiss</option>
                                                <option value="syrian">Syrian</option>
                                                <option value="taiwanese">Taiwanese</option>
                                                <option value="tajik">Tajik</option>
                                                <option value="tanzanian">Tanzanian</option>
                                                <option value="thai">Thai</option>
                                                <option value="togolese">Togolese</option>
                                                <option value="tongan">Tongan</option>
                                                <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                                <option value="tunisian">Tunisian</option>
                                                <option value="turkish">Turkish</option>
                                                <option value="tuvaluan">Tuvaluan</option>
                                                <option value="ugandan">Ugandan</option>
                                                <option value="ukrainian">Ukrainian</option>
                                                <option value="uruguayan">Uruguayan</option>
                                                <option value="uzbekistani">Uzbekistani</option>
                                                <option value="venezuelan">Venezuelan</option>
                                                <option value="vietnamese">Vietnamese</option>
                                                <option value="welsh">Welsh</option>
                                                <option value="yemenite">Yemenite</option>
                                                <option value="zambian">Zambian</option>
                                                <option value="zimbabwean">Zimbabwean</option>
                                                <option value="other">Diğer</option>
                                            </select>
                                        </span>
                                    </span>
                                </div>                            
                                </div>

                                <div className="row p-2">

                                <div className="col-3">
                                    <label for="tcNo" style={{minHeight:"13px" ,ariaHidden:"false"}}>Vatandaşlık Numaranız</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="number" className="form-control" name="tcNo" id="tcNo" required
                                    value={input.tcNo || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen vatandaşlık numaranızı giriniz!
                                    </div>
    
                                </div>
    
    
                                <div className="col-3" for="inputDisability">Kronik bir rahatsızlığınız var mı?</div>
                                <div className="form-check col-3">
                                    <span className="form-group">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top",size:"23"}}>
                                            <select className="form-select"
                                                        name="disability"
                                                        id="disability"
                                                        onChange={toggleInput}
                                                        required>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="Evet">Evet</option>
                                                <option value="Hayir">Hayır</option>
                                            </select>
                                            <div className="invalid-feedback">
                                        Lütfen kronik rahatsızlığınızı seçiniz!
                                    </div>
    
                                        </span>
                                    </span>
                                </div>
                                </div>
                                <div className="row p-2 mt-4" for="why" class="form-label" id="disabilitywhy" style={{ display: "none" }}>
                                <div className="col-3" id="myInput">
                                    <label for="why" style={{minHeight:"13px" ,ariaHidden:"false"}}>Varsa Belirtiniz</label>
                                </div>
                                <div className="col-9">                                    
                                    <input
                                                        type="text"
                                                        class="form-control text-muted:(Optional)"
                                                        id="why"
                                                        name="why"
                                                        style={{ display: "none" }}
                                                    />
    
                                </div>
                            </div>

                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="adres" name="adres" for="adres"><b>Adres Bilgileri</b></label></h4><hr />
                            </div>
    
                            <div className="row p-2">
                                <div className="col-3">
                                    <label className="form-sub-label" for="ulke" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız Ülke</label>
                                </div>
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select name="ulke" className="form-select" id="ulke" required
                                            value={input.ulke || ""}
                                            onChange={degistiginde}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="TR">Türkiye</option>
                                                <option value="VI">ABD Virgin Adaları</option>
                                                <option value="AF">Afganistan</option>
                                                <option value="AX">Aland Adaları</option>
                                                <option value="DE">Almanya</option>
                                                <option value="US">Amerika Birleşik Devletleri</option>
                                                <option value="UM">Amerika Birleşik Devletleri Küçük Dış Adaları</option>
                                                <option value="AS">Amerikan Samoası</option>
                                                <option value="AD">Andora</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarktika</option>
                                                <option value="AG">Antigua ve Barbuda</option>
                                                <option value="AR">Arjantin</option>
                                                <option value="AL">Arnavutluk</option>
                                                <option value="AW">Aruba</option>
                                                <option value="QU">Avrupa Birliği</option>
                                                <option value="AU">Avustralya</option>
                                                <option value="AT">Avusturya</option>
                                                <option value="AZ">Azerbaycan</option>
                                                <option value="BS">Bahamalar</option>
                                                <option value="BH">Bahreyn</option>
                                                <option value="BD">Bangladeş</option>
                                                <option value="BB">Barbados</option>
                                                <option value="EH">Batı Sahara</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BE">Belçika</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BY">Beyaz Rusya</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="ZZ">Bilinmeyen veya Geçersiz Bölge</option>
                                                <option value="AE">Birleşik Arap Emirlikleri</option>
                                                <option value="GB">Birleşik Krallık</option>
                                                <option value="BO">Bolivya</option>
                                                <option value="BA">Bosna Hersek</option>
                                                <option value="BW">Botsvana</option>
                                                <option value="BV">Bouvet Adası</option>
                                                <option value="BR">Brezilya</option>
                                                <option value="BN">Brunei</option>
                                                <option value="BG">Bulgaristan</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="GI">Cebelitarık</option>
                                                <option value="DZ">Cezayir</option>
                                                <option value="CX">Christmas Adası</option>
                                                <option value="DJ">Cibuti</option>
                                                <option value="CC">Cocos Adaları</option>
                                                <option value="CK">Cook Adaları</option>
                                                <option value="TD">Çad</option>
                                                <option value="CZ">Çek Cumhuriyeti</option>
                                                <option value="CN">Çin</option>
                                                <option value="DK">Danimarka</option>
                                                <option value="DM">Dominik</option>
                                                <option value="DO">Dominik Cumhuriyeti</option>
                                                <option value="TL">Doğu Timor</option>
                                                <option value="EC">Ekvator</option>
                                                <option value="GQ">Ekvator Ginesi</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="ID">Endonezya</option>
                                                <option value="ER">Eritre</option>
                                                <option value="AM">Ermenistan</option>
                                                <option value="EE">Estonya</option>
                                                <option value="ET">Etiyopya</option>
                                                <option value="FK">Falkland Adaları (Malvinalar)</option>
                                                <option value="FO">Faroe Adaları</option>
                                                <option value="MA">Fas</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="CI">Fildişi Sahilleri</option>
                                                <option value="PH">Filipinler</option>
                                                <option value="PS">Filistin Bölgesi</option>
                                                <option value="FI">Finlandiya</option>
                                                <option value="FR">Fransa</option>
                                                <option value="GF">Fransız Guyanası</option>
                                                <option value="TF">Fransız Güney Bölgeleri</option>
                                                <option value="PF">Fransız Polinezyası</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GH">Gana</option>
                                                <option value="GN">Gine</option>
                                                <option value="GW">Gine-Bissau</option>
                                                <option value="GD">Granada</option>
                                                <option value="GL">Grönland</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GY">Guyana</option>
                                                <option value="ZA">Güney Afrika</option>
                                                <option value="GS">Güney Georgia ve Güney Sandwich Adaları</option>
                                                <option value="KR">Güney Kore</option>
                                                <option value="CY">Güney Kıbrıs Rum Kesimi</option>
                                                <option value="GE">Gürcistan</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">Heard Adası ve McDonald Adaları</option>
                                                <option value="IN">Hindistan</option>
                                                <option value="IO">Hint Okyanusu İngiliz Bölgesi</option>
                                                <option value="NL">Hollanda</option>
                                                <option value="AN">Hollanda Antilleri</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong SAR - Çin</option>
                                                <option value="HR">Hırvatistan</option>
                                                <option value="IQ">Irak</option>
                                                <option value="VG">İngiliz Virgin Adaları</option>
                                                <option value="IR">İran</option>
                                                <option value="IE">İrlanda</option>
                                                <option value="ES">İspanya</option>
                                                <option value="IL">İsrail</option>
                                                <option value="SE">İsveç</option>
                                                <option value="CH">İsviçre</option>
                                                <option value="IT">İtalya</option>
                                                <option value="IS">İzlanda</option>
                                                <option value="JM">Jamaika</option>
                                                <option value="JP">Japonya</option>
                                                <option value="JE">Jersey</option>
                                                <option value="KH">Kamboçya</option>
                                                <option value="CM">Kamerun</option>
                                                <option value="CA">Kanada</option>
                                                <option value="ME">Karadağ</option>
                                                <option value="QA">Katar</option>
                                                <option value="KY">Kayman Adaları</option>
                                                <option value="KZ">Kazakistan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="CO">Kolombiya</option>
                                                <option value="KM">Komorlar</option>
                                                <option value="CG">Kongo</option>
                                                <option value="CD">Kongo Demokratik Cumhuriyeti</option>
                                                <option value="CR">Kosta Rika</option>
                                                <option value="KW">Kuveyt</option>
                                                <option value="KP">Kuzey Kore</option>
                                                <option value="MP">Kuzey Mariana Adaları</option>
                                                <option value="CU">Küba</option>
                                                <option value="KG">Kırgızistan</option>
                                                <option value="LA">Laos</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LV">Letonya</option>
                                                <option value="LR">Liberya</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Litvanya</option>
                                                <option value="LB">Lübnan</option>
                                                <option value="LU">Lüksemburg</option>
                                                <option value="HU">Macaristan</option>
                                                <option value="MG">Madagaskar</option>
                                                <option value="MO">Makao S.A.R. Çin</option>
                                                <option value="MK">Makedonya</option>
                                                <option value="MW">Malavi</option>
                                                <option value="MV">Maldivler</option>
                                                <option value="MY">Malezya</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="IM">Man Adası</option>
                                                <option value="MH">Marshall Adaları</option>
                                                <option value="MQ">Martinik</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Meksika</option>
                                                <option value="FM">Mikronezya Federal Eyaletleri</option>
                                                <option value="MD">Moldovya Cumhuriyeti</option>
                                                <option value="MC">Monako</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MR">Moritanya</option>
                                                <option value="MZ">Mozambik</option>
                                                <option value="MN">Moğolistan</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="EG">Mısır</option>
                                                <option value="NA">Namibya</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NE">Nijer</option>
                                                <option value="NG">Nijerya</option>
                                                <option value="NI">Nikaragua</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Adası</option>
                                                <option value="NO">Norveç</option>
                                                <option value="CF">Orta Afrika Cumhuriyeti</option>
                                                <option value="UZ">Özbekistan</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PW">Palau</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua Yeni Gine</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Polonya</option>
                                                <option value="PT">Portekiz</option>
                                                <option value="PR">Porto Riko</option>
                                                <option value="RE">Reunion</option>
                                                <option value="RO">Romanya</option>
                                                <option value="RW">Ruanda</option>
                                                <option value="RU">Rusya Federasyonu</option>
                                                <option value="SH">Saint Helena</option>
                                                <option value="KN">Saint Kitts ve Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="PM">Saint Pierre ve Miquelon</option>
                                                <option value="VC">Saint Vincent ve Grenadinler</option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">Sao Tome ve Principe</option>
                                                <option value="SN">Senegal</option>
                                                <option value="SC">Seyşeller</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapur</option>
                                                <option value="SK">Slovakya</option>
                                                <option value="SI">Slovenya</option>
                                                <option value="SB">Solomon Adaları</option>
                                                <option value="SO">Somali</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Surinam</option>
                                                <option value="SY">Suriye</option>
                                                <option value="SA">Suudi Arabistan</option>
                                                <option value="SJ">Svalbard ve Jan Mayen</option>
                                                <option value="SZ">Svaziland</option>
                                                <option value="RS">Sırbistan</option>
                                                <option value="CS">Sırbistan-Karadağ</option>
                                                <option value="CL">Şili</option>
                                                <option value="TJ">Tacikistan</option>
                                                <option value="TZ">Tanzanya</option>
                                                <option value="TH">Tayland</option>
                                                <option value="TW">Tayvan</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad ve Tobago</option>
                                                <option value="TN">Tunus</option>
                                                <option value="TC">Turks ve Caicos Adaları</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="TM">Türkmenistan</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukrayna</option>
                                                <option value="OM">Umman</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="QO">Uzak Okyanusya</option>
                                                <option value="JO">Ürdün</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VA">Vatikan</option>
                                                <option value="VE">Venezuela</option>
                                                <option value="VN">Vietnam</option>
                                                <option value="WF">Wallis ve Futuna</option>
                                                <option value="YE">Yemen</option>
                                                <option value="NC">Yeni Kaledonya</option>
                                                <option value="NZ">Yeni Zelanda</option>
                                                <option value="GR">Yunanistan</option>
                                                <option value="ZM">Zambiya</option>
                                                <option value="ZW">Zimbabve</option>
                                            </select>
                                            <div className="invalid-feedback">
                                    Lütfen yaşadığınız ülkeyi seçiniz!
                                </div>
                                        </span>
                                    </span>
                                </div>
                                
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
                            </div>
                            
                            <div className="row p-2">
                                <div className="col-3">
                                    <label className="form-sub-label" for="ilce" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız ilçe</label>
                                </div>
                                <div className="col-3">
                                <input type="text" className="form-control" id="ilce" name="ilce" required
                                value={input.ilce || ""}
                                onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen yaşadığınız ilçeyi seçiniz!
                                    </div>
    
                                </div>
                                <div className="col-3">
                                    <label for="mahalle" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız Mahalle</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="mahalle" name="mahalle" required
                                    value={input.mahalle || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir mahalle giriniz!
                                    </div>
                                </div>
    
                            </div>
                            
    
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label for="sokak" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız Sokak</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="sokak" name="sokak" required
                                    value={input.sokak || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir sokak giriniz!
                                    </div>
                                </div>
    
                                <div className="col-3">
                                    <label for="apartno" style={{minHeight:"13px" ,ariaHidden:"false"}}>Apartman Numarası</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="number" className="form-control" id="apartno" name="apartno" required
                                    value={input.apartno || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir numara giriniz!
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-3">
                                    <label for="Zip" style={{minHeight:"13px" ,ariaHidden:"false"}}>Posta Kodu</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="number" className="form-control" id="zip" name="zip" required
                                    value={input.zip || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir posta kodu giriniz!
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="egitim" name="egitim"><b>Eğitim Bilgileri</b></label></h4><hr />
    
                            </div>
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label for="universite" style={{minHeight:"13px" ,ariaHidden:"false"}}>Üniversite Adı</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="universite" name="universite" required
                                    value={input.universite || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir üniversite giriniz!
                                    </div>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="fakulte" style={{minHeight:"13px" ,ariaHidden:"false"}}>Fakülte Adı</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="fakulte" name="fakulte" required
                                    value={input.fakulte || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir fakülte giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="bolum" style={{minHeight:"13px" ,ariaHidden:"false"}}>Bölüm Adı</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="bolum" name="bolum" required
                                    value={input.bolum || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir bölüm giriniz!
                                    </div>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="mezuniyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>Mezuniyet Durumu</label>
                                </div>
    
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}
                                            value={input.mezuniyet || ""}
                                            onChange={degistiginde}>
                                            <select name="nationality" className="form-select" id="mezuniyet" required>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="mezun">Mezun</option>
                                                <option value="devamEdiyor">Devam Ediyor</option>
                                                <option value="devamEtmiyor">Devam Etmiyor</option>
                                            </select>
                                            <div className="invalid-feedback">
                                        Lütfen mezuniyet durumunuzu seçiniz!
                                    </div>
    
                                        </span>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="MezuniyetTarih" style={{minHeight:"13px" ,ariaHidden:"false"}}>Mezuniyet Tarihi</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="date" className="form-control" id="MezuniyetTarih" name="MezuniyetTarih" required
                                    value={input.MezuniyetTarih || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen en son mezun olduğunuz tarihi seçiniz!
                                    </div>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="not" style={{minHeight:"13px" ,ariaHidden:"false"}}>Not Ortalaması</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="number" className="form-control" id="not" name="not" required
                                    value={input.not || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen not ortalamanızı giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="dokuman" name="dokuman"><b>Doküman Bilgileri</b></label></h4>                <hr></hr>
    
                            </div>
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="cv" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Özgeçmişinizi pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="cv" name="cv" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={input.cv || ""}
                                        onChange={degistiginde}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                        

                                    </div>
                                </div>
    
                            </div>
                            
    
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="niyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Niyet Mektubunuzu pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="niyet" name="niyet" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={input.niyet || ""}
                                        onChange={degistiginde}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>
                            
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="diploma" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Diplomanızı pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="diploma" name="diploma" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={input.diploma || ""}
                                        onChange={degistiginde}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>
                            
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="ingYetkin" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen İngilizce Yetkinlik Belgenizi pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="ingYetkin" name="ingYetkin" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={input.ingYetkin || ""}
                                        onChange={degistiginde}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="ikametgah" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen İkametgahınızı pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="ikametgah" name="ikametgah" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={input.ikametgah || ""}
                                        onChange={degistiginde}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>
                            
    
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="pasaport" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Pasaportunuzu pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="pasaport" name="pasaport" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={input.pasaport || ""}
                                        onChange={degistiginde}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
    
    
                            </div>
    

                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="iletisim"><b>İletişim Bilgileri</b></label></h4>
                                <hr></hr>
                            </div>
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="ulkeKod" style={{minHeight:"13px" ,ariaHidden:"false"}}>Ülke Kodu</label>
                                </div>
    
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select name="ulkeKod" className="form-select" id="ulkeKod" required
                                            value={input.ulkeKod || ""}
                                            onChange={degistiginde}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                                <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                                <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                                <option data-countryCode="AO" value="244">Angola (+244)</option>
                                                <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                                <option data-countryCode="AG" value="1268">Antigua (+1268)</option>
                                                <option data-countryCode="AE" value="971">Arab Emirates (+971)</option>
                                                <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                                <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                                <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                                <option data-countryCode="AU" value="61">Australia (+61)</option>
                                                <option data-countryCode="AT" value="43">Austria (+43)</option>
                                                <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                                <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                                <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                                <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                                <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                                <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                                <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                                <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                                <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                                <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                                <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                                <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                                <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                                <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                                <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                                <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                                <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                                <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                                <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                                <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                                <option data-countryCode="CA" value="1">Canada (+1)</option>
                                                <option data-countryCode="CV" value="238">Cape Verde (+238)</option>
                                                <option data-countryCode="CL" value="56">Chile (+56)</option>
                                                <option data-countryCode="CN" value="86">China (+86)</option>
                                                <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                                <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                                <option data-countryCode="CG" value="242">Congo (+242)</option>
                                                <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                                <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                                <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                                <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                                <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                                <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                                <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                                <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                                <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                                <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                                <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                                <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                                <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                                <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                                <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                                <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                                <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                                <option data-countryCode="FI" value="358">Finland (+358)</option>
                                                <option data-countryCode="FR" value="33">France (+33)</option>
                                                <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                                <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                                <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                                <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                                <option data-countryCode="DE" value="49">Germany (+49)</option>
                                                <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                                <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                                <option data-countryCode="GR" value="30">Greece (+30)</option>
                                                <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                                <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                                <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                                <option data-countryCode="GU" value="671">Guam (+671)</option>
                                                <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                                <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                                <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                                <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                                <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                                <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                                <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                                <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                                <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                                <option data-countryCode="IN" value="91">India (+91)</option>
                                                <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                                <option data-countryCode="IR" value="98">Iran (+98)</option>
                                                <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                                <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                                <option data-countryCode="IL" value="972">Israel (+972)</option>
                                                <option data-countryCode="IT" value="39">Italy (+39)</option>
                                                <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                                <option data-countryCode="JP" value="81">Japan (+81)</option>
                                                <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                                <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                                <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                                <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                                <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                                <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                                <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                                <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                                <option data-countryCode="LA" value="856">Laos (+856)</option>
                                                <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                                <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                                <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                                <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                                <option data-countryCode="LY" value="218">Libya (+218)</option>
                                                <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                                <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                                <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                                <option data-countryCode="MO" value="853">Macao (+853)</option>
                                                <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                                <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                                <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                                <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                                <option data-countryCode="ML" value="223">Mali (+223)</option>
                                                <option data-countryCode="MT" value="356">Malta (+356)</option>
                                                <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                                <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                                <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                                <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                                <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                                <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                                <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                                <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                                <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                                <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                                <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                                <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                                <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                                <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                                <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                                <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                                <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                                <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                                <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                                <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                                <option data-countryCode="NE" value="227">Niger (+227)</option>
                                                <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                                <option data-countryCode="NU" value="683">Niue (+683)</option>
                                                <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                                <option data-countryCode="NO" value="47">Norway (+47)</option>
                                                <option data-countryCode="OM" value="968">Oman (+968)</option>
                                                <option data-countryCode="PW" value="680">Palau (+680)</option>
                                                <option data-countryCode="PA" value="507">Panama (+507)</option>
                                                <option data-countryCode="PG" value="675">Papua Guinea (+675)</option>
                                                <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                                <option data-countryCode="PE" value="51">Peru (+51)</option>
                                                <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                                <option data-countryCode="PL" value="48">Poland (+48)</option>
                                                <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                                <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                                <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                                <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                                <option data-countryCode="RO" value="40">Romania (+40)</option>
                                                <option data-countryCode="RU" value="7">Russia (+7)</option>
                                                <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                                <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                                <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                                <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                                <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                                <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                                <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                                <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                                <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                                <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                                <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                                <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                                <option data-countryCode="ES" value="34">Spain (+34)</option>
                                                <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                                <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                                <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                                <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                                <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                                <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                                <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                                <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                                <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                                <option data-countryCode="SI" value="963">Syria (+963)</option>
                                                <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                                <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                                <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                                <option data-countryCode="TG" value="228">Togo (+228)</option>
                                                <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                                <option data-countryCode="TT" value="1868">Tobago (+1868)</option>
                                                <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                                <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                                <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                                <option data-countryCode="TC" value="1649">Caicos Islands (+1649)</option>
                                                <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                                <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                                <option data-countryCode="GB" value="44">UK (+44)</option>
                                                <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                                <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                                <option data-countryCode="US" value="1">USA (+1)</option>
                                                <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                                <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                                <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                                <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                                <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                                <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                                <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                                <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                                <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                                <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                            </select>
                                            <div className="invalid-feedback">
                                        Lütfen yalnızca ülke kodunuzu seçiniz!
                                    </div>
                                        </span>
                                    </span>
    
                                    
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="alanKod" style={{minHeight:"13px" ,ariaHidden:"false"}}>Alan Kodu</label>
                                </div>
    
    
                                <div className="col-3">
                                    <input type="number" className="form-control" id="alanKod" name="alanKod" required
                                    value={input.alanKod || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen yalnızca alan kodunuzu seçiniz!
                                    </div>
                                </div>
                            </div>
                            
    
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="telefon" style={{minHeight:"13px" ,ariaHidden:"false"}}>Telefon Numarası</label>
                                </div>
                                <div className="col-3">
                                    <input type="number" className="form-control" id="telefon" name="telefon" required
                                    value={input.telefon || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen telefon numaranızı başında ülke ve alan kodu olmadan yedi haneli olarak giriniz!
                                    </div>
                                </div>
                                <div className="col-3">
                                    <label className="form-sub-label" for="email" style={{minHeight:"13px" ,ariaHidden:"false"}}>E-Posta Adresi</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="email" className="form-control" id="email" name="email" required
                                    value={input.email || ""}
                                    onChange={degistiginde}/>
                                    <div className="invalid-feedback">
                                        Lütfen e-mail adresinizi mail formatına uygun olarak (örn: example@mail.com) giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label for="CheckBoxList2">
                                    <input id="CheckBoxList2" type="checkbox" name="CheckBoxList2" value="1" required/> <a href="http://www.khas.edu.tr/2973/kvkk-aydinlatma-metni" target="blank">Aydınlatma Metni</a>’ni okudum ve Kadir Has Üniversitesi (Üniversite) tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu ile Regulation (EU) 2016/679 - General Data Protection Regulation uyarınca, işleme amacı ile bağlantılı, sınırlı ve ölçülü olacak şekilde, onayıma istinaden, Üniversite bursuna başvuru yapabilmem amacı ile alınan kişisel verilerimin saklanmasına ve sair şekillerde işlenmesine, yine aynı amaçlarla gerektiğinde Üniversite çalışanları ile ve/veya Üniversite eğitimleri/çalışmaları kapsamındaki iş ortakları ile paylaşılmasına ve Learn Sistemi’nde saklanmasına rıza/onay veriyorum.
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </center></div>
    <center>
                            <div class="row justify-content-center mt-5 mb-5" style={{marginLeft:"25%"}}>
                                        <div>
                                            <center>
                                        <a href="Basvurular"><button class="btn btn-dark" style={{fontSize:"15px",height:"20%",width:"20%",fontFamily:"monospace"}} type="submit" onClick={() => gonder()}>Başvur</button></a> 
                                            
                                            <button class="btn btn-light" style={{fontSize:"15px",height:"20%",width:"20%",fontFamily:"monospace",margin:"3%"}} type="reset"> Temizle </button>
                                        
                                        <a href="BasvuruBilgileri"> 
                                        <button class="btn btn-secondary" style={{fontSize:"15px",height:"20%",width:"20%",fontFamily:"monospace"}} type="submit" onClick={() => basvuruGoster()}> Başvuru Görüntüle </button> 
                                        </a>

                                        </center>
                                    </div>
                                    </div>
                                    </center>
                                                                 
        
        </>
  );
}

export default withAuth(Basvurular);
