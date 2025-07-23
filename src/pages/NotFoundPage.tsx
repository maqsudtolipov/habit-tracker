import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="px-10 py-20 flex flex-col items-center justify-center">
      <span className="pb-8 text-9xl"> 🌴</span>
      <h2 className="text-2xl font-medium">404: This Habit Went on Vacation</h2>
      <Link className="hover:underline" to="/">
        {" "}
        Take me back to safety
      </Link>
    </div>
  );
};

export default NotFoundPage;
