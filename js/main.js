var noPrerequisites = [],
    withPrerequisites = [];

function main(pCourses) {
    var courses = {},
        output = '',
        result = document.querySelector('#result');
        


    result.innerText = output;
    return '';
}

function findPrerequisites() {
    return '';
}

function splitCourses(pCourses) {

    if (pCourses.length === 0) {
        return;
    }

    var course = pCourses[0].split(':')[0],
        prerequisite = pCourses[0].split(':')[1];

    if (prerequisite === '') {
        noPrerequisites.push(course);
    } else {
        withPrerequisites.push(course);
    }

    splitCourses(pCourses.slice(1));
}
