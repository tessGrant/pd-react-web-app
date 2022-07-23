import styled from "styled-components";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import React from "react";

interface IProps {
  filterKey: string;
  filterValue: string;
  dataKeys: any[];
  handleKeyChange: any;
  handleValueChange: any;
  onSubmitfunc: () => void;
  cleanState: boolean;
}

export const FilterCards = (props: IProps) => {
    return (
        <StyledContainer>
        <StyledSelect>
          <StyledInputLabel id="demo-simple-select-label">Filter by:</StyledInputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.filterKey}
            onChange={props.handleKeyChange}
          >
            {props.dataKeys.map((item) => <MenuItem value={item.keyName} key={item.keyName}>{item.label}</MenuItem>)}
          </Select>
        </StyledSelect>
        <StyledInput>
          <InputLabel htmlFor="standard-adornment-amount">Type here...</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={props.filterValue}
            onChange={props.handleValueChange}
          />
        </StyledInput>
        <Button onClick = {() => props.onSubmitfunc()}>{props.cleanState ? "Clean" : "Filter"}</Button>
        </StyledContainer>
    );
};

export const MemoizedFilterCards = React.memo(FilterCards);

const StyledInputLabel = styled(InputLabel)`font-size: 12px;`

const StyledSelect = styled(FormControl)`
  width: 125px;
`

const StyledInput = styled(FormControl)`
  width: 180px;
  padding-left: 5px;
  font-size: 14px;
`

const StyledContainer = styled.div`
  width: 305px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;