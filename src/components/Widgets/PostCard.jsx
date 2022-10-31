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

import { Favorite, FavoriteBorder, Share, MoreVert } from "@mui/icons-material";

const PostCard = ({ title, image, des }) => {
  return (
    <Card sx={{ margin: { xs: 2, sm: 3, md: 5 } }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src="data:image/jpeg;base64,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"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300px"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {des}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
