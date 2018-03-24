import * as React from "react";
import * as ReactDOM from "react-dom";

import { Grid } from "./Grid";
import { GridComponent } from "./components/GridComponent";


var model = new Grid(10);
ReactDOM.render(
    <GridComponent  />,
    document.getElementById("example")
);