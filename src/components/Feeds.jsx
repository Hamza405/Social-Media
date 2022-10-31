import React from "react";
import PostCard from "./Widgets/PostCard";
import { FeedsContainer } from "../styles/ContainersStyles";

const Feeds = () => {
  return (
    <FeedsContainer>
      <PostCard
        title="Do Reindeer Have Red Noses ?"
        image="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        des="Reindeer have an unusually large number of blood vessels in their nostrils, which can create a red appearance in certain conditions. These blood vessels give them their extremely strong sense of smell, something that is necessary to find food under a layer of snow. If you looked at a reindeer through a thermal camera or if there’s light directly on a reindeer’s nose, you’d notice a slight red glow. But most of the time, this coloration isn’t easy to see.
        "
      />
      <PostCard
        title="Do Reindeer Have Red Noses ?"
        image="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        des="Reindeer have an unusually large number of blood vessels in their nostrils, which can create a red appearance in certain conditions. These blood vessels give them their extremely strong sense of smell, something that is necessary to find food under a layer of snow. If you looked at a reindeer through a thermal camera or if there’s light directly on a reindeer’s nose, you’d notice a slight red glow. But most of the time, this coloration isn’t easy to see.
        "
      />
      <PostCard
        title="Do Reindeer Have Red Noses ?"
        image="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        des="Reindeer have an unusually large number of blood vessels in their nostrils, which can create a red appearance in certain conditions. These blood vessels give them their extremely strong sense of smell, something that is necessary to find food under a layer of snow. If you looked at a reindeer through a thermal camera or if there’s light directly on a reindeer’s nose, you’d notice a slight red glow. But most of the time, this coloration isn’t easy to see.
        "
      />
    </FeedsContainer>
  );
};

export default Feeds;
