import Banner from "../../components/Banner/Banner";
import HomeTabs from "../../components/HomeTabs/HomeTabs";
import Slider from "../../components/Slider.jsx/Slider";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <div className="max-w-6xl mx-auto mt-6 mb-8">
                <HomeTabs></HomeTabs>
            </div>
            <Slider></Slider>
        </div>
    );
};

export default Home;