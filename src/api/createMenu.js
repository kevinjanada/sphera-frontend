function createMenu (role) {
  let roleMenu = [];
  switch (role) {
    case 'user':
      roleMenu = [
        {
          title: 'Dashboard',
          icon: '',
          routeName: 'dashboard',
        },
        {
          title: 'Profile',
          icon: '',
          routeName: 'profile'
        },
        {
          title: 'Book',
          icon: '',
          routeName: 'book'
        },
        {
          title: 'Search',
          icon: '',
          routeName: 'search'
        }
      ]
      break;
    case 'owner':
      roleMenu = [
        {
          title: 'Dashboard',
          icon: '',
          routeName: 'dashboard',
        },
        {
          title: 'Profile',
          icon: '',
          routeName: 'profile'
        },
        {
          title: 'Book',
          icon: '',
          routeName: 'book'
        },
        {
          title: 'Search',
          icon: '',
          routeName: 'search'
        }
      ]
      break;
  }
  const menu = [
    ...roleMenu
  ]
  return menu
}


export default createMenu;
