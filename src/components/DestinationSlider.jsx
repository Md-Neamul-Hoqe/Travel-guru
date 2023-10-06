import HomeContent from "./HomeContent";
import PropTypes from "prop-types";
import LeftRightIndicator from "./leftRightIndicator";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import IndicatorSlider from "./IndicatorSlider";

const DestinationSlider = ({ spot }) => {
  const { id } = spot;

  const IndicatorImages = [
    "../src/assets/images/cox_bazar-small.jpg",
    "../src/assets/images/Sreemangal-Bangladesh-bangladesh-small.jpg",
    "../src/assets/images/Tourist-Places-In-Sundarban-small.jpg",
  ];

  return (
    <>
      <div className="carousel w-screen h-screen inset-0">
        <div id={`item${id}`} className="carousel-item w-screen relative">
          <HomeContent spot={spot} />

          <LeftRightIndicator id={id} />
        </div>
      </div>

      {/* Indicator Images */}

      <div className="carousel carousel-end max-w-3xl min-h-max p-4 space-x-4 bg-transparent rounded-box fixed -right-0 top-1/2 transform -translate-y-40 z-40">
        {IndicatorImages.map((image, idx) => (
          <IndicatorSlider key={idx} idx={idx + 1} image={image} />
        ))}
      </div>
    </>
  );
};

DestinationSlider.propTypes = {
  spot: PropTypes.object,
};

export default DestinationSlider;
