import * as React from "react";
import {DataSaunaTwo} from "../../data/BaseData";
import Template from "../template/Template";

const SaunaTwo = () => {
  const SaunaTwoList = DataSaunaTwo.map((item) =>
    <Template
      nameCard={item.name}
      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}


      titleSectionPrice={item.titleSectionPrice}
      li={item.li}
      li2={item.li2}

      src={item.src}

    />
  )
  return(
    <>
      {SaunaTwoList}
    </>
  )
}

export default React.memo(SaunaTwo)