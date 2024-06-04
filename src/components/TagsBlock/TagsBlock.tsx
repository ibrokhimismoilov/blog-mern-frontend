import TagIcon from "@mui/icons-material/Tag";
import ListItemIcon from "@mui/material/ListItemIcon";
import {List,ListItem,ListItemButton, ListItemText, Skeleton } from "@mui/material";

import { SideBlock } from "..";

interface IProps {
  items: any;
  isLoading: boolean;
} 

export const TagsBlock = ({ items, isLoading = true }: IProps) => {
  return (
    <SideBlock title="Тэги">
      <List>
        {(isLoading ? [...Array(5)] : items).map((name: string, i: any) => (
          <a href={`/tags/${name}`} style={{ textDecoration: "none", color: "black" }}>
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </SideBlock>
  );
};