import * as React from "react";
import {DataRooms} from "../../data/BaseData";
import Template from "../template/Template";

const Rooms = () => {
  const PagePool = DataRooms.map((item) =>
    <Template
      nameCard={item.name}
      descCard={item.descCard}
      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}
      titleLi7={item.titleLi7}
      titleLi5={item.titleLi5}
      titleLi6={item.titleLi6}
      titleLi10={item.titleLi10}

      titleSectionPrice={item.titleSectionPrice}
      li={item.li}

      classFooter={item.classFooter}
      src={item.src}

    />
  )

  return(
    <>
      {PagePool}
    </>
  )
}

export default React.memo(Rooms)