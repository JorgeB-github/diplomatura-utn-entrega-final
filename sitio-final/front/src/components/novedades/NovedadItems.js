import React from 'react';  

const NovedadItem = (props) => {  
    const { title, subtitle, imagen, body }= props;  
    return (  
        <div className="novedades">  
            <h1>{title}</h1>  
            <h2>{subtitle}</h2>                
            <div dangerouslySetInnerHTML={{ __html: body }} />            
            <img src={imagen} />                   
            
            <hr />  
        </div>  
    );  
}  
export default NovedadItem;