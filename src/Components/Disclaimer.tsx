const Disclaimer = () => {
  return (
    <div className="h-screen w-full text-white">
      <h2 className="text-[#02e797] mt-20 text-center font-bold text-5xl underline">Disclaimer</h2>
     <div className="w-full text-center mt-10 px-5 md:px-96">
     <p className="text-2xl">
        Our background remover app is provided as-is, without any warranties. We
        strive to deliver accurate background removal, but results may vary
        based on image quality and complexity.
      </p>
      <br />
      <p className="text-xl">
        We are not responsible for any errors, damages, or losses arising from
        the use of this app. Use it at your own risk. The app is intended for
        personal or non-commercial use unless stated otherwise.
      </p>
      <br />
      <p className="text-3xl font-bold">"By using this app, you acknowledge and accept these terms."</p>
     </div>
    </div>
  );
};

export default Disclaimer;
