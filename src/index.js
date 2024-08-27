import React from "react";
import ReactDOM from "react-dom/client";
import "./css/servers.css";
import Server from "./Server";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

const obgData = [
  {
    logo: logo1,
    title: "Pro ad constituto",
    text: "Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.",
  },
  {
    logo: logo2,
    title: "Eam commodo",
    text: "Fuisset intellegat delicatissimi ex mea. Cu probo integre nec.",
  },
  {
    logo: logo3,
    title: "Reformidans eis",
    text: "Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet.",
  },
];

root.render(
  <div>
    <div className="wrapper">
      <div className="container">
        <div className="servers">
          {obgData.map((el, index) => (
            <Server
              key={index}
              logo={el.logo}
              title={el.title}
              text={el.text}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
