"use client"

import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

export function UserAuthButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-primary/10"
      onClick={() => {
        // Aqui você pode adicionar a lógica de autenticação
        console.log("Autenticação")
      }}
    >
      <User className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Autenticar</span>
    </Button>
  )
} 