var insertIncident = new GlideRecord('incident');

var elementName = 'short_description'; 
var gr2 = new GlideRecord('incident');
var test = "test"
gr2.addQuery('number', "INC0010015");
gr2.query(); 
while (gr2.next()) { 
    gr2.setValue(elementName, "Using GlideRecord is fun");
    gr2.update();
   } 


var rec = new GlideRecord('incident');
rec.addQuery('number', "INC0010008");
rec.query();
while (rec.next()) { 
 rec.deleteRecord();
}

var currentUser = gs.getUser();
var caller = currentUser.getID();

insertIncident.initialize(); 
insertIncident.short_description = 'Test 123456789aaaabbbbbcccdddXX';
insertIncident.caller_id = caller;  
insertIncident.insert();

var exercise1 = new GlideRecord('incident');
var encodedQuery = "sys_created_onBETWEENjavascript:gs.dateGenerate('2017-01-01','12:00:00')@javascript:gs.dateGenerate('2018-01-01','12:00:00')";

exercise1.addEncodedQuery(encodedQuery);
exercise1.query();

while(exercise1.next()){
    var vip = exercise1.caller_id.vip;
    gs.addInfoMessage(exercise1.number);
    
    if(vip == true){
        gs.addInfoMessage("Som Vip");
    }


    if(exercise1.number == "INC0000015" ){
        gs.addInfoMessage("Huraaa");
        gs.addInfoMessage("The Short description of Incident " + exercise1.number + " " + exercise1.short_description);
    }
       

};


