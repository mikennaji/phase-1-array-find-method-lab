// code your solution here
function superbowlWin (record){
     const result = record.find(element => element.result==='W');
     return result !== undefined ? result.year : result;
}
;



    


