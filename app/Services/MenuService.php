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
            'key' => route('dashboard.app.mail.index'),
            'label' => 'Mail',
            'icon' => 'MailOutlined',
            'permissions' => [],
            'roles' => []
          ],
          [
            'type' => 'item',
            'key' => route('dashboard.app.chat.index'),
            'label' => 'Chat',
            'icon' => 'MessageOutlined',
            'permissions' => [],
            'roles' => []
          ],
          [
            'type' => 'item',
            'key' => route('dashboard.app.calendar.index'),
            'label' => 'Calendar',
            'icon' => 'CalendarOutlined',
            'permissions' => [],
            'roles' => []
          ],
          [
            'type' => 'submenu',
            'key' => '@project',
            'label' => 'Project',
            'icon' => 'BulbOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'submenu',
                'key' => '@project/list',
                'label' => 'List',
                'icon' => 'UnorderedListOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'submenu',
                'key' => '@project/kanban',
                'label' => 'Kanban',
                'icon' => 'UnorderedListOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'submenu',
                'key' => '@project/scrumboard',
                'label' => 'Scrumboard',
                'icon' => 'UnorderedListOutlined',
                'permissions' => [],
                'roles' => []
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => route('dashboard.ecommerce.index'),
            'label' => 'E-Commerce',
            'icon' => 'ShoppingCartOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => route('dashboard.ecommerce.index'),
                'label' => 'Product List',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.ecommerce.create'),
                'label' => 'Add Product',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => route('dashboard.ecommerce.order.index'),
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
          [
            'type' => 'submenu',
            'key' => '@component/layout',
            'label' => 'Layout',
            'icon' => 'LayoutOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => '@component/layout/divider',
                'label' => 'Divider',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/layout/flex',
                'label' => 'Flex',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/layout/grid',
                'label' => 'Grid',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/layout/layout',
                'label' => 'Layout',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/layout/space',
                'label' => 'Space',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/layout/splitter',
                'label' => 'Splitter',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => [],
                'extra' => [
                  'component' => 'tag',
                  'children' => '5.21.0'
                ],
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@component/navigation',
            'label' => 'Navigation',
            'icon' => 'CompassOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => '@component/navigation/anchor',
                'label' => 'Anchor',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/breadcrumb',
                'label' => 'Breadcrumb',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/dropdown',
                'label' => 'Dropdown',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/menu',
                'label' => 'Menu',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/pagination',
                'label' => 'Pagination',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/step',
                'label' => 'Steps',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@component/data-entry',
            'label' => 'Data Entry',
            'icon' => 'FileDoneOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => '@component/navigation/auto-complete',
                'label' => 'Auto Complete',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/cascader',
                'label' => 'Cascader',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/checkbox',
                'label' => 'Checkbox',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/color-picker',
                'label' => 'Color Picker',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/date-picker',
                'label' => 'Date Picker',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/form',
                'label' => 'Form',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/input',
                'label' => 'Input',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/input-number',
                'label' => 'InputNumber',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/mentions',
                'label' => 'Mentions',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/radio',
                'label' => 'Radio',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/rate',
                'label' => 'Rate',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/select',
                'label' => 'Select',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/switch',
                'label' => 'Switch',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/timepicker',
                'label' => 'TimePicker',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/transfer',
                'label' => 'Transfer',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/tree-select',
                'label' => 'Tree Select',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
              [
                'type' => 'item',
                'key' => '@component/navigation/upload',
                'label' => 'Upload',
                'icon' => 'InfoCircleOutlined',
                'permissions' => [],
                'roles' => []
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@component/data-display',
            'label' => 'Data Display',
            'icon' => 'DesktopOutlined',
            'permissions' => [],
            'roles' => [],
            'children' => [
              [
                'type' => 'item',
                'key' => '@component/data-display/avatar',
                'label' => 'Avatar',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/badge',
                'label' => 'Badge',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/Calendar',
                'label' => 'Calendar',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/card',
                'label' => 'Card',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/carousel',
                'label' => 'Carousel',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/collapse',
                'label' => 'Collapse',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/descriptions',
                'label' => 'Descriptions',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/empty',
                'label' => 'Empty',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/image',
                'label' => 'Image',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/list',
                'label' => 'List',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/popover',
                'label' => 'Popover',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/qr-code',
                'label' => 'QR Code',
                'permissions' => [],
                'roles' => [],
                'extra' => [
                  'component' => 'tag',
                  'children' => '5.1.0'
                ]
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/segmented',
                'label' => 'Segmented',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/statistic',
                'label' => 'Statistic',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/table',
                'label' => 'Table',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/tabs',
                'label' => 'Tabs',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/tags',
                'label' => 'Tag',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/timeline',
                'label' => 'Timeline',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/tooltip',
                'label' => 'Tooltip',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/tour',
                'label' => 'Tour',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/data-display/tree',
                'label' => 'Tree',
                'permissions' => [],
                'roles' => [],
              ],
            ]
          ],
          [
            'type' => 'submenu',
            'key' => '@component/feedback',
            'label' => 'Feedback',
            'icon' => 'BellOutlined',
            'permissions' => [],
            'roles' => [],
            'children'=>  [
              [
                'type' => 'item',
                'key' => '@component/feedback/alert',
                'label' => 'Alert',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/drawer',
                'label' => 'Drawer',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/message',
                'label' => 'Message',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/modal',
                'label' => 'Modal',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/notification',
                'label' => 'Notification',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/pop-confirm',
                'label' => 'Pop Confirm',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/progress',
                'label' => 'Progress',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/skeleton',
                'label' => 'Skeleton',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/spin',
                'label' => 'Spin',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => '@component/feedback/watermark',
                'label' => 'Watermark',
                'permissions' => [],
                'roles' => [],
              ],
            ]
          ]
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
                'key' => route('authorization.verify.email'),
                'label' => 'side.menu.pages.authorization.verify-email',
                'icon' => 'MailOutlined',
                'permissions' => [],
                'roles' => [],
              ],
              [
                'type' => 'item',
                'key' => route('authorization.verify.verified'),
                'label' => 'side.menu.pages.authorization.verify-email-verified',
                'icon' => 'CheckCircleOutlined',
                'permissions' => [],
                'roles' => [],
              ],
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
                'key' => route('authorization.reset.password'),
                'label' => 'side.menu.pages.authorization.reset-password',
                'icon' => 'LockOutlined',
                'permissions' => [],
                'roles' => [],
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
