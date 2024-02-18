import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Register from "../../components/Register/Register";
import SearchContent from "../../components/SearchContent/SearchContent";

const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchContent/>
      <Register />
      <Footer />
    </div>
  );
};

export default Search;
