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
      rightSection={item.rightSection}

      classNameSection={item.classNameSection}
      titleSectionPrice={item.titleSectionPrice}

      li={item.li}
      li2={item.li2}

      slide1={item.slide1}
      slide2={item.slide2}
      slide3={item.slide3}
      slide4={item.slide4}
      slide5={item.slide5}

    />
  )
  return(
    <>
      {TwoHamamList}
    </>
  )
}

export default React.memo(HamamTwo)