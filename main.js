// Navigation Sliding Sidebar (START)

const hamburgerBtn = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".navigation-sliding-sidebar__close-btn");
const slidingSidebar = document.querySelector(".navigation-sliding-sidebar");

hamburgerBtn.addEventListener("click", function () {
  slidingSidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  slidingSidebar.classList.remove("show-sidebar");
});

// Navigation Sliding Sidebar (END)


// Navigation Sidebar: Highlight Folder (START)

const navigationSidebar = document.getElementById('navigation-sidebar');

let previousNavigationSidebarFolder = document.querySelector('.navigation-sidebar__folder--highlight');
let previousMessagesAmount = document.querySelector('.folder__messages-amount--highlight');

navigationSidebar.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('navigation-sidebar__folder')) {

      previousNavigationSidebarFolder.classList.remove('navigation-sidebar__folder--highlight');
      previousMessagesAmount.classList.remove('folder__messages-amount--highlight');
      
      const navigationSidebarFolder = event.target;
      const messagesAmount = navigationSidebarFolder.querySelector('.folder__messages-amount');

      navigationSidebarFolder.classList.add('navigation-sidebar__folder--highlight');
      messagesAmount.classList.add('folder__messages-amount--highlight');

      previousNavigationSidebarFolder = navigationSidebarFolder;
      previousMessagesAmount = messagesAmount;
  }
});

// Navigation Sidebar: Highlight Folder (END)


// Email List: Highlight selected email and update focused email column (START)

const emailList = document.getElementById('email-list');

// Assigning first email container element from email list to variable
let previousEmailContainer = document.querySelector('.email-container--highlight');

// Assigning references to elements from the focused email column to variables
const emailProfilePic = document.getElementById('sender-profile-pic');
const emailName = document.getElementById('email-name-date__name');
const emailDate = document.getElementById('email-name-date__date');
const emailSubjectTitle = document.getElementById('email-subject-title');
const emailText = document.getElementById('email-text');

// Updating email information from the focused email column using the first email from the email list
emailProfilePic.src = previousEmailContainer.querySelector('.email__profile-pic').src;
emailName.textContent = previousEmailContainer.querySelector('.name-date__name').textContent;
emailDate.textContent = previousEmailContainer.querySelector('.name-date__date').textContent;
emailSubjectTitle.textContent = previousEmailContainer.querySelector('.email-info__subject-title').textContent;
emailText.textContent = previousEmailContainer.querySelector('.email-info__message').textContent;

emailList.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('email-container')) {

    // Removing highlight class from previously selected email
    previousEmailContainer.classList.remove('email-container--highlight');
    
    // Assigning reference to newly selected email
    const emailContainer = event.target;

    // Adding highlight class to newly selected email
    emailContainer.classList.add('email-container--highlight');

    // Updating email information from the focused email column using the newly selected email
    emailProfilePic.src = emailContainer.querySelector('.email__profile-pic').src;
    emailName.textContent = emailContainer.querySelector('.name-date__name').textContent;
    emailDate.textContent = emailContainer.querySelector('.name-date__date').textContent;
    emailSubjectTitle.textContent = emailContainer.querySelector('.email-info__subject-title').textContent;
    emailText.textContent = emailContainer.querySelector('.email-info__message').textContent;

    previousEmailContainer = emailContainer;
  }

});

// Email List: Highlight selected email and update focused email column (END)


// Vertically Expanding Textarea (START)

const textarea = document.getElementById('reply-message-textarea');
            
textarea.addEventListener('input', function() {
  // Reset the height to auto to calculate the new height based on the content
  textarea.style.height = 'auto';
  // Set the height to the scrollHeight to expand the textarea
  textarea.style.height = textarea.scrollHeight + 'px';
});

// Vertically Expanding Textarea (END)