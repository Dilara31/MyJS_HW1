
// ----- task1----------
let check = window.prompt ('Check =', 200);
let percentage = window.prompt ('Tip = ', 10);

if (!isNaN(Number(check)) && !isNaN(Number(percentage))) {
    if ((Number(check) > 0) && (Number(percentage) > 0) && (Number(percentage) < 100)) {
        let tips = (check/100)*percentage;
        let total = Number(check)+Number(tips);
        console.log('Check= ', check);
        console.log('Percent= ', percentage);
        console.log('Tips= ', tips);
        console.log('Total= ', total);
    } else {
        console.log('Не вірно');}
} else {
   console.log('Error!');
}