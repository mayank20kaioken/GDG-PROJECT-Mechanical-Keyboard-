# Architecture & Technical Decisions

## 1. Migrating from Web Components to React Packages
**Challenge:** Initially attempted to embed the 3D model using Spline's default `<script>` and `<spline-viewer>` HTML tags. This triggered compilation errors because Next.js/React uses JSX, which strictly regulates how external scripts and custom DOM elements are injected.
**Solution:** Transitioned the architecture to utilize the `@splinetool/react-spline` package. This provided a dedicated React component, ensuring safe hydration, clean code structure, and native compatibility with Next.js.

## 2. Bypassing 3D State Overrides
**Challenge:** When attempting to build a camera-driven zoom effect, the Spline web editor repeatedly synchronized the camera's base state with its active state due to viewport transform overrides. 
**Solution:** Rather than fighting the camera state manager, I engineered a pivot: I locked the camera entirely and applied the scroll-driven transform states directly to the Group mesh of the keyboard itself. This achieved the exact same cinematic zoom effect on the frontend while completely bypassing the backend editor bug.

## 3. Performance Optimization
**Challenge:** Rendering a high-polygon mechanical keyboard (with individual switches and keycaps) risks heavy layout thrashing if the scroll events dictate 3D re-renders inside the React DOM.
**Solution:** Offloaded the scroll-tracking animation directly to the Spline WebGL canvas via the `Page Scroll` export parameter. React is only responsible for calculating text opacity, keeping the framerate high and the user experience completely fluid.