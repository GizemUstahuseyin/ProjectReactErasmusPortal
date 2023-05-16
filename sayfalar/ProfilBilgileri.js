import React from 'react';
import {withAuth} from '../Functions';

const ProfilBilgileri = () => {
    const person_info = sessionStorage.getItem("person_info");
    var info_array = person_info.split(",");
    return(
        <div className="container mt-3 mb-5" style={{paddingLeft:"10%",paddingRight:"10%"}}>
        <div className="row bg-light rounded-4 shadow" style={{marginLeft:"20%",padding:"5%"}}>
            <div className="col-12 border-light my-5">
                <h1 className="text-center" style={{color:"black"}}>Profil Bilgilerim</h1>
                    <div className="col-12 justify-content-center">
                        <ul style={{listStyle:"none",textAlign:"center",color:"black"}}><br></br>
                        <h2 className="text-center">Kişisel Bilgilerim</h2><hr></hr>
                                        <li >İsim: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[0] }</span></li>
                                        <li>Soyisim: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[1]}</span></li>
                                        <li>Cinsiyet: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[2]}</span></li>
                                        <li>Doğum Tarihi: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[3]}</span></li>
                                        
                                        <br></br><h2 className="text-center">Adres Bilgilerim</h2><hr></hr>
                                        <li>Yaşadığınız Şehir: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[4]}</span></li>
                                        <li>Yaşadığınız İlçe: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[5]}</span></li>
                                        
                                        <br></br><h2 className="text-center">İletişim Bilgilerim</h2><hr></hr>
                                        <li>Telefon Numarası: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[6]}</span></li>
                                        <li>E-Mail Adresi: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[7]}</span></li>
                        </ul>
                    </div>
                                        
            </div>
        </div>
    </div>

    );
}

export default withAuth(ProfilBilgileri);

