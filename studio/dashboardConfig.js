export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6b90ad689e3d0ab7e1e358',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5y991kqu',
                  apiId: '5afddfaa-8759-4a42-9838-29f034ec79a4'
                },
                {
                  buildHookId: '5f6b90ad90930a0f1525e3e1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5r7ucoqm',
                  apiId: 'ab568ae6-a872-43cf-9194-1a3173bab5eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/concod/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5r7ucoqm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
