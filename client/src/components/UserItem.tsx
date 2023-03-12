import { TableCell, TableRow } from '@mui/material';
import removeIcon from '../assets/remove.svg';
import updateIcon from '../assets/edit.svg';
import styles from '../styles/AdminPageStyles.module.css';

interface UserItemProps {
    name: string,
    id: number,
    password: string,
    role: string,
}

export const UserItem = ({ name, id, password, role }: UserItemProps) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="right">{id}</TableCell>
            <TableCell align="right">{password}</TableCell>
            <TableCell align="right">{role}</TableCell>
            <TableCell align="right">
                <div
                    className={styles.actionsContainer}
                >
                    <div
                        className={styles.actionsContainerItem}
                    >
                        <img
                            src={removeIcon}
                            alt="remove"
                            className={styles.actionsContainerItemImage}

                        />
                    </div>
                    <div
                        className={styles.actionsContainerItem}
                    >
                        <img
                            src={updateIcon}
                            alt="update"
                            className={styles.actionsContainerItemImage}

                        />
                    </div>
                </div>
            </TableCell>
        </TableRow>
    );
}