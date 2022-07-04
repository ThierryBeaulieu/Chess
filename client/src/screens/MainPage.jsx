import React from 'react';
import Button from '../components/Button';

export default function MainPage() {
  return (
    <>
      <div>
        <div className='MainTitle'>Chess .</div>
        <Button name='Play online' />
        <Button name='Train yourself' secondary='true' />
      </div>
    </>
  );
}
