import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import ChatLists from './ChatLists';
import axios from 'axios';

export default function Chatcontainer() {
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    const fetchUsername = async () => {
      try {
        const id = localStorage.getItem('userId');
        const response = await axios.get(`/api/v1/users/getThatUser?id=${id}`);

        // Log the entire response for debugging
        console.log('API Response:', response);

        // Check if the response status is 200 (OK) and has valid data structure
        if (response.status === 200 && response.data  && response.data.fullName) {
          setUsername(response.data.fullName);
        } else {
          console.error('Invalid response structure or missing username:', response);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <>
      <Navbar />
      <Box component="section" sx={{ p: 2, border: '2px dashed blue' }}>
        {username ? ` ${username}` : 'Loading...'}
      </Box>
      <ChatLists />
    </>
  );
}

