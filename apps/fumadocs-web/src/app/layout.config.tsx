import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        AppyKit UI
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
   {
      // icon: <BookIcon />,
      text: 'Components',
      url: '/components',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
   {
      // icon: <BookIcon />,
      text: 'Blocks',
      url: '/blocks',
      // secondary items will be displayed differently on navbar
      secondary: false,
      // active:"nested-url"
    },
  //  {
  //     // icon: <BookIcon />,
  //     text: 'Blog',
  //     url: '/blog',
  //     // secondary items will be displayed differently on navbar
  //     secondary: false,
  //     active:"nested-url"
  //   },
  //  {
  //     // icon: <BookIcon />,
  //     text: 'Course',
  //     url: '/course',
  //     // secondary items will be displayed differently on navbar
  //     secondary: false,
  //     active:"nested-url"
  //   },
  //   {
  //     text: 'Tools',
  //     url: '/tools',
      
  //   }
  ],
};
