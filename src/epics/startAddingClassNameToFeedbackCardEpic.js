/**
* Operators
*/

import { 
    of,
    empty
} from 'rxjs';

import { 
    mergeMap,
    takeUntil,
    take 
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Epic
*/

export const startAddingClassNameToFeedbackCardEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_ADDING_CLASSNAME_TO_FEEDBACK_CARD),
        // take(1),
        mergeMap((action) => {
            let id = state$.value.home.dots.find(x => x.chosen === true).id;
            let updatedLeft = state$.value.home.feedbacksStyle[action.id].left + 2300;
            
            if(!state$.value.home.feedbacksOnScroll){
                switch(id){
                    case 1:
                        return of(
                            Actions.feedbacksStylesUpdated("card6", updatedLeft)
                        ) 
                    case 2:
                        return of(
                            Actions.feedbacksStylesUpdated("card7", updatedLeft)
                        ) 
                    case 3:
                        return of(
                            Actions.feedbacksStylesUpdated("card1", updatedLeft)
                        ) 
                    case 4:
                        return of(
                            Actions.feedbacksStylesUpdated("card2", updatedLeft)
                        ) 
                    case 5:
                        return of(
                            Actions.feedbacksStylesUpdated("card3", updatedLeft)
                        ) 
                    case 6:
                        return of(
                            Actions.feedbacksStylesUpdated("card4", updatedLeft)
                        ) 
                    case 7:
                        return of(
                            Actions.feedbacksStylesUpdated("card5", updatedLeft)
                        ) 
                }
            }
            return empty();
            
        })
    )

export default startAddingClassNameToFeedbackCardEpic;
