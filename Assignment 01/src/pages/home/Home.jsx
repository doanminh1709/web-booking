import HomeType from "../../components/CatalogHotel/HomeType";
import City from "../../components/City/City";
import InfoHotel from "../../components/Hotel/InfoHotel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Register from "../../components/Register/Register";

const Home = () => {
	return (
		<div>
			<Navbar/>
			<Header/>      
			<City/>
			<HomeType/>
			<InfoHotel/>
			<Register/>
			<Footer/> 
		</div>
	);
};

export default Home;
