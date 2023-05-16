import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Anasayfa from "./sayfalar/Anasayfa.js";
import Basvurular from "./sayfalar/Basvurular";
import BasvuruBilgileri from "./sayfalar/BasvuruBilgileri";
import Duyurular from "./sayfalar/Duyurular";
import Giris from "./sayfalar/Giris";
import Kayit from "./sayfalar/Kayit";
import Profil from "./sayfalar/Profil";
import ProfilBilgileri from "./sayfalar/ProfilBilgileri";
import SifreGuncelle from "./sayfalar/SifreGuncelle";
import Iletisim from "./sayfalar/Iletisim";
import Sidebar from "./sidebar.js";

function Router() {
    return( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route path="/" element= {<Anasayfa />} />
                <Route path="Anasayfa" element= {<Anasayfa />} />
                <Route path="Basvurular" element= {<Basvurular />} />
                <Route path="BasvuruBilgileri" element= {<BasvuruBilgileri />} />
                <Route path="Duyurular" element= {<Duyurular />} />                
                <Route path="Giris" element= {<Giris />} />                
                <Route path="Kayit" element= {<Kayit />} />                
                <Route path="Profil" element= {<Profil/>} />                
                <Route path="ProfilBilgileri" element= {<ProfilBilgileri/>} />                
                <Route path="SifreGuncelle" element= {<SifreGuncelle/>} />                
                <Route path="Iletisim" element= {<Iletisim />} />   
            </Route>
        </Routes>                                         
    </BrowserRouter>);
}
export default Router;










