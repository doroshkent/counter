import styled from "styled-components";

const Value = styled.div<{ value: number, maxValue: number }>`
  width: 100%;
  height: 180px;
  font-size: 8rem;
  font-weight: 600;
  color: ${ props => props.value === props.maxValue ? "red" : "#2f333c" };
  background-color: #6ddffc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const S = {
  Value,
}
