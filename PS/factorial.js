function fact(n) {
    var p=1;
    for(i=n;i>0;i--){
        p*=i;
    }
    return p;
}
console.log(fact(6));