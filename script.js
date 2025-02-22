let title = document.getElementsByTagName('h2')
        for (let index = 0; index < title.length; index++){
            title[index].innerText = "Seen " + (index + 1);
        }