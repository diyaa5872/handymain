import axios from 'axios';
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';

export default function DrawerMobileNavigation() {
  const [openi, setOpeni] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigateProfile = () => {
    navigate('/profileuser');
    setOpeni(false); // Close the drawer after navigating
  };

  const handleNavigateHome = () => {
    navigate('/mainpage');
    setOpeni(false); // Close the drawer after navigating
  };

  const handleLogout = async () => {
    try {
      // const response = await axios.post('http://localhost:8000/api/v1/users/logout'); // Adjust the URL as necessary
      // console.log('Logout response:', response.data);
      
      // Delay the navigation by 2 seconds (2000 milliseconds)
      setTimeout(() => {
        navigate('/');
      }, 1000);

      setOpen(false); // Close the modal after initiating logout
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle any errors here (e.g., show a notification to the user)
    }
  };

  const handleCancel = () => {
    setOpen(false); // Close the modal without logging out
  };

  const handleNavigateUnavailable = () => {
    navigate('/unavailable');
    setOpeni(false); // Close the drawer after navigating
  };
  const requestsbyuser = () => {
    navigate('/requestsbyuser');
    setOpeni(false); // Close the drawer after navigating
  };

  return (
    <>
      <React.Fragment>
        <IconButton variant="outlined" color="neutral" onClick={() => setOpeni(true)}>
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={openi} onClose={() => setOpeni(false)}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 'auto',
              mt: 1,
              mr: 2,
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              fontSize="sm"
              fontWeight="lg"
              sx={{ cursor: 'pointer' }}
            >
              Close
            </Typography>
            <ModalClose id="close-icon" sx={{ position: 'initial' }} />
          </Box>
          <Input
            size="sm"
            placeholder="Search"
            variant="plain"
            endDecorator={<Search />}
            slotProps={{
              input: {
                'aria-label': 'Search anything',
              },
            }}
            sx={{
              m: 3,
              borderRadius: 0,
              borderBottom: '2px solid',
              borderColor: 'neutral.outlinedBorder',
              '&:hover': {
                borderColor: 'neutral.outlinedHoverBorder',
              },
              '&::before': {
                border: '1px solid var(--Input-focusedHighlight)',
                transform: 'scaleX(0)',
                left: 0,
                right: 0,
                bottom: '-2px',
                top: 'unset',
                transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                borderRadius: 0,
              },
              '&:focus-within::before': {
                transform: 'scaleX(1)',
              },
            }}
          />
          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton sx={{ fontWeight: 'lg' }} onClick={handleNavigateHome}>Home</ListItemButton>
            <ListItemButton onClick={handleNavigateProfile}>Your Profile</ListItemButton>
            <ListItemButton onClick={handleNavigateUnavailable}>About us</ListItemButton>
            <ListItemButton onClick={requestsbyuser}>Requests</ListItemButton>
             <ListItemButton onClick={handleNavigateUnavailable}>Your Chats</ListItemButton>
            <ListItemButton onClick={handleNavigateUnavailable}>Mail us</ListItemButton>
            <ListItemButton onClick={() => setOpen(true)} sx={{color: "#ff0000"}}>Logout</ListItemButton>
          </List>
        </Drawer>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog variant="outlined" role="alertdialog">
            <DialogTitle>
              <WarningRoundedIcon />
              Confirmation
            </DialogTitle>
            <Divider />
            <DialogContent>
              Are you sure you want to logout?
            </DialogContent>
            <DialogActions>
              <Button variant="solid" color="danger" onClick={handleLogout}>
                Logout
              </Button>
              <Button variant="plain" color="neutral" onClick={handleCancel}>
                Cancel
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </>
  );
}


