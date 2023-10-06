import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from "prop-types";

const LeftRightIndicator = ({ id }) => {
  console.log(id);
  const { handleSliderId } = useContext(AuthContext);
  return (
    <>
      <div className="absolute flex justify-between left-1/2 right-1/2 bottom-10 gap-5">
        <a
          onClick={() => handleSliderId(id === 1 ? 3 : id - 1)}
          href={`#item${id === 1 ? 3 : id - 1}`}
          className="btn bg-white border-none text-black btn-circle relative">
          ❮
        </a>

        <a
          onClick={() => handleSliderId(id === 3 ? 1 : id + 1)}
          href={`#item${id === 3 ? 1 : id + 1}`}
          className="btn bg-white border-none text-black btn-circle">
          ❯
        </a>
      </div>
    </>
  );
};

LeftRightIndicator.propTypes = {
  id: PropTypes.number,
};

export default LeftRightIndicator;
