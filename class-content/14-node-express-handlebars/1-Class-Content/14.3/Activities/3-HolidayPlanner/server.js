var orm = require('./config/orm.js');

/* The following commands will run every time once the Node server is started.*/

//console log all the party_name's
//JUST FOR YOUR REFERENCE: select(whatToSelect, tableInput);
//orm.select('*', 'parties');

//console log all the client_name's
//JUST FOR YOUR REFERENCE: select(whatToSelect, tableInput);
//orm.select('client_name', 'clients');

//console log all the parties that have a party-type of grown-up
//JUST FOR YOUR REFERENCE: selectWhere(tableInput, colToSearch, valOfCol)
orm.selectWhere('parties', 'party_type', 'grown-up');

//console log all the clients and their parties
//JUST FOR YOUR REFERENCE: leftJoin(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol)
//orm.leftJoin('*', 'clients', 'parties', 'id', 'client_id');
