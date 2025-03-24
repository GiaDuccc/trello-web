import Box from '@mui/material/Box';
import Column from './Column/Column';
import Button from '@mui/material/Button';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function ListColumns({ columns }) {

  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 1 }
    }}>
      {columns?.map((column) => {
        // Khi map thì return cần có id nếu không sẽ bị lỗi
        // Có thể dùng key={index} trong trường hợp không có id
        return <Column key={column._id} column={column} />
      // Sort hand
      // {columns?.map(column => <Column key={column._id} />)}
      })}

      {/* Box add new column CTA*/}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns