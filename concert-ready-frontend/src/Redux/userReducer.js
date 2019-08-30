
import { createStore } from 'redux'


        const initialState = {
            username: "",
            password: "",
            current_user: {}
            
        }

const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'INPUT_USERNAME':
            state = {
                ...state, 
                username: action.payload
            }
            break;
        case "INPUT_PASSWORD":
            state = {
                ...state,
                password: action.payload
            }
            break;
        case "CURRENT_USER":
            state = {
                ...state,
                current_user: action.payload
            }
        default:
           state = initialState
           break;
        }
        console.log(state)
        return state
  }

  export const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())