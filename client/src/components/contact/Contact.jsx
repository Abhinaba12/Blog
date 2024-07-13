import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';
const Imag = styled('img')({
    width: 400,
    display: 'flex',
    margin: 'auto',
    padding: '0 0 0'
})

const imageURL = 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png';
const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Imag src={imageURL} alt="blog" />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.instagram.com/_mattersmore_" color="inherit" target="_blank">
                        <Instagram />
                    </Link>
                    or send me an Email
                    <Link href="mailto:royabhinaba546@gmail.com" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;