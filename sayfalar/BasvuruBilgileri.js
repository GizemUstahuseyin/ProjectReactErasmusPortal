import React from 'react';
import {withAuth} from '../Functions';

const BasvuruBilgileri = () => {
    const user_info = sessionStorage.getItem("user_info");
    var info_array = user_info.split(",");

    
return(
        <div className="container mt-3 mb-5" style={{paddingLeft:"10%",paddingRight:"10%"}}>
            <div className="row bg-light rounded-4 shadow" style={{marginLeft:"20%",padding:"5%"}}>
                <div className="col-12 border-light my-5">
                    <h1 className="text-center" style={{color:"black"}}>Başvuru Bilgilerim</h1>
                        <div className="col-12 justify-content-center">
                            <ul style={{listStyle:"none",textAlign:"center",color:"black"}}><br></br>
                            <h2 className="text-center">Kişisel Bilgilerim</h2><hr></hr>
                                            <li >İsim: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[0] }</span></li>
                                            <li>Soyisim: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[1]}</span></li>
                                            <li>Cinsiyet: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[2]}</span></li>
                                            <li>Doğum Tarihi: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[3]}</span></li>
                                            <li>Milliyet: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[4]}</span></li>
                                            <li>İkinci Milliyet: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[5]}</span></li>
                                            <li>Vatandaşlık Numarası: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[6]}</span></li>
                                            <li>Kronik Rahatsızlık: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[7]}</span></li>
                                            <li>Kronik Rahatsızlık (Varsa Açıklaması): <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[8]}</span></li>
                                            
                                            <br></br><h2 className="text-center">Adres Bilgilerim</h2><hr></hr>
                                            <li>Yaşadığınız Ülke: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}><a>{info_array[9]}</a></span></li>
                                            <li>Yaşadığınız Şehir: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[10]}</span></li>
                                            <li>Yaşadığınız İlçe: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[11]}</span></li>
                                            <li>Yaşadığınız Mahalle: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[12]}</span></li>
                                            <li>Yaşadığınız Sokak: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[13]}</span></li>
                                            <li>Apartman No: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[14]}</span></li>
                                            <li> Posta Kodu: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[15]}</span></li>

                                            <br></br><h2 className="text-center">Eğitim Bilgilerim</h2><hr></hr>
                                            <li>Üniversite Adı: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[16]}</span></li>
                                            <li>Fakulte Adı: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[17]}</span></li>
                                            <li>Bölüm Adı: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[18]}</span></li>
                                            <li>Mezuniyet Durumu: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[19]}</span></li>
                                            <li>Mezuniyet Tarihi: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[20]}</span></li>
                                            <li>Not Ortalaması: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[21]}</span></li>

                                            <br></br><h2 className="text-center">Doküman Bilgilerim</h2><hr></hr>
                                            <li><b>Cv:</b><a href='" + info_array[22] + "' target="_blank">Özgeçmiş.pdf</a></li>
                                            <li><b>Diploma:</b><a href='" + info_array[23] + "' target="_blank">Diploma.pdf</a></li>
                                            <li><b>Niyet Mektubu:</b><a href='" + info_array[24] + "' target="_blank">NiyetMektubu.pdf</a></li>
                                            <li><b>İngilizce Yeterlilik Belgesi:</b><a href='" + info_array[25] + "' target="_blank">İngilizceYeterlilikBelgesi.pdf</a></li>
                                            <li><b>İkametgah:</b><a href='" + info_array[26] + "' target="_blank">İkametgah.pdf</a></li>
                                            <li><b>Pasaport:</b><a href='" + info_array[27] + "' target="_blank">Pasaport.pdf</a></li>
                                            
                                            <br></br><h2 className="text-center">İletişim Bilgilerim</h2><hr></hr>
                                            <li>Ülke Kodu: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[28]}</span></li>
                                            <li>Alan Kodu: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[29]}</span></li>
                                            <li>Telefon Numarası: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[30]}</span></li>
                                            <li>E-Mail Adresi: <span style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{info_array[31]}</span></li>
                            </ul>
                        </div>
                                            
                </div>
            </div>
        </div>

    );
}

export default withAuth(BasvuruBilgileri);


