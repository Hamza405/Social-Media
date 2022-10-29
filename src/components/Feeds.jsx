import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import PostCard from "./Widgets/PostCard";

import { Favorite, FavoriteBorder, Share, MoreVert } from "@mui/icons-material";
import { FeedsContainer } from "../styles/ContainersStyles";

const Feeds = () => {
  return (
    <FeedsContainer>
      <PostCard
        title="Make your self"
        image="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        des="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
      />
      <PostCard
        title="Make your self"
        image="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        des="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
      />
      <PostCard
        title="Make your self"
        image="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        des="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
      />
    </FeedsContainer>
  );
};

export default Feeds;
