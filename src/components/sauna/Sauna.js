import * as React from "react";
import {DataSauna} from "../../data/BaseData";
import Template from "../template/Template";

const Sauna = () => {
  const SaunaList = DataSauna.map((item) =>
    <Template
      nameCard={item.name}

      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}
      Boldclass={item.boldclass}
      BoldTitle={item.BoldTitle}
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
      {SaunaList}
    </>
  )
}

export default React.memo(Sauna)