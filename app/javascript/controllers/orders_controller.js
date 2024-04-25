import { Controller } from "@hotwired/stimulus";
import { gridApi } from "../custom/agGridHelper";

// Connects to data-controller="orders"
export default class extends Controller {
  connect() {
    console.log("Connected to orders_controller.js");
  }
}
