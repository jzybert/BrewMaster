/**
 * Called when the number of mash steps changes. Adds/deletes form inputs.
 */
function onMashStepsChange() {
    /*
    <div class="form-group row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <label for="mashInTemp">Mash in Temp</label>
            <input type="number" class="form-control" id="mashInTemp" placeholder="0">
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <label for="mashSteps">Mash Steps</label>
            <input type="number" class="form-control" id="mashSteps" placeholder="0" onchange="onMashStepsChange()">
        </div>
    </div>
     */
    let mashStepsDiv = document.getElementById("mash-steps-section");

    let numberOfSteps = document.getElementById("mashSteps").value;
    let currentSteps = mashStepsDiv.childElementCount;
    if (currentSteps < numberOfSteps) {
        // Create form group
        let formGroup = document.createElement("div");
        formGroup.className = "form-group row";

        // let label = document.createElement("label");
        // label.innerHTML = "Mash step 1";
        // formGroup.appendChild(label);

        // Create column divs
        let columnDiv1 = document.createElement("div");
        columnDiv1.className = "col-xs-3 col-sm-3 col-md-3 col-lg-3";

        // Add inputs to form group
        let input1 = document.createElement("input");
        input1.type = "number";
        input1.placeholder = "Mash duration";
        input1.className = "form-control";
        columnDiv1.appendChild(input1);

        let columnDiv2 = document.createElement("div");
        columnDiv2.className = "col-xs-3 col-sm-3 col-md-3 col-lg-3";

        let input2 = document.createElement("input");
        input2.type = "number";
        input2.placeholder = "Mash temp";
        input2.className = "form-control";
        columnDiv2.appendChild(input2);

        // Add column divs to form group
        formGroup.appendChild(columnDiv1);
        formGroup.appendChild(columnDiv2);

        // Add form group to mash steps
        mashStepsDiv.appendChild(formGroup);
    } else if (currentSteps > numberOfSteps) {
        // Remove steps
    }
}
