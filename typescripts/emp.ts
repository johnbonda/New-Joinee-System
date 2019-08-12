class student
{
    var studentid:number=1234;
    var name:string="kavya";
    var salary:number=50000;
    var skills:any[]=["c","java","c++","javascript"];
    var idproof:string="jshejjfeffr";

    function enroll(coursename:string)
    {
       return "enrolling courses";
    }
    function trainerallocation()
    {
        console.log("trainer namewho is allocated");
    }
    function submitIDproofs(idproof:string)
    {
        return "done if the id proofs are submitted";
    }

}