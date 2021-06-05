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
      {HamamList}
    </>
  )
}

export default React.memo(HamamPage)