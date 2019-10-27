import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mapTo';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
// import { interval } from "rxjs"
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';


export const startNewTournamentEpic = (action$, state$) => 
action$.pipe(
    ofType(actionTypes.START_NEW_TOURNAMENT),
    mergeMap(action => {


        return of(
          Actions.tournamentState(true),
          Actions.toggleNewTournamentButton(),
        ) 
    })
  ) 
    
export default startNewTournamentEpic;