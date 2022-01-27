import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"

const OnlineSvg = (props: SvgProps) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Circle cx={6} cy={6} r={6} fill="#A8FF76" />
  </Svg>
)

export default OnlineSvg
