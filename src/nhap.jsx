<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s cubic-bezier(0.42, 0, 0.58, 1)',
    maxHeight: 'fit-content',
    height: openFilterOption.brand ? '50%' : '76px'
  }}
>
  <Box
    onClick={() => setOpenFilterOption(prev => ({ ...prev, brand: !openFilterOption.brand }))}
    className="filterOption"
    sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
  >
    <Typography >Brand</Typography>
    <Box className="class1">
      <KeyboardArrowDownIcon />
    </Box>
  </Box>
  <Box sx={{
    height: openFilterOption.brand ? '100%' : '0px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.33s cubic-bezier(0.42, 0, 0.58, 1)',
    alignItems: 'center'
  }}>
    <FormGroup sx={{ mt: '8px', width: '90%', pb: '8px' }}>
      {['Nike', 'Adidas', 'Biti\'s', 'Puma', 'New Balance', 'Converse'].map((brand) => (
        <Box key={brand} sx={{
          p: '2px 6px 2px 16px',
          bgcolor: '#ffffff',
          mt: '12px',
          borderRadius: '12px',
          boxShadow: '0.5px 0.5px 10px rgb(220, 220, 220)',
          '&:hover': {
            boxShadow: '1px 1px 10px rgb(201, 200, 200)',
            transform: 'scale(1.01)',
            transformOrigin: 'center',
            cursor: 'pointer'
          }
        }}>
          <FormControlLabel
            label={brand}
            control={
              <Checkbox
                disableRipple
                icon={<Box sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '16px',
                  border: '0.5px solid #e6e6e6'
                }} />}
                checkedIcon={<Box sx={{
                  width: '20px',
                  height: '20px',
                  bgcolor: '#59c561',
                  borderRadius: '16px',
                  border: '0.5px solid white',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <DoneIcon sx={{ fontSize: '14px' }} />
                </Box>
                }
                sx={{
                  padding: '8px 6px',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  },
                  '&.Mui-checked:hover': {
                    backgroundColor: 'transparent'
                  },
                  '&:active': {
                    boxShadow: 'none'
                  },
                  '&.Mui-focusVisible': {
                    boxShadow: 'none'
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none'
                  }
                }}
              />
            }
            labelPlacement="start"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              m: '0px'
            }}
          />
        </Box>
      ))}
    </FormGroup>
  </Box>
</Box>