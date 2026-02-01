document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    
    // Добавляем обработчики событий для каждого аккордеона
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        
        header.addEventListener('click', () => {
            // Закрываем все аккордеоны
            accordions.forEach(item => {
                if (item !== accordion) {
                    item.classList.remove('active');
                    const itemContent = item.querySelector('.accordion-content');
                    itemContent.style.maxHeight = null;
                }
            });
            
            // Переключаем текущий аккордеон
            accordion.classList.toggle('active');
            
            if (accordion.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    
    // Плавная анимация при загрузке страницы
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
    
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.5s ease';

    //кликабельность
    document.querySelectorAll('.portfolio-item[data-link]').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            window.open(this.dataset.link, '_blank');
        });
    });
});