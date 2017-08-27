export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'UI elements'
    }, {
      name: 'Dev Library',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Forms',
          url: '/components/forms',
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
}
