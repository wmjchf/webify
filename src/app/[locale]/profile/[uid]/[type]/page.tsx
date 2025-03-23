import { Development } from "../../../../../components/Devlopment";

async function Page({ params: { type } }: { params: { type: string } }) {
  return (
    <div>
      <Development></Development>
    </div>
  );
}

export default Page;
