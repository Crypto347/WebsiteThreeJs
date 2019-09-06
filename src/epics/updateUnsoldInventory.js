import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actionTypes from '../constants/actionTypes';


function updateUnsoldInventory(action$) { 
    
    return action$
        .ofType(actionTypes.MAKE_PAPERCLIP)
    
        .mergeMap(action => {
            return Observable.of(
                {type: actionTypes.UPDATE_UNSOLD_INVENTORY},
                {type: actionTypes.UPDATE_FUNDS, value: action.priceOfPaperclip}
            ) 
            .delay(5000)
        })
       
       
       
}

export default updateUnsoldInventory;
