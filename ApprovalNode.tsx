import { Handle, Position } from '@xyflow/react';
import { FileCheck, ShieldCheck } from 'lucide-react';

export const ApprovalNode = ({ data, selected }: any) => {
    return (
        <div className={`shadow-md rounded-lg bg-white border-2 min-w-[200px] ${selected ? 'border-amber-500 shadow-amber-100' : 'border-amber-200'}`}>
            <Handle type="target" position={Position.Left} id="target" className="w-3 h-3 bg-amber-400" />
            <div className="bg-amber-50 px-3 py-2 flex items-center gap-2 border-b border-amber-100">
                <FileCheck size={16} className="text-amber-600" />
                <div className="font-semibold text-amber-900 text-sm truncate">{data.title || 'Approval Step'}</div>
            </div>
            <div className="px-3 py-2">
                <div className="text-xs text-slate-600 flex items-center gap-1.5 mb-1">
                    <ShieldCheck size={14} className="text-amber-500" />
                    <span className="font-medium">Role:</span> {data.approverRole || 'Unassigned'}
                </div>
                {data.autoApproveThreshold !== undefined && data.autoApproveThreshold !== null && (
                    <div className="text-xs text-slate-500 border-t border-slate-100 pt-1 mt-1">
                        Auto-approve threshold: {data.autoApproveThreshold}
                    </div>
                )}
            </div>
            <Handle type="source" position={Position.Right} id="approved" className="w-3 h-3 bg-green-500 top-1/3" />
            <span className="absolute -right-16 top-1/3 -translate-y-1/2 text-[10px] font-medium text-green-600 bg-white px-1 leading-none">Approve</span>

            <Handle type="source" position={Position.Right} id="rejected" className="w-3 h-3 bg-red-500 top-2/3" />
            <span className="absolute -right-14 top-2/3 -translate-y-1/2 text-[10px] font-medium text-red-600 bg-white px-1 leading-none">Reject</span>
        </div>
    );
};
