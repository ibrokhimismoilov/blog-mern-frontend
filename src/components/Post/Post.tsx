import clsx from "clsx";

import { Edit as EditIcon, Delete as DeleteIcon, Visibility as EyeIcon, Comment as CommentIcon } from "@mui/icons-material";

import { IconButton } from "@mui/material";

import { UserInfo } from "..";
import styles from "./Post.module.scss";
import { PostSkeleton } from "./PostSkeleton";
import { Key } from "react";

interface IProps {
	id: any;
	title: any;
	createdAt: any;
	imageUrl: any;
	user: any;
	viewsCount: any;
	commentsCount: any;
	tags: any;
	children?: any;
	isFullPost?: any;
	isLoading?: any;
	isEditable?: boolean;
}

export const Post = ({
	id,
	title,
	createdAt,
	imageUrl,
	user,
	viewsCount,
	commentsCount,
	tags,
	children,
	isFullPost,
	isLoading,
	isEditable = false
}: IProps) => {
	if (isLoading) return <PostSkeleton />;

	const onClickRemove = () => {};

	return (
		<div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
			{isEditable && (
				<div className={styles.editButtons}>
					<a href={`/posts/${id}/edit`}>
						<IconButton color="primary">
							<EditIcon />
						</IconButton>
					</a>
					<IconButton onClick={onClickRemove} color="secondary">
						<DeleteIcon />
					</IconButton>
				</div>
			)}
			{imageUrl && <img className={clsx(styles.image, { [styles.imageFull]: isFullPost })} src={imageUrl} alt={title} />}
			<div className={styles.wrapper}>
				<UserInfo {...user} additionalText={createdAt} />
				<div className={styles.indention}>
					<h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>{isFullPost ? title : <a href={`/posts/${id}`}>{title}</a>}</h2>
					<ul className={styles.tags}>
						{tags.map((name: any, key: Key) => (
							<li key={key}>
								<a href={`/tag/${name}`}>#{name}</a>
							</li>
						))}
					</ul>
					{children && <div className={styles.content}>{children}</div>}
					<ul className={styles.postDetails}>
						<li>
							<EyeIcon />
							<span>{viewsCount}</span>
						</li>
						<li>
							<CommentIcon />
							<span>{commentsCount}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
