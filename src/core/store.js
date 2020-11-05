import {computed, observable,action} from 'mobx'

class Store {
  @observable page = 'start'

  @action setPage = () => {
    if(this.page === 'start') this.page = 'main'
    else if(this.page === 'main') this.page = 'end'
  }
}        


const store = new Store()
export default store