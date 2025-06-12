import { Bitcoin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Bitcoin className="h-5 w-5 text-orange-500" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lucas Knust. Todos os direitos reservados.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Desenvolvido com Next.js e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
