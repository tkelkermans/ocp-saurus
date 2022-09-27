/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

  module.exports = {
    tutorialSidebar:[
      "intro",
      {
        type: 'category',
        label: 'OCP on Nutanix HCI',
        items: ['ocp_ntnx_hci/import_bp','ocp_ntnx_hci/prov_vm','ocp_ntnx_hci/ocp_vms','ocp_ntnx_hci/ocp_scale_out_in','ocp_ntnx_hci/ocp_csi'],
      },
      {
        type: 'category',
        label: 'Workloads on OCP',
        items: ['workloads_on_ocp/ocp_k10','workloads_on_ocp/ocp_wordpress_deploy','workloads_on_ocp/ocp_k10_backup_restore'],
      },
      {
        type: 'category',
        label: 'OCP with Assisted Installer',
        items: ['ocp_assisted_install/ocp_assisted_install'],
      },
      {
        type: 'category',
        label: 'OCP with IPI Installer',
        items: ['ocp_ipi_install/ocp_ipi_install'],
      },
      {
        type: 'category',
        label: 'OCP Optional Labs',
        items: ['optional_labs/ocp_vms_2','optional_labs/ocp_image_registry','optional_labs/ocp_idp'],
      },
      {
        type: 'category',
        label: 'Tools VMs',
        items: ['toolsvms/linux_tools_vm','toolsvms/windows_tools_vm'],
      },
    ],
  };
