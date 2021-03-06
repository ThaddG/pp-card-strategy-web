import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// styles
import { Container } from '../../styles/LandingPage/CallToActionText.styles';

// types
interface Props {
  handleModalOpen: () => void;
}

const CallToActionText: React.FC<Props> = ({ handleModalOpen }) => {
  return (
    <Container>
      <Typography variant="h2">
        Maximize your rewards with credit cards that compliment one another
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
        Increase your income by stacking credit cards with benefits that
        compliment each other
      </Typography>
      <Button variant="outlined" onClick={handleModalOpen}>
        Join Watchlist
      </Button>
    </Container>
  );
};

export default CallToActionText;
