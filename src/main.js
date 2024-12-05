const listHeadings = document.querySelectorAll('footer section div h4');

listHeadings.forEach((heading) => {
  const list = heading.nextElementSibling;

  heading.addEventListener('click', () => {
    list.classList.toggle('show');
  });
});