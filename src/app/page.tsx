import Image from "next/image";
import logo from "../../public/findMeResidenceLogo1.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="flex flex-col min-h-screen sm:px-[90px]"
      style={{ background: "linear-gradient(to right, #15B7AA, #247290 100%)" }}
    >
      <div className="flex justify-between mr-1">
        <Image
          src={logo}
          alt="logo"
          width={500}
          height={500}
          className="max-w-[300px] md :max-w-full"
        />
        <div className="flex items-center space-x-4">
          {/* <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-6 h-6 text-white hover:text-blue-400" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6 text-white hover:text-blue-400" />
          </a> */}
          <span className="hidden lg:block text-[#dbc048]">
            Best way to reach us,
            <br /> we have great content regularly{" "}
          </span>
          <a
            href="https://instagram.com/findmeresidence?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-10 h-10 text-white hover:text-blue-400" />
          </a>
        </div>
      </div>
      <div className="px-5 text-white sm:px-16 lg:px-28">
        <h1 className="text-4xl font-black lg:text-5xl">
          We are open for business, <br />
          <span className="text-[#bdbdbd]">
            its just our web is not ready yet
          </span>
        </h1>
        <div className="mt-10 text-xl">
          <p>
            We are a marketplace for buyers and sellers in real estate. We are
            uniques and one of a kind startup in the industry. <br /> So our
            founders believe the interaction with you in first hand is a great
            first step to build absolutely phenomenal a human like tech, so no
            one will feel that have not been served.
            <br /> Until we get our platform up and running, you can reach us
            through our socials, we can still sell your real estate way faster.
          </p>
          <p className="mt-10">Thank you for trusting us!</p>
        </div>
      </div>
    </main>
  );
}
