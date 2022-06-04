import React from "react";
import style from "./topBanner.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function TopBanner() {
  return (
    <div className={style.topbanner}>
      <div className={style.top}>
        <p>
          ¿necesitas el regalo perfecto para dia de la madre? en ESPRIT
          encuentras miles de opciones para que compres facil.
          <AiOutlineArrowRight />
        </p>
      </div>
    </div>
  );
}
