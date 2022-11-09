export const ApplicationViews = () => {
  const localProjectUser = localStorage.getItem("daemon_user");
  const projectUserObject = JSON.parse(localProjectUser);

  if (projectUserObject.staff) {
    return "<h1>Staff Views</h1>";
  } else {
    return "<h1>Patron Views</h1>";
  }
};
