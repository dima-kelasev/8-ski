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
      rightSection={item.rightSection}

      classNameSection={item.classNameSection}
      titleSectionPrice={item.titleSectionPrice}

      li={item.li}

      slide1={item.slide1}
      slide2={item.slide2}
      slide3={item.slide3}
      slide4={item.slide4}
      slide5={item.slide5}

    />
  )

  return(
    <>
    {FinSauna}
    </>
  )
}

export default React.memo(FinnishRoom)