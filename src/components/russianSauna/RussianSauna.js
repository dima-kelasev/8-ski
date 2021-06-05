import * as React from "react";
import {DataRussianSauna} from "../../data/BaseData";
import Template from "../template/Template";

const RussianSauna = () => {
  const RusSauna = DataRussianSauna.map((item) =>
    <Template
      id={item.id}
      nameCard={item.name}

      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}
      titleLi6={item.titleLi6}
      titleLi5={item.titleLi5}
      rightSection={item.rightSection}

      classNameSection={item.classNameSection}
      titleSectionPrice={item.titleSectionPrice}
      classOrange={item.classOrange}
      OrangeText={item.OrangeText}
      titleList={item.titleList}

      li={item.li}
      li2={item.li2}
      li3={item.li3}
      li4={item.li4}

      slide1={item.slide1}
      slide2={item.slide2}
      slide3={item.slide3}
      slide4={item.slide4}
      slide5={item.slide5}

    />
  )
  return(
      <>
        {RusSauna}
      </>
  )
}

export default React.memo(RussianSauna)