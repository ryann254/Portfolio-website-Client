import styled from "styled-components";

const Row = styled.div`
  width: 300px;
  margin: 30px auto;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #829fff;
  border-radius: 4px;
  background-color: #7795f8;
  position: relative;

  @media all and (min-width: 411px) {
    width: 350px;
  }

  @media all and (min-width: 576px) {
    width: 500px;
    max-width: 500px;
  }
`;

export default Row;
