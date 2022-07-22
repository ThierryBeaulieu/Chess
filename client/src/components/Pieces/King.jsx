import React from 'react';

export default function BlackKing({ height, width }) {
  return (
    <svg
      version='1.2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
      width={width || '400'}
      height={height || '400'}
    >
      <title>BlackKing</title>
      <defs>
        <image
          width='400'
          height='400'
          id='img1'
          href='data:image/png;base64,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'
        />
        <image
          width='412'
          height='412'
          id='img2'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZwAAAGcCAMAAADan+YLAAAAAXNSR0IB2cksfwAAAq9QTFRFAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAenp6ZWVlgICAgICAgICAgICAd3d3WFhYPDw8JSUlEBAQJiYmgICAgICAb29vUVFRMzMzFRUVUlJScnJygICAgICAgICAdnZ2TU1NAwMDBAQEKCgoUFBQgICAgICAYmJiLy8vMDAwY2NjgICAgICAgICARkZGExMTFhYWSUlJgICAgICAgICAfX19T09PEhISfn5+gICAX19fgICAdHR0LCwsMTExW1tbCQkJgICAPT09gICAgICAICAggICAeHh4HBwcgICAgICAdXV1FxcXgICAgICAeXl5GxsbgICAfHx8ISEhLi4uf39/VFRUgICAc3NzgICAgICAgICAgICAZGRkgICAHR0dYGBgaGhogICAODg4gICABQUFCwsLgICAQEBAREREgICAgICAKSkpgICAFBQUGBgYgICADAwMgICAgICAQ0NDgICANTU1gICAVVVVgICAgICAgICAU1NTgICAERERgICAgICAcHBwgICAgICATk5OgICAbW1tgICAgICATExMgICAa2trgICAgICAgICAgICAKioqgICAaWlpDg4OgICAgICAe3t7V1dXgICABwcHXl5egICANzc3gICAgICADQ0NgICAgICAXFxcgICAgICAOzs7gICAgICAgICAampqgICAgICAgICAQkJCgICAgICAAQEBGRkZgICAgICAgICAgICASEhIgICAgICAgICAgICACgoKgICAgICAOTk5gICAgICAgICAPz8/gICAgICAgICAgICAJCQkgICAWVlZH0saYwAAAOV0Uk5TAD2m6P/+56U8fHv/NEWEmbFfn8CaW02L2NSKTBuCx8YWHvf///IXfvr///////9T9P///////0k4zf///////8Qw/////+wzH/////+wS9z/////Uf9Y//////9K/1JB//v///DX///JXv//Tv//////C//mCXFv/7n///+g/5D//9L//5e1/63//9D/833/vv+V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'
        />
      </defs>
      <style></style>
      <use id='Shape 2' href='#img1' x='-4' y='29' />
      <use id='Layer 1' href='#img2' x='-10' y='23' />
    </svg>
  );
}
