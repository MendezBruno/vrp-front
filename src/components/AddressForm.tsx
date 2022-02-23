import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export interface IAddressFormProps {
  open: boolean
}

const AddressForm: React.FC<IAddressFormProps> = (props) => {
  const [open, setOpen] = React.useState(props.open);
  const [addressInput, setAddressInput] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitClose = () => {
    console.log(addressInput)
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar una direccion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escribe la direccion que quieres agregar en el mapa
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            value={addressInput}
            onChange={(e) => setAddressInput(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmitClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddressForm;
