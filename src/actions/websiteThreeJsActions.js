import * as actionTypes from '../constants/actionTypes';

export function toggleMenuButton() {
    return { 
        type: actionTypes.TOGGLE_MENU_BUTTON
    };
};

export function menuButtonIsToggled(val) {
    return { 
        type: actionTypes.MENU_BUTTON_IS_TOGGLED,
        val: val
    };
};

export function initFeedbacks(array, arrayToShow) {
    return { 
        type: actionTypes.INIT_FEEDBACKS,
        array: array,
        arrayToShow: arrayToShow
    };
};

export function leftArrowOnClick() {
    return { 
        type: actionTypes.LEFT_ARROW_ON_CLICK
    };
};

export function rightArrowOnClick() {
    return { 
        type: actionTypes.RIGHT_ARROW_ON_CLICK
    };
};

export function chooseDotOnScroll(id) {
    return { 
        type: actionTypes.CHOOSE_DOT_ON_SCROLL,
        id: id
    };
};

export function startAddingClassNameToFeedbackCard(id, update) {
    return { 
        type: actionTypes.START_ADDING_CLASSNAME_TO_FEEDBACK_CARD,
        id: id,
        update: update
    };
};

export function updateFeedbackCardStyle(cardId, str) {
    return { 
        type: actionTypes.UPDATE_FEEDBACK_CARD_STYLE,
        cardId: cardId,
        className: str
    };
};

export function feedbacksUpdated(val) {
    return { 
        type: actionTypes.FEEDBACKS_UPDATED,
        val: val
    };
};

export function feedbacksStylesUpdated(id, val) {
    return { 
        type: actionTypes.FEEDBACKS_STYLES_UPDATED,
        id: id,
        val: val
    };
};

export function chooseFeedback(id) {
    return { 
        type: actionTypes.CHOOSE_FEEDBACK,
        dotId: id
    };
};

export function initPortfolio(array) {
    return { 
        type: actionTypes.INIT_PORTFOLIO,
        array: array
    };
};

export function startInitPagination(page) {
    return { 
        type: actionTypes.START_INIT_PAGINATION,
        page: page
    };
};

export function initPagination(array) {
    return { 
        type: actionTypes.INIT_PAGINATION,
        array: array
    };
};

export function startChoosingPage(page, id) {
    return { 
        type: actionTypes.START_CHOOSING_PAGE,
        page: page,
        id: id
    };
};

export function choosePage(id) {
    return { 
        type: actionTypes.CHOOSE_PAGE,
        id: id
    };
};

export function loadPortfolioAccordingToPage(array) {
    return { 
        type: actionTypes.LOAD_PORTFOLIO_ACCORDING_TO_PAGE,
        array: array
    };
};

export function startChoosingPortfolioPageOnArrowButton(direction) {
    return { 
        type: actionTypes.START_CHOOSING_PORTFOLIO_PAGE_ON_ARROW_BUTTON,
        direction: direction
    };
};

export function startChoosingPortfolioSinglePageOnArrowButton(direction) {
    return { 
        type: actionTypes.START_CHOOSING_PORTFOLIO_SINGLE_PAGE_ON_ARROW_BUTTON,
        direction: direction
    };
};

export function updatePaging(array) {
    return { 
        type: actionTypes.UPDATE_PAGING,
        array: array
    };
};

export function updatePortfolio(array) {
    return { 
        type: actionTypes.UPDATE_PORTFOLIO,
        array: array
    };
};

export function disablePaginationArrowButton(direction) {
    return { 
        type: actionTypes.DISABLE_PAGINATION_ARROW_BUTTON,
        direction: direction
    };
};

export function startInitPortfolioSingle(id) {
    return { 
        type: actionTypes.START_INIT_PORTFOLIO_SINGLE,
        potfolioId: id
    };
};

export function loadSinglePortfolio(obj) {
    return { 
        type: actionTypes.LOAD_SINGLE_PORTFOLIO,
        obj: obj
    };
};

export function startShowingCommentInputArea(inputState, thread, userId) {
    return { 
        type: actionTypes.START_SHOWING_COMMENT_INPUT_AREA,
        inputState: inputState,
        thread: thread,
        userId: userId
    };
};

export function startAddingReply(val, thread, userId, array) {
    return { 
        type: actionTypes.START_ADDING_REPLY,
        inputIsShown: val,
        thread: thread,
        userId: userId,
        array: array
    };
};
