import { CHANGE_LANGUAGE, DATA_LOADED } from "./actions_types"
import { INIT } from "./constants"

function journeyReducer(state = INIT, action) {
    switch(action.type) {
      case CHANGE_LANGUAGE:
        return Object.assign({}, state, {
          language: action.payload["language"]
        });
      case DATA_LOADED:
        var new_journey = action.payload
        new_journey["language"] = new_journey.languages[0]
        return Object.assign({}, state, new_journey);
      default : 
        return Object.assign({}, state, {
          language: state.languages[0]
        });
      
    }
  }
  
export default journeyReducer;