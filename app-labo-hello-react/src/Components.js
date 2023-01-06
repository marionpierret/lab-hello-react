import React from 'react'
import "./Components.css"

const Components = ({img, title, text}) => {
    return(
<div className='feature'>
<img src={img} alt=""/>
<h3>{title}</h3>
<p>{text}</p><br/>
</div>
    )
}

export default Components