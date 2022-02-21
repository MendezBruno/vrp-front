import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useAddMarker from '../customHooks/useAddMarker';

interface MenuItemOptions {

  name: string;
  action: () => void;
}


const ITEM_HEIGHT = 48;

const LongMenu: React.FC = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const addMarker = useAddMarker(false);
  const [options, setOptions ] = React.useState<MenuItemOptions[]>([{
    name: 'Add Marker',
    action: () => { addMarker.doActivate(!addMarker.activate) }
  }]);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: any) => {
    setAnchorEl(null);
    event.action()
   };

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
    </div>
  );
}

export default LongMenu;