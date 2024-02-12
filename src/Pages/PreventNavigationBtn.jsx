import { useEffect } from "react";

export default function PreventNavigationBtn() {
  useEffect(() => {
    const handleNavigation = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return null;
}
