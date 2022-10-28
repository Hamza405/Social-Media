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

const Feeds = () => {
  return (
    <Box flex={4} p={2}>
      <PostCard
        title="Make your self"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHz5nVTIFDf0X5qqmpjI4q6GSu5lmc9ryUKBlaAjdDw&s"
        des="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
      />
      <PostCard
        title="Make your self"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHz5nVTIFDf0X5qqmpjI4q6GSu5lmc9ryUKBlaAjdDw&s"
        des="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
      />
      <PostCard
        title="Make your self"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHz5nVTIFDf0X5qqmpjI4q6GSu5lmc9ryUKBlaAjdDw&s"
        des="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
      />
    </Box>
  );
};

export default Feeds;
