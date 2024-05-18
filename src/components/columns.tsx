"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";
import moment from "moment";

export type Movie = {
  id: string;
  name: string;
  releaseDate: Date;
  imdbId: string;
};

export const columns: ColumnDef<Movie>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "releaseDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Release Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formattedDate = moment(row.getValue("releaseDate")).format(
        "MMM DD, YYYY"
      );

      return <div>{formattedDate}</div>;
    },
  },
  {
    accessorKey: "imdbId",
    header: "Imdb ID",
  },
];
