import { useState } from 'react';
import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect/ModeSelect';
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx ={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 1, // Để khi thu nhỏ quá không bị sát nhau
      overflowX: 'auto', // Lấy width tự động khi bị thu quá nhỏ tránh trường hợp không lấy hết được
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#0984e3')
    }}>
      {/* gap: 2 - tạo ra khoảng các giữa các phần tử con 16px vì 1 gap bẳng 8px */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >

        <AppsIcon sx={{ color: 'white' }} />

        <Box sx = {{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {/* Nên dùng inheritViewBox */}
          <SvgIcon component={ TrelloIcon } fontSize="small" inheritViewBox sx={{ color: 'white' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Trello</Typography>
        </Box>
        {/* xs, md... là responsive của mui */}
        <Box sx ={{ display: { xs: 'none', md: 'flex', gap: 1 } }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            startIcon={<AddCircleIcon />}
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
          >
            Create
          </Button>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          // Dùng để gõ phần textField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          // Để thêm được icon trong ô Search(Text Field)
          InputProps = {{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <CloseIcon
                  sx={{ color: searchValue ? 'white' : 'transparent', fontSize: '14px', cursor: 'pointer' }}
                  onClick={() => setSearchValue('')} // click thì set lại là string rỗng
                />
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }

          }}
        />

        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
