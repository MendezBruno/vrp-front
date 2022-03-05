import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RouteInfoTable from './RouteInfoContent';
import { Package } from '../models/Package';
import { Route } from '../models/Route';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export interface RouteInfoModalIProps {
    open: boolean;
    handleClickRouteInfoModal: (value: boolean) => void,
    route: Route

  }

const RouteInfoModal = (props: RouteInfoModalIProps) => {
    const { open, handleClickRouteInfoModal, route } = props;
    // let { packages } = props
    const handleClose = () => {
        handleClickRouteInfoModal(false)       
    };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Route
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <RouteInfoTable packages={route.packages} ></RouteInfoTable>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default RouteInfoModal;

