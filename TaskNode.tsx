import { Handle, Position } from '@xyflow/react';
import { CheckSquare } from 'lucide-react';

export const TaskNode = ({ data, selected }: any) => {
    return (
        <div className={`shadow-md rounded-lg bg-white border-2 min-w-[200px] overflow-hidden ${selected ? 'border-blue-500 shadow-blue-100' : 'border-blue-200'}`}>
            <Handle type="target" position={Position.Left} id="target" className="w-3 h-3 bg-blue-400" />
            <div className="bg-blue-50 px-3 py-2 flex items-center gap-2 border-b border-blue-100">
                <CheckSquare size={16} className="text-blue-600" />
                <div className="font-semibold text-blue-900 text-sm truncate">{data.title || 'New Task'}</div>
            </div>
            <div className="px-3 py-2">
                {data.assignee ? (
                    <div className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                        <span className="font-medium text-slate-800">Assignee:</span> {data.assignee}
                    </div>
                ) : (
                    <div className="text-xs text-slate-400 italic mb-1">Unassigned</div>
                )}
                {data.dueDate && (
                    <div className="text-xs text-slate-500">
                        Due: {data.dueDate}
                    </div>
                )}
            </div>
            <Handle type="source" position={Position.Right} id="source" className="w-3 h-3 bg-blue-500" />
        </div>
    );
};
