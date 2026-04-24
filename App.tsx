import { WorkflowProvider } from './context/WorkflowContext';
import { Layout } from './components/layout/Layout';
import { WorkflowCanvas } from './components/canvas/WorkflowCanvas';
import { ReactFlowProvider } from '@xyflow/react';

function App() {
  return (
    <WorkflowProvider>
      <Layout>
        <ReactFlowProvider>
          <WorkflowCanvas />
        </ReactFlowProvider>
      </Layout>
    </WorkflowProvider>
  );
}

export default App;
