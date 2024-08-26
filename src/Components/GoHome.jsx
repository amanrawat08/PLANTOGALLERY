import { Link } from "react-router-dom";

export default function GoHome() {
  return (
    <Link
      to="/"
      className="text-green-700 font-bold mt-3 hover:underline text-center"
    >
      Go to Home Page
    </Link>
  );
}
