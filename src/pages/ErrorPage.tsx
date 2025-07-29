import {Link, useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="px-10 py-20 flex flex-col items-center justify-center">
      <span className="pb-8 text-9xl">💥</span>
      <h2 className="text-2xl font-medium"> Something went wrong</h2>
      <Link className="hover:underline" to="/">
        Take me back to safety
      </Link>
    </div>
  );
};

export default ErrorPage;
