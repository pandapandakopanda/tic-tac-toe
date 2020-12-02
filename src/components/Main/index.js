import React from 'react'
import {inject} from 'mobx-react'
import ST from './index.scss'
import Cell from '../Cell'
import Button from '../ui/Button'


@inject('store')
class Main extends React.Component {

  fielField = () => {
    const elements = new Array
    for(let i = 0; i < 9; i++) {
      elements.push(<Cell key={i} data-id={i}/>)
    }
    return elements
  }

  onCLick = () => {
    this.props.store.setPage('start')
  }
  
  render(){
    const field = this.fielField()
    return(
      <div className={ST.main}>
        <div className={ST.main_field}>
          {field}
        </div>
        <Button name='Back' onClickHandler={this.onCLick}/>
      </div>
    )
  }
}

export default Main