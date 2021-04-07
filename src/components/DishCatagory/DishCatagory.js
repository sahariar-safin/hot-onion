import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './DishCatagory.css';
import { Link } from 'react-router-dom';

const DishCatagory = () => {

    const [value, setValue] = useState(2);
    const [label, setLabel] = useState("Dinner");

    console.log(value);
    console.log(label);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setLabel(event.target.innerText)
    };

    return (
        <div className="text-center">
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Breakfast"></Tab>
                    <Tab label="Lunch"></Tab>
                    <Tab label="Dinner"></Tab>
                </Tabs>
            </Paper>
            <div>
                <h1>{label  }</h1>
            </div>
        </div>
    );
};

export default DishCatagory;