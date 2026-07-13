import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Code, GraduationCap, Briefcase, Bot } from "lucide-react"

export function AboutCreator() {
  return (
    <section id="about-creator" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Criador</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Formação, experiência e contexto deste projeto pessoal
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Lucas Knust</h3>
                  <p className="text-muted-foreground">Analista de Sistemas | C#/.NET, APIs e IA aplicada</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/lucas-knust/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/Knust06" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-orange-500" />
                    <span>Ciência da Computação — Universidade Veiga de Almeida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-orange-500" />
                    <span>Machine Learning Engineering — FIAP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-orange-500" />
                    <span>AI Agents — FIAP, em andamento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-orange-500" />
                    <span>Aplicações corporativas, integrações e automação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="h-4 w-4 text-orange-500" />
                    <span>C#/.NET, APIs REST, Python e IA aplicada</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-muted-foreground">
              Sou Analista de Sistemas e trabalho principalmente com C#/.NET, aplicações corporativas, APIs REST,
              integrações e automação de processos.
            </p>
            <p className="text-muted-foreground">
              Sou formado em Ciência da Computação, concluí a pós-graduação em Machine Learning Engineering na FIAP e
              atualmente curso uma segunda pós-graduação voltada a AI Agents.
            </p>
            <p className="text-muted-foreground">
              Este frontend é um projeto pessoal e acadêmico criado para consumir uma API experimental de preços e
              previsão de Bitcoin, explorando a integração entre desenvolvimento web e Machine Learning.
            </p>
            <p className="text-muted-foreground">
              Os repositórios públicos deste perfil não contêm código profissional. O código utilizado no trabalho é
              mantido em Azure Repos privados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
