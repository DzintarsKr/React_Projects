import { Box, Button } from '@mui/material';

function MyComponent() {
  return (
    <Box
      sx={{
        backgroundColor: 'lightblue',
        padding: '16px',
        margin: '8px',
      }}
    >
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'blue',
          padding: '12px',
          fontWeight: 'bold',
        }}
      >
        Нажать
      </Button>
    </Box>
  );
}

export default MyComponent;