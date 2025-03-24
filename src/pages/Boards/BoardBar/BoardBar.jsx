import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { capitalizeFirstLetter } from '~/utils/formatters';


const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx ={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 1, // Để khi thu nhỏ quá không bị sát nhau
      overflowX: 'auto', // Lấy width tự động khi bị thu quá nhỏ tránh trường hợp không lấy hết được
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#3a4b5d' : '#26a1ff'),
      paddingX: 2
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <Chip
          sx={MENU_STYLE}
          icon={<SpaceDashboardIcon />}
          label= { board?.title }
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label= { capitalizeFirstLetter(board?.type) }
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          total={10}
          sx={{
            // gap: '9px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#b2bec3' }
            }
          }}
        >
          <Tooltip title="GiaDuc">
            <Avatar
              alt="GiaDuc"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
            />
          </Tooltip>
          <Tooltip title="GiaDuc">
            <Avatar
              alt="GiaDuc"
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
            />
          </Tooltip>
          <Tooltip title="GiaDuc">
            <Avatar
              alt="GiaDuc"
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            />
          </Tooltip>
          <Tooltip title="GiaDuc">
            <Avatar
              alt="GiaDuc"
              src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            />
          </Tooltip>
          <Tooltip title="GiaDuc">
            <Avatar
              alt="GiaDuc"
              src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            />
          </Tooltip>
          <Tooltip title="GiaDuc">
            <Avatar
              alt="GiaDuc"
              src="https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
