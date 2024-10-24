import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { processExcelFile } from "../../../../utils/excelUtils";
import DownloadSampleFile from "./../DownloadSampleFile/DownloadSampleFile";
import uploadIcon from "../../../../assets/img/upload-icon.svg";
import uploadCloud from "../../../../assets/img/upload-cloud.svg";

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
        <img src={uploadCloud} className="m-auto w-24 mb-3" />
        <img src={uploadIcon} className="m-auto size-16 mb-3 -mt-16" />
        <p className="text-sm">برای بارگزاری فایل کلیک کنید و یا فایل را اینجا بکشید و رها کنید.</p>
      </div>
    </>
  );
};

export default Step1;
