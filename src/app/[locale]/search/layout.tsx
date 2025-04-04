import { Nav } from "./Nav";

async function Page({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div>
      <Nav></Nav>
      <div>{children}</div>
    </div>
  );
}

export default Page;
