import styled, { css } from "styled-components";

// 다크모드에서 변경할 부분 + 자주 쓰는 css 추가

// 임시 작성
const font = {
  small: css`
    font-size: 1.2rem;
    font-weight: 400;
  `,
  medium: css`
    font-size: 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  xlarge: css`
    font-size: 3rem;
    font-weight: 700;
  `,
};

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxShadow1 = css`
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

const BoxShadow2 = css`
  box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
`;

export const theme = {
  color: {
    textColor: "#333",
    accentColor: "linear-gradient(45deg, #FEAC5E 0%,#C779D0 50%,#4BC0C8 100%);",
    accentTextColor: "rgb(253, 138, 105)",
    bg_color: "#fff",
  },
  font,
  flexCenter,
  BoxShadow1,
  BoxShadow2,
};

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  768: customMediaQuery(768),
  tablet: customMediaQuery(1024),
  mobile: customMediaQuery(480),
};
