import { css } from "styled-components";

export const themes = {
  flex: (justify = null, align = null, direction = null) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `,

  container: css`
    min-width: 960px;
    width: 70%;
  `,

  shadow: css`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `,

  tableStyle: css`
    width: 100%;
    table-layout: fixed;

    thead {
      background-color: ${({ theme }) => theme.lightGrey};

      th {
        padding: 10px 15px;
        color: ${({ theme }) => theme.deepGrey};
        font-size: 14px;
      }
    }
  `,

  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  lightGrey: "rgb(245, 245, 246)",
  mainGrey: "rgb(225, 226, 225)",
  deepGrey: "rgb(97, 97, 97)",
};
