import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage404() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center flex-col h-screen w-full font-montserrat text-black-main">
      <h1 className="xs:text-5xl text-base font-bold font-montserrat">
        Oops! Page not found...
      </h1>
      <Link
        to="/profiles"
        className="font-montserrat text-gray-600 font-bold xs:text-lg text-xs my-5 hover:text-opacity-45 transition duration-100 ease-in-out "
      >
        Go back to profiles
      </Link>
    </div>
  );
}
