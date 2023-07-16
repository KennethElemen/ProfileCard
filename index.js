 function submit() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const section = document.getElementById("section").value;
        const motto = document.getElementById("motto").value;

        const name = document.getElementById("fname");
        name.innerText = firstName + " " + lastName;

        const sectionText = document.getElementById("sectionText");
        sectionText.innerText =   section;

        const mottoText = document.getElementById("mottoText");
        mottoText.innerText =  motto;
    }

  

  function changebg() {
            var body = document.body;
            var currentColor = body.style.backgroundColor;
            var targetColor = "cadetblue";
            
            if (currentColor === targetColor) {
                body.style.backgroundColor = "#4d805e"; // Resets to default color
            } else {
                body.style.backgroundColor = targetColor;
            }
        }
