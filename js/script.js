let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector(".form__button").value = "Submiting..";
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbzNoHbL7mwg0vc8zVg8E9CWltKZ50TVvwMCCsotqjyJfdy3PY10flCo25awc_32L8Q_/exec', {
                method: "POST",
                body: data
            })
            .then(res => res.text())
            .then(data => {
                document.querySelector("#sub").value = "Submit"

            });
        const elsInput = document.querySelectorAll(".form__input");
        elsInput.forEach(elInput => {
            elInput.value = "";
        })
        alert("E'tiboringiz uchun rahmat! Tez orada siz bilan bog'lanamiz.");

    })
