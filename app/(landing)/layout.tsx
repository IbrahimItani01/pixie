import NavBar from "@/components/NavBar";

export default function LandingLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
  }