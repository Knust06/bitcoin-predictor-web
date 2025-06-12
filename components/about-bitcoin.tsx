import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Lock, Globe } from "lucide-react"

export function AboutBitcoin() {
  return (
    <section id="about-bitcoin" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que é Bitcoin?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Entenda a moeda digital que está revolucionando o sistema financeiro global
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center space-y-4">
            <img src="/bitcoin20.png" alt="Bitcoin Logo" className="w-40 h-40 object-contain" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">O que é Bitcoin?</h3>
              <p className="text-muted-foreground">
                Bitcoin é uma moeda digital descentralizada, criada em 2009 por um indivíduo ou grupo sob o pseudônimo
                de Satoshi Nakamoto. Ele permite transações ponto-a-ponto sem a necessidade de intermediários, como
                bancos ou governos.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <TrendingUp className="h-12 w-12 text-orange-500" />
                <h3 className="text-xl font-bold">Liberdade Financeira</h3>
                <p className="text-muted-foreground">
                  O Bitcoin promove a liberdade financeira, reduzindo taxas de transação e oferecendo uma alternativa
                  aos sistemas bancários tradicionais.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Lock className="h-12 w-12 text-orange-500" />
                <h3 className="text-xl font-bold">Segurança</h3>
                <p className="text-muted-foreground">
                  A tecnologia blockchain garante que as transações sejam seguras, transparentes e imutáveis, protegendo
                  contra fraudes.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Globe className="h-12 w-12 text-orange-500" />
                <h3 className="text-xl font-bold">Global</h3>
                <p className="text-muted-foreground">
                  O Bitcoin é uma moeda global que pode ser enviada e recebida em qualquer lugar do mundo, sem
                  fronteiras ou restrições.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
