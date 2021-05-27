import * as React from "react";
import {DataHamam} from "../../data/BaseData";
import Template from "../template/Template";

const HamamPage = () => {

  const HamamList = DataHamam.map((item) =>
    <Template
      nameCard={item.name}

      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}
      titleLi7={item.titleLi7}
      titleLi5={item.titleLi5}


      titleSectionPrice={item.titleSectionPrice}

      li={item.li}
      li2={item.li2}

      src={item.src}

    />
  )
  return(
    <>
      {HamamList}
    </>
  )
}

export default React.memo(HamamPage)