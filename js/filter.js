document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.figures-container');
    const mixer = mixitup(container, {
      selectors: {
        target: '.mix',
      },
    });
  
    const checkboxes = document.querySelectorAll('input[data-filter]');
    const clearAllButton = document.getElementById('clearAll');
  
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', applyFilters);
    });
  
    clearAllButton.addEventListener('click', function () {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      applyFilters();
    });
  
    function applyFilters() {
      const activeFilters = [];
      
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          activeFilters.push('.' + checkbox.getAttribute('data-filter'));
        }
      });
  
      const filterValue = activeFilters.length ? activeFilters.join(', ') : 'all';
      mixer.filter(filterValue);
    }
  });
  