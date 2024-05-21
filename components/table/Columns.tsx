import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import ActionCell from "./ActionCell"
export const columns: ColumnDef<any, any>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value : any) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value : any) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "id",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("id")}</div>
        ),
      },
    {
      accessorKey: "name",
      header: "name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    // {
    //   accessorKey: "created_at",
    //   header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         created_at
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </Button>
    //     )
    //   },
    //   cell: ({ row }) => <div className="lowercase">{row.getValue("created_at")}</div>,
    // },
    
  
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => <ActionCell row={row} />,
    },
  ]
  