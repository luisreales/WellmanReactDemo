import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  onYes: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ open, onClose, onYes }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: 16,
          padding: '16px',
          textAlign: 'center'
        },
      }}
    >
      <DialogTitle disableTypography>
        <ErrorIcon style={{ color: 'red', marginRight: '8px' }} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Well license number already exists.
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you want to redirect to the existing well?
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button 
          onClick={onClose} 
          variant="outlined"
            sx={{
                borderColor: '#374957',
                color: '#374957',
                textTransform: 'none',
                fontWeight: 'normal',
                borderRadius: '8px',
                mr: 2,
                padding: '8px 16px',
                ':hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: '#374957',
                }
            }}
        >
          No
        </Button>
        <Button 
          onClick={onYes} 
          variant="contained"
            sx={{
                backgroundColor: '#1B3BDA',
                color: '#FFFFFF',
                textTransform: 'none',
                fontWeight: 'normal',
                borderRadius: '8px',
                padding: '8px 16px',
                ':hover': {
                    backgroundColor: '#174AB1'
                }
            }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
