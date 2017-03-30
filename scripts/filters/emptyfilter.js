rlStatsAnalyserAppFilters.filter('empty', function() {
    return function(input) {
        if(input !== undefined && input !== null && input.length !== 0) {
            return input;
        } else {
            return "-";
        }
    };
});