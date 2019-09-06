
import { createStore } from 'redux'


        const initialState = {
            username: "",
            password: "",
            currentUser: {},
            user: {},
            searchTerm: "",
            clickedArtist: {},
            allSetlists: [],
            location: "",
            loggedIn: false
            
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
                currentUser: action.payload
            }
            break;
        case "FETCH_USER":
            state = {
                ...state,
                user: action.payload 
            }
            break;
        case 'INPUT_LOCATION':
                state = {
                    ...state, 
                    location: action.payload
                }
                break;
        case "SEARCH_ARTIST":
            state = {
                ...state,
                searchTerm: action.payload
            }
            break;
        case "CLICK_ARTIST":
                state = {
                    ...state, 
                    clickedArtist: action.payload
                }
                break;
        case "ALL_SETLISTS": 
                state = {
                    ...state, 
                    allSetlists: action.payload

                }
                break;
        case "LOGGED_IN":
            state = {
                ...state, 
                loggedIn: action.payload
            }
            break;
        default:
           state = initialState
           break;
        }
       
        return state
  }

  export const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())