import React from 'react'
import ST from './index.scss'
import Cell from '../Cell'


class Main extends React.Component {

  fielField = () => {
    const elements = new Array
    for(let i = 0; i < 9; i++) {
      elements.push(<Cell key={i} id={i}/>)
    }
    return elements
  }
  
  render(){
    const field = this.fielField()
    return(
      <div className={ST.main_field}>
        {field}
      </div>
    )
  }
}

export default Main