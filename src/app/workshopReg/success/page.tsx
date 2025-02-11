import Header from "@/components/Header";

export default function RegSuccessPage() {
  return (
    <>
      <Header />
      <div className=" text-white">
        <div className="flex flex-col items-center justify-center mt-52 text-center">
          <h1 className="text-4xl">Registration Successeful</h1>
          <div className="text-white text-center justify-center items-center p-5">Our team will contact you soon for the payment</div>
          <div className="text-white text-center justify-center items-center p-5">
            For any queries contact us on Instagram{" "}
            <a
              href="https://www.instagram.com/srmteamrobocon/ "
              className=" hover:text-red text-lg hover:underline"
            >
              {" "}
              @srmteamrobocon.{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
