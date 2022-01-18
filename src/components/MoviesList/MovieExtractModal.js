import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment } from 'react';
import ExtractContent from './ExtractContent';

const MovieExtractModal = (props) => {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            <Fragment>
                {props.isContentLoading && <CircularProgress />}
                {!props.content && <ExtractContent name={props.name} content={"Sorry, there is no short description available from Wikipedia"} />}
                {!props.isContentLoading && props.content && <ExtractContent name={props.name} content={props.content} />}
            </Fragment>
        </Modal>
    )
}

export default MovieExtractModal;