"use client";
import FetchApi from "@/utils/FetchApi";
import Notify from "@/utils/Notify";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { FileLoader, UploadAdapter } from "@ckeditor/ckeditor5-upload/src/filerepository";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { useState } from "react";
import myEditor from "../../utils/ckeditor5/ckeditor";

const HOST = "https://devdocsapi.asiatech.cloud/api/v1/admin/upload";

function uploadAdapter(loader: FileLoader): UploadAdapter {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        try {
          const file = await loader.file;
          const formData = new FormData();
          formData.append("file", file!);
          const response = await FetchApi.post(`${HOST}`, formData);

          if (response.data.response && response.data.status_code === 200) {
            resolve({
              default: response.data.response,
            });
          } else {
            Notify.error("مشکلی در آپلود عکس به وجود آمده");
            reject();
          }
        } catch (error) {
          console.log(error);
          reject();
          Notify.error("مشکلی در آپلود عکس به وجود آمده");
        }
      });
    },
    abort: () => {},
  };
}

// function uploadPlugin(editor: Editor) {
//   editor.plugins.get("FileRepository").createUploadAdapter = (
//     loader: FileLoader
//   ): UploadAdapter | undefined => {
//     return uploadAdapter(loader);
//   };
// }
function uploadPlugin(editor: {
  plugins: {
    get: (arg0: string) => {
      (): any;
      new (): any;
      createUploadAdapter: (loader: any) => { upload(): Promise<unknown> };
    };
  };
}) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return uploadAdapter(loader);
  };
}
interface IMyCk {
  setValue: Function;
  getValues: Function;
  propertyName: string;
  onChange: ((event: EventInfo<string, unknown>, editor: ClassicEditor) => void) | undefined;
}
const MyCk: React.FC<IMyCk> = ({ getValues, setValue, onChange, propertyName }) => {
  const [editor, setEditor] = useState(getValues(propertyName));
  console.log("editor:", editor);
  return (
    <div className="">
      <CKEditor
        config={{
          // @ts-ignore
          extraPlugins: [uploadPlugin],
          mediaEmbed: {
            extraProviders: [
              {
                name: "aparat",
                url: [/https:\/\/www\.aparat\.com\/video\/video\/embed\/videohash\//],
                // url: [/^aparat\.com\/v\/(\w+)/],
                html: (match) => {
                  const videoId = match.input?.split("/videohash").pop(); // Extract video ID from the URL
                  const iframeSrc = `https://www.aparat.com/video/video/embed/videohash${videoId}`;
                  return (
                    '<div style="position:relative; padding-bottom:100%; height:0">' +
                    `<iframe src="${iframeSrc}" frameborder="0" ` +
                    'style="position:absolute; width:100%; height:100%; top:0; left:0">' +
                    "</iframe>" +
                    "</div>"
                  );
                },
              },
            ],
          },
        }}
        editor={myEditor}
        // onReady={(editor) => {}}
        // onBlur={(event, editor) => {}}
        // onFocus={(event, editor) => {}}
        onChange={onChange}
        data={editor}
      />

      {/* <div dangerouslySetInnerHTML={{ __html: editor }} /> */}
    </div>
  );
};

export default MyCk;
