const pageBtns = [].slice.call(document.querySelectorAll('input[name="page"]'));
const pages = [].slice.call(document.querySelectorAll('.page'));

// show page depending on which button has been clicked
pageBtns.forEach((btn) => {
  btn.addEventListener('change', (e) => {
    pages.forEach((page) => {
      page.classList.toggle('hidden', page.id !== e.target.value);
    });
  });
});
