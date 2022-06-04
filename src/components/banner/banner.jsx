import { useState } from "react";
import style from "./banner.module.css";
import PopopInfo from "../info/info.jsx";

export default function Banner() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={style.bannerContainer}>
      {showMore && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
        >
          <button
            style={{
              zIndex: 3,
              position: "absolute",
              right: "20px",
              top: "20px",
              padding: "5px",
              backgroundColor: "tomato",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={() => setShowMore(false)}
          >
            Cerrar
          </button>
          <PopopInfo />
        </div>
      )}
      <div className={style.banner}>
        <div className={style.picture}>
          <img
            src="https://esprit.vtexassets.com/arquivos/esprit-twininning.jpg"
            alt=""
          />
        </div>
        <div className={style.logo}>
          <img
            src="https://esprit.vtexassets.com/arquivos/twinning.png?%20v=3423"
            alt="logo"
          />
          <div className={style.showMore}>
            <p style={{ color: "azure" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              doloremque voluptatum debitis beatae, non illum molestias aliquid
              earum amet sunt in corporis quos nulla ab quam enim repellat odit
              commodi.
            </p>
            <div>
              <br />
              <button onClick={() => setShowMore(true)}>VER MÁS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
