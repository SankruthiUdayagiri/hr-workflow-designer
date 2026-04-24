import { Handle, Position } from '@xyflow/react';
import { StopCircle } from 'lucide-react';

export const EndNode = ({ data, selected }: any) => {
    return (
        <div className={`px-4 py-3 shadow-md rounded-lg bg-white border-2 min-w-[150px] ${selected ? 'border-red-500 shadow-red-100' : 'border-red-200'}`}>
            <Handle type="target" position={Position.Left} id="target" className="w-3 h-3 bg-red-500" />
            <div className="flex items-center gap-2">
                <StopCircle size={18} className="text-red-600" />
                <div className="font-semibold text-slate-800 text-sm">{data.title || 'End'}</div>
            </div>
            {data.endMessage && (
                <div className="mt-2 text-xs text-slate-500 border-t border-slate-100 pt-2 italic truncate">
                    "{data.endMessage}"
                </div>
            )}
            {data.summaryFlag && (
                <div className="mt-1 text-[10px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded inline-block">
                    Creates Summary
                </div>
            )}
        </div>
    );
};
