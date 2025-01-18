'use client'
import { useState, useEffect } from "react"
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon, SunMoon } from "lucide-react"
import { Button } from "@/components/ui/button"

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return null
    }

    const triggerIcon = () => {
        switch (theme) {
            case 'system':
                return <SunMoon />
                break
            case 'light':
                return <SunIcon />
                break
            case 'dark':
                return <MoonIcon />
                break
            default:
                break;
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
                   {triggerIcon()} <span className="md:hidden">Appearance</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => {setTheme('system')}}>System</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => {setTheme('light')}}>Light</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => {setTheme('dark')}}>Dark</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ModeToggle