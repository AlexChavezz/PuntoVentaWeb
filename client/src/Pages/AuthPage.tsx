
import { Button, TextField } from '@mui/material';
import { useForm } from '../hooks/useForm';
import styles from '../styles/AuthPageStyles.module.css';
import Image from '../assets/authentication.svg';

const initialState = {
    userName: '',
    password: ''
}

interface ValuesState {
    userName: string;
    password: string;
}

export const AuthPage = () => {

    const { values, handleChange } = useForm(initialState);
    const { userName, password } = values;

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <section
            className={styles.authMainContainer}
        >
            <article
                className={styles.authFormContainer}
            >
                <h3
                    className={styles.authFormContainerTitle}
                >
                    Eben-Ezer’s SHOP
                </h3>
                <form
                    // sx={{ width: '50ch' }}
                    className={styles.authFormControl}
                    onSubmit={onSubmit}
                    
                >
                    <TextField
                        id="outlined-basic"
                        label="User Name"
                        variant="outlined"
                        margin='normal'
                        onChange={handleChange}
                        name="userName"
                        value={userName}
                        required
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        margin='normal'
                        type={'password'}
                        onChange={handleChange}
                        name="password"
                        value={password}
                        required
                    />
                    <Button
                        variant="contained"
                        type='submit'
                        style={{ marginTop: 20 }}
                        onClick={onSubmit}
                    >SIGN IN</Button>
                </form>
            </article>
            <article
                className={styles.authImageContainer}
            >
                <img src={Image} alt="main-image" />
            </article>
        </section>
    );
}