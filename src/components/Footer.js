import React from 'react';


function Footer({nacimiento, muerte}) {
  return (
    <div className="">
        <p><strong>Nacimiento: </strong>{nacimiento}</p>
        <p><strong>Muerte: </strong>{muerte}</p>
    </div>
  );
}

export default Footer;