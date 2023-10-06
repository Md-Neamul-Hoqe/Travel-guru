import Navbar from "./components/Navbar";
import DestinationSlider from "./components/DestinationSlider";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";

function App() {
  const spots = useLoaderData();

  const { id } = useContext(AuthContext);

  const [spot] = spots.filter((aSpot) => aSpot.id === id);

  console.log(spot.bg_image);
  return (
    <div className={`bg-[url(${spot?.bg_image})]`}>
      <Navbar />

      <div className="mx-auto bg-transparent absolute top-0 left-0 right-0 -z-50">
        <DestinationSlider spot={spot} />
      </div>
    </div>
  );
}

export default App;
