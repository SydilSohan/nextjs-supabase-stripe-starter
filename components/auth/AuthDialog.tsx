import { AlignJustify, Copy } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AuthTabs from "./AuthTab"
import { createClient } from "@/utils/supabase/server"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image"
export default  async function   AuthDialog() {
  const supabase = createClient()
  const {data : {user}, error} = await supabase.auth.getUser()
  return (
    <> {
      user ?
      <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src={user.user_metadata.picture} alt="user" height={50} width={50}   />
        </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> : <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="top-2/4 w-fit py-10 max-h-[90%] flex  flex-col">
        
        

<AuthTabs />
        <DialogFooter className="sm:justify-start">
 
        </DialogFooter>
      </DialogContent>
    </Dialog>
    }
    
    </>
  )
}
