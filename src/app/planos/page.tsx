import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import Link from "next/link";

export default function PlanosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 py-12">
          <h1 className="text-3xl font-bold text-center mb-12">Escolha seu plano</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Currículo Card */}
            <Card className="p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Currículo Online</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Crie um currículo profissional e moderno
              </p>
              <div className="text-3xl font-bold mb-6">R$ 5,00</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Templates profissionais
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Link compartilhável
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Formato PDF disponível
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full">
                Escolher Plano
              </Button>
            </Card>

            {/* Portfólio Card */}
            <Card className="relative p-8 flex flex-col items-center text-center border-primary hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                Mais Popular
              </div>
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Portfólio Profissional</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Seu site profissional personalizado
              </p>
              <div className="text-3xl font-bold mb-6">R$ 10,00</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Domínio personalizado
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Seções personalizáveis
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Galeria de projetos
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Formulário de contato
                </li>
              </ul>
              <Button size="lg" className="w-full">
                Escolher Plano
              </Button>
            </Card>
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