import styled from "styled-components";
export const HeaderContainer = styled.div`
  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }

  @media screen and (max-width: 768px) {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
`;
