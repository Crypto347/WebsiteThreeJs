/**
* Operators
*/

import { 
    of,
    interval
} from 'rxjs';

import { 
    mergeMap,
    takeUntil
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import {
    portfolioArray
} from '../constants/portfolio';

/**
* Constants
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startChoosingPortfolioSinglePageOnArrowButtonEpic = (action$, state$, dependencies$) => 
    action$.pipe(
        ofType(actionTypes.START_CHOOSING_PORTFOLIO_SINGLE_PAGE_ON_ARROW_BUTTON),
        mergeMap((action) => {
            let paging = [...state$.value.home.paging];
            let nextPageId;
            let nextPage;
            let nextPageIndex;

            switch (action.direction) {
                case 'arrowLeft':
                        nextPageId = paging.find(x => x.chosen === true).id - 1;
                        nextPage = {...paging.find(x => x.id === nextPageId), chosen: true};
                        nextPageIndex = paging.findIndex(x => x.id === nextPageId);
                        dependencies$.history.push(`/portfolioSingleId:${nextPageId}`);
                    break;
                case 'arrowRight':
                        nextPageId = paging.find(x => x.chosen === true).id + 1;
                        nextPage = {...paging.find(x => x.id === nextPageId), chosen: true};
                        nextPageIndex = paging.findIndex(x => x.id === nextPageId);
                        dependencies$.history.push(`/portfolioSingleId:${nextPageId}`);
                    break;
            }

            paging = paging.map((el, i) => {
                return {...el, chosen: false};
            });
            paging.splice(nextPageIndex, 1, nextPage);

            return of(
                Actions.updatePaging(paging),
                Actions.disablePaginationArrowButton("arrowLeft"),
                Actions.disablePaginationArrowButton("arrowRight")
            )   
        }),
                
    )

export default startChoosingPortfolioSinglePageOnArrowButtonEpic;
