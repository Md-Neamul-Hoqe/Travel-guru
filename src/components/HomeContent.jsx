import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeContent = ({ spot }) => {
  const { title, bg_image, short_description } = spot;

  return (
    <div
      className="hero h-screen w-screen"
      style={{
        backgroundImage: `url('${bg_image}')`,
        backgroundSize: "100vw 100vh",
      }}>
      <div className="hero-overlay bg-opacity-60 absolute"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md -ml-[800px]">
          <h1 className="mb-5 text-8xl font-bebas-Neue text-white font-bold">
            {title}
          </h1>

          <p className="mb-5 max-w-xs leading-7">{short_description}</p>

          <Link to='/booking'>
            <button className="btn bg-yellow border-none font-medium text-black">
              Booking <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

HomeContent.propTypes = {
  spot: PropTypes.object,
};

export default HomeContent;
