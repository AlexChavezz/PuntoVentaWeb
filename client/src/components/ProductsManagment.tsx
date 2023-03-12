import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import styles from '../styles/AdminPageStyles.module.css';
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
                    AÑADIR PRODUCTO
                </Button>
                <TableContainer component={Paper} style={{ marginTop: 100 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell align="right">PRICE</TableCell>
                                <TableCell align="right">STOCK</TableCell>
                                <TableCell align="right">DESCRIPCION</TableCell>
                                <TableCell align="right">ACCIONES</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
            <footer>

            </footer>
        </section>
    );
}