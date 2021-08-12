import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
 function DraggableDialog({open, onClose, village}) {
  return (<Dialog
        open={open}
        onClose={onClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <div style={{display: 'flex', justifyContent:'flex-end'}}><Button style={{width: '10px'}} onClick={onClose} color="primary"> X </Button></div>
        <DialogTitle style={{ cursor: 'move', display: 'flex', justifyContent: 'center', padding: '0 10px 15px' }} id="draggable-dialog-title" onClose={onClose}>
          {village.name}  
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {village.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
  );
}
export default DraggableDialog;