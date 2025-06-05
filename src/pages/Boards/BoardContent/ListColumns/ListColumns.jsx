import { useState } from 'react';
import { toast } from 'react-toastify'
import Box from '@mui/material/Box';
import Column from './Column/Column';
import Button from '@mui/material/Button';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

function ListColumns({ columns, createNewColumn, createNewCard }) {

  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const [newColumnTitle, setNewColumnTitle] = useState('')

  const addNewColumn = () => {
    if (!newColumnTitle) {
      toast.error('please enter column title', { position: 'bottom-left', theme: 'colored' })
      return
    }

    // Tạo dữ liệu Column để gọi API
    const newColumnData = {
      title: newColumnTitle
    }

    /**
     * Gọi lên props function createNewColumn nằm ở component cha cao nhất (boards/_id.jsx)
     * Lưu ý: Về sau ở học phần MERN Stack Advance nâng cao học trực tiếp mình thì chúng ta sẽ đưa dữ liệu Board ra ngoài Redux Global Store, và lúc này chúng ta có thể gọi luôn API ở đây là xong thay vì phải lần lượt gọi ngược lên những component cha phía bên trên. (Đối với component con nằm càng sâu thì càng khổ :D)
     * - Với việc sử dụng Redux như vậy thì code sẽ Clean chuẩn chỉnh hơn rất nhiều.
     */

    createNewColumn(newColumnData)

    // Đóng trạng thái thêm Column mới & clear input
    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }

  /*
  Thằng SortableContext yêu cầu items là một mảng dạng ['id-1', 'id-2'] chứ không phải [{id: 'id-1'}, {id: 'id-2'}]
  Nếu không đúng thì vẫn kéo thả được nhưng không có animation

  https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512
  */

  return (
    // horizontalListSortingStrategy dành cho kéo thả dạng nằm ngang
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy} >
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
          return <Column key={column._id} column={column} createNewCard = {createNewCard} />
        // Sort hand
        // {columns?.map(column => <Column key={column._id} />)}
        })}

        {/* Box add new column CTA*/}
        { !openNewColumnForm
          ? <Box onClick={toggleOpenNewColumnForm} sx={{
            minWidth: '250px',
            maxWidth: '250px',
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
          : <Box sx={{
            minWidth: '250px',
            maxWidth: '250px',
            mx: 2,
            p: 1,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <TextField
              label="Enter column title..."
              type="text"
              size="small"
              variant='outlined'
              autoFocus
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              sx={{
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
              <Button
                onClick={addNewColumn}
                variant='contained' color='success' size='small'
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid',
                  borderColor: (theme) => theme.palette.success.main,
                  '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                }}
              >
                Add Column
              </Button>
              <CloseIcon
                sx={{ color: 'white', fontSize: '14px', cursor: 'pointer' }}
                onClick={toggleOpenNewColumnForm}
              />
            </Box>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
              <Button
                sx={{
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#3a4b5d' : '#26a1ff'),
                  color: 'white'
                }}
              >
                Add Column
              </Button>
              <CloseIcon
                sx={{ color: 'white', fontSize: '14px', cursor: 'pointer' }}
                onClick={toggleOpenNewColumnForm}
              />
            </Box> */}
          </Box>
        }
      </Box>
    </SortableContext>
  )
}

export default ListColumns