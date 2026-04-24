import { Handle, Position } from '@xyflow/react';
import { Zap, Settings } from 'lucide-react';
import { mockAutomations } from '../../../api/mockApi';

export const AutomatedNode = ({ data, selected }: any) => {
    const selectedAction = mockAutomations.find(a => a.id === data.actionId);

    return (
        <div className={`shadow-md rounded-lg bg-white border-2 min-w-[200px] overflow-hidden ${selected ? 'border-purple-500 shadow-purple-100' : 'border-purple-200'}`}>
            <Handle type="target" position={Position.Left} id="target" className="w-3 h-3 bg-purple-400" />
            <div className="bg-purple-50 px-3 py-2 flex items-center gap-2 border-b border-purple-100">
                <Zap size={16} className="text-purple-600" />
                <div className="font-semibold text-purple-900 text-sm truncate">{data.title || 'System Action'}</div>
            </div>
            <div className="px-3 py-2">
                <div className="text-xs text-slate-600 flex items-center gap-1.5 mb-1">
                    <Settings size={14} className="text-purple-500" />
                    <span className="font-medium text-slate-800">Action:</span>
                    <span className="truncate">{selectedAction ? selectedAction.label : 'None'}</span>
                </div>
                {data.actionParams && Object.keys(data.actionParams).length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                        {Object.entries(data.actionParams).map(([k, v]) => (
                            <span key={k} className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">
                                {k}: {String(v).substring(0, 10)}{String(v).length > 10 ? '...' : ''}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <Handle type="source" position={Position.Right} id="source" className="w-3 h-3 bg-purple-500" />
        </div>
    );
};
