import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import SavingsIcon from '@mui/icons-material/Savings';

export const PrimaryAppLocations = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <InfoIcon />,
    cName: 'nav-text'
  },
];

export const GoalsMenu = [
  {
    title: 'Your Goals',
    path: '/your-goals',
    icon: <TrackChangesIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Add Goal',
    path: '/add-goal',
    icon: <AddCircleOutlineIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Add Savings',
    path: '/add-savings',
    icon: <SavingsIcon />,
    cName: 'nav-text'
  },
];