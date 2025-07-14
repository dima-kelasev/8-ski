import * as React from "react";
import Template from "../template/Template";
import {Data} from '../../data/BaseData'


const WaterPool = () => {
  const PagePool = Data.map((item) =>
    <Template
      id={item.id}
      nameCard={item.name}
      descCard={item.descCard}
      titleLi={item.titleLi}
      titleLi2={item.titleLi2}
      titleLi3={item.titleLi3}
      titleLi4={item.titleLi4}
      titleLi5={item.titleLi5}
      titleLi6={item.titleLi6}
      titleLi7={item.titleLi7}
      titleLi8={item.titleLi8}
      titleLi9={item.titleLi9}
      titleLi10={item.titleLi10}
      titleLi11={item.titleLi11}

      rightSection={item.rightSection}



      classNameSection={item.classNameSection}
      titleSectionPrice={item.titleSectionPrice}
      class={item.class}
      titleList={item.titleList}
      li={item.li}
      li2={item.li2}
      titleList2={item.titleList2}
      li3={item.li3}
      li4={item.li4}

      classFooter={item.classFooter}
      li5={item.li5}
      li6={item.li6}
      li7={item.li7}
      li8={item.li8}
      src={item.src}


      slide1={item.slide1}
      slide2={item.slide2}
      slide3={item.slide3}
      slide4={item.slide4}
      slide5={item.slide5}
      slide6={item.slide6}  

    />

  )

  return (
    <>
      <div>{PagePool}</div>
    </>
  )
}

export default React.memo(WaterPool)