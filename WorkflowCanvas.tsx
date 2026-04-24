import React, { useCallback, useRef } from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    MiniMap,
    useReactFlow,
    Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { useWorkflow } from '../../context/WorkflowContext';

import { StartNode } from './nodes/StartNode';
import { TaskNode } from './nodes/TaskNode';
import { ApprovalNode } from './nodes/ApprovalNode';
import { AutomatedNode } from './nodes/AutomatedNode';
import { EndNode } from './nodes/EndNode';

const nodeTypes = {
    startNode: StartNode,
    taskNode: TaskNode,
    approvalNode: ApprovalNode,
    automatedNode: AutomatedNode,
    endNode: EndNode,
};

export const WorkflowCanvas = () => {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes, setSelectedNodeId } = useWorkflow();
    const { screenToFlowPosition } = useReactFlow();

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');

            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const titleMap: Record<string, string> = {
                startNode: 'Start',
                taskNode: 'New Task',
                approvalNode: 'Approval Step',
                automatedNode: 'System Action',
                endNode: 'End'
            };

            const newNode = {
                id: `${type}-${Date.now()}`,
                type,
                position,
                data: { title: titleMap[type] || 'Node' },
                selected: true, // Automatically select the new node
            };

            setNodes((nds) => nds.concat(newNode));
            setSelectedNodeId(newNode.id); // Sync with context immediately
        },
        [screenToFlowPosition, setNodes, setSelectedNodeId],
    );

    return (
        <div className="reactflow-wrapper h-full w-full" ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onSelectionChange={({ nodes }) => {
                    // Sync our context's selectedNodeId with React Flow's selection
                    if (nodes.length > 0) {
                        setSelectedNodeId(nodes[nodes.length - 1].id);
                    } else {
                        setSelectedNodeId(null);
                    }
                }}
                nodeTypes={nodeTypes}
                fitView
                className="bg-slate-50/50"
            >
                <Background gap={16} color="#e2e8f0" />
                <Controls />
                <MiniMap zoomable pannable className="rounded-lg shadow-sm overflow-hidden" maskColor="#cbd5e122" />
                {nodes.length === 0 && (
                    <Panel position="top-left" className="bg-white/80 backdrop-blur-sm p-2 rounded-md border border-slate-200 text-xs text-slate-500 shadow-sm">
                        Drag nodes from the left and drop them here.
                    </Panel>
                )}
            </ReactFlow>
        </div>
    );
};
