import React, { ReactNode } from "react";

import { SideBlock } from "..";
import { ListItem, Skeleton, List, Divider, ListItemText, Avatar, ListItemAvatar } from "@mui/material";

interface IProps {
	items: any;
	isLoading: boolean;
	children?: ReactNode;
}

export const CommentsBlock = ({ items, children, isLoading = true }: IProps) => {
	return (
		<SideBlock title="Комментарии">
			<List>
				{(isLoading ? [...Array(5)] : items).map((obj: any, index: number) => (
					<React.Fragment key={index}>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								{isLoading ? <Skeleton variant="circular" width={40} height={40} /> : <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />}
							</ListItemAvatar>
							{isLoading ? (
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Skeleton variant="text" height={25} width={120} />
									<Skeleton variant="text" height={18} width={230} />
								</div>
							) : (
								<ListItemText primary={obj.user.fullName} secondary={obj.text} />
							)}
						</ListItem>
						<Divider variant="inset" component="li" />
					</React.Fragment>
				))}
			</List>
			{children && children}
		</SideBlock>
	);
};
