import { Icon } from "@phosphor-icons/react"
import { ComponentProps } from "react"

import { cn } from "@/app/lib/utils"

interface InputProps extends ComponentProps<"input"> {
  icon?: Icon
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <div className="relative">
      {Icon && (
        <Icon size={20} className="absolute top-1/2 left-3 -translate-y-1/2" />
      )}

      <input
        {...rest}
        className={cn(
          "px-4 py-2 outline-none",
          Icon && "pl-10",
          rest.className,
        )}
      />
    </div>
  )
}
