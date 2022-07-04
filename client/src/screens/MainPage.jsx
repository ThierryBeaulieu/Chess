import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <React.Fragment>
      <div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100vw`,
          height: `100vh`,
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <div
          style={{
            margin: `auto 60% auto 0`,
            display: 'flex',
            flexDirection: `column`,
            gap: '50px',
          }}
        >
          <Link to='/'>
            <div className='MainTitle' style={{ alignSelf: 'flex-end' }}>
              Chess .
            </div>
          </Link>

          <Link to='/game'>
            <Button name='Play online' style={{ alignSelf: 'flex-end' }} />
          </Link>

          <Link to='/training'>
            <Button
              name='Train yourself'
              secondary='true'
              style={{ alignSelf: 'flex-end' }}
            />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
