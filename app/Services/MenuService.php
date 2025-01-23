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
        'roles' => []
      ],
      [
        'type' => 'item',
        'key' => '@analytics',
        'label' => 'Analytics',
        'icon' => 'DotChartOutlined',
        'permissions' => [],
        'roles' => []
      ],
      [
        'type' => 'item',
        'key' => '@sales',
        'label' => 'Sales',
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
        'label' => 'Components',
        'permissions' => [],
        'roles' => [],
        'children' => [
          [
            'type' => 'submenu',
            'key' => route('dashboard.components.general'),
            'label' => 'General',
            'icon' => 'InfoCircleOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => route('dashboard.components.button'),
                'label' => 'Button',
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
        'label' => 'Pages',
        'icon' => 'FileProtectOutlined',
        'permissions' => [],
        'roles' => [],
        'children' => [
          [
            'type' => 'submenu',
            'key' => '@pages/pages',
            'label' => 'Pages',
            'icon' => 'FileProtectOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'submenu',
                'key' => '@pages/pages/app',
                'label' => 'App',
                'icon' => 'GlobalOutlined',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/profile',
                    'label' => 'Profile',
                    'icon' => 'UserOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/profile',
                    'label' => 'User List',
                    'icon' => 'TeamOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/app/settings',
                    'label' => 'Settings',
                    'icon' => 'TeamOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],
              [
                'type' => 'submenu',
                'key' => '@pages/pages/general',
                'label' => 'General',
                'icon' => 'GlobalOutlined',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/general/invoice',
                    'label' => 'Invoice',
                    'icon' => 'FileDoneOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/general/faq',
                    'label' => 'FAQ',
                    'icon' => 'FileDoneOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/general/pricing',
                    'label' => 'Pricing',
                    'icon' => 'FileDoneOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],

            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@pages/auth',
            'label' => 'Authorization',
            'icon' => 'SafetyOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'submenu',
                'key' => '@pages/auth/login',
                'label' => 'Login',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/login/1',
                    'label' => 'Login 1',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/login/2',
                    'label' => 'Login 2',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/login/3',
                    'label' => 'Login 3',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],
              [
                'type' => 'submenu',
                'key' => '@pages/auth/register',
                'label' => 'Register',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/register/1',
                    'label' => 'Register 1',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/register/2',
                    'label' => 'Register 2',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/register/3',
                    'label' => 'Register 3',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],
              [
                'type' => 'item',
                'key' => '@pages/auth/verify-email',
                'label' => 'Verify Email',
                'icon' => 'MailOutlined',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'submenu',
                'key' => '@pages/auth/forgot',
                'label' => 'Forgot',
                'icon' => 'MailOutlined',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/forgot/password',
                    'label' => 'Forgot Password',
                    'icon' => 'MailOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/auth/forgot/email',
                    'label' => 'Forgot Email',
                    'icon' => 'MailOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],

            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@pages/errors',
            'label' => 'Errors',
            'icon' => 'StopOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'submenu',
                'key' => '@pages/pages/app',
                'label' => 'App',
                'icon' => 'GlobalOutlined',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/profile',
                    'label' => 'Profile',
                    'icon' => 'UserOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/profile',
                    'label' => 'User List',
                    'icon' => 'TeamOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/app/settings',
                    'label' => 'Settings',
                    'icon' => 'TeamOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
              ],
              [
                'type' => 'submenu',
                'key' => '@pages/pages/general',
                'label' => 'General',
                'icon' => 'GlobalOutlined',
                'permissions' => [],
                'roles' => [],
                'children' => [
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/general/invoice',
                    'label' => 'Invoice',
                    'icon' => 'FileDoneOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/general/faq',
                    'label' => 'FAQ',
                    'icon' => 'FileDoneOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                  [
                    'type' => 'item',
                    'key' => '@pages/pages/general/pricing',
                    'label' => 'Pricing',
                    'icon' => 'FileDoneOutlined',
                    'permissions' => [],
                    'roles' => [],
                  ],
                ]
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
        'type' => 'item',
        'key' => '@pages/documentation',
        'label' => 'Documentation',
        'icon' => 'FileUnknownOutlined',
        'permissions' => [],
        'roles' => [],
      ],
      [
        'type' => 'item',
        'key' => '@pages/change-log',
        'label' => 'Change Log',
        'icon' => 'FileZipOutlined',
        'permissions' => [],
        'roles' => [],
      ],
    ];
  }
}
