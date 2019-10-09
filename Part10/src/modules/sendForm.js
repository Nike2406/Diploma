const sendForm = () => {
    
    const thanks = document.getElementById('thanks'),
        loadMessage = `<img src = "./images/send-status/loadiiing.gif" width = "100" !important>`,
        bodyForm = document.querySelector('body'),
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
        let persDat = target.querySelector('.personal-data');
        for (let i = 0; i < tChild.length; i++) {
            if (persDat) {
                let check = target.querySelector('.personal-data input');
                if (check.checked == false) {
                    const errorDiv = document.createElement('div');
                    errorDiv.classList.add('validator-error');
                    errorDiv.textContent = 'Необходимо согласиться на обработку данных';
                    persDat.insertAdjacentElement('afterend', errorDiv);
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
            if (item.type == "text" || item.type == "tel" || (item.type !== "checkbox" && item.checked)) {
                formData.append(item.name, item.value);

                //Проверка отправляемых данных
                // console.log('item.name: ', item.name);
                // console.log('item.value: ', item.value);
            }
        });


        postData(formData)
            .then((response) => {
                //Обработка ошибки для fetch
                if (response.status !== 200) {
                    throw new Error('status network');
                }

                statusMessage.remove();

                popupStatus();

                //После отправки формы удаляются значения и стили
                let delData = target.querySelectorAll('input');
                delData.forEach((item) => {
                    item.value = '';
                    item.classList.remove('success');
                });
            })
            .catch((error) => {
                //Mrk
                statusMessage.remove();
                popupStatus();
                let fault = thanks.querySelector('.form-content');
                fault.innerHTML = `<h4>Ошибка!</h4><p>Во время отправки формы возникала ошибка.<br>
                Свяжитесь с администратором, либо позвоните нам по номеру:<br> <strong>+7 (800) 555-64-47</strong>
                </p><button class="btn close-btn">OK</button>`;
                console.error(error);
            });
    });

    const popupStatus = () => {
        thanks.style.display = 'block';
        thanks.querySelector('.form-content').innerHTML = `<h4>Спасибо!</h4><p>Ваша заявка отправлена.<br>
        Мы свяжемся с вами в ближайшее время.</p><button class="btn close-btn">OK</button>`;
        thanks.addEventListener('click', (e) => {
            let target = e.target;
            if (!target.closest('.form-content') || target.classList.contains('close-btn')) {
                thanks.style.display = 'none';
            }
        });
    };

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

// sendForm();
export default sendForm;