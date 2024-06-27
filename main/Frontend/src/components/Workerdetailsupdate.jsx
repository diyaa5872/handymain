import * as React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navbarworker from "./Navbarworker";

const defaultTheme = createTheme();

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

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

export default function Workerdetailsupdate() {
  const navigate = useNavigate();
  const [date, setData] = useState(null);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const id = localStorage.getItem('workerno');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/workers/work?id=${id}`);
        console.log(response);
        setData(response.data); // Assuming response.data contains the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    navigate('/mainworkerpage');
  };

  return (
    <>
    <Navbarworker />
      <AppBar position="static" sx={{ bgcolor: "#BCA37F" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Update User Details" {...a11yProps(0)} />
          <Tab label="Update Address " {...a11yProps(1)} />
          <Tab label="Change password" {...a11yProps(2)} />
          <Tab label="Update Profile image" {...a11yProps(3)} />
          <Tab label="Update shop images" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
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
                Update General Details
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
                  value={date ? date.email : ''}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  value={date ? date.fullName : ''}
                  name="fullName"
                  label="fullName"
                  id="fullName"
                  autoComplete="fullName"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={date ? date.contact_no : 'xxxxx'}
                  name="contactnumber"
                  label="contactNumber"
                  type="Number"
                  id="contactNumber"
                  autoComplete="contactNumber"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={date ? date.homeVisitFee : '0'}
                  name="homeVisitFee"
                  label="homeVisitFee"
                  type="Number"
                  id="homeVisitFee"
                  autoComplete="homeVisitFee"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={date ? date.description : 'not described'}
                  name="description"
                  label="description"
                  id="description"
                  autoComplete="description"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#113946" }}
                  onClick={handleSubmit}
                >
                  Update
                </Button>
              </Box>
            </Box>
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
                  label="Local Street Area"
                  name="street"
                  autoComplete="street"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="city"
                  label="city"
                  id="city"
                  autoComplete="city"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="state"
                  label="state"
                  id="state"
                  autoComplete="state"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="country"
                  label="country"
                  id="country"
                  defaultValue='india'
                  autoComplete="country"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="postal code"
                  label="postal code"
                  id="postalCode"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#113946" }}
                  onClick={handleSubmit}
                >
                  ADD Address
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
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
                Change password
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="oldPassword"
                  label="oldPassword"
                  name="oldPassword"
                  autoComplete="oldPassword"
                  type='password'
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="newPassword"
                  label="newPassword"
                  type="password"
                  id="newPassword"
                  autoComplete="newPassword"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#113946" }}
                  onClick={handleSubmit}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
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
                Update Profile Image
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <input
                  accept="image/*"
                  id="file1"
                  type="file"
                  name="file1"
                  multiple={false}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#113946" }}
                  onClick={handleSubmit}
                >
                  Update Profile Image
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
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
                Update Shop images
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <input
                  accept="image/*"
                  id="file2"
                  type="file"
                  name="file2"
                  multiple={true}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#113946" }}
                  onClick={handleSubmit}
                >
                  Add Shop images
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </TabPanel>
    </>
  );
}

