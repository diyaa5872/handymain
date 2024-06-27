import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputText from './InputText';
import { Input } from '@mui/material';


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
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

const ChatLists = () => {
    function SenderChat(){
        return (
            <div>
                <p>
                <Avatar {...stringAvatar('diya dhankhar')} />
                    message
                </p>
            </div>
        )
    }
    function RecieverChat(){
        return (
            <div>
                <p>
                <Avatar {...stringAvatar('neha dhankhar')} />
                    messagedd
                </p>
            </div>
        )
    }
  return (
    <div>
      <SenderChat />
      <RecieverChat />
      <InputText />
    </div>
  )
}

export default ChatLists
