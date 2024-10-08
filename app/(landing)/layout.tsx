import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function LandingLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-primaryColor h-screen w-full">
            <NavBar/>
            <section
              key="hero"
              className="bg-gradient h-[85%] flex flex-col items-center justify-center w-full"
            >
              <div className=" mx-auto items-center flex flex-col bg-white w-[95%] gap-y-10 py-10 rounded-sm max-w-screen-lg">
                {children}
              </div>
            </section>
            <Footer/>
        </div>
    );
  }