const faq_titles = document.querySelectorAll('.faq-title');


faq_titles.forEach(title => {
  title.addEventListener('click', () => {
    console.log("test");
    checkbox = title.getElementsByTagName('input')[0]
    switch (title.getElementsByTagName('input')[0].checked) {
        
        case true:
            input.checked = false;
            
            break;
        case false:
            input.checked = true;
            break;
    
        default:
            break;
    }
})});
