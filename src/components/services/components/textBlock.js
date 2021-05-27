import * as React from "react";

const TextBlock = (props) => {
  return (
    <>
        <ul className='contact__text-list'>
          <li>{props.li}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
          <li>{props.li4}</li>
          <li className={props.class}>{props.li5}</li>
        </ul>
    </>
  )
}

export default React.memo(TextBlock)