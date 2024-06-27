import * as React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [userData, setUserData] = useState({});

  const id = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/workers/work?id=${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmitUserDetails = async () => {
    navigate('/mainpage');
  };

  // React-Slick settings
  const settings = {
    dots: false,  // Hide dots
    arrows: false, // Hide arrows
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          bgcolor: '#FFF2D8',
          width: '100%',
          position: 'relative',
          minHeight: 840,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Update User Details" {...a11yProps(0)} />
            <Tab label="Add Address" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <Slider {...settings}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    User Details
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={userData.email || ''}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="fullName"
                      label="Full Name"
                      id="fullName"
                      autoComplete="fullName"
                      value={userData.fullName || ''}
                      onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                    />
                    <Button
                      onClick={handleSubmitUserDetails}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, bgcolor: '#113946' }}
                    >
                      Update User Details
                    </Button>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Add Address
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="street"
                      label="Street"
                      name="street"
                      autoComplete="street"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="city"
                      label="City"
                      id="city"
                      autoComplete="city"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="state"
                      label="State"
                      id="state"
                      autoComplete="state"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="country"
                      label="Country"
                      id="country"
                      autoComplete="country"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="postalCode"
                      label="Postal Code"
                      id="postalCode"
                      autoComplete="postalCode"
                    />
                    <Button
                      type="submit"
                      onClick={handleSubmitUserDetails}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, bgcolor: '#113946' }}
                    >
                      Add Address
                    </Button>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </TabPanel>
        </Slider>
      </Box>
    </>
  );
}



