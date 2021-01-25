import React from 'react'
import './Dropdown.scss';
const Dropdown = (props) => {

    return (
      <div>
      <span className="dropdown_header">{props.header}</span>   
        <div className="select">
       
        <select onChange={props.onChange}>
        <option selected disabled>{props.header} Seçiniz...</option>
             {props.options?.map((item,index)=>(
            <option key={index} value={item.categoryId !== undefined ? item.categoryId : item.cityId}>{item.text}</option>
             ))}
        </select>
      </div>
      </div>
    )
}

export default Dropdown
