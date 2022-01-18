import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ExtractContent = (props) => {
    return (
    <Box sx={style}>
        <Typography variant="h5">
            {props.name}
        </Typography>
        <Typography sx={{ mt: 2 }} align="justify">
            {props.content.split('\n')[0]}
        </Typography>
    </Box>)
}

export default ExtractContent;