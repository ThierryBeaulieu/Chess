import React from 'react';
import './AlternateBoard.css';

export default class AlternateBoard extends React.Component {
  render() {
    return (
      <svg
        version='1.2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 800 800'
        width='800'
        height='800'
      >
        <title>board</title>
        <defs>
          <image
            width='800'
            height='800'
            id='img1'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAQMAAADhvpQrAAAAAXNSR0IB2cksfwAAAAZQTFRFAFx739/fcqPYAAAAAVxJREFUeJzt2kENgEAQA8BzgH+XOIBvBdBHyfTX7CZjoOdEridSOkAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBLKKZLnz7cMDBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgf0Ay2+tBCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAukiW7fUgBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgXSSzvR6EQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAiki2TZXg9CIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCATSRTLb60EIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUC6SJbt9SAEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCBV5AWz8azWX0fzrAAAAABJRU5ErkJggg=='
          />
        </defs>
        <style></style>
        <use id='Background' href='#img1' x='0' y='0' />
      </svg>
    );
  }
}
