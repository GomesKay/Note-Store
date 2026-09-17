"use client"

import {
  ArrowRightIcon,
  BagIcon,
  BriefcaseIcon,
  CpuIcon,
  GameControllerIcon,
  LaptopIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SlidersIcon,
  SparkleIcon,
  SpinnerIcon,
  StarIcon,
  TruckIcon,
} from "@phosphor-icons/react"
import Image from "next/image"

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Button } from "./components/ui/button"
import { useFetch } from "./hooks/useFetch"
import { Notebook } from "./types"

export default function Home() {
  const {
    data: notebooks,
    isLoading,
    error,
    refetch,
  } = useFetch<Notebook[]>({
    url: "/notebooks",
    /*params: {
      category: "gamer",
    },*/
  })

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
          <div className="ctn flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  icon={[LaptopIcon, "left"]}
                  className="text-background rounded-full bg-[#181d34]"
                >
                  Todos
                </Button>
                <Button
                  icon={[BriefcaseIcon, "left"]}
                  className="rounded-full bg-[#f3f4f6]"
                >
                  Básicos
                </Button>
                <Button
                  icon={[GameControllerIcon, "left"]}
                  className="rounded-full bg-[#f3f4f6]"
                >
                  Gamer
                </Button>
                <Button
                  icon={[RocketLaunchIcon, "left"]}
                  className="rounded-full bg-[#f3f4f6]"
                >
                  Pro
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <SlidersIcon size={20} />

                <p>Mais relevantes</p>
              </div>
            </div>

            <p className="text-sm text-slate-500">
              {notebooks?.length ?? 0} produtos encontrados
            </p>

            {error && (
              <div className="flex flex-col items-center justify-center gap-2">
                <p>{error}</p>

                <Button
                  type="button"
                  className="rounded-full bg-[#f3f4f6]"
                  onClick={refetch}
                >
                  Tentar novamente
                </Button>
              </div>
            )}

            {isLoading ? (
              <span className="flex items-center gap-2">
                <SpinnerIcon size={20} className="animate-spin" />
                Carregando...
              </span>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-8">
                  {notebooks?.map((item) => (
                    <div
                      key={item.id}
                      className="text-foreground flex flex-col gap-6 rounded-md bg-[#f3f4f6] p-4 shadow-xl transition-all hover:shadow-2xl"
                    >
                      <Image src={item.image} alt="" width={500} height={500} />

                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase">
                          {item.mark}
                        </p>
                        <p>{item.title}</p>
                        <span className="flex items-center gap-2 text-xs">
                          <StarIcon size={16} weight="fill" fill="#fcc800" />
                          {item.score}{" "}
                          <span className="text-slate-400">
                            ({item.numberOfReviews})
                          </span>
                        </span>
                      </div>

                      <div>
                        {item.previousPrice && (
                          <p className="text-sm text-slate-400 line-through">
                            R$ {item.previousPrice}
                          </p>
                        )}
                        <p className="text-lg font-semibold">R$ {item.price}</p>
                      </div>

                      <Button
                        type="button"
                        icon={[BagIcon, "left"]}
                        className="text-background rounded-full bg-[#181d34]"
                      >
                        Adicionar ao carrinho
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
