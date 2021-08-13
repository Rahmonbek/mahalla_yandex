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
   const {name , viloyat, tuman, RaisFIO, RaisTel, email,
          tel, UchasFIO, UchasTel, PosbonFIO, PosbonTel,
         QariyalarFIO, QariyalarTel, RaisOrin1FIO, RaisOrin1Tel,
         RaisOrin2FIO,RaisOrin2Tel, RaisOrin3FIO, RaisOrin3Tel,
        RaisOrin4FIO,RaisOrin4Tel, kotibFIO, kotibTel} = village
  return (<Dialog
        open={open}
        onClose={onClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <div style={{display: 'flex', justifyContent:'flex-end'}}><Button style={{width: '10px'}} onClick={onClose} color="primary"> X </Button></div>
        <DialogTitle style={{ cursor: 'move', display: 'flex', justifyContent: 'center', padding: '0 10px 15px' }} id="draggable-dialog-title" onClose={onClose}>
          {name}  
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>viloyat :  {viloyat}</div>
            <div>Tuman : {tuman}</div>
            <div>RaisFIO: {RaisFIO}</div>
            <div>RaisTel : {RaisTel}</div>
            <div>Email : {email}</div>
            <div>Tel : {tel}</div>
            <div>UchasFIO : {UchasFIO}</div>
            <div>UchasTel : {UchasTel}</div>
            <div>PosbonFIO : {PosbonFIO}</div>
            <div>PosbonTel : {PosbonTel}</div>
            <div>QariyalarFIO : {QariyalarFIO}</div>
            <div>QariyalarTel : {QariyalarTel}</div>
            <div>RaisOrin1FIO : {RaisOrin1FIO}</div>
            <div>RaisOrin1Tel : {RaisOrin1Tel}</div>
            <div>RaisOrin2FIO : {RaisOrin2FIO}</div>
            <div>RaisOrin2Tel : {RaisOrin2Tel}</div>
            <div>RaisOrin3FIO : {RaisOrin3FIO}</div>
            <div>RaisOrin3Tel : {RaisOrin3Tel}</div>
            <div>RaisOrin4FIO : {RaisOrin4FIO}</div>
            <div>RaisOrin4Tel : {RaisOrin4Tel}</div>
            <diV>KotibFIO : {kotibFIO}</diV>
            <div>KotinTel : {kotibTel}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
  );
}
export default DraggableDialog;