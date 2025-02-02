<?php

namespace App\Services;

class MenuService
{

  public static function idx(): array
  {
    return [
      [
        'type' => 'item',
        'key' => route('dashboard'),
        'label' => 'side.menu.dashboard',
        'icon' => 'DashboardOutlined',
        'permissions' => [],
        'roles' => ['super']
      ],
      [
        'type' => 'item',
        'key' => '@analytics',
        'label' => 'side.menu.analytic',
        'icon' => 'DotChartOutlined',
        'permissions' => [],
        'roles' => []
      ],
      [
        'type' => 'item',
        'key' => '@sales',
        'label' => 'side.menu.sales',
        'icon' => 'FundOutlined',
        'permissions' => [],
        'roles' => []
      ],
      [
        'type' => 'divider',
        'className' => '!my-4',
        'permissions' => [],
        'roles' => []
      ],
      [
        'type' => 'group',
        'key' => '@app',
        'label' => 'App',
        'permissions' => [],
        'roles' => [],
        'children' => [
          [
            'type' => 'item',
            'key' => '@user-management',
            'label' => 'Mail',
            'icon' => 'MailOutlined',
            'permissions' => [],
            'roles' => []
          ],
          [
            'type' => 'item',
            'key' => '@user-management',
            'label' => 'Chat',
            'icon' => 'MessageOutlined',
            'permissions' => [],
            'roles' => []
          ],
          [
            'type' => 'item',
            'key' => '@user-management',
            'label' => 'Calendar',
            'icon' => 'CalendarOutlined',
            'permissions' => [],
            'roles' => []
          ],
          [
            'type' => 'submenu',
            'key' => '@user-management',
            'label' => 'Project',
            'icon' => 'BulbOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'submenu',
                'key' => '@user-management',
                'label' => 'List',
                'icon' => 'UnorderedListOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'submenu',
                'key' => '@user-management',
                'label' => 'Kanban',
                'icon' => 'UnorderedListOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'submenu',
                'key' => '@user-management',
                'label' => 'Scrumboard',
                'icon' => 'UnorderedListOutlined',
                'permissions' => [],
                'roles' => []
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@e-commerce',
            'label' => 'E-Commerce',
            'icon' => 'ShoppingCartOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'submenu',
                'key' => '@e-commerce/product-list',
                'label' => 'Product List',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'submenu',
                'key' => '@e-commerce/product-add',
                'label' => 'Add Product',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'submenu',
                'key' => '@e-commerce/product-edit',
                'label' => 'Edit Product',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'submenu',
                'key' => '@e-commerce/order',
                'label' => 'Order',
                'permissions' => [],
                'roles' => []
              ]
            ]
          ],
        ]
      ],
      [
        'type' => 'divider',
        'className' => '!my-4',
        'permissions' => [],
        'roles' => []
      ],
      [
        'type' => 'group',
        'key' => '@components',
        'label' => 'side.menu.components',
        'permissions' => [],
        'roles' => [],
        'children' => [
          [
            'type' => 'submenu',
            'key' => route('dashboard.components.general'),
            'label' => 'side.menu.components.general',
            'icon' => 'InfoCircleOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => route('dashboard.components.button'),
                'label' => 'side.menu.components.general.button',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.components.float-button'),
                'label' => 'side.menu.components.general.float-button',
                'permissions' => [],
                'extra' => [
                  'component' => 'tag',
                  'children' => '5.0.0'
                ],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.components.icon'),
                'label' => 'side.menu.components.general.icon',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.components.typography'),
                'label' => 'side.menu.components.general.typography',
                'permissions' => [],
                'roles' => []
              ],

            ]
          ],
        ]
      ],
      [
        'type' => 'divider',
        'permissions' => [],
        'roles' => []
      ],
      [
        'type' => 'group',
        'key' => '@pages',
        'label' => 'side.menu.pages',
        'icon' => 'FileProtectOutlined',
        'permissions' => [],
        'roles' => [],
        'children' => [
          [
            'type' => 'submenu',
            'key' => route('dashboard.pages'),
            'label' => 'side.menu.pages.pages',
            'icon' => 'FileProtectOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => route('dashboard.pages.app.profile'),
                'label' => 'side.menu.pages.pages.app.profile',
                'icon' => 'UserOutlined',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.pages.app.user-list'),
                'label' => 'side.menu.pages.pages.app.user-list',
                'icon' => 'TeamOutlined',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.pages.setting.edit-profile'),
                'label' => 'side.menu.pages.pages.app.setting',
                'icon' => 'SettingOutlined',
                'permissions' => [],
                'roles' => [],
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => route('dashboard.pages.general'),
            'label' => 'General',
            'icon' => 'GlobalOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => route('dashboard.pages.general.invoice'),
                'label' => 'Invoice',
                'icon' => 'FileDoneOutlined',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.pages.general.faq'),
                'label' => 'FAQ',
                'icon' => 'FileDoneOutlined',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.pages.general.pricing'),
                'label' => 'Pricing',
                'icon' => 'FileDoneOutlined',
                'permissions' => [],
                'roles' => [],
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@pages/auth',
            'label' => 'side.menu.pages.authorization',
            'icon' => 'SafetyOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'submenu',
                'key' => route('authorization.login.1'),
                'icon' => 'LoginOutlined',
                'label' => 'side.menu.pages.authorization.login',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => route('authorization.login.1'),
                    'icon' => 'LoginOutlined',
                    'label' => 'side.menu.pages.authorization.login.1',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => route('authorization.login.2'),
                    'icon' => 'LoginOutlined',
                    'label' => 'side.menu.pages.authorization.login.2',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => route('authorization.login.3'),
                    'icon' => 'LoginOutlined',
                    'label' => 'side.menu.pages.authorization.login.3',
                    'permissions' => [],
                    'extra' => [
                      'component' => 'icon',
                      'icon' => 'CrownOutlined',
                      'props' => [
                        'style' => [
                          'color' => 'var(--ant-color-primary)'
                        ]
                      ],
                    ],
                    'roles' => [],
                  ],
                ]
              ],
              [
                'type' => 'submenu',
                'key' => route('authorization.register.1'),
                'icon' => 'UsergroupAddOutlined',
                'label' => 'side.menu.pages.authorization.register',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => route('authorization.register.1'),
                    'icon' => 'UsergroupAddOutlined',
                    'label' => 'side.menu.pages.authorization.register.1',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => route('authorization.register.2'),
                    'icon' => 'UsergroupAddOutlined',
                    'label' => 'side.menu.pages.authorization.register.2',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => route('authorization.register.3'),
                    'icon' => 'UsergroupAddOutlined',
                    'label' => 'side.menu.pages.authorization.register.3',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],
              [
                'type' => 'item',
                'key' => '@pages/auth/verify-email',
                'label' => 'side.menu.pages.authorization.verify-email',
                'icon' => 'MailOutlined',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'submenu',
                'key' => '@pages/auth/forgot',
                'label' => 'side.menu.pages.authorization.forgot',
                'icon' => 'KeyOutlined',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => route('authorization.forgot.password'),
                    'label' => 'side.menu.pages.authorization.forgot.password',
                    'icon' => 'KeyOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/forgot/email',
                    'label' => 'side.menu.pages.authorization.forgot.email',
                    'icon' => 'MailOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],

            ]
          ],
//          [
//            'type' => 'submenu',
//            'key' => '@pages/errors',
//            'label' => 'Errors',
//            'icon' => 'StopOutlined',
//            'permissions' => [],
//            'roles' => [],
//            'children' => [
//              [
//                'type' => 'submenu',
//                'key' => '@pages/pages/app',
//                'label' => 'App',
//                'icon' => 'GlobalOutlined',
//                'permissions' => [],
//                'roles' => [],
//                'children' => [
//                  [
//                    'type' => 'item',
//                    'key' => '@pages/pages/profile',
//                    'label' => 'Profile',
//                    'icon' => 'UserOutlined',
//                    'permissions' => [],
//                    'roles' => [],
//                  ],
//                  [
//                    'type' => 'item',
//                    'key' => route('dashboard.pages.app.user-list'),
//                    'label' => 'User List',
//                    'icon' => 'TeamOutlined',
//                    'permissions' => [],
//                    'roles' => [],
//                  ],
//                  [
//                    'type' => 'item',
//                    'key' => '@pages/pages/app/settings',
//                    'label' => 'Settings',
//                    'icon' => 'TeamOutlined',
//                    'permissions' => [],
//                    'roles' => [],
//                  ],
//                ]
//              ],
//              [
//                'type' => 'submenu',
//                'key' => '@pages/pages/general',
//                'label' => 'General',
//                'icon' => 'GlobalOutlined',
//                'permissions' => [],
//                'roles' => [],
//                'children' => [
//                  [
//                    'type' => 'item',
//                    'key' => '@pages/pages/general/invoice',
//                    'label' => 'Invoice',
//                    'icon' => 'FileDoneOutlined',
//                    'permissions' => [],
//                    'roles' => [],
//                  ],
//                  [
//                    'type' => 'item',
//                    'key' => '@pages/pages/general/faq',
//                    'label' => 'FAQ',
//                    'icon' => 'FileDoneOutlined',
//                    'permissions' => [],
//                    'roles' => [],
//                  ],
//                  [
//                    'type' => 'item',
//                    'key' => '@pages/pages/general/pricing',
//                    'label' => 'Pricing',
//                    'icon' => 'FileDoneOutlined',
//                    'permissions' => [],
//                    'roles' => [],
//                  ],
//                ]
//              ],
//
//            ]
//          ],
        ]
      ],
//      [
//        'type' => 'divider',
//        'permissions' => [],
//        'roles' => []
//      ],
//      [
//        'type' => 'item',
//        'key' => '@pages/documentation',
//        'label' => 'Documentation',
//        'icon' => 'FileUnknownOutlined',
//        'permissions' => [],
//        'roles' => [],
//      ],
//      [
//        'type' => 'item',
//        'key' => '@pages/change-log',
//        'label' => 'Change Log',
//        'icon' => 'FileZipOutlined',
//        'permissions' => [],
//        'roles' => [],
//      ],
    ];
  }
}
