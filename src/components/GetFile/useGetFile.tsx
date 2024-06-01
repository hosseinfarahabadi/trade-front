import { useEffect, useRef, useState } from "react";

export const useGetFile = (getValues: Function, setValue: Function, fileName: string) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 100);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [getValues(fileName)]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      // Handle the selected file as needed
      setValue(fileName, selectedFile, { shouldValidate: true });
    }
    setProgress(0);
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    setProgress(0);
  };
  return {
    progress,
    setProgress,
    isHovered,
    setIsHovered,
    handleDivClick,
    handleFileChange,
    fileInputRef,
  };
};
