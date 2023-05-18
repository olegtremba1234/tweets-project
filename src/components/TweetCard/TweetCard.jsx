import Logo from "../Logo/Logo";
import CardImage from "../CardImage/CardImage";
import Avatar from "../Avatar/Avatar";
import FollowButton from "../Button/FollowButton"


import { TweetCardContainer, FollowersCount, TweetsCount } from "./TweetCard.Styled"

const TweetCard = () => {
    return (
        <TweetCardContainer>
            <Logo />
            <CardImage />
            <Avatar />
            <TweetsCount>777 TWEETS</TweetsCount>
            <FollowersCount>100,500 FOLLOWERS</FollowersCount>
            <FollowButton />
        </TweetCardContainer>
    )
}

export default TweetCard