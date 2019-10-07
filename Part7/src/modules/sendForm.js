const sendForm = () => {
    const errorMessage = `<img src = "./images/send-status/error.png" width = "100" !important>`,
        loadMessage = `<img src = "./images/send-status/loadiiing.gif" width = "100" !important>`,
        succesMessage = '<img src = "./images/send-status/Download-Success-PNG-Image.png" width = "100" !important>';

    const bodyForm = document.querySelector('body'),
        statusMessage = document.createElement('div');
    //Добавляем класс для последующего удаления
    statusMessage.classList.add('toDel');
    statusMessage.style.cssText = `margin-top: 10px !important`;

    //Подклюаем к каждой форме
    bodyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        //
        let tChild = target.children;
        for (let i = 0; i < tChild.length; i++) {
            if (tChild[i].classList == 'personal-data') {
                let check = target.querySelector('.personal-data input');
                if (check.checked == false) {
                    const errorDiv = document.createElement('div');
                    errorDiv.classList.add('validator-error');
                    errorDiv.textContent = 'Необходимо согласиться на обработку данных';
                    tChild[i].insertAdjacentElement('afterend', errorDiv);
                    setTimeout(() => errorDiv.remove(), 2000);
                    return;
                } 
            }
        }
        //
        target.appendChild(statusMessage);
        statusMessage.innerHTML = loadMessage;

        let inputText = target.querySelectorAll('input'); 

        const formData = new FormData();

        inputText.forEach((item) => {
            if (item.type !== "hidden" && item.type !== "checkbox") {
                formData.append(item.name, item.value);
            }
        });

        
        postData(formData) 
            .then ((response) => {
                //Обработка ошибки для fetch
                if (response.status !==200) {
                    throw new Error ('status network');
                }

                statusMessage.remove();

                let thanks = document.getElementById('thanks');
                thanks.style.display = 'block';
                setTimeout(() => thanks.style.display = 'none', 2000);

                //После отправки формы удаляются значения и стили
                let delData = target.querySelectorAll('input');
                delData.forEach((item) => {
                    item.value = '';
                    item.classList.remove('success');
                });
            })
            .catch((error) => {
                statusMessage.innerHTML = errorMessage;
                setTimeout(() => statusMessage.remove(), 2000); 
                console.error(error);
            });
    });

    let applyStyle = () => {
        const style = document.createElement('style');
        style.textContent = `
        .validator-error {
            margin-top: 15px;
            font-size: 18px;
            font-family:sans-serif;
            color: red;
        }
        `;
        document.head.appendChild(style);
    };
    applyStyle();



    const postData = (formData) => {
    //Перерабатываем с fetch
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });           
    };
};

export default sendForm;