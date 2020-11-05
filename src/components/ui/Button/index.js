import React from 'react'
import ST from './index.scss'


class Button extends React.Component {

  onClick = () => {
    this.props.onClickHandler()
  }

  render(){
    return(
      <div 
      className={ST.button}
      onClick={this.onClick}
      >
        Start
      </div>
    )
  }
}

export default Button