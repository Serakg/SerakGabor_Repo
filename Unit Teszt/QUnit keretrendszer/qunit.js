QUnit.module('add', function(){
    QUnit.test("Két szám összeadása", function(assert){
        assert.equal(add(1,2), 3); //true
        assert.equal(add(2,4), 6); //true
        assert.equal(add(1,4), 8); //false
    })
})