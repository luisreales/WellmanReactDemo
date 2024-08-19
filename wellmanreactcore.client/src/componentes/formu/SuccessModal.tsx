import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  onYes: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose, onYes }) => {
  return (
      <Dialog open={open} onClose={onClose} maxWidth="xs"
          fullWidth
          PaperProps={{
              style: {
                  borderRadius: 16,
                  padding: '16px',
                  textAlign: 'center'
              },
          }}>
      <DialogTitle disableTypography>
        <CheckCircleIcon style={{ color: 'green' }} />
              
              <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      Created well successfully.
                  </Typography>
              </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Would you like to create an activity for it?
        </DialogContentText>
      </DialogContent>
          <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={onClose} sx={{
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
            }}>No</Button>
        <Button onClick={onYes} color="primary"
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
        }}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessModal;
