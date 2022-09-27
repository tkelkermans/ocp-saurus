import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5a7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '453'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2a7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'daf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '754'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '522'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '687'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1c0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c7b'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '15b'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'bb9'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '8db'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '2a3'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'e24'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '2b9'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'a8a'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '2b0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '792'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f64'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_assisted_install/',
        component: ComponentCreator('/ocp_assisted_install/', 'a49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ipi_install/',
        component: ComponentCreator('/ocp_ipi_install/', '8ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ntnx_hci/import_bp',
        component: ComponentCreator('/ocp_ntnx_hci/import_bp', 'fbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ntnx_hci/ocp_csi',
        component: ComponentCreator('/ocp_ntnx_hci/ocp_csi', '30c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ntnx_hci/ocp_scale_out_in',
        component: ComponentCreator('/ocp_ntnx_hci/ocp_scale_out_in', '710'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ntnx_hci/ocp_vms',
        component: ComponentCreator('/ocp_ntnx_hci/ocp_vms', 'aef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ntnx_hci/prov_vm',
        component: ComponentCreator('/ocp_ntnx_hci/prov_vm', '676'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/optional_labs/ocp_idp',
        component: ComponentCreator('/optional_labs/ocp_idp', '7b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/optional_labs/ocp_image_registry',
        component: ComponentCreator('/optional_labs/ocp_image_registry', '65e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/optional_labs/ocp_vms_2',
        component: ComponentCreator('/optional_labs/ocp_vms_2', '756'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolsvms/linux_tools_vm',
        component: ComponentCreator('/toolsvms/linux_tools_vm', 'be7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolsvms/windows_tools_vm',
        component: ComponentCreator('/toolsvms/windows_tools_vm', 'f06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/workloads_on_ocp/ocp_k10',
        component: ComponentCreator('/workloads_on_ocp/ocp_k10', 'e13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/workloads_on_ocp/ocp_k10_backup_restore',
        component: ComponentCreator('/workloads_on_ocp/ocp_k10_backup_restore', '3fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/workloads_on_ocp/ocp_wordpress_deploy',
        component: ComponentCreator('/workloads_on_ocp/ocp_wordpress_deploy', 'e17'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
