import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import { LayerContext } from './context/LayerContext';
import { useContext } from 'react';
import RouteInfoModal from './RouteInfoModal';


interface MenuItemOptions {
    name: string;
    action: any;
}

const options: MenuItemOptions[] = [
    { 
      name: 'Create Route',
      action: () => { console.log('Create Route') }
    },
    { 
      name: 'Clean Route',
      action: () => { console.log('Clean Route') }
    },
    { 
      name: 'See Info',
      action: () => { console.log('Route info') }
    }
]

export interface ActionDialogProps {
  open: boolean;
  handleClickMenuAction: (value: boolean) => void
}

const ActionDialog = (props: ActionDialogProps) => {
  const [openRouteInfoModal, setopenRouteInfoModal] = React.useState(false);
  const { createRoute, route } = useContext(LayerContext);
  const { open, handleClickMenuAction } = props;
  options[0].action = createRoute;
  const handleClose = () => {
    handleClickMenuAction(false)
    
    console.log("I am closed")
  };
  
  const handleClickRouteInfoModal = (value: boolean) => {
    setopenRouteInfoModal(value);
  }

  const handleClickRouteInfoModalInTrue = () => {
    handleClickRouteInfoModal(true);
  }

  options[2].action = handleClickRouteInfoModalInTrue;

  return (
    <>
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose an option</DialogTitle>
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
    <RouteInfoModal open={openRouteInfoModal} route={route} handleClickRouteInfoModal={handleClickRouteInfoModal} ></RouteInfoModal>
    </>
  );
}

export default ActionDialog;

/*       <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      /> */
