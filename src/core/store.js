import {computed, observable,action} from 'mobx'

class Store {
  @observable page = 'start'
  @observable player = true

  @action setPage = (page) => {
    this.page = page
  }

  @action nextPlayer = () =>  {
    this.player = !this.player
  }

}        


const store = new Store()
export default store