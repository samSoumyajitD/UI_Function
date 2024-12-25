import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ 
  data, 
  isConnectable, 
  targetPosition = Position.Top, 
  sourcePosition = Position.Bottom 
}) => {
  return (
    <>
      {/* Target Handle */}
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      />
      
      {/* Label */}
      <div style={{ textAlign: "center", padding: "5px", background: "#f0f0f0", border: "1px solid #ccc", borderRadius: "4px" }}>
        {data?.label || "Default Label"}
      </div>
      
      {/* Source Handle */}
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
