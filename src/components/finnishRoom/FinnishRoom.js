import * as React from "react";
import {FinshSauna} from "../../data/BaseData";
import Template from "../template/Template";

const FinnishRoom = () => {
    const FinSauna = FinshSauna.map((item) =>
    <Template
      nameCard={item.name}

      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}
      titleLi5={item.titleLi5}


      titleSectionPrice={item.titleSectionPrice}

      li={item.li}

      src={item.src}

    />
  )

  return(
    <>
    {FinSauna}
    </>
  )
}

export default React.memo(FinnishRoom)