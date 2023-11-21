import { type SerializedStyles, css } from "@emotion/react"
import type { Property } from "csstype"
import { useMemo } from "react"

export const useScrollable = (
  height: Property.Height = "inherit",
): SerializedStyles =>
  useMemo(() => css({ height, width: "inherit", overflow: "auto" }), [height])
