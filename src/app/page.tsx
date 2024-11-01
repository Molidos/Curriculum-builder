import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="container max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Crie seu portfólio profissional <br className="hidden sm:inline" />
            em minutos
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mb-4">
            Destaque-se no mercado com um portfólio online impressionante ou um currículo profissional.
            <br/>A partir de <span className="font-semibold text-xl text-green-600">R$ 5,00</span>.
          </p>
          
          <Link href="/planos" className="w-full max-w-sm">
            <Button 
              size="lg" 
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
            >
              Começar Agora
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="w-full border-t">
          <div className="container max-w-5xl mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl">Rápido e Fácil</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monte seu site ou currículo em poucos minutos com nossa interface intuitiva
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl">Templates Modernos</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Diversos modelos profissionais para escolher
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl">Personalização Total</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ajuste cores, fontes e layout ao seu gosto
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Pricing Preview Section */}
        <div className="w-full border-t">
          <div className="container max-w-5xl mx-auto px-4 md:px-6 py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Planos que cabem no seu bolso</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Currículo online por apenas R$ 5,00 ou site portfólio completo por R$ 10,00
            </p>
            <Link href="/planos">
              <Button variant="outline" size="lg">
                Ver Planos Detalhados
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 PortfolioBuilder. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Termos
            </Button>
            <Button variant="ghost" size="sm">
              Privacidade
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
