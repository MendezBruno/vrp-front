import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useAddMarker from '../customHooks/useAddMarker';
import AddressForm from './AddressForm';
import ActionDialog from './ActionDialogs';

interface MenuItemOptions {

  name: string;
  action: () => void;
}

export interface ILongMenuProps {
  points: any[]
}

const ITEM_HEIGHT = 48;

const LongMenu: React.FC<ILongMenuProps> = (props) => {
  const { points } = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const addMarker = useAddMarker(false);
  const [openAddressForm, setOpenAddressForm] = React.useState(false);  
  const [openMenuAction, setOpenMenuAction] = React.useState(false);

  const open = Boolean(anchorEl);
  const [options, setOptions ] = React.useState<MenuItemOptions[]>([
    { 
      name: 'Add Marker',
      action: () => { addMarker.doActivate(!addMarker.activate) }
    },
    { 
      name: 'Add Address',
      action: () => { handleClickAddressForm(true) }
    },
    { 
      name: 'Menu Actions',
      action: () => { handleClickMenuAction(true) }
    }
  ]);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: any) => {
    setAnchorEl(null);
    event.action()
  };
  const handleClickAddressForm = (value: boolean) => {
    setOpenAddressForm(value);
  }
  const handleClickMenuAction = (value: boolean) => {
    setOpenMenuAction(value);
  }

  return (
    <div className="Menu">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.name} selected={option.name === 'Add Marker'} onClick={() => handleClose(option)}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
      <AddressForm openAddressForm={openAddressForm} handleClickAddressForm={handleClickAddressForm} ></AddressForm>
      <ActionDialog open={openMenuAction} handleClickMenuAction={handleClickMenuAction} ></ActionDialog>
    
    </div>
  );
}

export default LongMenu;