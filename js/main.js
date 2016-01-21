var noPrerequisites = [],
    withPrerequisites = [],
    sortedCourses = [];

function findPrerequisites(pCourses) {

    if (pCourses.length === 0) {
        return;
    }

    var course = pCourses[0].split(':')[0],
        prerequisite = pCourses[0].split(':')[1];

    if (noPrerequisites.indexOf(course) === -1 && noPrerequisites.indexOf(prerequisite) > -1) {
        sortedCourses.push(course);
    }

    findPrerequisites(pCourses.slice(1));
}

function splitCourses(pCourses) {

    if (pCourses.length === 0) {
        sortedCourses = noPrerequisites;
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

function main(pCourses) {
    var result = document.querySelector('#result');

    splitCourses(pCourses);
    findPrerequisites(pCourses);

    result.innerText = 'List: ' + pCourses.toString() + '\n\n' + 'Result: ' + sortedCourses.toString();
}