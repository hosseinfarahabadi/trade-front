import React from 'react';
import { iconInterface } from './iconCompInterface';

const DistributionIcon: React.FC<iconInterface> = ({ className }) => {
   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className={`${className} fill-current`}
         >
            <path
               d="M20,21.75c-.96,0-1.75-.79-1.75-1.75,0-.2,.03-.4,.1-.59l-2.56-2.56c-.8,.59-1.77,.9-2.79,.9-2.36,0-4.33-1.74-4.69-4h-2.73c-.28,.59-.88,1-1.58,1-.96,0-1.75-.79-1.75-1.75s.79-1.75,1.75-1.75c.7,0,1.3,.41,1.58,1h2.73c.2-1.26,.89-2.38,1.94-3.12l-1.35-3.38c-.91-.06-1.64-.82-1.64-1.75s.79-1.75,1.75-1.75,1.75,.79,1.75,1.75c0,.45-.17,.88-.47,1.19l1.31,3.27c1.42-.44,3.01-.17,4.19,.69l2.56-2.56c-.07-.19-.1-.38-.1-.59,0-.96,.79-1.75,1.75-1.75s1.75,.79,1.75,1.75-.79,1.75-1.75,1.75c-.2,0-.4-.03-.59-.1l-2.56,2.56c.59,.81,.9,1.77,.9,2.79s-.32,1.98-.9,2.79l2.56,2.56c.19-.07,.38-.1,.59-.1,.96,0,1.75,.79,1.75,1.75s-.79,1.75-1.75,1.75Zm-.18-1.93s-.07,.09-.07,.18c0,.28,.5,.28,.5,0,0-.14-.11-.25-.25-.25-.09,0-.15,.05-.18,.07Zm-10.07-6.82c0,1.79,1.46,3.25,3.25,3.25,.87,0,1.68-.34,2.3-.95h0c.61-.61,.95-1.43,.95-2.3s-.34-1.68-.95-2.3h0c-.98-.98-2.54-1.22-3.77-.6h-.01c-1.09,.57-1.76,1.67-1.76,2.9h-.01Zm-5.75-.25c-.14,0-.25,.11-.25,.25,0,.28,.5,.28,.5,0,0-.14-.11-.25-.25-.25Zm15.83-6.57s.09,.07,.17,.07c.14,0,.25-.11,.25-.25,0-.28-.5-.28-.5,0,0,.09,.05,.15,.07,.18h.01ZM9,3.75c-.14,0-.25,.11-.25,.25s.11,.25,.25,.25v.02s.06-.03,.09-.04h0c.07-.03,.16-.11,.16-.23,0-.14-.11-.25-.25-.25Z"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </>
   );
};
export default DistributionIcon;
