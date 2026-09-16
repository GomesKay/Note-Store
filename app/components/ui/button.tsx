import { Icon } from "@phosphor-icons/react"
import { ComponentProps } from "react"

import { cn } from "@/app/lib/utils"

interface ButtonProps extends ComponentProps<"button"> {
  icon?: [Icon, "left" | "right"] | [Icon]
}

export function Button({ children, icon, ...rest }: ButtonProps) {
  const [Icon, position = "right"] = icon ?? []

  return (
    <button
      {...rest}
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2 px-4 py-2 duration-200 outline-none hover:opacity-90",
        rest.className,
      )}
    >
      {Icon && position === "left" ? <Icon size={20} /> : null}
      {children}
      {Icon && position === "right" ? <Icon size={20} /> : null}
    </button>
  )
}
