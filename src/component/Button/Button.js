import { Tabs, ConfigProvider , Button } from "antd";
import { TinyColor } from '@ctrl/tinycolor';

const colors1 = ['#6253E1', '#04BEFE'];
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());


export const ButtonCustom = ({label , onChange , value , active }) => {
    return (
        <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
              colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
              colorPrimary: active == value ?  `linear-gradient(90deg,  ${colors2.join(', ')})` : `linear-gradient(90deg, ${getActiveColors(colors1).join(', ')})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button onClick={()=>onChange(value)} type="primary" size="large">
          {label}
        </Button>
      </ConfigProvider>
    )
}