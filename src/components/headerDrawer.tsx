import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import HeaderButtonGroup from "./headerButtonGroup";

const HeaderDrawer = (props: any) => {
  return (
    <Drawer
      size={"xs"}
      placement={"left"}
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <h2>MENU</h2>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody>
          <HeaderButtonGroup direction={"column"} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default HeaderDrawer;
