import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage404() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='text-black-main flex h-screen w-full flex-col items-center justify-center font-montserrat'>
      <h1 className='font-montserrat text-base font-bold xs:text-5xl'>Oops! Page not found...</h1>
      <Link
        to='/profiles'
        className='my-5 font-montserrat text-xs font-bold text-gray-600 transition duration-100 ease-in-out hover:text-opacity-45 xs:text-lg '
      >
        Go back to profiles
      </Link>
    </div>
  );
}
