async function Page({ params: { type } }: { params: { type: string } }) {
  return <div>{type}</div>;
}

export default Page;
