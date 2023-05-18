import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import TweetCard from '../TweetCard/TweetCard';

import { Main, Header, ButtonContainer } from './Tweets.Styled';
const Tweets = () => {
    return (
        <Main>
            <Header>
                <ButtonContainer>
                    <Button variant="outlined" startIcon={<ArrowBackRoundedIcon />} href="/">
                        Back
                    </Button>
                </ButtonContainer>
            </Header>

            <div>
                <TweetCard />
            </div>
        </Main>
    )
}

export default Tweets