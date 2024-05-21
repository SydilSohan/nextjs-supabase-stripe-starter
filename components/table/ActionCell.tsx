import { deleteRecord } from "@/components/actions"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useTransition } from "react"
import { toast } from "sonner"

const ActionCell = ({ row } : any) => {
  const [isPending, startTransition] = useTransition()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem >View</DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/admin/routes/edit?${new URLSearchParams({
            id: row.getValue("id"),
          }).toString()}`}>
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => startTransition( async () =>{ 
        const {status, message} = await  deleteRecord( 'routes', row.getValue("id"))
        toast[status](message)
        })} >Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Then use it in your column definition
export default ActionCell;