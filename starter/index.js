var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

/*In this section I want to calculate and display total number of months included in the dataset.*/

console.log(" Financial Analysis" + "\n-----------------"
  + "\nThe total number of months included in the record for analysis: " 
  + finances.length + " months");


/* In this section I want to calculate the net total amount of Profit/Losses over the entire period.
What I want to do is search through every second number in the nested finances 
array and only pick numbers and store in a seperate array called income.*/


var income=finances.map((item => item[1]));

// console.log(income);

/* I now want to take these Profit/loss numbers and add them using for loop so that it adds all the numbers
 in the finances array. I will call this Revenue*/

 var revenue=0;
 for(var i=0; i<finances.length; i++){
    revenue=revenue+income[i];

 }


 console.log("\nThe net total amount of Profit/Losses for "
 + finances.length +" months is: $" +revenue);

 /* In this section I want to calculate the average of the changes in Profit/Losses over the entire period.
 To Do this I need to use the array for income and subtract 2nd element from 1st
 element, 4th element from the 3rd element and so on, then do avarage after. This is to
 ensure that I am subtracting between following months.*/

// Note: Below I started value of j from 1 in the for loop because otherwise the for value or 0 index 
// tries to go to index -1 which doesn'nt exist and throws NAN value*/

var NetTotal=0;
for(var j=1; j<income.length; j++){
  var incomeDifference=income[j]-income[j-1];
  //  console.log("Income difference each month $ " +parseInt(incomeDifference));
    NetTotal=NetTotal+incomeDifference//NetTotal
    var averageDifference=NetTotal/(income.length - 1);
}

averageDifference=averageDifference.toFixed(2);

console.log("\n Average change over the period: $"+ averageDifference);


