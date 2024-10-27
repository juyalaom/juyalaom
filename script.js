function markAttendance() {
    const studentName = document.getElementById('studentName').value;
    if (studentName) {
        const attendanceList = document.getElementById('attendanceList');
        const listItem = document.createElement('li');
        listItem.textContent = studentName;
        attendanceList.appendChild(listItem);
        document.getElementById('studentName').value = '';
    }
}
function submitAssignment() {
    const assignment = document.getElementById('assignment').files[0];
    if (assignment) {
        const assignmentList = document.getElementById('assignmentList');
        const listItem = document.createElement('li');
        listItem.textContent = assignment.name;
        assignmentList.appendChild(listItem);
        document.getElementById('assignment').value = '';
    }
}