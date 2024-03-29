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
      rightSection={item.rightSection}

      classNameSection={item.classNameSection}
      titleSectionPrice={item.titleSectionPrice}
      li={item.li}
      li2={item.li2}
      li3={item.li3}

      slide1={item.slide1}
      slide2={item.slide2}
      slide3={item.slide3}
      slide4={item.slide4}
      slide5={item.slide5}

    />
  )
  return(
    <>
      {SaunaTwoList}
    </>
  )
}

export default React.memo(SaunaTwo)