import { FC } from 'react';

import s from './rating-info.module.scss';

import fillStarIcon from '../../assets/icon/fillStarIcon.png';
import emptyStarIcon from '../../assets/icon/emptyStarIcon.png';

type RatingInfoType = {
    rating: number
}

export const RatingInfo: FC<RatingInfoType> = ({ rating }) => {
    const starsRes = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
        const starIcon = i < rating ? fillStarIcon : emptyStarIcon;
        const alt = `star${i}`;
        const star = <img key={i} src={starIcon} alt={alt} className="star" />

        starsRes.push(<div key={i}>{star}</div>);
    }

    return <div className={s.ratingInfo}>{starsRes}</div>;
};