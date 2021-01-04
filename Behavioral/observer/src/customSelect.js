export default function (select) {
    const optionList = select.getElementsByClassName('options')[0];
    const options = select.querySelectorAll('.options li');
    if (!options.length) return;
    init();


    function init() {
        const selectedField = createSelectedField();
        appendSelectedField(selectedField);
        selectedField.addEventListener('click', toggleOptions);
        optionList.addEventListener('click', handleChange.bind(this, selectedField));
    }

    function createSelectedField(option = options[0]) {
        const p = document.createElement('p');
        p.textContent = option.textContent;
        p.classList.add('selected-options');
        p.append(getArrow());
        return p;
    }

    function getArrow() {
        const arrow = document.createElement('i');
        arrow.classList.add('arrow-down');
        return arrow;
    }

    function appendSelectedField(selectedField) {
        select.prepend(selectedField);
    }

    function toggleOptions() {
        optionList.classList.toggle('active');
        if (optionList.classList.contains('active')) {
            document.addEventListener('click', subscribeDocument)
        } else {
            document.removeEventListener('click', subscribeDocument)
        }
    }

    function subscribeDocument(e) {
        if (e.target.closest('.custom-select')) return;
        toggleOptions();
    }

    function handleChange(selectedField, e) {
        const parentOption = e.target.closest('.options li');
        if (!parentOption || parentOption.classList.contains('disabled')) return;
        selectedField.textContent = parentOption.textContent;
        selectedField.setAttribute('value', parentOption.getAttribute('value'));
        selectedField.append(getArrow());
        toggleOptions();
    }

}