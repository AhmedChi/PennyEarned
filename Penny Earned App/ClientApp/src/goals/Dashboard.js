import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

import { DrawerHeader, Drawer, AppBar } from './DrawerProperties';
import Home from './pages/Home';
import About from './pages/About';
import AddGoal from './pages/AddGoal';
import YourGoals from './pages/YourGoals';
import AddSavings from './pages/AddSavings';

import { logout } from '../login/actions';
import { PrimaryAppLocations, GoalsMenu } from './MenuData';

const Dashboard = ({ user = {}, attemptLogout }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const imageItem = {
        img: "/piggy-bank.png",
        title: "Penney Earned Logo"
    }

    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Router>
            <Box sx={{ display: 'flex', width: "100vw" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ display: open && smallScreen ? "none" : "block" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6" noWrap component="div">
                            Welcome, {user.firstName}
                        </Typography>

                        <Button
                            variant="contained"
                            onClick={() => attemptLogout()}
                            sx={{
                                marginLeft: "auto",
                            }}
                        >Logout</Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                            <img
                                src={`${imageItem.img}`}
                                alt={imageItem.title}
                                style={{ maxWidth: '11%' }}
                            />
                            <Typography variant="subtitle1" noWrap component="span">
                                Penny Earned
                            </Typography>
                        </Stack >
                        <IconButton onClick={handleDrawerClose}
                            sx={{
                                marginLeft: '12px',
                            }}
                        >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>

                    <Divider />

                    <List>
                        {PrimaryAppLocations.map((item, index) => (
                            <ListItem key={index} button component={Link} to={item.path}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    <List>
                        {GoalsMenu.map((item, index) => (
                            <ListItem key={index} button component={Link} to={item.path}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <Container sx={{ marginTop: "25px", marginBottom: "25px", display: open && smallScreen ? "none" : "block" }}>
                    <DrawerHeader />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />

                        <Route path="/your-goals" exact component={YourGoals} />
                        <Route path="/add-goal" exact component={AddGoal} />
                        <Route path="/add-savings" exact component={AddSavings} />
                    </Switch>
                </Container>
            </Box>
        </Router>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    attemptLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);