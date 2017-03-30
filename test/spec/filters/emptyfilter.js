describe('Filter: empty', function() {
    var filter;

    beforeEach(function() {
        module('studentenApp.filters');
        inject(function($filter) {
            filter = $filter('empty');
        });
    });

    it('should replace an empty string', function() {
        expect(filter('')).toBe('-');
    });

    it('should return an non-empty string', function() {
        expect(filter('not-empty')).toBe('not-empty');
    });

});
