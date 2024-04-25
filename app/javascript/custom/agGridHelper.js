import { createGrid } from "ag-grid-community";

const gridOptions = {
  pagination: true,
};

const gridEl = document.querySelector("#grid");
const gridApi = () => {
  return createGrid(gridEl, gridOptions);
};

// export { gridApi };

// const initializeAgGrid = (gridOptions, gridId) => {
//   const gridEl = document.querySelector(`#${gridId}`);
//   const gridApi = createGrid(gridEl, gridOptions);

//   const savedState = localStorage.getItem(gridId);
//   if (savedState) {
//     gridApi.columnApi.applyColumnState({
//       state: JSON.parse(savedState),
//       applyOrder: true,
//     });
//   }

//   // Store gridApi on the element for easy access later
//   // gridEl.gridApi = gridApi;

//   return gridApi;
// };

const saveColumnState = (gridEl) => {
  // if (gridEl && gridEl.gridApi) {
  //   const columnState = gridEl.gridApi.columnApi.getColumnState();
  //   localStorage.setItem(gridEl.id, JSON.stringify(columnState));
  // }
};

const resetColumnState = (gridEl) => {
  // if (gridEl && gridEl.gridApi) {
  //   gridEl.gridApi.columnApi.resetColumnState();
  //   saveColumnState(gridEl);
  // }
};

export { gridApi, saveColumnState, resetColumnState };
