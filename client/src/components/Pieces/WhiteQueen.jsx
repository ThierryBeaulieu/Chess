import React from "react";

export default function WhiteQueen({ height, width }) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={width || "400"}
      height={height || "400"}
    >
      <title>WhiteQueen</title>
      <defs>
        <image
          width="145"
          height="262"
          id="WhiteQueen"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAEGBAMAAACX4mpfAAAAAXNSR0IB2cksfwAAABVQTFRFAAAAgICAgICAgICAgICAgICA////OW/yDQAAAAd0Uk5TAD2m6P98/xE8EFAAAAPcSURBVHic7ZxNbuJQEIRjEvYo4gCMxgdAIw5AEsOaBUewuP8RBgzYxu6fqjaamWi6V5ECn5rqem37vYaXFzuKn9Ulfi2c17lRlNU1PqeijtU9dtNA86qLw5NSmphUP6VpSTUpnS4xMamiBV1R8fLNzu/e30j1+e9VmLTsUmqS+giTyi6lJqnPMGkzIH2FSf0P13y8JH1f0o8gaD4iRdvBcUyKtYN5NSbFkmqaU7damm4QSup9ALqhwKTeNw/t9hF0Q/XiS63lfPDK6jSI4f/VDI+D1+2HpGFSmmyFl5KQlNzaZ15KQlIrkfTqgsZJrUXSm/JuNc4ZbpP0T5BeRTMaobpgRpJq1ZlFgKTcCG04oWq98ZUcSZVpcL8EkWSZWMkNmUjJa+vWjJK8sm4XKckNmRrJYZIlE7deTJmo4tXmXXWhtW8hDF+SkpuCM5LbgjOS24Izkpu+pCR3ZCIkd2TCJa/d5yFUck9wXHJPcLxFuYKjLcrz5SWw4vkyoVcFXyZUckAmUHJAJkxyz5e37S+M1IS2U9be2Luk9tZXvi/oPWvAJPlxYwmT6u6VohfK7v/Ox+uRRH9uYFL3QrmExLWuh0xSkpI0hdSt4L1H6JqBuILLCEnsKssISex0c5zU9Sd5s+dpVwTiKnUH2ec5bxjJQiQpSUlKUpL+JxJwNozsGFTQ2XCJkay9p1uAT4pbn1QBt1FJStIfJ0H7KhAJ2uupkZkMaMuvRmYykPaEzWRAJKhpJgkjYVvIyMUFuSBgFxdstxa5uCAWxxZekqC2Au7ZA20FPEcA2gp6tuEvF2zZfVcSeprkNwOsFSDNAD1b9psBaAJguTyNBJ/BuwsPPud0Fx589uouPNSYvjX/Esk0OX7a7ZkcXSy+yfFBDM+aqAl8a1Iky5rEwIpjTWYOwzYUMxtik3BjetZkJl9sa+LG9KzJTAjZ1iQEt61JzT+Z1qRmskxrcqN5lg0YO9k2YOxk24Cxk20DbsbPsgEluGUDcoLRsAE7VanbgJ301G3AmcCyAWcCq3jkoKdRPFImvXjsGKt+UWBNoNuAHvdVbcCaQJ9dYk2gF481gVo8vnSa5HzpNMn50mkrjy+dtvL40mnF40unFC9SOrl4kdLJxYuUTl4vkdLJkkdKJ0seKd1JkjxWOknyWOkkyclh/TYeJL+PhOyDpEtcv+90H1MJkdqBk0NvdCYEakm73jhPjFTf375oR4z2E0mrduwpSGo/3joyiiVmtk1SkpKUpCQlKUlJSlKSkpSkB9LgJzDCse5/CWxSrPpfTJsUi/EPc8Ri9zL+ZY5YHHrP5lPi8mz+G5oIzZWYwOC9AAAAAElFTkSuQmCC"
        />
      </defs>
      <style></style>
      <use id="WhiteQueen" href="#WhiteQueen" x="127" y="69" />
    </svg>
  );
}
