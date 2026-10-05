// КР №1: JavaScript используется только для открытия и закрытия <dialog>.
// Escape, блокировку фокуса и возврат фокуса обеспечивает браузер.
document.querySelectorAll('[data-open-dialog]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.openDialog);
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  });
});
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.querySelector('[data-close-dialog]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const box = dialog.getBoundingClientRect();
    const outside = event.clientX < box.left || event.clientX > box.right ||
      event.clientY < box.top || event.clientY > box.bottom;
    if (event.target === dialog && outside) dialog.close();
  });
});
