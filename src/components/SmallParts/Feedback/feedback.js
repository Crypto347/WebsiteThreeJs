/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './feedback.scss';

/**
* Icons
*/

import { 
    faQuoteLeft
 } from '@fortawesome/free-solid-svg-icons';

/**
* Images
*/

import Img1 from '../../../images/Portrait_Placeholder.png';

/**
* Feedbacks component definition and export
*/

export const Feedback = (props) => {

    /**
    * State
    */
    
    const select = React.createRef();

    /**
    * Methods
    */

    const loadImage = () => {
        switch(props.image){
            case 'Name1':
            return Img1;
        }
    }

    useEffect(() => {
        const rect = select.current.getBoundingClientRect();
        props.getLeft(rect.left, rect.width, props.id);
    }, [props.coordinateX, props.feedbacksOnScroll]) 

    /**
    * Markup
    */

    return(
        <div 
            className="feedback"
            ref={select}
        >
            <div className="feedback-clear">
                <div className="feedback-image">
                    <img src={loadImage()}/>
                    <div className="feedback-image-icon">
                        <FontAwesomeIcon icon={faQuoteLeft} size="sm" className="icon-quate"/>
                    </div>
                </div>
                <div className="feedback-text">{props.feedback}</div>
                <div>
                    <div className="feedback-name">{props.name}</div>
                    <div className="feedback-position">{props.position}</div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
 