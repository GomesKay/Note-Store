"use client"

import {
  LaptopIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@phosphor-icons/react"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"

export function Header() {
  return (
    <header className="ctn flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="text-background cursor-pointer rounded-lg bg-[#263145] p-2 duration-200 hover:scale-110">
          <LaptopIcon size={22} weight="bold" />
        </div>

        <h2 className="font-sans text-lg">NoteStore</h2>
      </div>

      <Input
        type="search"
        icon={MagnifyingGlassIcon}
        placeholder="Buscar notebooks..."
        className="rounded-full border border-slate-300 bg-[#f3f4f6] transition-colors focus:border-slate-500"
      />

      <Button
        type="button"
        icon={[ShoppingCartIcon, "left"]}
        className="text-background rounded-full bg-[#263145]"
      >
        Carrinho
      </Button>
    </header>
  )
}
