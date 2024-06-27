import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Navbarworker from './Navbarworker';
import Workercard from './Workercard';
import axios from 'axios';

export default function WorkerRequests() {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [requests, setRequests] = React.useState([]);
  const [completedRequests, setCompletedRequests] = React.useState([]);
  const workerno = localStorage.getItem('workerno');

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/workers/requestforworker?workerno=${workerno}&accepted=false`);
        setRequests(response.data);

        if (response.data.length > 0) {
          const userIds = response.data.map(item => item.userId);
          const userRequests = await Promise.all(
            userIds.map(userId => axios.get(`http://localhost:8000/api/v1/workers/work?id=${userId}`))
          );
          const userResponses = userRequests.map(res => res.data);
          setRequests(userResponses.flat());
        } else {
          setRequests([]);
        }
      } catch (error) {
        console.error('Error fetching upcoming requests:', error);
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [workerno]);

  React.useEffect(() => {
    const fetchCompletedRequests = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/workers/requesttrueforworker?workerno=${workerno}&accepted=true`);
        setCompletedRequests(response.data);

        if (response.data.length > 0) {
          const userIds = response.data.map(item => item.userId);
          const userRequests = await Promise.all(
            userIds.map(userId => axios.get(`http://localhost:8000/api/v1/workers/work?id=${userId}`))
          );
          const userResponses = userRequests.map(res => res.data);
          setCompletedRequests(userResponses.flat());
        } else {
          setCompletedRequests([]);
        }
      } catch (error) {
        console.error('Error fetching completed requests:', error);
        setCompletedRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCompletedRequests();
  }, [workerno]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbarworker />
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '100%',
          position: 'relative',
          minHeight: 200,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="worker requests tabs"
        >
          <Tab label="Upcoming Requests" />
          <Tab label="Completed Requests" />
        </Tabs>
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ p: 3 }}>
            {value === 0 ? (
              requests.length > 0 ? (
                requests.map((request, index) => (
                  <Workercard key={index} data={request} fullName={request.fullName} id={request._id} />
                ))
              ) : (
                <Typography>No upcoming requests found.</Typography>
              )
            ) : (
              completedRequests.length > 0 ? (
                completedRequests.map((request, index) => (
                  <Workercard key={index} data={request} fullName={request.fullName} />
                ))
              ) : (
                <Typography>No completed requests found.</Typography>
              )
            )}
          </Box>
        )}
      </Box>
    </div>
  );
}
