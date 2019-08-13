function Course(){
    this.courseid=[];
    this.coursetrainer=[][];
    this.courseduration=[];
    this.coursename=[];
    this.coursepop=[];
    this.addtrainee=function(studentname,coursename){
        console.log("Trainee Added");
    }
    this.display = function()
    {
        console.log("Courses List:")
    }
   /* this.display = function(coursename){
        var temp=[]
        for(var i=0; i<coursename.length();i++)
        {
            temp.push(coursename[i]);
        }
        return temp;
    }*/
}