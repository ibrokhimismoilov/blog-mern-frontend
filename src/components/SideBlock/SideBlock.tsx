import styles from "./SideBlock.module.scss";
import {Typography, Paper} from "@mui/material";

interface IProps {
  title: string; 
  children: any;
}

export const SideBlock = ({ title, children }: IProps) => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography variant="h6" classes={{ root: styles.title }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};