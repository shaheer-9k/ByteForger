import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        data-testid="button-theme-toggle"
        className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkBlue dark:focus:ring-lightBlue"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-darkBlue dark:text-cream" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-darkBlue dark:text-cream" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-fit">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          data-testid="button-theme-light"
          className={`cursor-pointer flex items-center gap-2 ${
            theme === "light" ? "bg-gray-100 dark:bg-gray-800" : ""
          }`}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          data-testid="button-theme-dark"
          className={`cursor-pointer flex items-center gap-2 ${
            theme === "dark" ? "bg-gray-100 dark:bg-gray-800" : ""
          }`}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          data-testid="button-theme-system"
          className={`cursor-pointer flex items-center gap-2 ${
            theme === "system" ? "bg-gray-100 dark:bg-gray-800" : ""
          }`}
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
