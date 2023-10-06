import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";

const SignIn = () => {
  const { id } = useContext(AuthContext);
  const [spot, setSpot] = useState("");

  useEffect(() => {
    fetch("/touristSpot.json")
      .then((res) => res.json())
      .then((data) => {
        const [spot] = data.filter((spot) => spot.id === id);
        setSpot(spot);
      });
  }, [id]);

  const handleDate = (e) => {
    const theElement = e.target;
    const fieldValue = new Date(e.target.value);
    const newDate = fieldValue.getDate();
    const newMonth = fieldValue.getMonth() + 1;
    const targetSpan = theElement.previousElementSibling;
    targetSpan.innerHTML = `${newDate}/${newMonth}`;
  };

  const handleBookings = (e) => {
    e.preventDefault();
    console.log("booking");
  };

  return (
    <section className="relative">
      <Navbar />
      <div
        className="hero items-center pt-20 min-h-screen absolute top-0 -z-50"
        style={{
          backgroundImage: `url(${spot.bg_image})`,
        }}>
        <div className="hero-overlay absolute -top-20 h-screen bg-opacity-70"></div>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-8xl text-white font-bold font-bebas-Neue">
              {spot.title}
            </h1>
            <p className="py-6 max-w-xl">
              {spot.description?.slice(0, 300) + "...."}
            </p>
          </div>

          <div
            data-theme="light"
            className="card rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleBookings} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Origin</span>
                </label>
                <input
                  type="text"
                  placeholder="Origin"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Destination</span>
                </label>
                <input
                  type="text"
                  placeholder="Destination"
                  className="input input-bordered"
                  value={spot.title}
                  required
                />
              </div>
              <div className="flex">
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">From</span>
                  </label>
                  <span className="absolute p-3 border border-e-0 bg-white text-black font-bold z-50 w-1/3 rounded-s-lg h-12"></span>
                  <input
                    onChange={(e) => handleDate(e)}
                    type="date"
                    name="dateFrom"
                    placeholder="Destination"
                    className="input input-bordered"
                    required
                  />
                </div>{" "}
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">To</span>
                  </label>
                  <span className="absolute p-3 border border-e-0 bg-white text-black font-bold z-50 w-1/3 rounded-s-lg h-12"></span>
                  <input
                    onChange={(e) => handleDate(e)}
                    type="date"
                    name="dateTo"
                    placeholder="Destination"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6 font-normal">
                <button className="btn bg-yellow">Start Booking</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
