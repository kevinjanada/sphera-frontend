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
          title: 'Book Venue',
          icon: '',
          routeName: 'book'
        },
        {
          title: 'Search Games',
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
          routeName: 'dashboard-owner',
        },
        {
          title: 'Profile',
          icon: '',
          routeName: 'profile'
        },
        {
          title: 'Venues',
          icon: '',
          routeName: 'venues'
        },
      ]
      break;
  }
  const menu = [
    ...roleMenu
  ]
  return menu
}


export default createMenu;
