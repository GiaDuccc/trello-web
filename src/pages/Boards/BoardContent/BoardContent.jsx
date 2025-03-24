import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';

function BoardContent({ board }) {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  return (
    <Box sx = {{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#3a4b5d' : '#26a1ff'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '8px 0'
    }}>
      <ListColumns columns={ orderedColumn } />
    </Box>
  )
}

export default BoardContent
