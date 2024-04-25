import { Controller } from "@hotwired/stimulus";

import { gridApi } from "../custom/agGridHelper";

// Connects to data-controller="clients"
export default class extends Controller {
  connect() {
    console.log("Connected to clients_controller.js");
    // gridApi.setGridOption("columnDefs", this.columnDefinitions()["columnDefs"]);
    // console.log(this.columnDefinitions()["columnDefs"]);

    // const trigger = new CustomEvent("customEvent");
    // window.dispatchEvent(trigger);
    this.dispatch("customEvent", { detail: { columnDefs: this.columnDefinitions()["columnDefs"] } });
  }

  columnDefinitions() {
    return {
      columnDefs: [
        {
          field: "name",
          headerName: "NAME",
          sortable: true,
          filter: "agTextColumnFilter",
          floatingFilter: true,
        },
        {
          field: "address",
          headerName: "AddreSS",
          sortable: true,
          filter: "agTextColumnFilter",
          floatingFilter: true,
        },
        {
          field: "contact",
          headerName: "Contact Person",
          sortable: true,
          filter: "agTextColumnFilter",
          floatingFilter: true,
          width: 150,
        },
        {
          field: "email",
          headerName: "Email",
          sortable: true,
          filter: "agTextColumnFilter",
          floatingFilter: true,
          width: 130,
        },
      ],
    };
  }
}
