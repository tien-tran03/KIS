import { useNode, Element } from "@craftjs/core";

interface DeviceMockupProps {
  width?: string;
  height?: string;
  name?: string;
  gap?: string; 
  padding?: string; 
}
import { UserComponent } from "@craftjs/core";
import { ContainerLayout } from "../element_layout";
export const DeviceMockup: React.FC<DeviceMockupProps> & UserComponent = ({
  width = "940px",
  height = "700px",
  name = "💻 Desktop",
  gap = "0px",
  padding = "0px",
}) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect as unknown as React.Ref<HTMLDivElement>} className="bg-white p-4 rounded-lg shadow-lg" style={{ gap }}>
      <h3 className="text-center text-gray-700 font-semibold">{name}</h3>
      <div
        className="border-solid border-4 border-gray-300 mx-auto rounded-lg bg-gray-50 shadow-inner"
        style={{
          width: width,
          height: height,
          padding: padding,
        }}
      >
        <Element
          id="device-screen"
          canvas
          is={ContainerLayout}
        >
        </Element>
      </div>
    </div>
  );
};

DeviceMockup.craft = {
  displayName: "DeviceMockup",
  props: {
    width: "840px",
    height: "500px",
    name: "💻 Desktop",
    gap: "0px",
    padding: "0px",
  },
  rules: {
    canDrop: () => true,
  },
};