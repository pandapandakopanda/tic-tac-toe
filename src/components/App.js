import React from 'react'
import { inject, observer } from 'mobx-react'
import Start from './Start'
import End from './End'
import Main from './Main'
import Button from './ui/Button'
import ST from './index.scss'


@inject('store')
@observer
class App extends React.Component {
  
  render(){
    const {page} = this.props.store 

    const showPage = () => {
       switch(page) {
        case 'start': return <Start />
        case 'main': return <Main />
        case 'end': return <End />
      }
    }

    return(
        <div className={ST.wrapper}>
          {showPage()}
        </div>
    )
  }
}

export default App