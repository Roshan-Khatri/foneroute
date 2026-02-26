
import {StructureBuilder} from 'sanity/desk'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.listItem()
        .title('Blog Page')
        .id('blogPage')
        .child(
          S.document()
            .schemaType('blogPage')
            .documentId('blogPage')
        ),
        S.listItem()
        .title('Solutions Page')
        .id('solutionsPage')
        .child(
          S.document()
            .schemaType('solutionsPage')
            .documentId('solutionsPage')
        ),
        S.listItem()
        .title('International Numbers')
        .child(
          S.list()
            .title('International Numbers Content')
            .items([
              S.listItem()
                .title('Main International Numbers Page')
                .child(
                  S.document()
                    .schemaType('internationalNumbersPage')
                    .documentId('internationalNumbersPage')
                ),
              S.divider(),
              S.documentTypeList('internationalSubPage').title('Sub Pages')
            ])
        ),
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ])
