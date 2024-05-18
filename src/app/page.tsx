import { columns, Movie } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import movies from "@/lib/data";

async function getData(): Promise<Movie[]> {
  const data = await fetch(
    "http://www.omdbapi.com/?apikey=35434a65&i=tt0468569"
  ).then((res) => res.json());
  return movies;
}

export default async function Home() {
  const data = await getData();

  return (
    <MaxWidthWrapper>
      <DataTable columns={columns} data={data} />
    </MaxWidthWrapper>
  );
}
