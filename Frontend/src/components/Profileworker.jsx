import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Navbarworker from './Navbarworker';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { AppBar } from '@mui/material';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
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

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function Accountworker() {
  const [value, setValue] = React.useState(0);
  const [date, setData] = React.useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem('workerno');
  console.log(id);

  React.useEffect(() => {
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

  const editHandler = () => {
    navigate('/updateworkerprofile');
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbarworker />
      <Box
        sx={{
          bgcolor: '#FFF2D8',
          width: '100%',
          position: 'relative',
          minHeight: 835,
          height: '100%',
        }}
      >
        <AppBar position="static" sx={{ bgcolor: 'white' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Account info" {...a11yProps(0)} />
            <Tab label="SUPPORT" {...a11yProps(1)} />
            <Tab label="About US" {...a11yProps(2)} />
            <Tab label="Privacy pOLICY" {...a11yProps(3)} />
            <Tab label="FAQs" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={'ltr'}>
          <div>
            <Typography>
              <h1>Account Info</h1>
            </Typography>
          </div>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Profile Picture"
                  src={date?.coverImage ? `${date.coverImage}` : ''}
                  sx={{ width: 56, height: 56 }}
                />
              </Stack>
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Full Name"
                value={date ? date.fullName : 'Full Name'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Email"
                value={date ? date.email : 'Email'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Username"
                value={date ? date.username : 'Username'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Password"
                value={date ? date.password : 'Password'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Experience Years"
                value={date ? date.experienceYears : '0'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Contact Number"
                value={date ? date.contact_no : 'xxxxxx'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="filled-read-only-input"
                label="Age"
                value={date ? date.age : 'Not given'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <button onClick={editHandler}>Edit Details</button>
            </div>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={'ltr'}>
          <Typography>Not available right now</Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={'ltr'}>
          <Typography>Not available right now</Typography>
        </TabPanel>
        <TabPanel value={value} index={3} dir={'ltr'}>
          <Typography>Not available right now</Typography>
        </TabPanel>
        <TabPanel value={value} index={4} dir={'ltr'}>
          <Typography>Not available right now</Typography>
        </TabPanel>
      </Box>
    </>
  );
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

