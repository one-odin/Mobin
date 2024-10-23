import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { processExcelFile } from "../../../../utils/excelUtils";
import DownloadSampleFile from "./../DownloadSampleFile/DownloadSampleFile";
import { SlCloudUpload } from "react-icons/sl";

const Step1 = ({ setStep, setData }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      processExcelFile(file, setData, setStep);
    },
    [setData, setStep]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: ".xlsx" });

  return (
    <>
      <DownloadSampleFile />
      <div {...getRootProps()} className="border-dashed border-2 p-20 text-center cursor-pointer rounded-xl hover:border-gray-400">
        <input {...getInputProps()} />
        <SlCloudUpload className="size-16 text-blue-700 m-auto mb-3" />
        <p className="text-sm">برای بارگزاری فایل کلیک کنید و یا فایل را اینجا بکشید و رها کنید.</p>
      </div>
    </>
  );
};

export default Step1;
