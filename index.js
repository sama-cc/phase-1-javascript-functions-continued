// code your solution here
function saturdayFun(act = "roller-skate") {
    return `This Saturday, I want to ${act}!`;
  }

  function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
  }