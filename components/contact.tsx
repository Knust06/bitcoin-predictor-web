import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contato</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Entre em contato para sugestões, dúvidas ou melhorias
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>Escolha a melhor forma de entrar em contato comigo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:lucasknustcontato@outlook.com" className="text-sm hover:underline">
                  lucasknustcontato@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="h-5 w-5 text-orange-500" />
                <a
                  href="https://www.linkedin.com/in/lucas-knust/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  linkedin.com/in/lucas-knust
                </a>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.linkedin.com/in/lucas-knust/" target="_blank" rel="noopener noreferrer">
                  Conectar no LinkedIn
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sobre o Projeto</CardTitle>
              <CardDescription>Informações sobre este projeto de previsão de Bitcoin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Este projeto foi desenvolvido como parte da minha especialização em Machine Learning Engineering,
                utilizando técnicas avançadas de aprendizado de máquina para prever o preço do Bitcoin.
              </p>
              <p className="text-sm text-muted-foreground">
                A API que alimenta este site está hospedada no Railway e utiliza modelos treinados com dados históricos
                do Bitcoin para fazer previsões sobre tendências futuras de preço.
              </p>
              <p className="text-sm text-muted-foreground">
                Se você encontrou algum bug, tem sugestões de melhorias ou gostaria de colaborar com o projeto, entre em
                contato através do email ou LinkedIn.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
