
import React from 'react'

import { point } from './Actions'

const { create, update, delete_ } = point

const a = ({ props }) => (
    <>
      <div className=" flex flex-column pa5 f4 fw6 black  ">{"Sample Component"}</div>
  
      <div 
  
      onClick={() => {
        props.self.setState({
          d2: !props.self.state.d2
        })
      }}
      
      className=" flex flex-column pa5 f4 fw6 black  ">{"Open"}</div>
  
    </>
  )

  export default a