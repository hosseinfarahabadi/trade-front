import { useEffect, useState } from 'react';

const useScreen = () => {
   const [Width, setWidth] = useState(window.innerWidth);
   const [Height, setHeight] = useState(window.innerHeight);
   useEffect(() => {
      const handleResize = () => {
         setWidth(window.innerWidth);
         setHeight(window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [Width, Height]);
   return { Width, Height };
};
export default useScreen;
