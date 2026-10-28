var SHEET="Admissions";
var HEAD=["Time","Name","Date of Birth","Place","Profession","Email","WhatsApp","Batch","Teacher","Status"];
function sh_(){var ss=SpreadsheetApp.getActiveSpreadsheet(),s=ss.getSheetByName(SHEET)||ss.insertSheet(SHEET);if(s.getLastRow()==0){s.appendRow(HEAD);s.setFrozenRows(1)}return s}
function safe_(v){v=String(v||"").slice(0,200);return /^[=+\-@]/.test(v)?"'"+v:v}
function out_(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON)}
function doPost(e){
  var lock=LockService.getScriptLock();lock.waitLock(10000);
  try{var d=JSON.parse(e.postData.contents);
    sh_().appendRow([new Date(),safe_(d.name),safe_(d.dob),safe_(d.place),safe_(d.prof),safe_(d.email),safe_(d.wa),safe_(d.batch),safe_(d.teacher),"Pending payment"]);
    return out_({ok:true});
  }catch(err){return out_({ok:false})}finally{lock.releaseLock()}
}
function doGet(e){
  var key=PropertiesService.getScriptProperties().getProperty("ADMIN_KEY");
  if(!key||e.parameter.action!="list"||e.parameter.key!==key)return out_({ok:false});
  var s=sh_(),rows=s.getLastRow()>1?s.getRange(2,1,s.getLastRow()-1,HEAD.length).getDisplayValues():[];
  return out_({ok:true,head:HEAD,rows:rows.reverse()});
}
