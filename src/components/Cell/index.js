import React from 'react'
import {inject} from 'mobx-react'
import ST from './index.scss'

@inject('store')
class Cell extends React.Component {
  state = {
    isEnable: true,
    fill: null
  }

  onCLickHandler = () => {
    if(this.state.isEnable) {
      const {player} = this.props.store
      this.props.store.nextPlayer()
      this.setState({fill:(player)?'X':'O',isEnable: false})
    }
    else return
  }

  render(){
    
    return(
      <div className={ST.cell} onClick={this.onCLickHandler}>
        {this.state.fill}
      </div>
    )
  }
}

export default Cell