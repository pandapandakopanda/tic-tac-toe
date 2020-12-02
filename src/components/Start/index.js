import React from 'react'
import {inject} from 'mobx-react'
import ST from './index.scss'
import Button from '../ui/Button'

@inject('store')
class Start extends React.Component {

  onClick = () => {
    this.props.store.setPage('main')
  }

  render(){
    return(

      <div className={ST.start}>
        <h1 className={ST.start_h1}>Press start button</h1>
        <Button name='Start' onClickHandler={this.onClick}/>
      </div>

    )
  }
}

export default Start