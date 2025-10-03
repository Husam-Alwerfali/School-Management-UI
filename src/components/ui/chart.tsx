"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

// Chart configuration type
export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
    theme?: {
      light?: string
      dark?: string
    }
  }
}

// Chart container component
type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ config, children, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex aspect-auto justify-center text-xs ${className}`}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

// Chart tooltip component
const ChartTooltip = RechartsPrimitive.Tooltip

// Chart tooltip content component
type ChartTooltipContentProps = {
  active?: boolean
  payload?: any[]
  label?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot" | "dashed"
  nameKey?: string
  labelKey?: string
  labelFormatter?: (label: any, payload: any[]) => React.ReactNode
  formatter?: (value: any, name: any, item: any, index: number, payload: any[]) => React.ReactNode
  className?: string
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      hideLabel = false,
      hideIndicator = false,
      indicator = "dot",
      nameKey,
      labelKey,
      label,
      labelFormatter,
      formatter,
      className = "",
      ...props
    },
    ref
  ) => {
    if (!active || !payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={`rounded-lg border bg-background p-2 shadow-sm ${className}`}
      >
        {!hideLabel && (
          <div className="font-medium mb-1">
            {labelFormatter ? labelFormatter(label, payload) : label}
          </div>
        )}
        <div className="grid gap-1">
          {payload.map((item: any, index: number) => {
            const key = nameKey || item.name || item.dataKey
            const itemConfig = item.payload
            const indicatorColor = item.color || item.fill || item.stroke

            return (
              <div
                key={`item-${index}`}
                className="flex items-center gap-1.5 text-xs"
              >
                {!hideIndicator && (
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: indicatorColor }}
                  />
                )}
                <div className="flex-1 flex justify-between gap-2">
                  <span className="text-muted-foreground">
                    {item.name || key}:
                  </span>
                  <span className="font-medium">
                    {formatter ? formatter(item.value, item.name, item, index, payload) : item.value}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
