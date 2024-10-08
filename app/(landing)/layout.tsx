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
              {children}
            </section>
            <Footer/>
        </div>
    );
  }