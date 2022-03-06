import * as React from 'react';
import { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@material-ui/core/TextField";
import axios from 'axios'
import { baseUrl } from "../../utils";


export default function AlertDialog(props) {
  const[editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    year:props.year,
    seasons:props.seasons,
    synopse:props.synopse,
    category:props.category
  })

  const handleEditSerie = () => {
    axios.put(baseUrl+"edit", {
      id: editValues.id,
      name: editValues.name,
      fk_year: editValues.year,
      seasons: editValues.seasons,
      synopse: editValues.synopse,
      category:editValues.category
    })
    handleClose()
  }

  const handleDeletSerie = () => {
    axios.delete(baseUrl+`delete/${editValues.id}`);
    handleClose()
  }
  
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = value => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Editar</DialogTitle>
        <TextField 
          autoFocus
          margin="dense"
          id="name"
          label="Nome da Série"
          defaultValue={props.name}
          onChange={handleChangeValues}
          type="text"
          fulWidth
        />
        <TextField 
          autoFocus
          margin="dense"
          id="year"
          label="Ano"
          defaultValue={props.year}
          onChange={handleChangeValues}
          type="numer"
          fulWidth
        />
        <TextField 
          autoFocus
          margin="dense"
          id="seasons"
          label="Temporadas"
          defaultValue={props.seasons}
          onChange={handleChangeValues}
          type="number"
          fulWidth
        />
        <TextField 
          autoFocus
          margin="dense"
          id="synopse"
          label="Sinopsse"
          defaultValue={props.synopse}
          onChange={handleChangeValues}
          type="text"
          fulWidth
        />
        <TextField 
          autoFocus
          margin="dense"
          id="category"
          label="Categoria"
          defaultValue={props.category}
          onChange={handleChangeValues}
          type="number"
          fulWidth
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancelar</Button>
          <Button onClick={handleDeletSerie} color="primary">Excluir</Button>
          <Button onClick={handleEditSerie} color="primary">SALVAR</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
