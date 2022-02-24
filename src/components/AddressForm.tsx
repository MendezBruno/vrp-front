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
  openAddressForm: boolean
  handleClickAddressForm: (value: boolean) => void
}

const AddressForm: React.FC<IAddressFormProps> = (props) => {
  const { openAddressForm, handleClickAddressForm } = props;
  const [addressInput, setAddressInput] = useState("");


  const handleClose = () => {
    handleClickAddressForm(false);
  };

  const handleSubmitClose = () => {
    console.log(addressInput)
    handleClickAddressForm(false);
  };

  return (
    <div>

      <Dialog open={openAddressForm} onClose={handleClose}>
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
