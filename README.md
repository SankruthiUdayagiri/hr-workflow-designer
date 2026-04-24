# HR Workflow Designer

A robust, configurable mini-HR Workflow Designer module prototype. Built with Vite, React, React Flow, and Tailwind CSS.

## 🚀 Getting Started

Ensure you have Node.js (v18+) installed.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🏗️ Architecture & Design Choices

The application is structured to be modular and highly scalable.

### Core Stack
- **React + Vite**: Enables an extremely fast development server and optimized production build.
- **React Flow**: The premier library for building interactive graph/node-based UI.
- **Tailwind CSS**: Rapid, scalable utility-first styling.
- **React Hook Form**: Scalable and performant form data collection for the Node Property forms.
- **Context API (`WorkflowContext`)**: Global state container managing the Graph (nodes & edges) locally. Keeps our components decoupeld and provides a central way for Forms and the Simulator to tap into the Graph's live data.

### Folder Structure
```
src/
├── api/            # Mock mock server interactions (simulateWorkflow, GET automations)
├── components/     
│   ├── canvas/     # React Flow Canvas + Custom Node components
│   ├── forms/      # Configuration panels mapped to selected nodes
│   ├── layout/     # Structural parts: Topbar, Sidebar 
│   └── simulator/  # Sandbox modal mapping simulation logs
├── context/        # WorkflowContext (Shared node/edge states)
└── types/          # TypeScript definitions of Workflow shapes
```

### Key Highlights
1. **Dynamic Form Injection**: `FormPanel` observes the `selectedNode`'s `type` and mounts the isolated respective configuration form. This adheres strictly to the Open/Closed abstraction principle – adding a new node simply requires creating a new Component and Form mapping, with precisely zero changes to the core layout logic.
2. **Robust Validation Simulator**: The `mockApi.ts` implements a basic Graph traversal engine using BFS/Adjacency lists to detect disconnected nodes, enforce Start condition constraints, and prevent Cycles (DAGs enforcement).
3. **Responsive Aesthetics**: Leveraging Lucide icons and Tailwind soft shadows, the Canvas immediately pops as premium B2B SaaS architecture consistent with UI references provided.
4. **Resiliency over Redux**: Selected React Context to manage `Node[]` and `Edge[]` states to reduce boilerplate compared to Redux while keeping the implementation pure. Given React Flow has its own inner stores, wrapping it with an explicit contextual observer keeps node updates 100% predictable.

## ⏳ Incomplete / Future Considerations
Given the time-boxing of an MVP round, these were considered but omitted to ship value faster:
1. **Undo/Redo Stack**: Can be implemented by wrapping the Context's node mutation into an array of history snapshots.
2. **Parallel Automated Execution**: The simulator only follows the first path or throws if branches diverge heavily instead of running promise batches (Mock API restriction).
3. **Export/Import JSON**: Can be easily added to the `WorkflowContext` to dump and load state directly from/to `localStorage`.

Happy Building!
