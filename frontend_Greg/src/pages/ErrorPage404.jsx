import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage404() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! Page not found...</h1>
      <Link to="/profiles">Go back to profiles</Link>
    </div>
  );
}