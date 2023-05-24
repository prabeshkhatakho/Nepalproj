import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';

export const SidebarData = [
    {
        title:"Home",
        icon: <HomeIcon />,
        link:"/home",
    },
    {
        title:"Mailbox",
        icon: <EmailIcon />,
        link:"/mailbox",
    },
    {
        title:"Analytics",
        icon: <AssessmentIcon />,
        link:"/analytics",
    },
    {
        title:"Dashboard",
        icon: <AnalyticsIcon />,
        link:"/dashboard",
    },
    {
        title:"Friends",
        icon: <GroupIcon />,
        link:"/friends",
    },

];