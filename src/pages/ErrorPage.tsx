import {Link, useLocation, useRouteError} from "react-router-dom";
import {logError} from "@/shared/utils/logError.ts";

interface ErrorPageProps {
  message?: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  const error = useRouteError();
  const { pathname } = useLocation();

  logError(`Error occured inside <ErrorPage /> on route ${pathname}`, error);

  return (
    <div className="px-10 py-20 flex flex-col items-center justify-center">
      <span className="pb-8 text-9xl">💥</span>
      <div className="pb-2 text-center">
        <h2 className="text-2xl font-medium"> Something went wrong</h2>
        {message && <p>{message}</p>}
      </div>
      <Link className=" text-blue-600 hover:underline" to="/">
        Go to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
