import Typography from '@mui/material/Typography';
import {
  Container as MuiContainer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ReactComponent as StepIcon } from '../../assets/icons/step-icon.svg';

// styles
import { Container, Number } from '../../styles/LandingPage/NumberCard.styles';

// types
interface Props {
  number: number;
  title: string;
  bodyText: string;
}

const NumberCard: React.FC<Props> = ({ number, title, bodyText }) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Container
      sx={{ position: 'relative', mb: small ? 4 : 1, mt: small ? 4 : 1 }}
    >
      <Number>{number}</Number>
      <StepIcon className="mb-3" />
      <MuiContainer>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1">{bodyText}</Typography>
      </MuiContainer>
    </Container>
  );
};

export default NumberCard;
