import { Container, Title, Text, HeroImage, ButtonContainer } from './Home.Styled';
import HeroPicture from "../../images/Follow.png"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  return (
    <Container>
      <Title>Welcome to our page!</Title>
      <Text>You can go to our Tweets page, just click on Tweets button!</Text>
      <ButtonContainer>
        <Button variant="contained" endIcon={<SendIcon />} href="/tweets">
          Tweets
        </Button>
      </ButtonContainer>
      <HeroImage src={HeroPicture} alt="Tweet Example" />
    </Container>
  )
};

export default Home;
