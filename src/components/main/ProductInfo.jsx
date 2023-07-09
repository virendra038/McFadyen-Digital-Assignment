import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import './ProductInfo.css'
export default function ProductInfo() {
  return (
    <>
    <div className="product_info">
      <Tabs>
        <TabList>
          <Tab>DETAILS</Tab>
          <Tab>DELIVERY</Tab>
          <Tab>FIT</Tab>
          <Tab>SHARE</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky. it has a straight fit with well defined shoulders and
              a shawl collar culminating in a button and has been flawlessly
              finished with three jet pockets with a sartorial feel. See the
              EDITOR’S NOTE Learn about the DESIGNER
            </p>
          </TabPanel>
          <TabPanel>
            <p>Lorem ipsum dolor sit amet.</p>
          </TabPanel>
          <TabPanel>
            <p>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
          </TabPanel>
          <TabPanel>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    </>
  );
}
