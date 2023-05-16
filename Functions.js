import { useNavigate } from "react-router-dom";

export const withAuth = (Basvurular) => {
  return (props) => {
    const isLogin = sessionStorage.getItem("isLogin");
    const navigate = useNavigate();

    if (isLogin === "true") {
      return <Basvurular {...props} />;
    } 
    else {
      navigate("/Basvurular");
      navigate("/BasvurularBilgileri"); 
      navigate("/Profil");
      navigate("/ProfilBilgileri");
      return null;
    }
  };
};

















