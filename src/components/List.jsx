import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data';


function List() {
    const[shoes] = useState(data);
    
    
    return(
    <Row>
     {shoes.map((a,i)=>{
        return(
            <Col>

            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`}width="80%"></img>
            <h4>{shoes[i].title}</h4>
            <p>{shoes[i].price}</p>
            <p>{shoes[i].content}</p> 
          </Col>
      

        )
     })}   
  </Row>
)}
export default List;