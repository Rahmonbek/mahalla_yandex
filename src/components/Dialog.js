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
   const {nomi , viloyat, tuman, raisFIO, raisTel, email,
          tel, uchasFIO, uchasTel, posbonFIO, posbonTel,
         qariyalarFIO, qariyalarTel, raiszami1FIO, raiszami1Tel,
         raiszami2FIO,raiszami2Tel, raiszami3FIO, raiszami3Tel,
        raiszami4FIO,raiszami4Tel, kotibaFIO, kotibaTel} = village

  return (<Dialog
        open={open}
        onClose={onClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title">
        <div style={{display: 'flex', justifyContent:'flex-end'}}><Button style={{width: '10px'}} onClick={onClose} color="primary"> X </Button></div>
        <DialogTitle style={{ cursor: 'move', display: 'flex', justifyContent: 'center', padding: '0 10px 15px' }} id="draggable-dialog-title" onClose={onClose}>
          {nomi} mahallasi
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div><b>Viloyat : </b>{viloyat}</div>
            <div><b>Tuman : </b>{tuman}</div> 
            <div><b>Rais familya ismi</b> : {raisFIO}</div>
            <div><b>Rais telefon nomeri</b> : {raisTel}</div>
            <div><b>Mahalla mudiri familya ismi</b> : {uchasFIO}</div>
            <div><b>Mahalla mudiri telefon nomeri</b> : {uchasTel}</div>
            <div><b>Mahalla posboni familya ismi </b> : {posbonFIO}</div>
            <div><b>Mahalla posboni telefon nomeri</b> : {posbonTel}</div>
            <div><b>Qariyalar familya ismi </b> : {qariyalarFIO}</div>
            <div><b>Qariyalar nomeri</b> : {qariyalarTel}</div>
            <div><b>1-rais o'rinbosari familya ismi </b> : {raiszami1FIO}</div>
            <div><b>1-rais o'rinbosari telefon nomeri</b> : {raiszami1Tel}</div>
            <div><b>2-rais o'rinbosari familya ismi </b> : {raiszami2FIO}</div>
            <div><b>2-rais o'rinbosari telefon nomeri</b> : {raiszami2Tel}</div>
            <div><b>3-rais o'rinbosari familya ismi </b> : {raiszami3FIO}</div>
            <div><b>3-rais o'rinbosari telefon nomeri</b> : {raiszami3Tel}</div>
            <div><b>4-rais o'rinbosari familya ismi </b> : {raiszami4FIO}</div>
            <div><b>4-rais o'rinbosari telefon nomeri</b> : {raiszami4Tel}</div>
            <diV><b>Kotiba familya ismi </b> : {kotibaFIO}</diV>
            <div><b>Kotiba telefon nomeri</b> : {kotibaTel}</div>
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