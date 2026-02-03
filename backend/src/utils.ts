
export function random(len: number){
    let options="esdgdfsfsgw214534";
    let ans="";

    for(let i=0;i<len;i++){
        ans+=options[Math.random()*length]
    }
}