import React from "react";
import type { PropsWithChildren } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

type IconProps = PropsWithChildren<{
  name: string;
  size: number;
  color: string;
}>;
const Icons = ({name}) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle" size={30} color="#900" />;
        break;
    case 'cross':
        return <Icon name="times" size={30} color="#900" />;
        break;
  
    default:
        return <Icon name="pencil" size={30} color="#900" />;
        break;
  }
};

export default Icons;
