import DetailHotel from "../../components/DetailHotel/DetailHotel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Register from "../../components/Register/Register";

const Detail = () => {
  return (
    <div>
      <Navbar />
      <DetailHotel/>
      <Register/>
			<Footer/>
    </div>
  );
};

export default Detail;
