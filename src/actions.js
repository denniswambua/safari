import { CHANGE_LANGUAGE, DATA_LOADED } from "./actions_types"


const proxyurl = "http://localhost:8080/";
const endpoint = "http://localhost:9300";


export function changeLanguage(payload) {
    return { type: CHANGE_LANGUAGE, payload }
};

export function getData(payload) {
    var partner = payload.partner
    var product = payload.product
    var populated =  payload.populated? "populated": "unpopulated"
    return function(dispatch) {
        var url = proxyurl + endpoint + "/journey/" + partner + "/" + product + "?type=" + populated
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            }).catch(e =>{});
    };
  }