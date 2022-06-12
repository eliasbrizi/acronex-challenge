import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import { AcronexIcon, UnimapImage } from '../resources/images';


import { useForm } from "react-hook-form";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function CustomAppBar() {

    const navigate = useNavigate()

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => {
        navigate(`/machines?search=${values['search']}`)
    }

    return (
        <Box sx={{ flexGrow: 1, width: '100%', marginBottom: '10vh' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <AcronexIcon />
                    <Box sx={{ flexGrow: 1, height: '100%' }}>
                        <UnimapImage />
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <StyledInputBase
                                {...register("search")}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </form>
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
