import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../hooks';
import { logout } from '../redux/actions/authActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.up('xs')]: {
        display: 'block',
      },
      color: '#000',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

// TODO: hide signup and login buttons when logged in

export default function Navigation() {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.firebase);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // THIS IS THE MOBILE MENU
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Credit Cards
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Education
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Stacks
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            How It Works
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Referrals
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/contact">
          <Button variant="text" size="small" color="primary" className="ml-1">
            Contact
          </Button>
        </Link>
      </MenuItem>
      {!firebase.auth.uid ? ( //signed out
        <div>
          <MenuItem>
            <Link to="/signup">
              <Button variant="contained" color="primary">
                Signup
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </MenuItem>
        </div>
      ) : (
        // signed in
        <div>
          {firebase.profile.role === 'owner' ? (
            <MenuItem>
              <Link to="/cms">
                <Button variant="contained" color="primary">
                  Dashboard
                </Button>
              </Link>
            </MenuItem>
          ) : null}
          <MenuItem>
            <Link to="/login">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            </Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div className="my-3" style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'mintcream' }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Plenty Pay
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Credit Cards
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Education
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Stacks
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                How It Works
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Referrals
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="text"
                size="small"
                color="primary"
                className="ml-1"
              >
                Contact
              </Button>
            </Link>
            {!firebase.auth.uid ? ( // signed out
              <div>
                <Link to="/signup">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className="ml-1"
                  >
                    Signup
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className="ml-1"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            ) : (
              // signed in
              <div>
                {firebase.profile.role === 'owner' ? (
                  <Link to="/cms">
                    <Button
                      variant="contained"
                      color="primary"
                      className="mx-1"
                      size="small"
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : null}
                <Button
                  className=""
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
