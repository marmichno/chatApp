import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const GoBackArrow = (props: SvgProps) => (
  <Svg
    width={10}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      d="M9 17 1 9l8-8"
      stroke="#5603AD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default GoBackArrow
