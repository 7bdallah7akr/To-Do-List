export interface ITask{
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean,
    tags: string;
    completedOn: Date;
    itemId: number;
}

export class Task{
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    tags: string;
    completedOn: Date;
    itemId: number;
    constructor(){
        this.taskName = '';
        this.taskDescription = '';
        this.dueDate = new Date();
        this.createdOn = new Date();
        this.isCompleted = false;
        this.tags = '';
        this.completedOn = new Date();
        this.itemId = 0;
    }
}

export interface ApiResponsModel{
    message : string;
    result : string;
    data : any;
    
    
}