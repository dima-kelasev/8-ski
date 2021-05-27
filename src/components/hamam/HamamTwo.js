import * as React from "react";
import {DataHamamTwo} from "../../data/BaseData";
import Template from "../template/Template";

const HamamTwo = () => {
  const TwoHamamList = DataHamamTwo.map((item) =>
    <Template
      nameCard={item.name}

      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}
      Boldclass={item.boldclass}
      BoldTitle={item.BoldTitle}
      titleLi8={item.titleLi8}
      titleLi5={item.titleLi5}
      titleLi6={item.titleLi6}
      titleLi7={item.titleLi7}


      titleSectionPrice={item.titleSectionPrice}

      li={item.li}
      li2={item.li2}

      src={item.src}

    />
  )
  return(
    <>
      {TwoHamamList}
    </>
  )
}

export default React.memo(HamamTwo)