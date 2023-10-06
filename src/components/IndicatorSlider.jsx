import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/AuthProvider";

const IndicatorSlider = ({ idx, image }) => {
  const { id, handleSliderId } = useContext(AuthContext);
  console.log(id, idx, image);
  return (
    <div id={`item${idx}`} className="carousel-item">
      <a
        onClick={() => handleSliderId(idx)}
        href={`#item${idx}`}
        className={`border-4 hover:border-yellow rounded-box ${
          id === idx ? "border-yellow" : "border-transparent"
        }`}>
        <img src={image} className="rounded-box h-[332px] max-w-xs" />
      </a>
    </div>
  );
};

IndicatorSlider.propTypes = {
  idx: PropTypes.number,
  image: PropTypes.string,
};
export default IndicatorSlider;
