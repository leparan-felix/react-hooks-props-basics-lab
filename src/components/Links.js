

import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {github && <a href="https://github.com/liza">{github}</a>}
      <br />
      {linkedin && <a href="https://www.linkedin.com/in/liza-zhang-4b0b2a1a5/">{linkedin}</a>}
    </div>
  );
}

export default Links;
