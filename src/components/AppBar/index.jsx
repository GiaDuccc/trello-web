import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Profiles from './Menus/Profiles';

function AppBar() {
  return (
    <Box px={2} sx ={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 1, // Để khi thu nhỏ quá không bị sát nhau
      overflowX: 'auto' // Lấy width tự động khi bị thu quá nhỏ tránh trường hợp không lấy hết được
    }}>
      {/* gap: 2 - tạo ra khoảng các giữa các phần tử con 16px vì 1 gap bẳng 8px */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >

        <AppsIcon sx={{ color: 'primary.main' }} />

        <Box sx = {{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {/* Nên dùng inheritViewBox */}
          <SvgIcon component={ TrelloIcon } fontSize="small" inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
        </Box>
        {/* xs, md... là responsive của mui */}
        <Box sx ={{ display: { xs: 'none', md: 'flex', gap: 1 } }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size="small" sx={{ minWidth: 120 }} />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
