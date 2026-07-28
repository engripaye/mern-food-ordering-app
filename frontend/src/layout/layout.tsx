import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";

type Props = {
  children: React.ReactNode;
} 

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header  />
            <Hero />
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>
        </div>
    )

}

export default Layout