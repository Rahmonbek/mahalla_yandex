import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { CloseOutlined } from '@material-ui/icons';

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
        <div style={{display: 'flex', justifyContent:'flex-end'}}><Button style={{width: '10px'}} onClick={onClose} color="primary"><CloseOutlined /></Button></div>
        <DialogTitle style={{ cursor: 'move', display: 'flex', fontSize:'30px', justifyContent: 'center', padding: '0 10px 15px', textShadow:'1px 1px 3px grey' }} id="draggable-dialog-title" onClose={onClose}>
          {nomi} mahallasi
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{marginTop:'20px'}}><b>Viloyat : </b>{viloyat};</div>
            <div style={{marginTop:'20px'}}><b>Tuman : </b>{tuman};</div> 
            <div style={{marginTop:'20px'}}><b>Rais familiya ismi</b> : {raisFIO};</div>
            <div style={{marginTop:'20px'}}><b>Rais telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${raisTel}`}>{raisTel}</a>;</div>
            <div style={{marginTop:'20px'}}><b>Mahalla noziri familiya ismi</b> : {uchasFIO};</div>
            <div style={{marginTop:'20px'}}><b>Mahalla noziri telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${uchasTel}`}>{uchasTel}</a>;</div>
            <div style={{marginTop:'20px'}}><b>Mahalla posboni familiya ismi </b> : {posbonFIO};</div>
            <div style={{marginTop:'20px'}}><b>Mahalla posboni telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${posbonTel}`}>{posbonTel}</a>;</div>
            {/*  style={{marginTop:'20px'}}div ><b>Qariyalar familiya ismi </b> : {qariyalarFIO};</div>
            <div style={{marginTop:'20px'}}><b>Qariyalar raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${qariyalarTel}`}>{qariyalarTel}</a>;</div> */}
            <div style={{marginTop:'20px'}}><b>Rais o'rinbosari familiya ismi </b> : {raiszami1FIO};</div>
            <div style={{marginTop:'20px'}}><b>Rais o'rinbosari telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${raiszami1Tel}`}>{raiszami1Tel}</a>;</div>
            {/*  style={{marginTop:'20px'}}div ><b>2-rais o'rinbosari familiya ismi </b> : {raiszami2FIO};</div>
            <div style={{marginTop:'20px'}}><b>2-rais o'rinbosari telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${raiszami2Tel}`}>{raiszami2Tel}</a>;</div>
            <div style={{marginTop:'20px'}}><b>3-rais o'rinbosari familiya ismi </b> : {raiszami3FIO};</div>
            <div style={{marginTop:'20px'}}><b>3-rais o'rinbosari telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${raiszami3Tel}`}>{raiszami3Tel}</a>;</div>
            <div style={{marginTop:'20px'}}><b>4-rais o'rinbosari familiya ismi </b> : {raiszami4FIO};</div>
            <div style={{marginTop:'20px'}}><b>4-rais o'rinbosari telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${raiszami4Tel}`}>{raiszami4Tel}</a>;</div> */}
            <div style={{marginTop:'20px'}}><b>Kotiba familiya ismi </b> : {kotibaFIO};</div>
            <div style={{marginTop:'20px'}}><b>Kotiba telefon raqami</b> : <a style={{textDecoration:'none'}} href={`tel:${kotibaTel}`}>{kotibaTel}</a>;</div>
            <div style={{marginTop:'20px'}}><b>Telefon</b> :  <a style={{textDecoration:'none'}} href={`tel:${tel}`}>{tel}</a>;</div>
            <div style={{marginTop:'20px'}}><b>Email</b> :<a style={{textDecoration:'none'}} href={`mailto:${email}`}> {email}</a>;</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
  );
}
export default DraggableDialog;