import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const spawnLinks =  links.map((givenLink) => {
    const linkTo = "#" + {givenLink}
    return <a href={linkTo} key={givenLink}>{givenLink}</a>
  })
  return <nav>{spawnLinks}</nav>;
}

export default NavBar;
