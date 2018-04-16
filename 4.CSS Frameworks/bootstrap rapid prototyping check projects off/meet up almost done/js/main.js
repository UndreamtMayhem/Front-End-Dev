// Used Object Literals.
// just to make it easier to split up the parts


var meetupApp = {};

//meetupApp.geoLocation = {};

// sort location 
// - [ ] basic implement sort
//meetupApp.cards = {}
/*
fetch('events.json') .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
*/

// USE INDEXED PROMISED 
//two databases
// search history
// current events 
// new insert = new db

//https://github.com/jakearchibald/idb

var testDocs = [{ "id": 1, "owner": "Maïlys", "type": "Health", "Host": "Germain Dey", "startDate": "4/15/2017", "EndDate": "2/7/2017", "location": "Massy", "Guests": [{ "fullName": "Jenelle Novotni" }, { "fullName": "Thadeus Haymes" }, { "fullName": "Blair Copyn" }], "information": "94fe31ed3b774798d67cf8553c91b8bb" },
{ "id": 2, "owner": "Ruò", "type": "Industrial", "Host": "Leigh Mangenet", "startDate": "6/13/2017", "EndDate": "7/10/2017", "location": "Ketanggi", "Guests": [{ "fullName": "Annecorinne Muscott" }, { "fullName": "Katheryn Jzhakov" }, { "fullName": "Ree Narup" }, { "fullName": "Stafford Wind" }], "information": "3130e300c2ac5beadd6d4c93b543262b" },
{ "id": 3, "owner": "Médiamass", "type": "Sports", "Host": "Harrietta Gobeaux", "startDate": "11/26/2017", "EndDate": "1/11/2017", "location": "Yagoua", "Guests": [{ "fullName": "Natasha Higgonet" }], "information": "13f52d6730eeae041c2868ae7029b1c5" },
{ "id": 4, "owner": "Anaé", "type": "Electronics", "Host": "Mindy Pougher", "startDate": "7/1/2017", "EndDate": "2/23/2017", "location": "Vale", "Guests": [{ "fullName": "Lethia Sausman" }, { "fullName": "Patricio Ord" }, { "fullName": "Ferrel Henkens" }, { "fullName": "Jayson Felder" }], "information": "37c4a381b04d00588f0cb007ebcf732f" },
{ "id": 5, "owner": "Mélissandre", "type": "Automotive", "Host": "Tabbitha Thorn", "startDate": "11/7/2017", "EndDate": "10/4/2017", "location": "Chekmagush", "Guests": [{ "fullName": "Cyrille Kiera" }], "information": "77cb7fa0c1bb543608282eb5d7448cf0" },
{ "id": 6, "owner": "Kévina", "type": "Games", "Host": "Inez McLarty", "startDate": "3/22/2017", "EndDate": "10/30/2017", "location": "Thanh Xuân", "Guests": [{ "fullName": "Land Boyde" }, { "fullName": "Debbie Christophersen" }, { "fullName": "Evelyn Orfeur" }, { "fullName": "Venita Smitheman" }], "information": "a8b32037ce1a92a4bb01ff36c01a187a" },
{ "id": 7, "owner": "Mårten", "type": "Jewelery", "Host": "Sansone Ingree", "startDate": "10/10/2017", "EndDate": "3/12/2017", "location": "Wudian", "Guests": [{ "fullName": "Scot Yosselevitch" }, { "fullName": "Norrie Laffoley-Lane" }, { "fullName": "Hall Runnacles" }], "information": "a45e696024455a048484b8cff267eb7e" },
{ "id": 8, "owner": "Méryl", "type": "Beauty", "Host": "Lewiss Aughtie", "startDate": "7/31/2017", "EndDate": "12/25/2017", "location": "Jetis", "Guests": [{ "fullName": "Julita Sirette" }], "information": "5e558d38ac931e03a108b307402d6627" },
{ "id": 9, "owner": "André", "type": "Toys", "Host": "Wini Dupey", "startDate": "11/10/2017", "EndDate": "9/30/2017", "location": "Storozhynets’", "Guests": [{ "fullName": "Imogene Dunsire" }, { "fullName": "Obadiah Bayles" }], "information": "1485801bae3c928017fb062b7d200cae" },
{ "id": 10, "owner": "Annotée", "type": "Sports", "Host": "Jannelle Meek", "startDate": "6/15/2017", "EndDate": "2/3/2017", "location": "Gotse Delchev", "Guests": [{ "fullName": "Valentia Gaylord" }, { "fullName": "Sileas Habbershon" }, { "fullName": "Oona Luckcock" }, { "fullName": "Noah Casbourne" }], "information": "cb30567e56646785e3cda89be3e34cdf" },
{ "id": 11, "owner": "Méghane", "type": "Music", "Host": "Judy Mussilli", "startDate": "11/29/2017", "EndDate": "7/7/2017", "location": "Uripa", "Guests": [{ "fullName": "Charlot Tallyn" }, { "fullName": "Kessia Harrower" }, { "fullName": "Eldredge Headon" }], "information": "7ded1ebbb672069078beba0955853fa3" },
{ "id": 12, "owner": "Maëlys", "type": "Computers", "Host": "Lacee De Giorgis", "startDate": "1/16/2017", "EndDate": "3/1/2017", "location": "La Cumbre", "Guests": [{ "fullName": "Kincaid Baldacchi" }, { "fullName": "Corbie Caen" }, { "fullName": "Edie Grimble" }], "information": "df54f48e767720b319064f5bd4ec1822" },
{ "id": 13, "owner": "Pò", "type": "Shoes", "Host": "Frasier Strutton", "startDate": "1/22/2017", "EndDate": "12/18/2017", "location": "Sa Kaeo", "Guests": [{ "fullName": "Danette Fraczek" }], "information": "f66cbf9e8115090a855a1ad7d3b0ec18" },
{ "id": 14, "owner": "Mahélie", "type": "Sports", "Host": "Sabina Cannicott", "startDate": "4/30/2017", "EndDate": "12/13/2017", "location": "Anfu", "Guests": [{ "fullName": "Dar Sabin" }, { "fullName": "Lois Nunson" }, { "fullName": "Marshal Tilsley" }, { "fullName": "Mada Conrart" }, { "fullName": "Nikolaos Dik" }], "information": "434e5832f95bb05efc8e03bbbd4f0f4d" },
{ "id": 15, "owner": "Daphnée", "type": "Outdoors", "Host": "Elicia Adamovicz", "startDate": "3/21/2017", "EndDate": "6/28/2017", "location": "Boca de Uchire", "Guests": [{ "fullName": "Allyson Dairton" }, { "fullName": "Armando Chettoe" }, { "fullName": "Pavlov Orleton" }], "information": "e26ef9fe6c2612148717a613e1867fca" },
{ "id": 16, "owner": "Géraldine", "type": "Garden", "Host": "Shem Lincoln", "startDate": "7/1/2017", "EndDate": "8/25/2017", "location": "Non Sung", "Guests": [{ "fullName": "Delmor De Filippi" }, { "fullName": "Fina Saker" }, { "fullName": "Isacco Benedict" }, { "fullName": "Stanleigh Ryce" }, { "fullName": "Rianon Hulcoop" }], "information": "9e8195616850a5fdd6fb5b21330c672a" },
{ "id": 17, "owner": "Médiamass", "type": "Toys", "Host": "Alejoa Glastonbury", "startDate": "6/18/2017", "EndDate": "6/29/2017", "location": "Huangshanguan", "Guests": [{ "fullName": "Inigo Myall" }, { "fullName": "Reina Raiman" }, { "fullName": "Kenneth Senn" }, { "fullName": "Roland Sparling" }], "information": "29f408ebf7b9781ae0da22a8c038e795" }]






meetupApp.DB = {
    // update on insert
    length: 0,
    eventDbName: "eventsDB",
    eventDbVerision: 0,
    eventDbConfig: { events: ['id', 'startDate', 'type'] },
    eventDbConnection: {},
    eventsCollection: {},

    searchHistorytDbName: "searchHistoryDB",
    searchHistoryDbVerision: 0,
    searchHistoryDbConfig: { searchHistory: ['id', 'startDate', 'type'] },
    searchHistoryDbConnection: {},
    searchHistoryCollection: {},
    searchHistoryCollectionLength: 0,
    connection: function (dbName, versionNumber, config) {
        var db = new zango.Db(dbName, versionNumber, config);
        console.log("connection working");
        return db;
    },
    dropDB: function (databaseName) {
        databaseName.drop(function (error) {
            if (error) { throw error; }
        });
    },
    retrieveDB: function (connection, collectionName) {
        var cols = connection.collection(collectionName);
        console.log("retriving collections running");
        return cols;
    },
    // works improve
    setNeededImageUrls: function (eventCollection) {
        // only want 30 images saved to cache
        
        var imagesNeeded = [];
        if (!localStorage) {
            //alert("yes");
            // use polyfill
        }
        else {
            // get from local storage if it exists
            if (localStorage.getItem("imageNeeded")) {
                console.log("got item");
            }
            console.log("running running");

            eventCollection.find({}).limit(30).forEach(function (doc) {
                console.log('doc:', doc);
                imagesNeeded.push(doc.startDate);
                localStorage.setItem("imageNeeded", imagesNeeded);
            });
        }
    },

    // only save 100 results
    searchHistory: function (searchHistoryCollection) {
        console.log("retrieve search history working");
        var imagesNeeded = [];

        searchHistoryCollection.find({}).limit(100).forEach(function (doc) {
            console.log('doc:', doc);
            // draw dom
        });
    },
    sortByType: function (eventCollection) {
        eventCollection.find().sort({ type: -1 }).forEach(
            function (doc) {
                console.log('doc:', doc.type);
            }
        );
    },

    connectToEventDB: function () {
        this.eventDbConnection = this.connection(this.eventDbName, this.eventDbVerision, this.eventDbConfig);
        return this.eventDbConnection;
    },
    retrieveEventDB: function () {
        var cols = this.eventDbConnection.collection("events");
        var c = this.eventDbConnection.collection("events").count();
        console.log(c);
        console.log("retriving events collections running");
        console.log(cols);
        this.eventsCollection = cols;
        return cols;
    },
    // works
    dropEventDB: function (connection) {
        return this.dropDB(connection);
    },


    // works perfect
    // render to dom
    insertEventDB: function (connection, collection, docs) {
        console.log(meetupApp.DB.length);
        console.log("dropping old db");
        this.dropDB(connection);
        console.log("insert running");
        return collection.insert(docs).then(function () {
            collection.find({}).forEach(function (doc) {
                // render to the dom
            });
        }).catch(function (error) {
            console.error(error);
        });
    },
    // fix
    retrieveAllEvents: function () {
        console.log("retrieve all  working");

        this.eventsCollection.find({}).limit(30).forEach(function (doc) {
            console.log('doc:', doc);
            // draw dom
        });

    },
    /// SEARCH HISTORY DB
    connectToSearchHistoryDB: function () {
        this.searchHistoryDbConnection = this.connection(this.searchHistorytDbName, this.searchHistoryDbVerision, this.searchHistoryDbConfig);
        return this.searchHistoryDbConnection;
    },
    retrieveSearchHistoryDB: function () {
        var cols = this.searchHistoryDbConnection.collection("searchHistory");
        console.log("retriving events collections running");
        console.log(cols);
        this.searchHistoryCollection = cols;
        return cols;
    },
    // draw changes to dom
    retrieveSearchHistory: function () {
        console.log("retrieve all  working");

                this.searchHistoryCollection.find({}).limit(100).forEach(function (doc) {
                    //console.log('doc:', doc);
                    // draw dom
                 
                });
    },
    // works
    dropSearchHistoryDB: function (connection) {
        return this.dropDB(connection);
    },
    // works perfect
    insertSearchHistoryDB: function (connection, collection, docs) {
        // repetetive insert
        if (localStorage.getItem("searchHistoryLength")) {
            x= localStorage.getItem("searchHistoryLength");
            console.log(localStorage.getItem("searchHistoryLength"));
            if(this.searchHistoryCollectionLength >= 100){
                console.log("dropping db too many entries");
                this.dropDB(connection);
            }
            else {
                console.log("insert running not over 100");
                return collection.insert(docs).then(function () {
                    collection.find({}).forEach(function (doc) {
                    });
                }).catch(function (error) {
                    console.error(error);
                });
            }
        }
        else{
            console.log("insert running no key");
            return collection.insert(docs).then(function () {
                collection.find({}).forEach(function (doc) {
                });
            }).catch(function (error) {
                console.error(error);
            });
        }
    },
};




var conc =  meetupApp.DB.connectToEventDB();
// works
var eventCollection = meetupApp.DB.retrieveEventDB();
// works
//meetupApp.DB.insertEventDB(conc, eventCollection, testDocs);
// works
meetupApp.DB.setNeededImageUrls(eventCollection);
//meetupApp.DB.insertEventDB(conc, eventCollection, testDocs);


meetupApp.DB.retrieveAllEvents();
/*
var conc = meetupApp.DB.connectToSearchHistoryDB();
var eventCollection = meetupApp.DB.retrieveSearchHistoryDB();
// retrieve what we got
meetupApp.DB.retrieveSearchHistory();
// if empty we can call a request
meetupApp.DB.insertSearchHistoryDB(conc, eventCollection, testDocs);


*/
//console.log(meetupApp.DB);
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

