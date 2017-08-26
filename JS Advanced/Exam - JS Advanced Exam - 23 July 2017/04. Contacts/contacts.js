class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    set onlineChecker{

    }

    get onlineCheck(){
        this.online = false;
        return this.online;
    }

    render(id) {
        // let online = false;
        let start = $(`<article>`);
        start.appendTo(`#${id}`);

        let title = `<div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>`;
        start.append(title);

        let info = $('<div class="info">');
        start.append(info);

        let spanOne = $(`<span>&phone; ${this.phone}</span>`);
        let spanTwo = $(`<span>&#9993; ${this.email}</span>`);
        info.append(spanOne, spanTwo);


        $('div.info').css('display', 'none');


        $('.title button').on('click', function () {
            $(this(info.toggle()));
        });

        if (this.online === true) {
            $('.title').addClass('online');
        }

        return this;
    }
}
