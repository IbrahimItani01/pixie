import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react"

export default function MobileSideNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <User className="h-4 w-4" />
          <span className="sr-only">Open auth menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-3">
        <div className="flex flex-col gap-y-2">
         
          <DropdownMenuItem asChild>
            <Button variant="outline" className="w-full justify-start">
              Get Started
            </Button>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}