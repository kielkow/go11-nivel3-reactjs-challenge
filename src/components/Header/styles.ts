import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  path?: '/' | '/import';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        padding-bottom: ${({ size }) => (size === 'large' ? '5px' : '0px')};
        border-bottom: ${({ size }) =>
          size === 'large' ? '3px solid #ff872c' : '0px'};

        & + a {
          margin-left: 32px;
          padding-bottom: ${({ size }) => (size === 'small' ? '5px' : '0px')};
          border-bottom: ${({ size }) =>
            size === 'small' ? '3px solid #ff872c' : '0px'};
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
