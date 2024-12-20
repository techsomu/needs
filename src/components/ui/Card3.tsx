import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg uwu" />
        <div className="bg" />
        <div className="content">
          <div className="img">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
          </div>
          <div className="h1">
            Johnathon<br />F. Stag
          </div>
          <div className="p">
            Professional human
            <p>
              I do human things such as exist, eat foot, and work.
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    color: white;
    height: 260px;
    background: #444;
    border-radius: 14px;
  }

  .bg {
    position: absolute;
    z-index: -1;
    inset: -4px;
    border-radius: 16px;
    overflow: hidden;
  }

  .uwu {
    filter: blur(8px);
    transition: filter 0.3s;
  }

  .bg::before {
    content: '';
    position: absolute;
    aspect-ratio: 1/1;
    top: 50%;
    left: 50%;
    min-width: 150%;
    min-height: 150%;
    background-image: conic-gradient(
      hsl(0, 100%, 50%),
      hsl(30, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(90, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(150, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(210, 100%, 50%),
      hsl(240, 100%, 60%),
      hsl(270, 100%, 50%),
      hsl(300, 100%, 50%),
      hsl(330, 100%, 50%),
      hsl(360, 100%, 50%)
    );
    animation: speeen 4s linear infinite;
    transform-origin: 0% 0%;
    transform: rotate(0deg) translate(-50%, -50%);
  }

  @keyframes speeen {
    from {
      transform: rotate(0deg) translate(-50%, -50%);
    }

    to {
      transform: rotate(360deg) translate(-50%, -50%);
    }
  }

  .content {
    position: relative;
    padding: 14px 16px;
  }

  .img {
    height: 5em;
    width: 5em;
    margin: auto;
    background-color: #fff3;
    border-radius: 1em;
  }

  .img svg {
    height: 100%;
    fill: white;
  }

  .content div {
    text-align: center;
  }

  .h1 {
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1em;
    font-weight: 600;
  }

  .p {
    font-size: 0.75em;
  }

  .p p {
    margin-top: 0.5em;
    padding: 0.5em;
    background-color: #0003;
    border-radius: 1em;
  }`;

export default Card;
