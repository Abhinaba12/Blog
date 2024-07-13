import { styled } from '@mui/material';

const Imag = styled('img')({
    width: 400,
    display: 'flex',
    margin: 'auto',
    padding: '0 0 0',

})

const imageURL = 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png';

const Banner = () => {

    return (
        <Imag src={imageURL} alt="blog" />
    )
}

export default Banner;