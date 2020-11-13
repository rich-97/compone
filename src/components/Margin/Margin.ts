import styled from 'styled-components';

interface Props {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}

const Margin = styled.div<Props>`
  ${(props) => {
    const { top, right, left, bottom } = props;
    return `
      margin-left: ${left};
      margin-top: ${top};
      margin-right: ${right};
      margin-bottom: ${bottom};
    `;
  }}
`;

export default Margin;
