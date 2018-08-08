import store from './store'
import { createEvent } from './actions/navbarActions'


export function onDataFetched() {
    store.dispatch(createEvent)
}