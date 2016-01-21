QUnit.test('splitCourses test', function (assert) {
    var result = splitCourses(),
        expected = {
        noPrerequisites: [],
        withPrerequisites: []
    };

    assert.ok(JSON.stringify(result) == JSON.stringify(expected), '');
});

QUnit.test('findPrerequisites test', function (assert) {

});