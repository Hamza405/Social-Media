import React from "react";
import {
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemAvatar,
  Divider,
  ListItemText,
} from "@mui/material";
import { RightBarContainer } from "../styles/ContainersStyles";
import { RightBarWrapper, RightBarListStyle } from "../styles/RightBarStyles";
import RightBarTitle from "./Widgets/RightBarTitle";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
];

const RightBar = () => {
  return (
    <RightBarContainer>
      <RightBarWrapper>
        <RightBarTitle title="Online Friends" />
        <AvatarGroup max={7} sx={{ mt: 3, justifyContent: "start" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
          />
          <Avatar alt="Travis Howard" src="https://www.placecage.com/250/250" />
          <Avatar
            alt="Cindy Baker"
            src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://robohash.org/mail@ashallendesign.co.uk"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://placekitten.com/250/250"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk"
          />

          <Avatar
            alt="Remy Sharp"
            src="https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk"
          />
        </AvatarGroup>
        <RightBarTitle title="Latest Photos" />
        <ImageList gap={5} cols={2} mt={2} mb={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <RightBarTitle title="Latest Conversations" />
        <RightBarListStyle
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="data:image/jpeg;base64,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"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="data:image/jpeg;base64,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"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </RightBarListStyle>
      </RightBarWrapper>
    </RightBarContainer>
  );
};

export default RightBar;
