import { SidebarLabel } from '../../components';

import { LabelsContainer, SidebarContainer } from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LabelsContainer>
        <SidebarLabel active number="1" description="YOUR INFO" />
        <SidebarLabel number="2" description="SELECT PLAN" />
        <SidebarLabel number="3" description="ADD-ONS" />
        <SidebarLabel number="4" description="SUMMARY" />
      </LabelsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
