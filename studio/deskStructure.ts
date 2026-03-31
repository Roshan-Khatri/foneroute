import {CogIcon} from '@sanity/icons'
import {StructureBuilder} from 'sanity/desk'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.editor().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(S.editor().schemaType('homePage').documentId('homePage')),
              S.listItem()
                .title('About')
                .child(S.editor().schemaType('aboutPage').documentId('aboutPage')),
              S.documentTypeListItem('featuresPage').title('Features'),
              S.documentTypeListItem('featuresMainPage').title('Features Main Page'),
              S.listItem()
                .title('Solutions')
                .child(S.editor().schemaType('solutionsPage').documentId('solutionsPage')),
              S.listItem()
                .title('Blog')
                .child(S.editor().schemaType('blogPage').documentId('blogPage')),
              S.listItem()
                .title('Contact')
                .child(S.editor().schemaType('contactPage').documentId('contactPage')),
              S.listItem()
                .title('Support')
                .child(S.editor().schemaType('supportPage').documentId('supportPage')),
              S.listItem()
                .title('Contact Center')
                .child(
                  S.editor().schemaType('contactCenterPage').documentId('contactCenterPage')
                ),
              S.listItem()
                .title('Predictive Dialer')
                .child(
                  S.editor().schemaType('predictiveDialerPage').documentId('predictiveDialerPage')
                ),
                S.listItem()
                .title('Progressive Dialer')
                .child(
                  S.editor().schemaType('progressiveDialerPage').documentId('progressiveDialerPage')
                ),
              S.listItem()
                .title('Cloud PBX')
                .child(S.editor().schemaType('cloudPbxPage').documentId('cloudPbxPage')),
              S.documentTypeListItem('industryPage').title('Industry'),
              S.listItem()
                .title('Auto Dialer')
                .child(S.editor().schemaType('autoDialerPage').documentId('autoDialerPage')),
              S.listItem()
                .title('Power Dialer')
                .child(S.editor().schemaType('powerDialerPage').documentId('powerDialerPage')),
              S.listItem()
                .title('Inbound Call Solutions')
                .child(
                  S.editor()
                    .schemaType('inboundCallSolutionsPage')
                    .documentId('inboundCallSolutionsPage')
                ),
              S.listItem()
                .title('Outbound')
                .child(S.editor().schemaType('outboundPage').documentId('outboundPage')),
              S.listItem()
                .title('International Numbers')
                .child(
                  S.editor()
                    .schemaType('internationalNumbersPage')
                    .documentId('internationalNumbersPage')
                ),
                 S.listItem()
                .title('Local')
                .child(
                  S.editor()
                    .schemaType('internationalNumbersPage')
                    .documentId('71a93205-1345-47df-8072-1db2f6fd95fb')
                ),
              S.listItem()
                .title('Unified Communications')
                .child(
                  S.editor()
                    .schemaType('internationalNumbersPage')
                    .documentId('a3b06636-1abd-4c4f-acd5-5881ff2b389c')
                ),
              S.listItem()
                .title('Click To Call')
                .child(
                  S.editor()
                    .schemaType('clickToCallPage')
                    .documentId('25e68280-31ba-4241-93b6-3344513eb783')
                ),
              S.listItem()
                .title('SMS MMS API')
                .child(
                  S.editor()
                    .schemaType('smsMmsApiPage')
                    .documentId('6b4f091c-c182-4984-88d6-12e191097492')
                ),
              S.listItem()
                .title('Number Masking')
                .child(
                  S.editor()
                    .schemaType('numberMaskingPage')
                    .documentId('35361b86-04c1-4486-9d7a-1384c8de0810')
                ),
              S.listItem()
                .title('Toll-Free')
                .child(S.editor().schemaType('tollFreePage').documentId('tollFreePage')),
              S.documentTypeListItem('terms').title('Terms of Service'),
              S.documentTypeListItem('privacyPolicy').title('Privacy Policy'),
            ])
        ),
    ])
