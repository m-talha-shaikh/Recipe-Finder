import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #4285f4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export default function Header() {
  return (
    <div id="header">
      <h1>Yummmyy</h1>
      <h2>Find a tasty recipe</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    </div>
  );
}
