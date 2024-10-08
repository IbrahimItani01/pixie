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
            {children}
            <Footer/>
        </div>
    );
  }