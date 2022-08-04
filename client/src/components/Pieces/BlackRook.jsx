import React from "react";

export default function BlackRook({ height, width }) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={width || "400"}
      height={height || "400"}
    >
      <title>BlackRook</title>
      <defs>
        <image
          width="412"
          height="448"
          id="BlackRook"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZwAAAHACAMAAACh0y6HAAAAAXNSR0IB2cksfwAAAoJQTFRFAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAMDAwgICAV1dXEBAQeHh4gICAMzMzBwcHaGhogICADQ0NUFBQgICAgICAfX19gICAgICAgICAVVVVGBgYgICAgICAgICAHh4eBAQEgICAd3d3ODg4gICAgICAgICAgICAKCgocHBwBQUFWFhYgICAgICAgICAgICAgICATk5OICAggICAgICAKysrDg4OYGBggICAAQEBQEBAgICAYmJigICAgICAgICAJCQkgICABgYGgICAgICASEhIgICAgICAgICAS0tLgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAf39/gICAgICAgICAgICAgICAgICAU1NTFRUVgICAb29vKSkpKioqgICAgICAgICAeXl5Ozs7AwMDPDw8gICAYWFhExMTFBQUgICAgICAenp6NDQ0NTU1gICAgICAgICAgICAZGRkERERY2NjgICAfHx8PT09gICAZ2dngICAVlZWgICAcXFxGxsbdHR0gICAbm5uEhISZmZmCwsLW1tbgICAXFxcgICAgICAgICAZWVlgICACgoKgICAa2trCQkJampqgICAc3NzgICAdnZ2FhYWgICALS0tREREgICAAgICgICAgICAgICAgICAIyMjgICAgICATExMgICAgICAaWlpgICAgICAFxcXHR0dgICAbW1tgICAgICAgICAHx8fgICAgICAVFRUgICADw8PgICAdXV1gICAgICAgICAgICAe3t7fn5+bGxsgICAgICAgICAgICAgICALCwsgICAgICAgICAgICAgICAQ0NDgICAgICAgICAkdX8vgAAANZ0Uk5TAD2m6P/+56U8fHv//6D///+K////TP//xkb/7jLB//9kLer//27//wjlWE7/////uVvjJtT//z/5////Vf//z/9LOvX/cf9qYv/iBdv/RTbS0TUgs7IfQ97/3UIrv74q//8z////sB5e/////9z///87Mf///7glUu3///9h//9s/3T/dv///3P//////3L/bWhT/1r/8v///8v/UP//a///Y/9ZTxXx/+YJ/29N/wfk//8i//0hif+ILP/A/0T/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"
        />
      </defs>
      <style></style>
      <use id="BlackRook" href="#BlackRook" x="-6" y="-6" />
    </svg>
  );
}