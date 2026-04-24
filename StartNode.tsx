import { Handle, Position } from '@xyflow/react';
import { PlayCircle } from 'lucide-react';

export const StartNode = ({ data, selected }: any) => {
    return (
        <div className={`px-4 py-3 shadow-md rounded-lg bg-white border-2 min-w-[150px] ${selected ? 'border-green-500 shadow-green-100' : 'border-green-200'}`}>
            <div className="flex items-center gap-2">
                <PlayCircle size={18} className="text-green-600" />
                <div className="font-semibold text-slate-800 text-sm">{data.title || 'Start'}</div>
            </div>
            {data.metadata && data.metadata.length > 0 && (
                <div className="mt-2 text-xs text-slate-500 border-t border-slate-100 pt-2">
                    {data.metadata.length} metadata keys
                </div>
            )}
            <Handle type="source" position={Position.Right} id="a" className="w-3 h-3 bg-green-500" />
        </div>
    );
};
