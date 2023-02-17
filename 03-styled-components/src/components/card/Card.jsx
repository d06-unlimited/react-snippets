import { useState } from "react";
import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid firebrick;
  background-color: coral;
  padding: 20px;
  margin: 5px;
  font-size: 1.5rem;
  border-radius: 20px;
`;


export const CardWithLogic = () => {
  
  const [counter, setCounter] = useState(0)
  
  return <Card></Card>
}

