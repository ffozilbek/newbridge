let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbzNoHbL7mwg0vc8zVg8E9CWltKZ50TVvwMCCsotqjyJfdy3PY10flCo25awc_32L8Q_/exec', {
                method: "POST",
                body: data
            })
            .then(res => res.text())
        const elsInput = document.querySelectorAll(".form__input");
        elsInput.forEach(elInput => {
            elInput.value = "";
        })

        // MODAL
        const elModal = document.querySelector(".modal");
        elModal.classList.add("modal__open");
        setTimeout(() => {
            elModal.classList.remove("modal__open");
        }, 5000);

    })
