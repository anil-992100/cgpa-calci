function calculateGrade(grade,unit){
    if (grade==="A"){
        return 5 * unit;
    }else if (grade === "B"){
        return 4*unit;
    }else if (grade === "C"){
        return 3*unit;
    }else if (grade ==="D"){
        return 2*unit;
    }else if(grade ==="E"){
        return 1*unit;

    }else if (grade ==="F"){
        return 0*unit;
    }
}

let count=0;
document.querySelector('#add-course').addEventListener('click',addNewCourse)

function addNewCourse(){
    let newForm=document.createElement('form');
    newForm.ClassList.add('addNew',`get-${count}`);
    const courseName=`
     <form class="addNew,get-${count}">
        <input type="text" placeholder="Enter The Course Code" class="courses get-${count}" required>
        <input type="number" placeholder="Enter The Course Code" class="course-unit get-${count}" required>
        <select class="grade getget-${count}" required>
            <option value="select" class="grade">Select</option>
            <option value="A" class="grade">A</option>
            <option value="B" class="grade">B</option>
            <option value="C" class="grade">C</option>
            <option value="D" class="grade">D</option>
            <option value="E" class="grade">E</option>
     </select>
    </form>
`
            
newForm.innerHTML = courseName
document.querySelector('.course-div').appendChild(newForm);
count++
}
 
document.querySelector('#remove-course').addEventListener('click',removeForms);
function removeForms(){
    let maniForm = document.querySelector('.addNew');
    maniForm.remove();
}

const reports = [];

document.querySelector('#get-grade').addEventListener('click,gpaCalculator')

function gpaCalculator(){
    const RESULTBAR = document.getElementById('result');
    const GRADESELECT=document.querySelectorAll('select.grade')
    const UNIT = document.querySelectorAll('input.course-unit');

    const courseReports={};
    const listOfunits=[];
    const listOfGrades=[];
    let totalUnits=0;
    GRADESELECT.forEach((e)=>{
        let GRADES = e.options;
        const selectedIndex=e.selectedIndex;
        const selectGrade=GRADES[selectedIndex];
        const gradeValue=selectGrade.text.toUpperCase();
        listOfGrades.push(gradeValue);

    });

    UNIT.forEach((e)=>{
        const unitValue=parseInt(e.value);
        totalUnits+=unitValue;
        listOfunits.push(unitValue)

    })

    let totalEarnedUnits=0;

    for (let i=0;i<listOfunits.length;i++){
        totalEarnedUnits+=gpaCalculator(listOfGrades[i],listOfunits[i]);
    }

    const gpa=totalEarnedUnits/totalUnits

    if(gpa >=0){
        RESULTBAR.textContent='Your GPA is' + gpa.toFixed(2);
    }else{
        RESULTBAR.textContent='please enter a correct grade and course unit'
    }
}

//with all thse established the program has come to an end
//time for testing