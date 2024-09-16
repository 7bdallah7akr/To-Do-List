import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MasterService } from './Service/master.service';
import { ApiResponsModel, ITask , Task } from './model/task';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  taskObj :Task = new Task();
  taskList : ITask[] = [];
  constructor(private master:MasterService){}
  

  ngOnInit(): void {
    this.loadAllTask();
  }
  loadAllTask(){
    this.master.getAllTasks().subscribe((res:ApiResponsModel)=>{
     this.taskList =  res.data
      })
  }
  addTask(){ 
    this.master.addNewTask(this.taskObj).subscribe((res:ApiResponsModel)=>{
     if(res.result){
      alert('Task Create Success');
      this.loadAllTask();
      this.taskObj = new Task();
     } 
    },error=>{
      alert('API Call error');
    }
    )
}

onUptateTask(){
  this.master.updateTask(this.taskObj).subscribe((res:ApiResponsModel)=>{
    if(res.result){
     alert('Task Update Success');
     this.loadAllTask();
     this.taskObj = new Task();
    } 
   },error=>{
     alert('API Call error');
   }
   )
}

onDelete(id : number){
  const isConfirm = confirm('Are you sure want to delete')
  if(isConfirm){ 
  this.master.deleteTask(id).subscribe((res:ApiResponsModel)=>{
    console.log(res);
    if(res.result){
     alert('Task Delete Success');
     this.loadAllTask();
    } 
   },error=>{
     alert('API Call error');
   }
   )
  }
}

onEdit(item:Task){
  this.taskObj = item;
}  




}
