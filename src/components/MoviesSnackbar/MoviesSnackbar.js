import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MoviesSnackbar = (props) => {
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.onClose}>
      <Alert onClose={props.onClose} severity="error" sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default MoviesSnackbar