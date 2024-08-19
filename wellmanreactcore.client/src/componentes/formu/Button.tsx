import { Button } from '@mui/material';

interface MyComponentProps {
    handleClose: () => void;
}


const CreateButton = () => (
    <Button
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
        type="submit"
    >
        Create
    </Button>
);

const CancelButton: React.FC<MyComponentProps> = ({ handleClose }) => (
    <Button
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
        onClick={handleClose}
    >
        Cancel
    </Button>
);

export { CreateButton, CancelButton };
