import { Outlet } from "react-router-dom";

const RootElement = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default RootElement;
