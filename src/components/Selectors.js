import React from "react";
import Grid from '@mui/material/Grid'; // Grid version 1
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Selector = props => {
    return (
        <Grid item xs = {props.data.size}>
            <FormControl variant = 'outlined' style = {{width: '100%'}}>
                <InputLabel>{props.data.label}</InputLabel>
                <Select
                    value = {props.data.selectedValue}
                    onChange = {props.handleSelector}
                    inputProps = {{ name: props.data.populateType }}
                    >
                        <MenuItem value =''>
                            <em>None</em>
                        </MenuItem>
                        {
                            props.data.populateType === 'mainSelector' ? (
                                props.data.populateWith.map((ele, index) => <MenuItem value = {props.data.measurements[index]} key = {index} > {ele}</MenuItem>)
                            ) : (
                                props.data.populateWith.map(ele => <MenuItem value = {ele.abbr} key = {ele.abbr} > {ele.plural}</MenuItem>)
                            )
                        }
                    </Select>
            </FormControl>
        </Grid>
    )
}

export default Selector;