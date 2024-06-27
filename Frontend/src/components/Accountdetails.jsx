import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Navbar from './Navbar';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography component="div" role="tabpanel" hidden={value !== index} id={`action-tabpanel-${index}`} aria-labelledby={`action-tab-${index}`} {...other}>
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

const cardContent = (
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div">
      Privacy and Data
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Privacy
    </Typography>
    <Typography variant="body2">
      Privacy center
      <br />
      {'Take control of your privacy and learn how we protect it.'}
    </Typography>
  </CardContent>
);

const cardActions = (
  <CardActions>
    <Typography variant="h5" component="div">
      Third-party apps with account access
    </Typography>
  </CardActions>
);

export default function AccountDetails() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/workers/work?id=${userId}`);
        setData(response.data); // Assuming response.data contains the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  const handleEditDetails = () => {
    navigate('/updatedetails');
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          bgcolor: '#FFF2D8',
          width: '100%',
          position: 'relative',
          minHeight: 830,
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
            <Tab label="Account info" {...a11yProps(0)} />
            <Tab label="Security" {...a11yProps(1)} />
            <Tab label="Privacy and Data" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            <Typography variant="h5">Account Info</Typography>
          </div>
          <Stack direction="row" spacing={2}></Stack>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-read-only-input"
                label="Full Name"
                value={data ? data.fullName : ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Email"
                value={data ? data.email : ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Username"
                value={data ? data.username : ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <button onClick={handleEditDetails}>Edit Details</button>
            </div>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div>
            <Typography variant="h5">Security:</Typography>
          </div>
          <div>
            <Typography variant="h6">Logging in to HomeyService:</Typography>
          </div>
          <div>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
              Passkeys:
              <TextField
                type="password"
                label="Password"
                value={data ? data.password : 'xxxx'}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">Password:</InputAdornment>,
                }}
              />
            </Box>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                {cardContent}
                {cardActions}
              </Card>
            </Box>
          </div>
        </TabPanel>
      </Box>
    </>
  );
}


