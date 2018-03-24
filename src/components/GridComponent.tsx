import * as React from "react";
import {Grid, GridService} from "../Grid"


export interface GridProps {  }

interface State {
  gridService: GridService
}

export class GridComponent extends React.Component<GridProps, {}> {

    state: State;

    constructor(props : GridProps) {
      super(props);
      this.state = {
        gridService: GridService.getSingleton()
      };
    }



    render() {
        var model = this.state.gridService.grid.grid;
        var id = 0;
        return <table>
                 <tbody>
                 {model.map((line)=>(
                    <tr key={id++}>
                        {line.map((cell)=>
                            <td key={cell.id}>
                            <button >
                                {cell.type}
                            </button>
                            </td>
                            )}
                    </tr>
                ))}
                </tbody>
             </table>;
    }
}