import {icons} from '../index';
import {icons as icons_1} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.Desktop',
  title: '${textKey:Widgets}',
  objectType: 'Desktop',
  logoUrl: 'img/scout-logo.png',
  outline: {
    objectType: 'jswidgets.WidgetsOutline'
  },
  menus: [
    {
      id: 'SettingsMenu',
      objectType: 'Menu',
      iconId: icons.PAINT_BRUSH,
      text: '${textKey:Settings}',
      childActions: [
        {
          id: 'ThemeMenu',
          objectType: 'Menu',
          text: '${textKey:Theme}',
          iconId: icons_1.CHECKED_BOLD, /* used as placeholder */
          cssClass: 'theme-menu',
          childActions: [
            {
              id: 'DefaultThemeMenu',
              objectType: 'Menu',
              text: 'Default'
            },
            {
              id: 'DarkThemeMenu',
              objectType: 'Menu',
              text: 'Dark'
            }
          ]
        },
        {
          id: 'DenseMenu',
          objectType: 'Menu',
          text: 'Dense'
        }
      ]
    },
    {
      id: 'AboutMenu',
      objectType: 'Menu',
      iconId: icons.QUESTION_CIRCLE,
      cssClass: 'about-menu'
    }
  ]
});
