import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import Done from "@mui/icons-material/Done";
import styled from "styled-components";

const Box = styled.div`
  background-color: #000000;
  width: 95%;
  padding-left: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: flex-start;

  button {
    margin: 0 0 0 0.7rem;
    transform: translateY(-3px);
    font-size: 0.9rem;
    background-color: #222222;
    color: white;
    border: none;
    padding: 4px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: #333333;
    }
  }
  p {
    font-size: 1.4rem;
    color: white;
    margin: 0;
    padding: 0;
  }

  font-family: "Happiness-Sans-Title", sans-serif;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.2;
  font-family: "Happiness-Sans-Title", sans-serif;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.97rem;
  margin-right: 0.45rem;
  margin-bottom: 10px;
  border-radius: 11px;
  padding: 3px 8px;
  background-color: ${({ checked }) => (checked ? "white" : "black")};
  color: ${({ checked, disable }) =>
    disable ? "#656565" : checked ? "black" : "white"};
  border: ${({ checked, disable }) =>
    disable
      ? "0.11rem solid #555555"
      : checked
      ? "0.11rem solid black"
      : "0.09rem solid #afafaf"};
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
  pointer-events: ${({ disable }) => (disable ? "none" : "auto")};

  svg {
    font-size: 1.1rem;
    color: black;
    margin-right: 1px;
  }
`;
const TagsCheckBox = ({ title, items, handleCheckedItems, tags }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [disableTagIds, setDisableTagIds] = useState([]);
  const [error, setError] = useState(null);

  const objectKeys = Object.keys(items);
  const valueKeys = React.useMemo(() => Object.values(items), [items]); // valueKeys를 useMemo로 캐싱

  // useCallback으로 handleCheckedItems 최적화
  const memoizedHandleCheckedItems = useCallback(() => {
    handleCheckedItems(checkedItems);
  }, [checkedItems, handleCheckedItems]);

  // 의존성 배열에 정확히 필요한 값만 넣어서 무한 루프 방지
  useEffect(() => {
    memoizedHandleCheckedItems();
  }, [memoizedHandleCheckedItems]);

  useEffect(() => {
    const fetchTagId = async () => {
      try {
        if (tags !== null) {
          setError(null);
          const TagIds = tags.map((obj) => obj.tag_id);
          const filteredDisableTagIds = valueKeys.filter(
            (element) => !TagIds.includes(element)
          );
          setDisableTagIds(filteredDisableTagIds);
        }
      } catch (e) {
        setError(e);
      }
    };

    fetchTagId();
  }, [tags, valueKeys]);

  const handleItemClick = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((text) => text !== index)
        : [...prev, index]
    );
  };

  const handleReset = () => {
    setCheckedItems([]);
  };

  return (
    <Box>
      <p>
        {title}
        <button onClick={handleReset}>선택 초기화</button>
      </p>
      <br />
      <Container>
        {objectKeys.map((item) => (
          <Item
            key={items[item]}
            checked={checkedItems.includes(items[item])}
            onClick={() => handleItemClick(items[item])}
            disable={disableTagIds.includes(items[item])}
          >
            {checkedItems.includes(items[item]) && <Done />}
            {item}
          </Item>
        ))}
      </Container>
    </Box>
  );
};

export default React.memo(TagsCheckBox);