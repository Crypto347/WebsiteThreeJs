/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

/**
* Styles
*/

import './project.scss';

/**
* Images
*/

import reality from '../../../images/projectImages/3DReality.png';
import movingBalls from '../../../images/projectImages/MovingBalls.png';
import paint from '../../../images/projectImages/Paint.png';
import paperclipsGame from '../../../images/projectImages/PaperclipsGame.png';
import parallaxWebsite from '../../../images/projectImages/ParallaxWebsite.png';
import theGameOfLife from '../../../images/projectImages/TheGameOfLife.png';
import ticTacToe from '../../../images/projectImages/TicTacToe.png';
import photo from '../../../images/Portrait_Placeholder.png';

/**
* Project component definition and export
*/

export const Project = (props) => {

    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(true);

    /**
    * Methods
    */

    const loadImage = (img) => {
        switch(img){
            case '3DReality':
                return reality;
            case 'movingBalls':
                return movingBalls;
            case 'paint':
                return paint;
            case 'paperclipsGame':
                return paperclipsGame;
            case 'parallaxWebsite':
                return parallaxWebsite;
            case 'theGameOfLife':
                return theGameOfLife;
            case 'ticTacToe':
                return ticTacToe;
        }
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    /**
    * Markup
    */

    return(
        <div 
            className={isHovering ? `${props.className}-hover` : props.className}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
        >
            <a className="project-image" href={props.path}>
                <div className={isHovering ? `${props.className}-info-open` : "project-info-close"}>
                    <div className="project-info-name">{props.projectName}</div>
                    <div className="project-info-description">{props.projectDescription}</div>
                </div> 
                <div className="project-image-border1">
                    <div className="project-image-border2">
                        <img src={loadImage(props.projectImage)}/>
                    </div>
                </div>
                <div className={isHovering ? `${props.className}-developer-info-open` : "project-developer-info-close"}>
                    <div className="project-developer-info-photo">
                        <img src={photo}/>
                    </div>
                    <div className="project-developer-info-general">
                        <div className="project-developer-info-name">{props.developerName}</div>
                        <div className="project-developer-info-position">{props.developerPosition}</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Project;
 