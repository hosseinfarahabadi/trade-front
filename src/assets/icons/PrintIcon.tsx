import React from "react";
import { iconInterface } from "./iconCompInterface";

const PrintIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M7.41049 17.6306H6.33049C4.49449 17.6306 3 16.1459 3 14.3099V10.2954C3 8.46812 4.49449 6.97461 6.33049 6.97461H17.6792C19.5152 6.97461 21 8.46812 21 10.2954V14.3099C21 16.1459 19.5152 17.6306 17.6792 17.6306H16.6265"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.41309 14.8086V18.5789C7.41309 19.7279 8.34422 20.6591 9.4933 20.6591H14.508C15.6561 20.6591 16.5872 19.7279 16.5872 18.5789V14.8086"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.4646 14.8086H6.53711"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.6611 10.5508H15.541"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.41406 6.98849V5.42006C7.41406 4.27195 8.3452 3.33984 9.49428 3.33984H14.509C15.6571 3.33984 16.5882 4.27195 16.5882 5.42006V6.98849"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default PrintIcon;
