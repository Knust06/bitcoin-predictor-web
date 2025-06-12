"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Copy, LineChart, History } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"

export function Services() {
  const [historySymbol, setHistorySymbol] = useState("BTC-USD")
  const [historyStartDate, setHistoryStartDate] = useState("")
  const [historyEndDate, setHistoryEndDate] = useState("")
  const [prices, setPrices] = useState("")
  const [predictionPrices, setPredictionPrices] = useState("")
  const [predictionResult, setPredictionResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isPredicting, setIsPredicting] = useState(false)

  const apiUrl = "https://bitcoinpreviewer.up.railway.app"

  const fetchHistoricalPrices = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let url = `${apiUrl}/get-prices?symbol=${historySymbol}`
      if (historyStartDate) url += `&start_date=${historyStartDate}`
      if (historyEndDate) url += `&end_date=${historyEndDate}`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error("Erro ao buscar preços.")
      }

      const data = await response.json()

      if (!data.prices || !Array.isArray(data.prices)) {
        throw new Error("A API não retornou preços válidos.")
      }

      setPrices(data.prices.join(", "))
      toast({
        title: "Preços obtidos com sucesso!",
        description: `Foram encontrados ${data.prices.length} registros.`,
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "Erro ao buscar preços",
        description: "Verifique os dados e tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyPrices = () => {
    navigator.clipboard.writeText(prices)
    toast({
      title: "Copiado!",
      description: "Preços copiados para a área de transferência.",
    })
  }

  const predictPrice = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPredicting(true)

    try {
      const pricesArray = predictionPrices.split(",").map(Number)

      const response = await fetch(`${apiUrl}/predict-bitcoin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prices: pricesArray }),
      })

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`)
      }

      const data = await response.json()
      setPredictionResult(`$${Number.parseFloat(data.prediction).toFixed(2)}`)
      toast({
        title: "Previsão realizada!",
        description: `O preço previsto para o Bitcoin é $${Number.parseFloat(data.prediction).toFixed(2)}`,
      })
    } catch (error: any) {
      console.error(error)
      toast({
        title: "Erro na previsão",
        description: error.message || "Ocorreu um erro ao fazer a previsão.",
        variant: "destructive",
      })
    } finally {
      setIsPredicting(false)
    }
  }

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Serviços</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Utilize nossas ferramentas para análise e previsão de preços do Bitcoin
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                Preços Históricos
              </TabsTrigger>
              <TabsTrigger value="prediction" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Previsão de Preços
              </TabsTrigger>
            </TabsList>
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Preços Históricos</CardTitle>
                  <CardDescription>Obtenha os preços históricos do Bitcoin ou outros ativos.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={fetchHistoricalPrices} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="symbol">Símbolo do Ativo</Label>
                      <Input
                        id="symbol"
                        placeholder="Bitcoin: BTC-USD"
                        value={historySymbol}
                        onChange={(e) => setHistorySymbol(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Data Inicial (opcional)</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={historyStartDate}
                          onChange={(e) => setHistoryStartDate(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">Data Final (opcional)</Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={historyEndDate}
                          onChange={(e) => setHistoryEndDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Buscando..." : "Buscar Preços"}
                    </Button>
                  </form>
                  {prices && (
                    <div className="mt-6 space-y-2">
                      <Label htmlFor="pricesResult">Preços Obtidos</Label>
                      <div className="flex">
                        <Textarea id="pricesResult" value={prices} readOnly className="font-mono text-sm" />
                      </div>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2"
                        onClick={copyPrices}
                      >
                        <Copy className="h-4 w-4" />
                        Copiar Preços
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="prediction">
              <Card>
                <CardHeader>
                  <CardTitle>Previsão de Preços</CardTitle>
                  <CardDescription>Preveja o próximo preço do Bitcoin com base em dados históricos.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={predictPrice} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="prices">Digite os Preços (separados por vírgulas)</Label>
                      <Textarea
                        id="prices"
                        placeholder="ex: 50000,51000,52000"
                        value={predictionPrices}
                        onChange={(e) => setPredictionPrices(e.target.value)}
                        className="font-mono"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Dica: Você pode copiar os preços da seção de Preços Históricos.
                      </p>
                    </div>
                    <Button type="submit" className="w-full" disabled={isPredicting}>
                      {isPredicting ? "Prevendo..." : "Prever Preço"}
                    </Button>
                  </form>
                  {predictionResult && (
                    <div className="mt-6 p-4 border rounded-lg bg-card">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Preço Previsto</p>
                        <p className="text-4xl font-bold text-orange-500">{predictionResult}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
