/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './contactPage.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* ContactPage component definition and export
*/

export const ContactPage = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="about-age">
        
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(ContactPage);
 