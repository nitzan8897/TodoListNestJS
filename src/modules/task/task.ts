import { IsNotEmpty, IsString } from "class-validator";
import ITask from "./task.module";

export default class Task implements ITask{
    @IsNotEmpty()
    finishDate: Date;

    doneStatus: boolean;
    
    @IsString()
    @IsNotEmpty()
    description: string;

}