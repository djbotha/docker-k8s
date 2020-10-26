import React from 'react'
import polymorphLogo from '../img/polymorph-logo.png';
import { Image } from 'mdx-deck';

function PolymorphFooter() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      margin: '2rem'
    }}>
      <Image src={polymorphLogo}
        style={{
          width: 300,
          height: 70,
          backgroundSize: 'contain'
        }}
      />
    </div>
  )
}

export default PolymorphFooter
