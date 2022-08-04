import React from "react";

export default function WhiteBishop({ height, width }) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={width || "400"}
      height={height || "400"}
    >
      <title>WhiteBishop</title>
      <defs>
        <image
          width="183"
          height="409"
          id="WhiteBishop"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use id="WhiteBishop" href="#WhiteBishop" x="108" y="36" />
    </svg>
  );
}
