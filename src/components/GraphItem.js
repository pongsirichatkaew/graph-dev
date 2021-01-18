import styled from "styled-components";
import { Caption2 } from "../styles/TextStyles";
import { motion } from "framer-motion";

const GraphItem = ({
  CP_ID = "",
  DETAIL = "",
  INDICATOR = "yellow",
  IS_CENTER = false,
  id = "",
}) => {
  let colorGraph = "#fff566";
  if (INDICATOR === "RED") {
    colorGraph = "#ff7875";
  } else if (INDICATOR === "ORANGE") {
    colorGraph = "#ffc069";
  } else if (INDICATOR === "GREEN") {
    colorGraph = "#95de64";
  }

  const Graph = styled(motion.div)`
    position: relative;
    width: 50px;
    height: 100px;
    background: ${colorGraph};
  `;

  const RightLine = styled.div`
    position: absolute;
    border: 2px solid red;
    /* height: 50%; */
    right: 0;
    top: 50%;
  `;

  const GraphCenter = styled.div`
    padding: 50px 5px;
    border-radius: 50%;
    margin: 0 auto;
    /* background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%); */
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 1),
      0px 20px 40px rgba(23, 0, 102, 0.2);
    backdrop-filter: blur(30px);
    margin: 0 1rem;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(23, 0, 102, 0.5);
      /* transform: translateY(-3px) scale(1.2) rotate(10deg) skew(10deg); */
      transform: translateY(-3px);
    }
    background: ${colorGraph};
    /* border: 1px solid black; */
  `;
  return (
    <>
      {IS_CENTER ? (
        <WrapperCenter>
          <GraphCenter>
            <Item id={id}>
              <TextWrapper>
                <Title>{DETAIL}</Title>
              </TextWrapper>
            </Item>
          </GraphCenter>
        </WrapperCenter>
      ) : (
        <Wrapper>
          <GraphContainer
            whileHover={{
              y: 15,
              // scale: 1.1,
              transition: { ease: "easeOut", duration: 0.25 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <RightLine id={id} />
            <Graph
              transition={{ duration: 0.75 }}
              initial={{ transform: "translateY(100px)" }}
              animate={{ transform: "translateY(0px)" }}
            ></Graph>
          </GraphContainer>

          <Item>
            <TextWrapper>
              <Title>{DETAIL}</Title>
            </TextWrapper>
          </Item>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const WrapperCenter = styled.div`
  position: relative;
  margin: 0 130px;
`;
const GraphContainer = styled(motion.div)`
  position: relative;
  width: 50px;
  height: 100px;
  margin: 0px auto 0 auto;
  z-index: 10;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 1), 0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  /* background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%); */
  border: 0.5px solid #29304d;
  /* transition: translateY(-100px); */
  /* transform: translateY(15px); */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-style: none;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  overflow: hidden;
  z-index: 1;
`;

const Item = styled.div`
  position: relative;
  z-index: 20;
  width: 180px;
  /* height: 150px; */
  /* min-height: 100px; */
  overflow: hidden;

  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 1), 0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  margin: 0 1rem;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5);
    transform: translateY(-3px);
  }
`;

const TextWrapper = styled.div`
  z-index: 20;
  display: grid;
  gap: 4px;
`;

const Title = styled(Caption2)`
  color: black;
`;

export default GraphItem;
