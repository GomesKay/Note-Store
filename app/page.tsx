"use client"

import {
  ArrowRightIcon,
  BagIcon,
  CpuIcon,
  ShieldCheckIcon,
  SparkleIcon,
  StarIcon,
  TruckIcon,
} from "@phosphor-icons/react"

import { Header } from "./components/Header"
import { Button } from "./components/ui/button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-[#181d34] py-22">
          <div className="ctn text-background flex flex-col gap-8">
            <div className="flex max-w-lg flex-col gap-8">
              <span className="flex w-54 items-center gap-2 rounded-full bg-slate-700 px-2 py-1 text-sm">
                <SparkleIcon size={20} className="text-yellow-400" />
                Novidades em tecnologia
              </span>

              <h1 className="font-sans text-6xl">
                Notebooks de{" "}
                <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  ponta para todos
                </span>
              </h1>

              <p className="text-sm text-slate-300">
                Encontre o notebook perfeito para trabalho, jogos ou criação de
                conteudo. Frete gratis para todo Brasil e parcelamento em ate
                12x.
              </p>

              <Button
                type="button"
                icon={[ArrowRightIcon, "right"]}
                className="bg-background text-foreground w-54 rounded-full"
              >
                Ver notebooks
              </Button>
            </div>

            <div className="flex gap-10 text-sm text-slate-300">
              <span className="flex flex-col gap-2">
                <TruckIcon size={26} className="text-green-400" />
                Frete gratis
              </span>

              <span className="flex flex-col gap-2">
                <ShieldCheckIcon size={26} className="text-blue-400" />
                Garantia 12 meses
              </span>

              <span className="flex flex-col gap-2">
                <CpuIcon size={26} className="text-yellow-400" />
                Melhores marcas
              </span>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-22">
          <div className="ctn">
            <div className="flex flex-col gap-4">
              <p className="uppercase">Apple</p>
              <p>MacBook Pro 14</p>
              <span className="flex items-center gap-2">
                <StarIcon size={16} weight="fill" fill="#fcc800" />
                4,9 (100)
              </span>

              <p className="line-through">R$19.999,99</p>
              <p>R$ 18.999,00</p>

              <Button
                type="button"
                icon={[BagIcon, "left"]}
                className="text-background rounded-full bg-[#181d34]"
              >
                Adicionar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#181d34] py-22">
        <div className="ctn text-background flex items-center justify-center">
          <p>&copy; NoteStore. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}
