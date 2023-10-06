import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-extrabold text-yellow-700 my-5">Oops !!!</h1>
      <p className="text-xl my-5">Sorry! Not Found.</p>
      <Link className="btn btn-warning" to="/">
        Go to home page
      </Link>
    </main>
  );
};

export default Error404;
