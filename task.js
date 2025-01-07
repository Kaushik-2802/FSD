
        class Task{
            constructor(name,priority,duedate,status){
                this.name=name
                this.priority=priority
                this.duedate=duedate
                this.status=status
            }
            gettask(){
                return {name:this.name,priority:this.priority,duedate:this.duedate,status:this.status}
            }
            setComplete(){
                this.status=true
            }
        }
        class TaskManager{
            constructor(){
                this.arr=[]
            }
            addTask(obj){
                let ispresent=this.arr.find(ele=>ele.name===obj.name)
                if (!ispresent){
                this.arr.push(obj)
                }
            }
            sortTask(sortby="priority"){
                if (sortby==="priority"){
                    this.arr.sort((a,b)=>a.priority-b.priority)
                }
                if(sortby==="date"){
                    this.arr.sort((a,b)=>a.date-b.date)
                }
                return this.arr
            }
            removeTask(){
                if (this.arr.length>0){
                this.arr.pop()
                return true
                }
                return false
            }


        }

