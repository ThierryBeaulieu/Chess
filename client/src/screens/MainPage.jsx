import React from 'react';
import Button from '../components/Button';

export default function MainPage() {
  return (
    <React.Fragment>
      <div
        style={{
          position: `absolute`,
          top: 0,
          // bottom: 0,
          left: 0,
          // right: 0,
          width: `100vw`,
          height: `100vh`,
          display: `flex`,
          flexDirection: `column`,
          // alignItems: `center`,
          // flexBasis: `auto`,
        }}
      >
        <div
          style={{
            margin: `auto 50% auto 0`,
            display: 'flex',
            flexDirection: `column`,
            // flexDirection: 'row-reverse',
          }}
        >
          <div className='MainTitle' style={{ alignSelf: 'flex-end' }}>
            Chess .
          </div>
          <Button name='Play online' style={{ alignSelf: 'flex-end' }} />
          <Button
            name='Train yourself'
            secondary='true'
            style={{ alignSelf: 'flex-end' }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
