import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="error-page">
        {" "}
        {/* Apply the CSS class to the container div */}
        <h1>404 - Page Not Found</h1>
        <p>
          Oops! The page you are looking for could not be found. Please check
          the URL or navigate back to the homepage.
        </p>
      </div>
    </div>
  );
}
