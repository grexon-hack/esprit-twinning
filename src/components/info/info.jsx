import style from "./info.module.css";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function PopopInfo() {
  return (
    <div className={style.background}>
      <div className={style.cardPopop}>
        <div className={style.logoCard}>
          <img
            src="https://esprit.vtexassets.com/arquivos/twinning.png?%20v=3423"
            alt="logo"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores fuga
          dolorum ratione maiores vitae dolorem quasi sapiente quis voluptates
          ipsum consectetur suscipit, soluta nam magnam ex mollitia sunt numquam
          commodi?
        </p>
        <div className={style.social}>
          <div className={style.whatsapp}>
            <FaWhatsapp />
          </div>
          <div className={style.facebook}>
            <FaFacebook />
          </div>
          <div className={style.instagram}>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
