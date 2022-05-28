import { makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import {
    Buttton,
    TextField,
    Select,
    Input,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";


const useStyles = makeStyles(theme => ({
    paper: { 
        padding: theme.spacing(2)
    },
    textField: {
        marginBottom: theme.spacing(2)
    },
}));


const tags = I["fun", "programming", "health", "science"];

const AddPostForm = () => {

  return (
    <div></div>
  )
}

export default AddPostForm