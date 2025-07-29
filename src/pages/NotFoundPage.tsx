import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="px-10 py-20 flex flex-col items-center justify-center">
      <span className="pb-8 text-9xl">👻</span>
      <h2 className="text-2xl font-medium">404 – Page Not Found</h2>
      <p className="pb-4">
        The page you're looking for doesn’t exist or might have been moved.
      </p>
      <Link className=" text-blue-600 hover:underline" to="/">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
