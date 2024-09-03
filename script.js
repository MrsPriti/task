document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const dropdownIcon = button.querySelector('.dropdown-icon');
        const additionalDropdownIcon = button.querySelector('.additional-dropdown-icon');
        
        // Toggle display of the answer
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
        
        // Toggle active class
        button.classList.toggle('active');
        
        // Toggle icon rotation
        dropdownIcon.style.transform = dropdownIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        additionalDropdownIcon.style.transform = additionalDropdownIcon.style.transform === 'rotate(-180deg)' ? 'rotate(0deg)' : 'rotate(-180deg)';
    });
});
