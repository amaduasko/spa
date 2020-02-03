import React from "react";
import { Stories } from "../../components/stories/stories.component";
import { StoryVideo } from "../../components/storyVideo/storyVideo.component";
import { Expertise } from "../../components/expertise/expertise.component";
import { Team } from "../../components/team/team.component";
import { Works } from "../../components/works/works.component";
import { Review } from "../../components/review/review.component";
import { AppForm } from "../../components/form/form.component";
export default function Main() {
  return (
    <div>
      <Stories />
      <StoryVideo />
      <Expertise />
      <Team />
      <Works />
      <Review />
      <AppForm />
    </div>
  );
}
