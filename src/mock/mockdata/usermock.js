import {
  COMMON_ERROR as error,
  COMMON_SUCCESS as success
} from '../../constants/index'
export default {
  login: {
    path: '/api/user/login',
    method: 'post',
    success() {
      const res = success
      success.data = {
        username: '管理员',
        usertoken: 'usertoken',
        phone: '150****7168'
      }
      return res
    },
    error() {
      const res = error
      return res
    }
  },
  menu: {
    path: '/api/user/getmenu',
    method: 'get',
    success() {
      const res = success
      success.data = [{
          id: 1,
          authName: '管理',
          path: 'manage',
          children: [{
              id: 11,
              authName: '新增',
              path: 'add',
              children: [],
              order: null
            },
            {
              id: 12,
              authName: '修改',
              path: 'updata',
              children: [],
              order: null
            }
          ],
          order: 1
        },
        {
          id: 2,
          authName: '数据统计',
          path: 'reports',
          children: [{
            id: 21,
            authName: '数据报表',
            path: 'reports',
            children: [],
            order: null
          }],
          order: 5
        }
      ]
      return res
    },
    error() {
      const res = error
      return res
    }
  },
  getroutes: {
    path: '/api/user/getroutes',
    method: 'post',
    success() {
      const res = success
      success.data = [{
          path: '/permission',
          component: 'layout/Layout',
          redirect: '/permission/index',
          alwaysShow: true,
          meta: {
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor']
          },
          children: [{
              path: 'page',
              component: 'views/permission/page',
              name: 'PagePermission',
              meta: {
                title: 'Page Permission',
                roles: ['admin']
              }
            },
            {
              path: 'directive',
              component: 'views/permission/directive',
              name: 'DirectivePermission',
              meta: {
                title: 'Directive Permission'
              }
            },
            {
              path: 'role',
              component: 'views/permission/role',
              name: 'RolePermission',
              meta: {
                title: 'Role Permission',
                roles: ['admin']
              }
            }
          ]
        },
        {
          path: '/icon',
          component: 'layout/Layout',
          children: [{
            path: 'index',
            component: 'views/icons/index',
            name: 'Icons',
            meta: {
              title: 'Icons',
              icon: 'icon',
              noCache: true
            }
          }]
        }
      ]
      return res
    },
    error() {
      const res = error
      return res
    }
  }
}
