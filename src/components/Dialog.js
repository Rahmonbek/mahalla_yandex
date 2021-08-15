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
          {name} mahallasi
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div><b>Viloyat : </b>{viloyat}</div>
            <div><b>Tuman : </b>{tuman}</div> 
            <div><b>Rais familya ismi</b> : {RaisFIO}</div>
            <div><b>Rais telefon nomeri</b> : {RaisTel}</div>
            <div><b>Mahalla mudiri familya ismi</b> : {UchasFIO}</div>
            <div><b>Mahalla mudiri telefon nomeri</b> : {UchasTel}</div>
            <div><b>Mahalla posboni familya ismi </b> : {PosbonFIO}</div>
            <div><b>Mahalla posboni telefon nomeri</b> : {PosbonTel}</div>
            <div><b>Qariyalar familya ismi </b> : {QariyalarFIO}</div>
            <div><b>Qariyalar nomeri</b> : {QariyalarTel}</div>
            <div><b>1-rais o'rinbosari familya ismi </b> : {RaisOrin1FIO}</div>
            <div><b>1-rais o'rinbosari telefon nomeri</b> : {RaisOrin1Tel}</div>
            <div><b>2-rais o'rinbosari familya ismi </b> : {RaisOrin2FIO}</div>
            <div><b>2-rais o'rinbosari telefon nomeri</b> : {RaisOrin2Tel}</div>
            <div><b>3-rais o'rinbosari familya ismi </b> : {RaisOrin3FIO}</div>
            <div><b>3-rais o'rinbosari telefon nomeri</b> : {RaisOrin3Tel}</div>
            <div><b>4-rais o'rinbosari familya ismi </b> : {RaisOrin4FIO}</div>
            <div><b>4-rais o'rinbosari telefon nomeri</b> : {RaisOrin4Tel}</div>
            <diV><b>Kotib familya ismi </b> : {kotibFIO}</diV>
            <div><b>Kotib telefon nomeri</b> : {kotibTel}</div>
            <div><small>Telfon : {tel}</small></div>
            <small>Email : {email}</small>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
  );
}
export default DraggableDialog;