async function machinesData(){

    let machines=await fetch('./details.json');
    machines=await machines.json();
    // console.log(machines)
    let Machines =document.getElementById("Machines");
    
    for (const machine of machines) {

        let{MACHINE,STATUS,PERFORMANCE,RUNNING,PARTS}=machine;

        Machines.innerHTML+=`
        <div class="content">
            <div class="head">
                <P>MACHINE${MACHINE}</P> 
                <button type="submit">${STATUS}</button>
            </div>
            <div class="body">
                <div class="data1">
                    <P>PERFORMANCE</P>
                    <p id="performance">${PERFORMANCE}</p>
                </div>
                <hr>
                <div class="data2">
                    <P>RUNNING SINCE</P>
                    <p id="running since">${RUNNING}</p>
                </div>
                <hr>
                <div class="data3">
                     <P>PARTS PRODUCED</P>
                    <p id="parts produced">${PARTS}</p>
                </div>
            </div>
        </div>
        `
        
    }

}
machinesData();