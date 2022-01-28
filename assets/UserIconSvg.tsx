import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"

const UserIconSvg = (props: SvgProps) => (
  <Svg
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <Circle
      cx={22.504}
      cy={22.955}
      r={22}
      transform="rotate(-1.327 22.504 22.955)"
      fill="#fff"
    />
  </Svg>
)

export default UserIconSvg
