// load html elements first then perform events
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#temp').addEventListener('click', function () {
        if ('click') {
            document.querySelector('#temp').innerHTML = "This feature is coming soon! 🙃";
            document.querySelector('#temp').style.color = 'blue';
        }
    });
});

// Form loading buttons
// querySelectorAll might cause a bug when submitting the form later
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// this function would allow to press in white space to close the form
// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}