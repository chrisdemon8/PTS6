
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoopIcon from '@mui/icons-material/Loop';

export const sideMenu = [
    {
        label: 'Home',
        Icon: HomeIcon,
        to: '/',
    },
    {
        label: 'Clients',
        Icon: AccountCircleIcon,
        to: '/clients',
    },
    {
        label: 'Dossiers',
        Icon: FolderIcon,
        to: '/dossiers',
        children: [
            {
                label: 'En cours',
                Icon: LoopIcon,
                to: 'en-cours',
            },
            {
                label: 'Clôturées',
                Icon: CheckCircleOutlineIcon,
                to: 'cloturees', 
            },
        ],
    },
];