/* eslint-disable no-param-reassign */

(() => {
  /**
   * Filter list of topics
   */
  const input = document.getElementById('topic-filter');

  /** Hide mismatching accordions */
  const filterList = () => {
    const filter = input.value.toUpperCase();
    const details = document.querySelectorAll('details');

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < details.length; i++) {
      const content = details[i].textContent || details[i].innerText;

      if (content.toUpperCase().indexOf(filter) > -1) {
        details[i].style.display = '';
      } else {
        details[i].style.display = 'none';
      }
    }
  };

  /** Hide sections containing only hidden accordions */
  const findEmptySection = () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const accordions = section.querySelectorAll('details');
      let counter = 0;

      for (let i = 0; i < accordions.length; i++) {
        if (accordions[i].style.display === 'none') {
          counter += 1;
        }
      }

      if (counter === accordions.length) {
        section.style.display = 'none';
      } else {
        section.style.display = 'block';
      }
    });
  };

  // Event listeners
  input.addEventListener('input', filterList);
  input.addEventListener('input', findEmptySection);
})();
