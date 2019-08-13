function BatchStudent()
{
    batchId:number=1;
    No_Of_Students:number=26;
    traine_name:string="sampradan";
    function TraineForBatch()
    {
        console.log("Trainee name displays by getting from database");
    }
    function BatchPoints()
    {
        console.log("based on batchid retrieve the points from db and displayed");
    }
    function Display()
    {
        console.log("displaying batch based on batchid given:")
        
    }
    function CourseRunning()
    {
        return "displays which course is running for which batch based on id and trainee name from database";
    }
    console.log(TraineForBatch());
    console.log(BatchPoints());
    console.log(CourseRunning());
    console.log(Display());
}
//BatchStudent();
var obj = new BatchStudent();
console.log(obj.batchId);
console.log(obj.No_Of_Students);
console.log(obj.traine_name);