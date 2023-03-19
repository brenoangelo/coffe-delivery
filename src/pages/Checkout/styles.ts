import styled from "styled-components";

export const StyledCheckout = styled.main`
  display: flex;
  gap: 2rem;
  flex: 1;
`

export const BoxBase = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 0.375rem;
`;