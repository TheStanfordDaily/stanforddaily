import React from "react";
/*
 * Renders a normal link so that navigating to a new page causes
 * a page refresh (as opposed to a new page).
 * The child of this element must be an <a> tag.
 */
export default ({ href, as, children }): React.ReactSVGElement =>
  React.cloneElement(children, { href: as });
