import { CHANGE_LANGUAGE, DATA_LOADED, UPDATE_SCREEN } from "./actions_types"
import { INIT } from "./constants"

function journeyReducer(state = INIT, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload["language"]
      });
    case DATA_LOADED:
      var new_journey = action.payload
      new_journey["language"] = new_journey.languages[0]
      return Object.assign({}, new_journey);
    case UPDATE_SCREEN:
      var state_copy = JSON.parse(JSON.stringify(state));
      state_copy.screens[action.payload.name] = action.payload
      return Object.assign({}, state_copy);
    default:
      return Object.assign({}, state, {
        language: state.languages[0]
      });

  }
}

export default journeyReducer;