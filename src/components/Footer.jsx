import React from "react";
import "../assets/style/footer.scss";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          Bu web sitesinin kaynak kodlarına{" "}
          <GitHubIcon
            className="github-icon"
            onClick={() => {
              window.open("https://github.com/zzafergok/sample-todo-react-app");
            }}
          />{" "}
          üzerinden ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default Footer;
