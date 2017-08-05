var connection = require('./connection.js');

var orm = {
    select: function(whatToSelect, tableInput) {
        var queryString = 'SELECT ' + whatToSelect + ' FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

        console.log(queryString);

        connection.query(queryString, [valOfCol], function(err, result) {
            console.log(result);
        });
    },
    leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
        var queryString = 'SELECT ' + whatToSelect + ' FROM ' + tableOne + ' as tOne';
        queryString = queryString + ' LEFT JOIN ' + tableTwo + ' as tTwo';
        queryString = queryString + ' ON tOne.' + onTableOneCol + ' = tTwo.' +  onTableTwoCol

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;
