import { CHANGE_LANGUAGE, DATA_LOADED } from "./actions_types"

const INIT = {
  "initial_screen": "test",
  "partner": "airtel-gh",
  "product": "agent",
  "languages": ["en", "sw"],
  "screens": {
    "AboutRepaymentFullCollection": {
      "label": "Loan About Repayment Full Collection",
      "msg": {
        "en": "If your loan is overdue, we may auto deduct money from your Tigo Pesa account to repay your loan, either on a specific date or when you do a deposit.\n0. Back",
        "sw": "Kama marejesho yatachelewa, tunaweza kukata pesa kwenye akaunti yako ya Tigo Pesa kurejesha mkopo, katika tarehe maalum au ukiweka pesa.\n0. Rudi"
      },
      "next": {
        "0": "AboutMenu"
      }
    },
    "AboutBiggerLoan": {
      "label": "Loan About Bigger Loan",
      "msg": "Pay your {product_name} loan on time, everytime and keep using your {mm_platform} account and you may qualify for bigger loans in future.\n0. Back",
      "next": {
        "0": "AboutMenu"
      }
    },
  }}


function journeyReducer(state = INIT, action) {
    switch(action.type) {
      case CHANGE_LANGUAGE:
        return Object.assign({}, state, {
          language: action.payload["language"]
        });
      case DATA_LOADED:
        var new_journey = action.payload
        return Object.assign({}, state, new_journey);
      default :  
        return Object.assign({}, state, {
          language: state.languages[0]
        });
      
    }
  }
  
export default journeyReducer;