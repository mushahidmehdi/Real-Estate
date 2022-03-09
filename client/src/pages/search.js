import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

const Search = () => {
  return (
    <>
      <Header />
      <div className="search__page">
        <div className="search__page-title">
          <h1>Search for an offer</h1>
          <p>Choose from the most advantageous offers</p>
        </div>

        <div className="search__page_filter-settings">
          <Filter />
          <Gallery />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Search;
