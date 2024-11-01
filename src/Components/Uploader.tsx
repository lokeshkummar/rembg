import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

const Uploader = () => {
  const [image, setImage] = useState<string>("");
  const [processedImage, setProcessedImage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>("");

  const apiKey = import.meta.env.VITE_API_KEY

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setImage(reader.result.toString());
        setProcessedImage("");
        setError("");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveBackground = async () => {
    if (!image) {
      setError("Please upload an image first");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      const formData = new FormData();
      const base64Data = image.split(",")[1];
      const blob = await fetch(`data:image/png;base64,${base64Data}`).then(
        (res) => res.blob()
      );
      formData.append("image_file", blob);

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to remove background");

      const data = await response.blob();
      const url = URL.createObjectURL(data);
      setProcessedImage(url);
    } catch (err) {
      setError("Failed to process image. Please try again.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = async () => {
    if (!processedImage) return;

    try {
      const response = await fetch(processedImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "processed-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError("Failed to download image. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center px-4">
      <div className="w-full md:w-3/4 lg:w-1/2 p-5 border-2 md:border-dashed border-[#02e797] shadow-2xl shadow-[#02e797] rounded-xl md:mb-32 mt-24">
        <h3 className="text-white font-bold text-xl md:text-2xl text-center">
          Upload Your Image Here
        </h3>
        <div className="w-full flex flex-col justify-center items-center">
          <label className="text-[#02e797] hover:text-white h-28 w-full md:w-[80%] md:border-dashed border-2 border-[#02e797] rounded-lg flex justify-center items-center cursor-pointer mt-10 hover:border-white transition-colors">
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
            <LuUpload className="" size={34} />
          </label>
        </div>

        <div className="h-60 w-full flex flex-col md:flex-wrap justify-center items-center my-28 md:my-0 md:mt-5">
          {image && (
            <div className="relative flex gap-14 items-center">
              <img
                className="h-40 w-40 md:h-44 md:w-44 border-2 border-[#02e797] rounded-lg hover:shadow-lg hover:shadow-[#02e797] ease-linear duration-200 object-cover"
                src={image}
                alt="Original"
              />
              <span className="absolute -bottom-6 w-full text-center text-white text-sm">
                Original
              </span>
              <IoIosArrowDropright
                size={38}
                className="text-[#02e797] hidden md:block"
              />
            </div>
          )}

          {processedImage && (
            <div className="relative">
              <img
                className="h-40 w-40 mt-10 md:mt-0 md:h-44 md:w-44 border-2 border-[#02e797] rounded-lg hover:shadow-lg hover:shadow-[#02e797] ease-linear duration-200 object-cover"
                src={processedImage}
                alt="Processed"
              />
              <span className="absolute -bottom-6 w-full text-center text-white text-sm">
                Processed
              </span>
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <div className="w-full flex justify-center gap-4 mt-10">
          <button
            onClick={handleRemoveBackground}
            disabled={!image || isProcessing}
            className="px-1 md:px-4 py-2 bg-[#02e797] text-black font-bold md:text-xl rounded-lg border-2 border-white
                     hover:bg-white hover:text-[#000000] hover:shadow-lg hover:shadow-[#000000] 
                     ease-linear duration-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                     disabled:hover:bg-[#02e797] disabled:hover:text-black disabled:hover:border-solid disabled:hover:shadow-none
                     disabled:active:scale-100"
          >
            {isProcessing ? "Processing..." : "Remove Background"}
          </button>

          {processedImage && (
            <button
              onClick={handleDownload}
              className="px-4 md:py-2 bg-white text-black font-bold text-md md:text-xl rounded-lg border-2 border-black 
                       hover:bg-[#02e797] hover:text-black hover:border-white
                       ease-linear duration-100 active:scale-95 flex items-center gap-2"
            >
              <MdOutlineFileDownload size={24} />
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Uploader;
