module.exports = (Franz) => {
  const getMessages = function getMessages() {
    // set Franz badge
    Franz.setBadge(document.querySelectorAll('div.messageListItem.unseen').length);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};