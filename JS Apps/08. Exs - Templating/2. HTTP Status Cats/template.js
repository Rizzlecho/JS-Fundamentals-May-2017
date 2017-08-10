$(() => {
    const SHOW_STATUS_CODE = 'Show status code';
    const HIDE_STATUS_CODE = 'Hide status code';

    const catListDiv = $('#allCats');
    const context = {
        cats: []
    };
    const templates = { };

    loadData();
    loadTemplates();

    function loadData() {
        context.cats = window.cats;
    }
    
    async function loadTemplates() {
        let [catTemplate, catListTemplate] =
            await Promise.all([
                $.get('templates/cat.hbs'),
                $.get('templates/catList.hbs')
            ]);

        Handlebars.registerPartial('cat', catTemplate);
        templates.catList = Handlebars.compile(catListTemplate);

        renderCatTemplate();
    }
    
    function renderCatTemplate() {
        catListDiv.html(templates.catList(context));

        $('.btn-primary').click(showStatusCode);
    }

    function showStatusCode() {
        let button = $(this);
        if (button.text() === SHOW_STATUS_CODE) {
            button.next().css('display', 'inline-block');
            button.text(HIDE_STATUS_CODE);
        } else {
            button.next().css('display', 'none');
            button.text(SHOW_STATUS_CODE);
        }
    }

});
