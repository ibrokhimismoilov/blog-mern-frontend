import styles from "./Login.module.scss";
import { Typography, TextField, Paper, Button } from "@mui/material";

export default () => {
	return (
		<Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant="h5">
				Вход в аккаунт
			</Typography>
			<TextField className={styles.field} label="E-Mail" error helperText="Неверно указана почта" fullWidth />
			<TextField className={styles.field} label="Пароль" fullWidth />
			<Button size="large" variant="contained" fullWidth>
				Войти
			</Button>
		</Paper>
	);
};
