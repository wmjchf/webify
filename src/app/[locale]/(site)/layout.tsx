import { Header } from "./Header";

const Layout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="h-full bg-[url(/image/hero-bg.webp)] bg-cover">
        {children}
      </div>
    </div>
  );
};

export default Layout;
