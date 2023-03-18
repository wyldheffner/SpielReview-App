import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AdjustProps {
  color?: String;
  width?: number;
  height?: number;
}

export default function Comment() {
  return (
    <View>
      <Svg width={20} height={40} viewBox="0 0 20 19" fill="none">
        <Path
          d="M10 17.25C14.97 17.25 19 13.556 19 9C19 4.444 14.97 0.75 10 0.75C5.03 0.75 1 4.444 1 9C1 11.104 1.859 13.023 3.273 14.48C3.705 14.927 4.013 15.52 3.859 16.121C3.69037 16.7782 3.37478 17.3885 2.936 17.906C3.28714 17.9691 3.64324 18.0005 4 18C5.282 18 6.47 17.598 7.445 16.913C8.255 17.133 9.113 17.25 10 17.25Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}