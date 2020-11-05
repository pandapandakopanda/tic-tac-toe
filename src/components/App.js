import React from 'react'
import {inject} from 'mobx-react'


@inject('store')
class App extends React.Component {
  render(){
    return(
      <div>
        Hi
      </div>
    )
  }
}

export default App