class MySolution { 
  countDownSum(num) {
    if(num==1)
    {this.num=0;
      return 1;}
    
    this.num=this.countDownSum(num-1)+num;
    return this.num;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;