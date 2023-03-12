import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import styles from '../styles/AdminPageStyles.module.css';
import Paper from '@mui/material/Paper';
import { UserItem } from './UserItem';

const users = [
    {
        name: 'Alexis',
        id: 1,
        password: 'alexispassword',
        role: 'admin',
    },
    {
        name: 'Elias',
        id: 2,
        password: 'eliasPassword1',
        role: 'employed',
    }
]

export default () => {
    return (
        <section
            className={styles.managmentPageContainer}
        >
            <header>
                <h2>HOLA UNDEFINED</h2>
            </header>
            <section
                className={styles.viewInformationContainer}
            >
                <Button
                    variant="contained"
                    color="success"
                >
                    AÑADIR USUARIO
                </Button>
                <TableContainer component={Paper} style={{marginTop: 100}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">PASSWORD</TableCell>
                                <TableCell align="right">ROL</TableCell>
                                <TableCell align="right">ACCIONES</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map(user => <UserItem key={user.id} {...user} />)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
            <footer>

            </footer>
        </section>
    );
}