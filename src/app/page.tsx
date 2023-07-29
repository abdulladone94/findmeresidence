import Navbar from "../../components/layout/navbar";
import Landing from "../../components/index/landing";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen sm:px-[90px] bg-gradient-to-br via-teal-400 from-blue-400 ">
      <Navbar />
      <Landing />
    </main>
  );
}
