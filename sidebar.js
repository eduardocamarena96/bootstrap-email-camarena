const toggleBtn = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".navigation-sliding-sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});



const navigationSidebar = document.getElementById('navigation-sidebar');
const initialNavigationSidebarOption = document.getElementById('inbox-navigation-sidebar-option');
const initialMessagesAmount = document.getElementById('inbox-messages-amount');

let previousNavigationSidebarOption = null;
let previousMessagesAmount = null;

navigationSidebar.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('navigation-sidebar-option')) {
      // Handle the click event on the child element

      initialNavigationSidebarOption.classList.remove('navigation-sidebar-option--highlight');
      initialMessagesAmount.classList.remove('messages-amount--highlight');

      if (previousNavigationSidebarOption) {
        previousNavigationSidebarOption.classList.remove('navigation-sidebar-option--highlight');
      }

      if (previousMessagesAmount) {
        previousMessagesAmount.classList.remove('messages-amount--highlight');
      }

      const navigationSidebarOption = event.target;
      const messagesAmount = navigationSidebarOption.querySelector('.messages-amount');

      navigationSidebarOption.classList.add('navigation-sidebar-option--highlight');
      messagesAmount.classList.add('messages-amount--highlight');

      previousNavigationSidebarOption = navigationSidebarOption;
      previousMessagesAmount = messagesAmount;
  }
});
