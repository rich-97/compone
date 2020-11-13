import styled from 'styled-components';

interface Props {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  all?: string;
}

const Padding = styled.div<Props>`
  ${(props) => {
    const { top, right, left, bottom, all } = props;
    if (all) {
      return `padding: ${all}`;
    }
    return `
      padding-left: ${left};
      padding-top: ${top};
      padding-right: ${right};
      padding-bottom: ${bottom};
    `;
  }}
`;

export default Padding;
