import { Step } from '..';
import { SidebarLabel } from '../../components';

import { LabelsContainer, SidebarContainer } from './styles';

interface SidebarProps {
  activeStep: Step;
}

const Sidebar: React.FC<SidebarProps> = ({ activeStep }) => {
  return (
    <SidebarContainer>
      <LabelsContainer>
        <SidebarLabel
          active={activeStep === 1}
          number="1"
          description="YOUR INFO"
        />
        <SidebarLabel
          active={activeStep === 2}
          number="2"
          description="SELECT PLAN"
        />
        <SidebarLabel
          active={activeStep === 3}
          number="3"
          description="ADD-ONS"
        />
        <SidebarLabel
          active={activeStep === 4 || activeStep === 5}
          number="4"
          description="SUMMARY"
        />
      </LabelsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
