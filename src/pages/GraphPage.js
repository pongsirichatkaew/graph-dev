import styled from "styled-components";
import mockData from "../data";
import GraphItem from "../components/GraphItem";
import Xarrow from "react-xarrows";

const GraphPage = () => {
  const itemCenter = mockData.filter((item) => item.SIDE === "C");
  const itemLeft = mockData.filter((item) => item.SIDE === "L");
  const itemRight = mockData.filter((item) => item.SIDE === "R");
  const maxItemLeft = Math.max.apply(
    Math,
    itemLeft.map((item) => {
      return item.LEVEL;
    })
  );

  const maxItemRight = Math.max.apply(
    Math,
    itemRight.map((item) => {
      return item.LEVEL;
    })
  );

  let itemLeftArr = [];
  for (let index = 1; index <= maxItemLeft; index++) {
    const currentItemLevel = itemLeft.filter((item) => {
      return item.LEVEL === index.toString();
    });
    currentItemLevel.sort((a, b) => (a.ORDER > b.ORDER ? 1 : -1));
    itemLeftArr.push(currentItemLevel);
  }

  let itemRightArr = [];
  for (let index = 1; index <= maxItemRight; index++) {
    const currentItemLevel = itemRight.filter((item) => {
      return item.LEVEL === index.toString();
    });
    currentItemLevel.sort((a, b) => (a.ORDER > b.ORDER ? 1 : -1));
    itemRightArr.push(currentItemLevel);
  }

  let renderLineLeft = [];
  let renderLineRight = [];

  for (let index = 0; index < maxItemLeft; index++) {
    renderLineLeft.push(
      <Xarrow
        start={`graphCenter`}
        end={`graphLeft${index}0`}
        curveness={0.5}
        endAnchor={["right"]}
        headSize={0}
        dashness={{ animation: Number(3) }}
        SVGcanvasProps={{
          onClick: (e) => {
            console.log("CONTAINER CLICKED", e);
          },
        }}
        path={"grid"}
      />
    );
  }

  for (let index = 0; index < maxItemRight; index++) {
    renderLineRight.push(
      <Xarrow
        start={`graphCenter`}
        end={`graphRight${index}0`}
        endAnchor={["left"]}
        curveness={0.5}
        headSize={0}
      />
    );
  }

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          {itemLeftArr &&
            itemLeftArr.map((item, i) => (
              <ItemWrapperLeft key={i}>
                {item &&
                  item.map((graphItem, graphIndex) => (
                    <>
                      <GraphItem
                        id={`graphLeft${i}${graphIndex}`}
                        key={graphItem.CP_ID}
                        CP_ID={graphItem.CP_ID}
                        DETAIL={graphItem.DETAIL}
                        INDICATOR={graphItem.INDICATOR}
                      />
                      <Xarrow
                        start={`graphLeft${i}${graphIndex}`}
                        end={`graphLeft${i}${graphIndex + 1}`}
                        curveness={false}
                        headSize={0}
                      />
                    </>
                  ))}
              </ItemWrapperLeft>
            ))}
        </ItemWrapper>
        <ItemWrapper>
          {itemCenter &&
            itemCenter.map((item) => (
              <>
                {renderLineLeft}
                <ItemWrapperCenter key={item.CP_ID}>
                  <GraphItem
                    id="graphCenter"
                    CP_ID={item.CP_ID}
                    DETAIL={item.DETAIL}
                    INDICATOR={item.INDICATOR}
                    IS_CENTER={true}
                  />
                </ItemWrapperCenter>
                {renderLineRight}
              </>
            ))}
        </ItemWrapper>
        <ItemWrapper>
          {itemRightArr &&
            itemRightArr.map((item, i) => (
              <ItemWrapperRight key={i}>
                {item &&
                  item.map((graphItem, graphIndex) => (
                    <>
                      <GraphItem
                        id={`graphRight${i}${graphIndex}`}
                        key={graphItem.CP_ID}
                        CP_ID={graphItem.CP_ID}
                        DETAIL={graphItem.DETAIL}
                        INDICATOR={graphItem.INDICATOR}
                      />
                      <Xarrow
                        start={`graphRight${i}${graphIndex}`}
                        end={`graphRight${i}${graphIndex + 1}`}
                        curveness={false}
                        headSize={0}
                      />
                    </>
                  ))}
              </ItemWrapperRight>
            ))}
        </ItemWrapper>
      </ItemContainer>
    </>
  );
};

const ItemContainer = styled.div`
  /* max-width: 1234px; */
  padding: 200px 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-items: center;
`;

const ItemWrapper = styled.div`
  display: grid;
  gap: 20px;
`;
const ItemWrapperLeft = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const ItemWrapperRight = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemWrapperCenter = styled.div``;

export default GraphPage;
