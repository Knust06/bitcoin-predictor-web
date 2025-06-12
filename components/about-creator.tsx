import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Code, GraduationCap, Briefcase } from "lucide-react"

export function AboutCreator() {
  return (
    <section id="about-creator" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Criador</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conheça um pouco sobre minha trajetória e experiência
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Lucas Knust</h3>
                  <p className="text-muted-foreground">Analista de Sistemas C# | Machine Learning Engineer</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/lucas-knust/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-orange-500" />
                    <span>Ciência da Computação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-orange-500" />
                    <span>Pós-graduação em Machine Learning Engineering (em andamento)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-orange-500" />
                    <span>Analista de Sistemas C#</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="h-4 w-4 text-orange-500" />
                    <span>Desenvolvimento para o mercado financeiro</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-muted-foreground">
              Meu nome é Lucas Knust, sou entusiasta de tecnologia e formado em Ciência da Computação. Atualmente, estou
              concluindo uma pós-graduação em Machine Learning Engineering, com foco em explorar o potencial da
              inteligência artificial para resolver problemas do mundo real.
            </p>
            <p className="text-muted-foreground">
              Atuo como Analista de Sistemas C#, desenvolvendo soluções para o mercado financeiro, onde ganho
              experiência prática com tecnologias avançadas e requisitos críticos de negócios.
            </p>
            <p className="text-muted-foreground">
              Este projeto é fruto da minha paixão por tecnologia e aprendizado constante. A API que alimenta este site
              foi desenvolvida como parte da minha especialização em Machine Learning e tem como objetivo prever o valor
              do Bitcoin para o dia seguinte, utilizando técnicas modernas de aprendizado de máquina.
            </p>
            <p className="text-muted-foreground">
              Além do trabalho e dos estudos, sou entusiasta de jogos, mercado financeiro e, principalmente, de
              tecnologia, acreditando sempre no impacto positivo que ela pode trazer para a sociedade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
