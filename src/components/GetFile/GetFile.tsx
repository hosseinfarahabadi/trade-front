import EditImageIcon from "@/assets/icons/EditImageIcon";
import UploadIcon from "@/assets/icons/UploadIcon";
import CircularProgressBar from "@/feature/docs/category/list/components/CircularProgressBar";
import { useGetFile } from "./useGetFile";

interface GetFileProps {
  setValue: Function;
  getValues: Function;
  title: string;
  fileName: string;
  fileUrl: string;
}

const GetFile: React.FC<GetFileProps> = ({ setValue, getValues, title, fileName, fileUrl }) => {
  const {
    progress,
    setProgress,
    isHovered,
    setIsHovered,
    handleDivClick,
    handleFileChange,
    fileInputRef,
  } = useGetFile(getValues, setValue, fileName);

  console.log(getValues(fileUrl));
  return (
    <div>
      <label className="text-asiatech-gray-700" dir="ltr">
        {title}
      </label>

      <div className="border border-asiatech-blue-901 border-dashed rounded-14 p-4 pt-4 relative xl:h-[155px]">
        <input
          type="file"
          className="opacity-0 absolute top-0 right-0 w-full h-full cursor-pointer"
          onChange={(e) => {
            setProgress(0);
            setValue(fileName, e.target.files?.[0], { shouldValidate: true });
          }}
        />
        <div className="flex flex-col justify-center items-center">
          <p className="flex gap-2 items-center">
            <UploadIcon className="w-10 h-10 text-asiatech-blue-901" />
            <span className="font-bold text-xl text-asiatech-gray-800">بارگذاری عکس</span>
          </p>
          <p className="text-asiatech-gray-700 mb-2 mt-6 text-sm text-center">
            فایل را به اینجا بکشید و رها کنید.
          </p>
          <p className="text-asiatech-gray-700">jpeg,png</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div
          className={`${
            getValues(fileName) || getValues(fileUrl)?.length > 0 ? "block" : "hidden"
          } w-12 h-12 rounded-xl relative overflow-hidden mt-3`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {getValues(fileName) && (
            <img
              src={URL.createObjectURL(getValues(fileName)!)}
              alt=""
              className="w-full h-full object-cover "
            />
          )}
          {getValues(fileUrl) && (
            <img src={getValues(fileUrl)} alt="" className="w-full h-full object-cover" />
          )}
          {typeof getValues(fileName) === "object" && progress > 0 && (
            <div
              className={`${
                progress === 100 ? "hidden" : "absolute"
              }  top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-xl`}
            >
              <CircularProgressBar progress={progress} />
            </div>
          )}

          {progress > 99 && (
            <div className="flex items-center justify-center w-full h-full">
              {isHovered && (
                <div
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl bg-black bg-opacity-60 cursor-pointer`}
                  onClick={handleDivClick}
                >
                  <EditImageIcon className="w-8 h-8 !text-white" />
                  {/* <EditImageIcon className="w-8 h-8 !text-white" />
                   */}
                  edit
                </div>
              )}
            </div>
          )}
          <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default GetFile;
