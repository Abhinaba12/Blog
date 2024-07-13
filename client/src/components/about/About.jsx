import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
const profileURL = 'https://i.ibb.co/fQY1G17/Profile-2.png';

const Profile = styled('img')({
    width: 400,
    display: 'flex',
    margin: 'auto',
    padding: '0 0 0',
})

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Profile src={profileURL} alt="blog" />
            <Wrapper>
                <Typography variant="h3">Abhinaba Roy</Typography>
                <Text variant="h5">I'm a Software Developer from India
                    I've built websites, desktop applications.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Abhinaba12" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/_mattersmore_" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>
                    or send me an Email
                    <Link href="mailto:royabhinaba546@gmail.com" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;