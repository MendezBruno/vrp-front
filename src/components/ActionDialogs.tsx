import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';


interface MenuItemOptions {
    name: string;
    action: () => void;
}

const options: MenuItemOptions[] = [
    { 
      name: 'Create Route',
      action: () => { console.log('Create Route') }
    },
    { 
      name: 'Clean Route',
      action: () => { console.log('Clean Route') }
    }
]

export interface ActionDialogProps {
  open: boolean;
  handleClickMenuAction: (value: boolean) => void
}

const ActionDialog = (props: ActionDialogProps) => {
  const { open, handleClickMenuAction } = props;

  const handleClose = () => {
    handleClickMenuAction(false)
    
    console.log("I am closed")
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {options.map((option) => (
          <ListItem button onClick={() => option.action()} key={option.name}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={option.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default ActionDialog;

/*       <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      /> */