import React from 'react';
import { useState } from 'react';
import MousePosition from '../tools/MousePosition';

export function BlackQueen({ height, width }) {
  const [IsDrag, setIsDrag] = useState(false);
  const mousePos = MousePosition();

  const handleOnMouseMove = () => {
    console.log('handle on mouse move');
  };

  const handleOnMouseUp = () => {
    setIsDrag(false);
    console.log('handle on mouse up');
  };

  const handleOnMouseDown = () => {
    setIsDrag(true);
    console.log('handle on mouse down');
  };
  return (
    <svg
      version='1.2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
      width={width || '400'}
      height={height || '400'}
      style={{
        transform: IsDrag
          ? `translate(${mousePos.x}px,${mousePos.y}px)`
          : 'translate(0)',
      }}
      draggable='true'
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
      onMouseDown={handleOnMouseDown}
    >
      <title>BlackQueen</title>
      <defs>
        <image
          width='145'
          height='262'
          id='img1'
          href='data:image/png;base64,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'
        />
      </defs>
      <use id='Layer1' href='#img1' x='127' y='69' />
    </svg>
  );
}

export function WhiteQueen({ height, width }) {
  return (
    <svg
      version='1.2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
      width={width || '400'}
      height={height || '400'}
    >
      <title>WhiteQueen</title>
      <defs>
        <image
          width='145'
          height='262'
          id='img1'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAEGBAMAAACX4mpfAAAAAXNSR0IB2cksfwAAABVQTFRFAAAAgICAgICAgICAgICAgICA////OW/yDQAAAAd0Uk5TAD2m6P98/xE8EFAAAAPcSURBVHic7ZxNbuJQEIRjEvYo4gCMxgdAIw5AEsOaBUewuP8RBgzYxu6fqjaamWi6V5ECn5rqem37vYaXFzuKn9Ulfi2c17lRlNU1PqeijtU9dtNA86qLw5NSmphUP6VpSTUpnS4xMamiBV1R8fLNzu/e30j1+e9VmLTsUmqS+giTyi6lJqnPMGkzIH2FSf0P13y8JH1f0o8gaD4iRdvBcUyKtYN5NSbFkmqaU7damm4QSup9ALqhwKTeNw/t9hF0Q/XiS63lfPDK6jSI4f/VDI+D1+2HpGFSmmyFl5KQlNzaZ15KQlIrkfTqgsZJrUXSm/JuNc4ZbpP0T5BeRTMaobpgRpJq1ZlFgKTcCG04oWq98ZUcSZVpcL8EkWSZWMkNmUjJa+vWjJK8sm4XKckNmRrJYZIlE7deTJmo4tXmXXWhtW8hDF+SkpuCM5LbgjOS24Izkpu+pCR3ZCIkd2TCJa/d5yFUck9wXHJPcLxFuYKjLcrz5SWw4vkyoVcFXyZUckAmUHJAJkxyz5e37S+M1IS2U9be2Luk9tZXvi/oPWvAJPlxYwmT6u6VohfK7v/Ox+uRRH9uYFL3QrmExLWuh0xSkpI0hdSt4L1H6JqBuILLCEnsKssISex0c5zU9Sd5s+dpVwTiKnUH2ec5bxjJQiQpSUlKUpL+JxJwNozsGFTQ2XCJkay9p1uAT4pbn1QBt1FJStIfJ0H7KhAJ2uupkZkMaMuvRmYykPaEzWRAJKhpJgkjYVvIyMUFuSBgFxdstxa5uCAWxxZekqC2Au7ZA20FPEcA2gp6tuEvF2zZfVcSeprkNwOsFSDNAD1b9psBaAJguTyNBJ/BuwsPPud0Fx589uouPNSYvjX/Esk0OX7a7ZkcXSy+yfFBDM+aqAl8a1Iky5rEwIpjTWYOwzYUMxtik3BjetZkJl9sa+LG9KzJTAjZ1iQEt61JzT+Z1qRmskxrcqN5lg0YO9k2YOxk24Cxk20DbsbPsgEluGUDcoLRsAE7VanbgJ301G3AmcCyAWcCq3jkoKdRPFImvXjsGKt+UWBNoNuAHvdVbcCaQJ9dYk2gF481gVo8vnSa5HzpNMn50mkrjy+dtvL40mnF40unFC9SOrl4kdLJxYuUTl4vkdLJkkdKJ0seKd1JkjxWOknyWOkkyclh/TYeJL+PhOyDpEtcv+90H1MJkdqBk0NvdCYEakm73jhPjFTf375oR4z2E0mrduwpSGo/3joyiiVmtk1SkpKUpCQlKUlJSlKSkpSkB9LgJzDCse5/CWxSrPpfTJsUi/EPc8Ri9zL+ZY5YHHrP5lPi8mz+G5oIzZWYwOC9AAAAAElFTkSuQmCC'
        />
      </defs>
      <style></style>
      <use id='Layer 1' href='#img1' x='127' y='69' />
    </svg>
  );
}
