import style from "./slide.module.css";
import pictures from "./functionExternal.js";
import { useState } from "react";

export default function Slide() {
  const [page, setPage] = useState(0);
  const [array, setArray] = useState([...pictures]);
  const [clearPicture, setClearPicture] = useState(false);

  function pagination(array) {
    return array.slice(page, page + 1);
  }

  const handlerSubmit = (event) => {
    let value = event.target.url.value;
    event.preventDefault();
    setArray(() => [...array, { url: value, name: "new picture" }]);
    event.target.url.value = "";
  };

  const handlerClick = (data) => {
    setArray(() => array.filter((d) => d.url !== data));
    if (page === array.length - 1) setPage(page - 1);
    setClearPicture(!clearPicture);
  };

  return (
    <div className={style.containerSlide}>
      <div>
        <form onSubmit={(e) => handlerSubmit(e)}>
          <span>Añadir Imagen </span>
          <input
            type="url"
            name="url"
            placeholder="URL"
            required
            autoComplete="off"
          />
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <div className={style.slide}>
        {array.length
          ? pagination(array).map((data, index) => {
              return (
                <div key={index} style={{ width: "80%", height: "70%" }}>
                  <div style={{ position: "absolute" }}></div>
                  <img
                    src={data.url}
                    alt={data.name}
                    onClick={() => setClearPicture(!clearPicture)}
                  />
                  {clearPicture && (
                    <div className={style.clearPicture}>
                      <div onClick={() => handlerClick(data.url)}>Borrar</div>
                      <div onClick={() => setClearPicture(!clearPicture)}>
                        Cancelar
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          : "Not found picture"}
        <div className={style.circles} style={{ width: array.length * 20 }}>
          {!clearPicture &&
            array.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "1px solid",
                    backgroundColor: page === index && "lightblue"
                  }}
                  onClick={() => setPage(index)}
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
