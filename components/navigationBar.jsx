import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SOCIAL_MEDIA_PROFILES, SOCIAL_MEDIA_LINKS } from "../constants/links";

const NavigationBar = (props) => {
   const icons = {
      [SOCIAL_MEDIA_PROFILES.FACEBOOK]: <FacebookIcon href={SOCIAL_MEDIA_LINKS[SOCIAL_MEDIA_PROFILES.FACEBOOK]} />,
      [SOCIAL_MEDIA_PROFILES.INSTAGRAM]: <InstagramIcon href={SOCIAL_MEDIA_LINKS[SOCIAL_MEDIA_PROFILES.INSTAGRAM]} />,
      [SOCIAL_MEDIA_PROFILES.TWITTER]: <TwitterIcon href={SOCIAL_MEDIA_LINKS[SOCIAL_MEDIA_PROFILES.TWITTER]} />,
   };

   return (
      <AppBar position="static">
         <Toolbar>
            {Object.values(icons).map(icon => icon)}
         </Toolbar>
      </AppBar>
   );
};

export default NavigationBar;
