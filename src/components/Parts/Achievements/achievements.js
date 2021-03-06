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

import './achievements.scss';

/**
* Components
*/

import Achievement from '../../SmallParts/Achievement/achievement';

/**
* Achievements component definition and export
*/

export const Achievements = () => {

    const [showComponent, setShowComponent] = useState(false);

    /**
    * Methods
    */

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("achievements");
        if(scrollHeight >= el.offsetTop - window.innerHeight/2 - 150 ){
            setShowComponent(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const renderAchievements = () => {
        return(
            <div className="achievements-wrapper">
                <div className="achievements-achievment">
                    <Achievement
                        achievementValue={400}
                        achievementText={"Customers are satisfied with our professional support"}
                    />
                </div>
                <div className="achievements-achievment">
                    <Achievement
                        achievementValue={1000}
                        achievementText={"Amazing preset options to be mixed and combined"}
                    />
                </div>
                <div className="achievements-achievment">
                    <Achievement
                        achievementValue={8000}
                        achievementText={"Average response time on live chat support channel"}
                    />
                </div>
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="achievements" id="achievements">
            <div className="achievements-paragraph">
                <div className="achievements-text-line1">ACHIEVEMENTS</div>
                <div className="achievements-text-line2">Our achievements</div>
                <div className="achievements-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            {showComponent ? renderAchievements() : null}
        </div>
    );
}

export default Achievements;
 