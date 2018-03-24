var autoIncrement = 0;

class Cell {
    public type : String;
    public id : number;
    constructor() {
        // code...
        this.type = Math.floor(Math.random()*4).toString();
        this.id=++autoIncrement;
    }
}

export class Grid {
    grid : Cell[][];
    constructor(size: number) {
        this.grid = []
        for (var i = 0; i < size ;i ++){
            var line : Cell[] = [];
            for (var j = 0; j < size; j++){
                line.push(new Cell())
            }
            this.grid.push(line);
        }
    }
}



export class GridService{
    private static instance : GridService;
    grid : Grid;
    public static getSingleton(){
        if (this.instance) return this.instance;
        this.instance = new GridService();
        return this.instance;
    }
    constructor(){
        this.grid = new Grid(10);
    }
}


class Controller {

}