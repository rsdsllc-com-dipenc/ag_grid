import { Controller } from "@hotwired/stimulus";
// import { gridApi, saveColumnState, resetColumnState } from "../custom/agGridHelper";
import { createGrid, LicenseManager } from "ag-grid-enterprise";
import { AG_GRID_LICENSE_KEY } from "env";

// Connects to data-controller="table-grid"
export default class extends Controller {
  static ga;
  connect() {
    LicenseManager.setLicenseKey(AG_GRID_LICENSE_KEY);
    console.log(AG_GRID_LICENSE_KEY);
    console.log("connected to table_grid_controller");
    const gridEl = document.querySelector("#grid");
    const jsonData = JSON.parse(gridEl.dataset.jsonData);
    const go = {
      pagination: true,
    };
    this.ga = createGrid(gridEl, go);
    this.ga.setGridOption("rowData", jsonData);
    // this.ga.setGridOption("columnDefs", [
    //   {
    //     field: "name",
    //     headerName: "NAME",
    //     sortable: true,
    //     filter: "agTextColumnFilter",
    //     floatingFilter: true,
    //   },
    //   {
    //     field: "address",
    //     headerName: "AddreSS",
    //     sortable: true,
    //     filter: "agTextColumnFilter",
    //     floatingFilter: true,
    //   },
    //   {
    //     field: "contact",
    //     headerName: "Contact Person",
    //     sortable: true,
    //     filter: "agTextColumnFilter",
    //     floatingFilter: true,
    //     width: 150,
    //   },
    //   {
    //     field: "email",
    //     headerName: "Email",
    //     sortable: true,
    //     filter: "agTextColumnFilter",
    //     floatingFilter: true,
    //     width: 130,
    //   },
    // ]);

    // console.log(this.getGridOptions().columnDefinitions()["columnDefs"]);
    console.log(this.element);
  }

  customFunction({ detail: { columnDefs } }) {
    console.log("***inside customFunction()");
    console.log(columnDefs);

    this.ga.setGridOption("columnDefs", columnDefs);
  }

  saveState() {
    console.log("saveState");
    // saveColumnState(this.gridTarget);
  }

  resetState() {
    console.log("reset state");
    // resetColumnState(this.gridTarget);
  }

  // Dynamically determine grid options based on the ID or a data attribute
  getGridOptions() {
    switch (this.gridTarget.id) {
      case "ordersGrid":
        return {
          // Define columnDefs and other grid options specific to Orders
        };
      case "clientsGrid":
        return {
          // Define columnDefs and other grid options specific to Clients
        };
      default:
        console.error("Unknown grid target");
        return {}; // Return empty configuration as a fallback
    }
  }

  clientsController() {
    return this.application.getControllerForElementAndIdentifier(this.element, "clients");
  }
}
