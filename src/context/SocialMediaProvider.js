import React, { useState } from "react";
import SocialMediaContext from "./SocialMediaContext";

const initialSocial = {
  facebook: "https://www.facebook.com/pramudya.alamsyah",
  instagram: "https://instagram.com/fdpda09/",
  linkedin: "https://www.linkedin.com/in/pramudya-diva-alamsyah-75ab48160/",
  github: "https://github.com/AnonGhost09",
};

function SocialMediaProvider({ children }) {
  const [socialMedia] = useState(initialSocial);

  const socialMediaValue = {
    socialMedia,
  };

  return (
    <SocialMediaContext.Provider value={socialMediaValue}>
      {children}
    </SocialMediaContext.Provider>
  );
}

export default SocialMediaProvider;
