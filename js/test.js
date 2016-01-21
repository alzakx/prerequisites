QUnit.test('splitCourses test', function (assert) {
    splitCourses(['1:', '2:1', '3:2']);
    
    var result = {
            "noPrerequisites": noPrerequisites,
            "withPrerequisites": withPrerequisites
        },
        expected = {
            "noPrerequisites": ['1'],
            "withPrerequisites": ['2', '3']
        };

    assert.ok(JSON.stringify(result) == JSON.stringify(expected), '');
});

QUnit.test('findPrerequisites test', function (assert) {
    assert.ok(findPrerequisites() == '', '');
});